import franken from "franken-ui/shadcn-ui/preset-quick";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    franken({
      palette: {
        ":root": {
          "--background": "52 63% 99%",
          "--foreground": "52 60% 5%",
          "--muted": "52 34% 88%",
          "--muted-foreground": "52 12% 31%",
          "--popover": "52 63% 99%",
          "--popover-foreground": "52 60% 5%",
          "--card": "52 63% 99%",
          "--card-foreground": "52 60% 5%",
          "--border": "52 2% 89%",
          "--input": "52 2% 89%",
          "--primary": "52 98% 67%",
          "--primary-foreground": "52 98% 7%",
          "--secondary": "52 12% 86%",
          "--secondary-foreground": "52 12% 26%",
          "--accent": "52 19% 76%",
          "--accent-foreground": "52 19% 16%",
          "--destructive": "8 100% 43%",
          "--destructive-foreground": "0 0% 100%",
          "--ring": "52 98% 67%",
          "--radius": "0.5rem",
        },
        ".dark": {
          "--background": "52 38% 3%",
          "--foreground": "52 28% 100%",
          "--muted": "52 34% 12%",
          "--muted-foreground": "52 12% 69%",
          "--popover": "52 38% 3%",
          "--popover-foreground": "52 28% 100%",
          "--card": "52 38% 3%",
          "--card-foreground": "52 28% 100%",
          "--border": "52 2% 13%",
          "--input": "52 2% 13%",
          "--primary": "52 98% 67%",
          "--primary-foreground": "52 98% 7%",
          "--secondary": "52 11% 10%",
          "--secondary-foreground": "52 11% 70%",
          "--accent": "52 17% 15%",
          "--accent-foreground": "52 17% 75%",
          "--destructive": "8 100% 51%",
          "--destructive-foreground": "0 0% 100%",
          "--ring": "52 98% 67%",
        },
      },
    }),
  ],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    {
      pattern: /^uk-/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
