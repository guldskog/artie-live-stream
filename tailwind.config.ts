import { type Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        "input-sans-medium": [
          "input_sans_compressedmedium",
          "sans-serif",
        ],
        "input-sans-regular": [
          "input_sans_compressedregular",
          "sans-serif",
        ],
      },
      animation: {
        "stripe-move": "stripeMove 300ms linear infinite both",
      },
      keyframes: {
        stripeMove: {
          "0%": {
            backgroundPosition: "-8px 0",
          },
          "100%": {
            backgroundPosition: "0 0",
          },
        },
      },
    },
  },
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;
