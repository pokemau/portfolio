/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "var(--main-bg)",
        "card-bg": "var(--card-bg)",
        "main-text": "var(--main-text)",
        "main-hover-bg": "var(--main-hover-bg)",
      },
    },
  },
  plugins: [],
};
