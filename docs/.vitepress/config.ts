import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitepress';
import { version } from '../../package.json';
import sidebarConf from './sidebarConf';

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
      {
        text: version, link: 'https://www.npmjs.com/package/@kanjianmusic/fn',
      },
      {
        text: 'Link',
        items: [
          {
            text: 'Sop 组件库', link: "https://chords-ui.seemusic.xyz",
          },
          {
            text: 'F2E 文档站点', link: 'https://f2e.seemusic.xyz/'
          }
        ]
      },
    ],
    sidebar: sidebarConf,
    socialLinks: [{
      icon: "github", link: "https://github.com/seemusic/fn"
    }],
  }
});
