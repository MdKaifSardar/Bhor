import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig({
    resolve: {
        alias: {
            '@assets': path.resolve(path.dirname(new URL(import.meta.url).pathname), './src/assets'),
            '@components': path.resolve(path.dirname(new URL(import.meta.url).pathname), './src/components'),
            '@hooks': path.resolve(path.dirname(new URL(import.meta.url).pathname), './src/hooks'),
            '@utils': path.resolve(path.dirname(new URL(import.meta.url).pathname), './src/utils'),
        },
    },
});
