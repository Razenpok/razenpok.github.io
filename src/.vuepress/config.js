module.exports = {
  title: 'Refactoring Ninja',
  description: 'Messing with code instead of making releases',
  dest: 'build',
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
  },
  head: [
    [
        'script',
        {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-MZH7HXNHT8',
        },
    ],
    [
        'script',
        {},
        [
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-MZH7HXNHT8');",
        ],
    ],
  ],
}