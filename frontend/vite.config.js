import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    tailwindcss(),
  ],
  css: {
    // Optional: you can still define PostCSS plugins if needed
    postcss: {
      plugins: [
        // If you're using PostCSS explicitly for other purposes
        // But for tailwind v4 + vite plugin, you *might not need* autoprefixer
      ],
    },
  },
});
