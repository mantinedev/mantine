import { LinksGroupProps } from './LinksGroup/LinksGroup';

export const FOOTER_LINKS_DATA: LinksGroupProps[] = [
  {
    title: 'About',
    data: [
      { type: 'gatsby', label: 'Contribute', link: '/pages/contributing/' },
      { type: 'gatsby', label: 'Media assets', link: '/assets/' },
      { type: 'gatsby', label: 'Changelog', link: '/pages/changelog/' },
      { type: 'link', label: 'Releases', link: 'https://github.com/mantinedev/mantine/releases' },
    ],
  },

  {
    title: 'Community',
    data: [
      { type: 'link', label: 'Chat on Discord', link: 'https://discord.gg/eUZpPbpxb4' },
      { type: 'link', label: 'Follow on Twitter', link: 'https://twitter.com/mantinedev' },
      { type: 'link', label: 'Follow on Github', link: 'https://github.com/rtivital' },
      {
        type: 'link',
        label: 'GitHub discussions',
        link: 'https://github.com/mantinedev/mantine/discussions',
      },
    ],
  },
  {
    title: 'Project',
    data: [
      { type: 'link', label: 'Mantine UI', link: 'https://ui.mantine.dev/' },
      { type: 'link', label: 'Documentation', link: 'https://mantine.dev/' },
      { type: 'link', label: 'Github organization', link: 'https://github.com/mantinedev' },
      { type: 'link', label: 'npm organization', link: 'https://www.npmjs.com/org/mantine' },
    ],
  },
];
