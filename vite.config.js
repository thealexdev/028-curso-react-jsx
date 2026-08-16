import { defineConfig } from 'vite';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const surgeSpaFallback = () => ({
    name: 'surge-spa-fallback',
    closeBundle() {
        copyFileSync(resolve('dist/index.html'), resolve('dist/200.html'));
    },
});

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), surgeSpaFallback()],
});
