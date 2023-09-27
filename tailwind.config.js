/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components-core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components-page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        "doc-width": "var(--doc-width)",
      },
      height: {
        "doc-height": "var(--doc-height)",
      },
      boxShadow: {
        1: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        primary: {
          50: "var(--clr-primary-50)",
          100: "var(--clr-primary-100)",
          200: "var(--clr-primary-200)",
          300: "var(--clr-primary-300)",
          400: "var(--clr-primary-400)",
          500: "var(--clr-primary-500)",
          600: "var(--clr-primary-600)",
          700: "var(--clr-primary-700)",
          800: "var(--clr-primary-800)",
          900: "var(--clr-primary-900)",
        },
        secondary: {
          50: "var(--clr-secondary-50)",
          100: "var(--clr-secondary-100)",
          200: "var(--clr-secondary-200)",
          300: "var(--clr-secondary-300)",
          400: "var(--clr-secondary-400)",
          500: "var(--clr-secondary-500)",
          600: "var(--clr-secondary-600)",
          700: "var(--clr-secondary-700)",
          800: "var(--clr-secondary-800)",
          900: "var(--clr-secondary-900)",
        },
      },
    },
  },
  plugins: [],
};
