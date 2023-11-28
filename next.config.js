/** @type {import('next').NextConfig} */
const nextConfig = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
      ],
      "pagesDir": './src/pages'  
}

module.exports = nextConfig
