export default {
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
            { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Quicksand&display=swap" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&display=swap" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }
        ]
    },
    css: [
        "~/assets/main.css"
    ],
    plugins: [

        "~/plugins/maps.js"
    ],
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt'
    ],
    buildModules: [],
}
