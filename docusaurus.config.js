// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SamuraiDoc',
  tagline: 'The Official Documentation for Samurai API',
  url: 'http://localhost:3000/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.jpg',
  organizationName: 'Voltz Motors', // Usually your GitHub org/user name.
  projectName: 'samurai', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/voltzmotors',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/voltzmotors',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Samurai',
        logo: {
          alt: 'Voltz',
          src: 'img/icon.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'samurai',
            position: 'left',
            label: 'Doc',
          },
          {
            href: 'https://github.com/voltzmotors',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Features',
                to: '/docs/features/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Voltz Motors',
                href: 'https://voltzmotors.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/voltzmotors',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} | Voltz Motors`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
