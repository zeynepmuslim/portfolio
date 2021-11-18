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
      backgroundImage: {
        'four': "url('~/src/img/four.png')",
        'fourYellow': "url('~/src/img/fourYellow.png')",
        'bat': "url('~/src/img/bat.png')",
        'batYellow': "url('~/src/img/batYellow.png')",
        'paw': "url('~/src/img/paw.png')",
        'pawYellow': "url('~/src/img/pawYellow.png')",
        'apple': "url('~/src/vectors/apple.svg')",
        'appleYellow': "url('~/src/vectors/appleYellow.svg')",
        'github': "url('~/src/img/github.png')",
        'githubYellow': "url('~/src/img/githubYellow.png')",
        'shop': "url('~/src/img/shop.png')",
        'shopYellow': "url('~/src/img/shopYellow.png')",
        'instagram': "url('~/src/img/instagram.png')",
        'instagramYellow': "url('~/src/img/instagramYellow.png')",
        'youtube': "url('~/src/img/youtube.png')",
        'youtubeYellow': "url('~/src/img/youtubeYellow.png')",
        'linkedin': "url('~/src/img/linkedin.png')",
        'linkedinYellow': "url('~/src/img/linkedinYellow.png')",
        'thumnailOne': "url(/Users/zeynep/Desktop/portfolio/src/img/thumnails/thumanilOne.png)",
        'thumnailOneYellow': "url(/Users/zeynep/Desktop/portfolio/src/img/thumnails/thumnailOneYellow.png)",
        'thumnailTwo': "url(/Users/zeynep/Desktop/portfolio/src/img/thumnails/thumanilTwo.png)",
        'thumnailTwoYellow': "url(/Users/zeynep/Desktop/portfolio/src/img/thumnails/thumnailTwoYellow.png)",
        'thumnailTree': "url(/Users/zeynep/Desktop/portfolio/src/img/thumnails/thumanilTree.png)",
        'thumnailTreeYellow': "url(/Users/zeynep/Desktop/portfolio/src/img/thumnails/thumnailTreeYellow.png)",
        'thumnailFour': "url(/Users/zeynep/Desktop/portfolio/src/img/thumnails/thumanilFour.png)",
        'thumnailFourYellow': "url(/Users/zeynep/Desktop/portfolio/src/img/thumnails/thumnailFourYellow.png)",
        'thumnailFive': "url(/Users/zeynep/Desktop/portfolio/src/img/thumnails/thumanilFive.png)",
        'thumnailFiveYellow': "url(/Users/zeynep/Desktop/portfolio/src/img/thumnails/thumnailFiveYellow.png)",
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus', 'group-hover'],
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
}
