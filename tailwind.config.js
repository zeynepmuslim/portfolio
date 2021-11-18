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
        'tumOne': "url('~/src/img/one.png')",
        'tumOneY': "url('~/src/img/oneY.png')",
        'tumTwo': "url('~/src/img/two.png')",
        'tumTwoY': "url('~/src/img/twoY.png')",
        'tumTree': "url('~/src/img/tree.png')",
        'tumTreeY': "url('~/src/img/treeY.png')",
        'tumFour': "url('~/src/img/fourth.png')",
        'tumFourY': "url('~/src/img/fourthY.png')",
        'tumFive': "url('~/src/img/five.png')",
        'tumFiveY': "url('~/src/img/fiveY.png')",
        'procreate': "url('~/src/img/procreate.png')",
        'procreateY': "url('~/src/img/procreateY.png')",
        'visual': "url('~/src/img/visual.png')",
        'visualY': "url('~/src/img/visualY.png')",
        'photoshop': "url('~/src/img/photoshop.png')",
        'photoshopY': "url('~/src/img/photoshopY.png')",
        'premiere': "url('~/src/img/premiere.png')",
        'premiereY': "url('~/src/img/premiereY.png')",
        'illustrator': "url('~/src/img/illustrator.png')",
        'illustratorY': "url('~/src/img/illustratorY.png')",
        'figma': "url('~/src/img/figma.png')",
        'figmaY': "url('~/src/img/figmaY.png')",
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
