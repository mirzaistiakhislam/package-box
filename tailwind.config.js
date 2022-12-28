/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        packagetheme: {
          primary: '#0fcfec',
          secondary: '#19d3ae',
          accent: '#3a4256',
          neutral: '#3d4451',
          "base-100": '#ffffff',

        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
