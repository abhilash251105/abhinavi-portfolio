// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // We use '@vitejs/plugin-react' which is the standard for Vite React projects
  plugins: [react()],
  
  // Since you are using a custom domain (abhinavi.in) at the root level, 
  // the base path must be '/' so your CSS and JS files load correctly.
  base: '/',
})