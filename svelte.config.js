import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
