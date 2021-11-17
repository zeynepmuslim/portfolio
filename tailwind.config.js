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
      },
      backgroundImage: {
        'four': "url('~/src/img/four.png')",
        'fourYellow': "url('~/src/img/fourYellow.png')",
        'bat': "url('~/src/img/bat.png')",
        'batYellow': "url('~/src/img/batYellow.png')",
        'paw': "url('~/src/img/paw.png')",
        'pawYellow': "url('~/src/img/pawYellow.png')",
        'apple': "url('~/src/vectors/apple.svg')",
        'appleYellow': "url('~/src/vectors/appleYellow.svg')",
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
      display: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}
