// import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-07-23',
    modules: [
        '@nuxt/content',
        'nuxt-calendly',
        '@primevue/nuxt-module',
        "@nuxtjs/tailwindcss"
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
        components: {
            prefix: 'Prime'
        },
        options: {
            ripple: true,
            inputVariant: 'filled',   
            // theme: {
            //     preset: Aura
            // }      
        },
        usePrimeVue: true,  
        importTheme: { from: '@/themes/site-theme.js' }, 
    },
    css: [
        "primeicons/primeicons.css",
        // "~/assets/css/base.css"
    ],
    app: {
    },
    calendly: {
        /**
         * Setting to `false` disables the module.
         * @default true
         * @description Use this setting to disable the module.
         */
        isEnabled: true,
        /**
         * Loads the required CSS for Calendly directly into your app. Saves a HTTP Request.
         * @default true     * @description Disable if you already load https://assets.calendly.com/assets/external/widget.css by yourself, or you want to load a custom CSS.
         */
        loadWidgetCSS: true,
        /**
         * Loads a required SVG Asset for Calendly directly into your app. Saves a HTTP Request.
         * @default true
         * @description Disable if you already load https://assets.calendly.com/assets/external/close-icon.svg by yourself, or you want to load a custom SVG.
         */
        loadWidgetCloseIconSvg: true
    }
})