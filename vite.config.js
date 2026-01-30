import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const isGhPages = process.env.DEPLOY_TARGET === "ghpages";

  return {
    plugins: [react()],
    base: isGhPages ? "/20-portfolio/" : "/",
  };
});
