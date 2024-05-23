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
    },
  },
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;
