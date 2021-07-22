import { ReaderIcon, ChatBubbleIcon, TwitterLogoIcon, GitHubLogoIcon } from '@modulz/radix-icons';

export const CONTRIBUTE_DATA = [
  {
    title: 'Contribute to codebase',
    color: 'dark',
    icon: GitHubLogoIcon,
    description: 'Find task in roadmap that is interesting to you and implement it',
    link: 'https://trello.com/b/e1AT7w4M/mantine-roadmap',
    linkLabel: 'Start contributing',
  },
  {
    title: 'Give feedback',
    icon: ChatBubbleIcon,
    color: 'blue',
    description:
      'We are constantly working on making Mantine better, please share how you use Mantine, what features are missing and what is done good',
    link: 'https://github.com/mantinedev/mantine/discussions/new',
    linkLabel: 'Leave feedback',
  },
  {
    title: 'Improve Mantine docs',
    color: 'red',
    icon: ReaderIcon,
    description: 'Fix incomplete or missing docs, bad wording, examples or explanations',
    link: 'https://github.com/mantinedev/mantine/blob/master/CONTRIBUTING.md',
    linkLabel: 'Get started with docs',
  },
  {
    title: 'Share Mantine',
    color: 'teal',
    icon: TwitterLogoIcon,
    description: 'Share link to Mantine docs with everyone who can be interested',
    link: 'https://twitter.com/intent/tweet?text=Mantine%20%E2%80%93%20new%20React%20library%20with%20100%2B%20components%20and%20hooks.%20It%20has%20native%20dark%20theme%20support%20and%20focuses%20on%20accessibility%20and%20usability.%0A%0Ahttp%3A%2F%2Fmantine.dev%0A%0A%23reactjs%20',
    linkLabel: 'Share Mantine on Twitter',
  },
];
