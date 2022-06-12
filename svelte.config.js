import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: "index.html",
    }),
    paths: {
      base: "",
    },
    appDir: "internal",
    prerender: {
      default: false,
    },
  },
};

export default config;
