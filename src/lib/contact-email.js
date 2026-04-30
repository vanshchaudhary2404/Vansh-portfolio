import process from "node:process";
const SAMPLE_TO_EMAIL = "your-name@example.com";
const SAMPLE_FROM_EMAIL = "Portfolio <onboarding@resend.dev>";

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function getContactSettings(env = process.env) {
  return {
    sampleMode: env.CONTACT_SAMPLE_MODE !== "false",
    apiKey: env.RESEND_API_KEY,
    fromEmail: env.CONTACT_FROM_EMAIL || SAMPLE_FROM_EMAIL,
    toEmail: env.CONTACT_TO_EMAIL || SAMPLE_TO_EMAIL,
  };
}

export function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let rawBody = "";

    req.on("data", (chunk) => {
      rawBody += chunk;

      if (rawBody.length > 1000000) {
        reject(new Error("Request body too large."));
        req.destroy();
      }
    });

    req.on("end", () => {
      try {
        resolve(rawBody ? JSON.parse(rawBody) : {});
      } catch {
        reject(new Error("Invalid JSON payload."));
      }
    });

    req.on("error", reject);
  });
}

export async function submitContactMessage(
  { name, email, message },
  env = process.env,
  logger = console,
) {
  if (!name || !email || !message) {
    return {
      ok: false,
      statusCode: 400,
      payload: { error: "Name, email, and message are required." },
    };
  }

  const settings = getContactSettings(env);
  const subject = `Portfolio contact from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2 style="margin:0 0 16px">New portfolio message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin:16px 0 8px"><strong>Message:</strong></p>
      <div style="white-space:pre-wrap;border-left:4px solid #e5e7eb;padding-left:12px">${escapeHtml(message)}</div>
    </div>
  `;

  if (settings.sampleMode || !settings.apiKey) {
    logger.info?.("[contact] sample mode message", {
      to: settings.toEmail,
      from: settings.fromEmail,
      subject,
      text,
    });

    return {
      ok: true,
      statusCode: 200,
      payload: {
        ok: true,
        mode: "sample",
        message: "Sample mode is enabled. Replace the placeholder env values to send real email.",
      },
    };
  }

  let response;

  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${settings.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: settings.fromEmail,
        to: [settings.toEmail],
        subject,
        text,
        html,
      }),
    });
  } catch (error) {
    return {
      ok: false,
      statusCode: 502,
      payload: {
        error: "Unable to reach the email provider.",
        details: error instanceof Error ? error.message : "Network error.",
      },
    };
  }

  if (!response.ok) {
    const responseText = await response.text();
    return {
      ok: false,
      statusCode: 502,
      payload: {
        error: "Email provider rejected the message.",
        details: responseText,
      },
    };
  }

  return {
    ok: true,
    statusCode: 200,
    payload: { ok: true, mode: "live" },
  };
}
