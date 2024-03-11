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
        // TODO: Come back to this later when primevue is updated
        // 'primevue/resources/themes/aura-light-teal/theme.css',
        // 'primevue/resources/themes/aura-dark-teal/theme.css',
        "primeicons/primeicons.css",
    ],
    app: {
        head: {
            link: [
                {
                    id: 'theme-link',
                    rel: 'stylesheet',
                    href: '/themes/aura-light-teal/theme.css'
                }
            ]
        }
    }
})
