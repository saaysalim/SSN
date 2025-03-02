import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/SSN/src/Pages/Home", // Ensure this is correct based on your deployment path
});
