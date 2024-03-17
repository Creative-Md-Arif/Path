/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      "about_banner_image": "url(/public/A-b-1.png)",
      "image-items-bg": "url(/public/image-items-bg.png)",
      
      },

    },
    container: {
      center: true,
    },
  
  },
  plugins: [],
}