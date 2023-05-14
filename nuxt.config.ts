// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        // ...
        '@pinia/nuxt',
        'nuxt-icons',
    ],
    runtimeConfig: {
        public: {
            API_Base: process.env.NODE_ENV === 'production' ? 'https://auth.fri3dl.com/api' : 'http://localhost:3300/api'
            // API_Base: 'https://auth.fri3dl.com/api'
        },
    },
})
