import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: 3000,
    host: '192.168.1.186',
    // host: 'localhost',
    timing: false
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Router:
  // default set to '/'
  // set to '/<repository-name>/' if deploying to github http://<username>.github.io/<repository-name>
  router: {
    // base: '/'
    base: '/nefsii/'
  },

  generate: {
    dir: 'docs', // to deploy on github
    subFolders: false // HTML files are generated according to the route path
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nefsii',
    title: 'nefsii',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Simple islamic app' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nefsii/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-awesome-countdown.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/localforage'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    meta: {
      title: 'nefsii',
      author: 'nomadigital',
      theme_color: '#4c6ef5',
      nativeUI: true
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.blue,
          accent: colors.grey,
          secondary: colors.purple,
          info: colors.teal,
          warning: colors.orange,
          error: colors.red,
          success: colors.green
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-awesome-countdown']
  }
}
