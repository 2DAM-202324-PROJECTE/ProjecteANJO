
// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/ProjecteANJO/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'Views/sobre.html'),
                contacte: resolve(__dirname, 'Views/contacte.html'),
                error: resolve(__dirname, 'Views/404.html'),
                cookies: resolve(__dirname, 'Views/cookies.html'),
                preus: resolve(__dirname, 'Views/preus.html'),
                equip: resolve(__dirname, 'Views/equip.html'),
                registre: resolve(__dirname, 'Views/registre.html'),
                login: resolve(__dirname, 'Views/login.html'),
                password: resolve(__dirname, 'Views/password.html'),
                condicions: resolve(__dirname, 'Views/condicions.html'),
            },
        },
    },
})