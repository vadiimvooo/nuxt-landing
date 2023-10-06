// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: "1234567890",
    public: {
      apiBase: "",
    },
  },
  tailwindcss: {
    configPath: "~/tailwind.config.cjs",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  css: ["~/assets/css/styles.css"],
  app: {
    head: {
      title: "Nuxt layout",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
});
