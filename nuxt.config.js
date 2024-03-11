export default defineNuxtConfig({
    modules: [
        'nuxt-primevue',
        '@nuxt/content'
    ],
    primevue: {
        /* Options */
        options: {
            ripple: true,
            usePrimeVue: true
        },
        components: {
            include: ['Button', 'Menubar']
        }
    },
    css: [
        'primevue/resources/themes/aura-light-teal/theme.css',
        "primeicons/primeicons.css",
    ],
    app: {
        head: {
            link: [
                {
                    id: 'theme-link-light-teal',
                    rel: 'stylesheet',
                    href: '/themes/aura-light-teal/theme.css'
                },
                {
                    id: 'theme-link-dark-teal',
                    rel: 'stylesheet',
                    href: '/themes/aura-dark-teal/theme.css'
                }
            ]
        }
    }
})
