export default defineNuxtConfig({
    modules: [
        'nuxt-primevue',
        '@nuxt/content'
    ],
    build: {
        // Extend webpack config
        extend(config) {
            config.module.rules = config.module.rules
                .map(x => {
                    if (x.test.source.includes(".bib")) {
                        return {
                            test: /\.bib$/,
                            use: "raw-loader",
                        }
                    } else {
                        return x
                    }
                })
        },
    },
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
