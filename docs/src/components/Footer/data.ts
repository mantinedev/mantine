import { LinksGroupProps } from './LinksGroup/LinksGroup';

export const FOOTER_LINKS_DATA: LinksGroupProps[] = [
  {
    title: 'Project',
    data: [
      { type: 'gatsby', label: 'Contribute to Mantine', link: '/pages/contributing/' },
      { type: 'gatsby', label: 'Media assets', link: '/assets/' },
      { type: 'gatsby', label: 'Changelog', link: '/pages/changelog/' },
      { type: 'link', label: 'Releases', link: 'https://github.com/mantinedev/mantine/releases' },
    ],
  },
  {
    title: 'Community',
    data: [
      { type: 'link', label: 'Join Discord community', link: 'https://discord.gg/eUZpPbpxb4' },
      { type: 'link', label: 'Follow on Twitter', link: 'https://twitter.com/mantinedev' },
      { type: 'link', label: 'Email newsletter', link: 'https://buttondown.email/mantine' },
      {
        type: 'link',
        label: 'GitHub discussions',
        link: 'https://github.com/mantinedev/mantine/discussions',
      },
    ],
  },
];
