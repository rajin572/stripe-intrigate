const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#FFFFFF",
        "background-color": "#F3F3F3",
        "secondary-color": "#19363D",
        "base-color": "#0C0C0C",
        "anchor-color": "#F0803D",
        "highlight-color": "#D3EBE7",
        "error-color": "#F5382C",
        "input-color": "#FCC1BE",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        // skia: ["var(--skia)", "sans-serif"], // Skia local font
      },
    },
  },
  plugins: [addVariablesForColors],
};
