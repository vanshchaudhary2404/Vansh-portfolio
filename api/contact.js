import process from "node:process";
import { readRequestBody, submitContactMessage } from "../src/lib/contact-email.js";

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { error: "Method not allowed." });
    return;
  }

  try {
    const { name, email, message } = await readRequestBody(req);
    const result = await submitContactMessage({ name, email, message }, process.env, console);
    sendJson(res, result.statusCode, result.payload);
  } catch (error) {
    sendJson(res, 500, {
      error: error instanceof Error ? error.message : "Unexpected server error.",
    });
  }
}
