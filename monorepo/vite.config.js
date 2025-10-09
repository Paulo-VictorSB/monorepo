import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue'; // Para Vue 3

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/bootstrap/bootstrap.min.css',
                'resources/js/app.js',
                'resources/js/cinelove.js',
            ],
            refresh: false,
        }),
        tailwindcss(),
        vue(),
    ],
});
