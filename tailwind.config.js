module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      bebas: "BebasNeue, sans-serif",
      nick: "Nickainley, serif",
      robol: "RobotoLight, sans",
      roboi: "RobotoItalic, sans",
      robom: "RobotoMedium, sans"

        },
    extend: {
      colors: {
        'yellow': '#FFCF16',
        'softYellow': '#FFF5CF',
        'lightGray': '#FAFAFA',
        'gray': '#E5E5E5'
      },
      backgroundImage: {}
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  }
}
