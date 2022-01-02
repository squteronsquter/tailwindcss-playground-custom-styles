module.exports = {
  mode: 'jit',
  content: [
    './*.html',
  ],
  theme: {
    fontFamily: { 
      'serif': ['Georgia', 'ui-serif'], 
      'display': ['Oswald', 'sans-serif'], 
      'body': ['Oswald', 'sans-serif'], 
    },
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [],
}