module.exports = {
  title: 'Refactoring Ninja',
  description: 'Messing with code instead of making releases',
  themeConfig: {
      nav: [
          { text: 'Github', link: 'https://github.com/Razenpok' },
          { text: 'LinkedIn', link: 'https://www.linkedin.com/in/razenpok/' },
          { text: 'About', link: '/about' }
        ]
  },
  serviceWorker: true,
  plugins: {
    '@vuepress/google-analytics': {
      'ga': 'UA-89958529-1'
    }
  }
}