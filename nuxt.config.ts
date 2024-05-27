// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt' 
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['nuxt-swiper'],
  swiper: {
    // Swiper options
    //----------------------
    prefix: 'Swiper',
    // styleLang: 'css',
    modules: ['navigation', 'pagination', 'mousewheel', 'controller'], // all modules are imported by default
  }
})
