/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Aquí está la corrección
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",         // <-- 1. Añadimos la carpeta 'app'
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presetation/**/*.{js,jsx,ts,tsx}"  // <-- 2. Corregí esto (y usé tu ortografía "presetation")
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}