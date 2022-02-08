export default {
  target: 'static',
  components: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rajastore',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~assets/css/style.css', lang: 'css' }
  ],

  env:{
    BaseURL : 'http://127.0.0.1:8000/api/v1/'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/router',
  ],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],

  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  //end point api
  axios: {
    // extra config e.g
    baseURL: 'http://127.0.0.1:8000/api/v1/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
