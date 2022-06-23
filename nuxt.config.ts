import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@inkline/nuxt"],
  inkline: {
    // Plugin options (optional)
  },
  tailwindcss: {
    viewer: false,
  },
  build: {
    transpile: ["@inkline/inkline"],
  },
});
