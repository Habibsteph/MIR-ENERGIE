import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import vinext from "vinext";
import { defineConfig } from "vite";

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isSitesBuild = process.env.MIR_BUILD_TARGET === "sites";
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";

export default defineConfig(({ command }) => ({
  server: isCodexSeatbeltSandbox
    ? { watch: { useFsEvents: false, usePolling: true } }
    : undefined,
  // Nitro packages production output; Vinext owns the local RSC module runner.
  plugins: [tailwindcss(), vinext(), command === "build" && nitro(isSitesBuild ? {
    preset: "cloudflare_module",
    compatibilityDate: "2026-09-07",
    output: { dir: "dist", serverDir: "dist/server", publicDir: "dist/client" },
    cloudflare: { deployConfig: false },
  } : {})],
}));
