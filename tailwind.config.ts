module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [import("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cyberpunk", "dracula"],
    darkTheme: "dark",
  },
}
