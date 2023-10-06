// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: "1234567890",
    public: {
      apiBase: "",
    },
  },
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  googleFonts: {
    display: "swap",
    useStylesheet: true,
    inject: true,
    download: true,
    families: {
      Inter: [400, 500],
      Montserrat: [400, 500, 700],
    },
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
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
});
