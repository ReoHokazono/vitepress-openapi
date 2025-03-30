const base = require('../tailwind.config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: [
    './.vitepress/theme/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/vitepress-openapi/src/**/*.{vue,js,ts,jsx,tsx}',
    './sidebar/*.md',
    './showcase/*.md',
    './customizations/*.md',
  ],
}
