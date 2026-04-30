import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { loadEnv } from "vite";
import { readRequestBody, submitContactMessage } from "./src/lib/contact-email.js";

function contactApiPlugin(env) {
  return {
    name: "contact-api-middleware",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== "/api/contact") {
          next();
          return;
        }

        res.setHeader("Cache-Control", "no-store");

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Allow", "POST");
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed." }));
          return;
        }

        try {
          const { name, email, message } = await readRequestBody(req);
          const result = await submitContactMessage({ name, email, message }, env, console);
          res.statusCode = result.statusCode;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(result.payload));
        } catch (error) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              error: error instanceof Error ? error.message : "Unexpected server error.",
            }),
          );
        }
      });
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    contactApiPlugin(loadEnv(process.env.NODE_ENV || "development", process.cwd(), "")),
  ],
});
