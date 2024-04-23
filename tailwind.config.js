/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        jbmono: ['"JetBrains Mono"', "monospace"],
        pstart: ['"Press Start 2P"', "monospace"],
      },
      colors: {
        "yellow-fs": "rgb(226, 183, 20)",
        // "gray-line": "rgb(168, 168, 168, 0.3)",
        "gray-fs-100": "rgb(226, 183, 20, 0.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
