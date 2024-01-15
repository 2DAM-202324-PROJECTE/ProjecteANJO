
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
                error: resolve(__dirname, 'Views/error.html'),
                cookies: resolve(__dirname, 'Views/cookies.html'),
                preus: resolve(__dirname, 'Views/preus.html'),
                registre: resolve(__dirname, 'Views/registre.html'),
                serveis: resolve(__dirname, 'Views/serveis.html'),
            },
        },
    },
})