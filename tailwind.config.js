/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'razer-green': '#66b933',
        'razer-light-green': '#99cc66',
        'razer-dark-green': '#339900',
        'razer-black': '#111111',
        'razer-gray': '#222222',
        'razer-light-gray': '#333333',
      },
    },
  },
  plugins: [],
}
