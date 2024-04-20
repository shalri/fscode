/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        jbmono: ['"JetBrains Mono"', "monospace"],
        pstart: ['"Press Start 2P"', "monospace"],
      },
      colors: {
        "yellow-fs": "rgb(226, 183, 20)",
        "gray-fs": "rgb(50, 52, 55)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
