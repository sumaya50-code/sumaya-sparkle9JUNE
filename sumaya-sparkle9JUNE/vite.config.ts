// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

const isVercel = !!process.env.VERCEL;

// Cloudflare: custom server entry wraps SSR errors for Workers.
// Vercel: Nitro plugin builds the server — do not use the Cloudflare worker entry.
export default defineConfig({
  cloudflare: isVercel ? false : undefined,
  plugins: isVercel ? [nitro()] : [],
  tanstackStart: isVercel
    ? {}
    : {
        server: { entry: "server" },
      },
});
