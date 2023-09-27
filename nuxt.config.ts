// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app : {
    head : {
      title : 'AriWeekly',
      meta : [
        {
          name : 'viewport',
          content : 'width=device-width, initial-scale=1'
        },
        {
          charset : "utf-8"
        }
      ]
    }
  },
  pages: true,
  css : [
    '~/assets/scss/reset.scss'
  ],
  typescript: {
    strict: true
  }
})
