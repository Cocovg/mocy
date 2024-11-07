// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  css: [
      '@/assets/css/tailwind.css'
  ],

  buildModules: [
      '@nuxt/postcss8'
  ],

  build: {
      postcss: {
          plugins: {
              tailwindcss: {},
              autoprefixer: {},
          },
      },
  },
    css: ['~/assets/css/styling.css']
,

  modules: ['@nuxtjs/tailwindcss']
})
