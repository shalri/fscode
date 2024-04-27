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
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              "code::before": {
                content: "none", // don’t generate the pseudo-element
                //                content: '""', // this is an alternative: generate pseudo element using an empty string
              },
              "code::after": {
                content: "none",
              },
              code: {
                // color: theme('colors.slate.500'),
                // backgroundColor: theme('colors.stone.100'),
                borderRadius: theme("borderRadius.DEFAULT"),
                paddingLeft: theme("spacing[1.5]"),
                paddingRight: theme("spacing[1.5]"),
                paddingTop: theme("spacing.1"),
                paddingBottom: theme("spacing.1"),
              },
            },
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
