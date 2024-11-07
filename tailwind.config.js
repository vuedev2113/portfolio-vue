module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0d1224',
          surface: '#10172d',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
