import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Fn',
  vite:{
    resolve: {
      alias: {
        '@packages': fileURLToPath(new URL('../../packages', import.meta.url)),
      }
    },
  },
  themeConfig: {
    nav: [
      {
        text: '函数列表', link: '/padLeadingZero',
      },
    ],
    sidebar: {
      "/": [
        {
          text: 'padLeadingZero',
          link: '/padLeadingZero'
        },
        {
          text: 'formatSeconds',
          link: '/formatSeconds'
        },
        {
          text: 'formatLrcTimeTag',
          link: '/formatLrcTimeTag'
        },
        {
          text: 'nl2br',
          link: '/nl2br'
        },
        {
          text: 'formatEmptyText',
          link: '/formatEmptyText'
        },
      ],
    },
    socialLinks: [{
      icon: "github", link: "https://github.com/seemusic/fn"
    }],
  }
});
