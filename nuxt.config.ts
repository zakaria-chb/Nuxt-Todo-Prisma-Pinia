// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@prisma/nuxt", '@pinia/nuxt'],

  // modules: ["@nuxtjs/tailwindcss", "pinia@nuxt", "prisma@nuxt",],

  runtimeConfig: {
    public: {
      apiBase: '/api', // Par défaut, les requêtes utiliseront cette base URL
    }
  },

  compatibilityDate: "2024-08-22",
})