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
        'youtubeBlFill': "url('~/src/vectors/youtubeBlackFill.svg')",
        'youtubeYeFill': "url('~/src/vectors/youtubeYellowFill.svg')",
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
        'tumSix': "url('~/src/img/six.png')",
        'tumSixY': "url('~/src/img/sixY.png')",
        'tumSeven': "url('~/src/img/seven.png')",
        'tumSevenY': "url('~/src/img/sevenY.png')",
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
        'pawIcon': "url('~/src/icons/pawIcon.png')",
        'pawIconY': "url('~/src/icons/pawIconY.png')",
        'booksIcon': "url('~/src/icons/booksIcon.png')",
        'booksIconY': "url('~/src/icons/booksIconY.png')",
        'hobbyIcon': "url('~/src/icons/hobbyIcon.png')",
        'hobbyIconY': "url('~/src/icons/hobbyIconY.png')",
        'studyIcon': "url('~/src/icons/studyIcon.png')",
        'studyIconY': "url('~/src/icons/studyIconY.png')",
        'vlogIcon': "url('~/src/icons/vlogIcon.png')",
        'vlogIconY': "url('~/src/icons/vlogIconY.png')",
        'swift': "url('~/src/tecsIcon/swift.png')",
        'swiftY': "url('~/src/tecsIcon/swiftY.png')",
        'bootstrap': "url('~/src/tecsIcon/bootstrap.png')",
        'bootstrapY': "url('~/src/tecsIcon/bootstrapY.png')",
        'css': "url('~/src/tecsIcon/css.png')",
        'cssY': "url('~/src/tecsIcon/cssY.png')",
        'git': "url('~/src/tecsIcon/git.png')",
        'gitY': "url('~/src/tecsIcon/gitY.png')",
        'html': "url('~/src/tecsIcon/html.png')",
        'htmlY': "url('~/src/tecsIcon/htmlY.png')",
        'js': "url('~/src/tecsIcon/js.png')",
        'jsY': "url('~/src/tecsIcon/jsY.png')",
        'nodejs': "url('~/src/tecsIcon/nodejs.png')",
        'nodejsY': "url('~/src/tecsIcon/nodejsY.png')",
        'nuxt': "url('~/src/tecsIcon/nuxt.png')",
        'nuxtY': "url('~/src/tecsIcon/nuxtY.png')",
        'tailwind': "url('~/src/tecsIcon/tailwind.png')",
        'tailwindY': "url('~/src/tecsIcon/tailwindY.png')",
        'vuejs': "url('~/src/tecsIcon/vuejs.png')",
        'vuejsY': "url('~/src/tecsIcon/vuejsY.png')",
        'earring': "url('~/src/img/earring.png')",
        'earringY': "url('~/src/img/earringY.png')",
        'sticker': "url('~/src/img/sticker.png')",
        'stickerY': "url('~/src/img/stickerY.png')",
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
