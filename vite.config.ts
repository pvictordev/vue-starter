import { fileURLToPath, URL } from "node:url";
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VueI18nPlugin({
      // include: [path.resolve(__dirname, "./src/**/*.vue")], // Only process .vue files
      include: path.resolve(__dirname, "./src/locales/**"),
      exclude: [path.resolve(__dirname, "./src/main.ts")], // Explicitly exclude main.ts
      compositionOnly: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
