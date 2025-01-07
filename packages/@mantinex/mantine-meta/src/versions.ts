export interface PatchVersion {
  version: string;
  date: string;
}

export interface Version {
  version: string;
  date: string;
  github: string;
  link: string;
  patches: PatchVersion[];
}

export const allVersions = [
  {
    version: '7.16.0',
    date: 'January 14, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.16.0',
    link: 'https://mantine.dev/changelog/7-16-0',
    patches: [],
  },
  {
    version: '7.15.0',
    date: 'December 10, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.15.0',
    link: 'https://mantine.dev/changelog/7-15-0',
    patches: [
      {
        version: '7.15.1',
        date: 'December 12, 2024',
      },
      {
        version: '7.15.2',
        date: 'December 23, 2024',
      },
      {
        version: '7.15.3',
        date: 'January 7, 2024',
      },
    ],
  },
  {
    version: '7.14.0',
    date: 'November 12, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.14.0',
    link: 'https://mantine.dev/changelog/7-14-0',
    patches: [
      {
        version: '7.14.1',
        date: 'November 16, 2024',
      },
      {
        version: '7.14.2',
        date: 'November 24, 2024',
      },
      {
        version: '7.14.3',
        date: 'November 28, 2024',
      },
    ],
  },
  {
    version: '7.13.0',
    date: 'September 26, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.13.0',
    link: 'https://mantine.dev/changelog/7-13-0',
    patches: [
      {
        version: '7.13.1',
        date: 'September 30, 2024',
      },
      {
        version: '7.13.2',
        date: 'October 3, 2024',
      },
      {
        version: '7.13.3',
        date: 'October 17, 2024',
      },
      {
        version: '7.13.4',
        date: 'October 23, 2024',
      },
      {
        version: '7.13.5',
        date: 'November 8, 2024',
      },
    ],
  },
  {
    version: '7.12.0',
    date: 'August 6, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.12.0',
    link: 'https://mantine.dev/changelog/7-12-0',
    patches: [
      {
        version: '7.11.1',
        date: 'August 12, 2024',
      },
      {
        version: '7.11.2',
        date: 'August 30, 2024',
      },
    ],
  },
  {
    version: '7.11.0',
    date: 'June 26, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.11.0',
    link: 'https://mantine.dev/changelog/7-11-0',
    patches: [
      {
        version: '7.11.1',
        date: 'July 2, 2024',
      },
      {
        version: '7.11.2',
        date: 'July 13, 2024',
      },
    ],
  },
  {
    version: '7.10.0',
    date: 'May 23, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.10.0',
    link: 'https://mantine.dev/changelog/7-10-0',
    patches: [
      {
        version: '7.10.1',
        date: 'May 30, 2024',
      },
      {
        version: '7.10.2',
        date: 'June 13, 2024',
      },
    ],
  },
  {
    version: '7.9.0',
    date: 'May 2, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.9.0',
    link: 'https://mantine.dev/changelog/7-9-0',
    patches: [
      {
        version: '7.9.1',
        date: 'May 8, 2024',
      },
      {
        version: '7.9.2',
        date: 'May 17, 2024',
      },
    ],
  },
  {
    version: '7.8.0',
    date: 'April 12, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.8.0',
    link: 'https://mantine.dev/changelog/7-8-0',
    patches: [
      {
        version: '7.8.1',
        date: 'April 24, 2024',
      },
    ],
  },
  {
    version: '7.7.0',
    date: 'March 26, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.7.0',
    link: 'https://mantine.dev/changelog/7-7-0',
    patches: [
      {
        version: '7.7.2',
        date: 'April 11, 2024',
      },
      {
        version: '7.7.1',
        date: 'March 29, 2024',
      },
    ],
  },
  {
    version: '7.6.0',
    date: 'February 27, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.6.0',
    link: 'https://mantine.dev/changelog/7-6-0',
    patches: [
      {
        version: '7.6.1',
        date: 'February 28, 2024',
      },
      {
        version: '7.6.2',
        date: 'March 12, 2024',
      },
    ],
  },
  {
    version: '7.5.0',
    date: 'January 26, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.5.0',
    link: 'https://mantine.dev/changelog/7-5-0',
    patches: [
      {
        version: '7.5.1',
        date: 'February 2, 2024',
      },
      {
        version: '7.5.2',
        date: 'February 9, 2024',
      },
      {
        version: '7.5.3',
        date: 'February 16, 2024',
      },
    ],
  },
  {
    version: '7.4.0',
    date: 'January 3, 2024',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.4.0',
    link: 'https://mantine.dev/changelog/7-4-0',
    patches: [
      {
        version: '7.4.1',
        date: 'January 9, 2024',
      },
      {
        version: '7.4.2',
        date: 'January 18, 2024',
      },
    ],
  },
  {
    version: '7.3.0',
    date: 'December 5, 2023',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.3.0',
    link: 'https://mantine.dev/changelog/7-3-0',
    patches: [
      {
        version: '7.3.1',
        date: 'December 7, 2023',
      },
      {
        version: '7.3.2',
        date: 'December 14, 2023',
      },
    ],
  },
  {
    version: '7.2.0',
    date: 'November 6, 2023',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.2.0',
    link: 'https://mantine.dev/changelog/7-2-0',
    patches: [
      {
        version: '7.2.2',
        date: 'November 13, 2023',
      },
      {
        version: '7.2.1',
        date: 'November 7, 2023',
      },
      {
        version: '7.2.0',
        date: 'November 6, 2023',
      },
    ],
  },
  {
    version: '7.1.0',
    date: 'September 28, 2023',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.1.0',
    link: 'https://mantine.dev/changelog/7-1-0',
    patches: [
      {
        version: '7.1.6',
        date: 'October 26, 2023',
      },
      {
        version: '7.1.5',
        date: 'October 19, 2023',
      },
      {
        version: '7.1.3',
        date: 'October 12, 2023',
      },
      {
        version: '7.1.2',
        date: 'October 2, 2023',
      },
      {
        version: '7.1.1',
        date: 'October 2, 2023',
      },
      {
        version: '7.1.0',
        date: 'September 28, 2023',
      },
    ],
  },
  {
    version: '7.0.0',
    date: 'September 18, 2023',
    github: 'https://github.com/mantinedev/mantine/releases/tag/7.0.0',
    link: 'https://mantine.dev/changelog/7-0-0',
    patches: [
      {
        version: '7.0.2',
        date: 'September 26, 2023',
      },
      {
        version: '7.0.1',
        date: 'September 25, 2023',
      },
      {
        version: '7.0.0',
        date: 'September 18, 2023',
      },
    ],
  },
  {
    version: '6.0.0',
    date: 'March 2, 2023',
    github: 'https://github.com/mantinedev/mantine/releases/tag/6.0.0',
    link: 'https://v6.mantine.dev/changelog/6-0-0',
    patches: [
      {
        version: '6.0.21',
        date: 'September 17, 2023',
      },
      {
        version: '6.0.20',
        date: 'September 5, 2023',
      },
      {
        version: '6.0.19',
        date: 'August 10, 2023',
      },
      {
        version: '6.0.18',
        date: 'August 7, 2023',
      },
      {
        version: '6.0.17',
        date: 'July 18, 2023',
      },
      {
        version: '6.0.16',
        date: 'July 4, 2023',
      },
      {
        version: '6.0.15',
        date: 'June 27, 2023',
      },
      {
        version: '6.0.14',
        date: 'June 20, 2023',
      },
      {
        version: '6.0.13',
        date: 'May 30, 2023',
      },
      {
        version: '6.0.11',
        date: 'May 16, 2023',
      },
      {
        version: '6.0.10',
        date: 'May 2, 2023',
      },
      {
        version: '6.0.9',
        date: 'April 25, 2023',
      },
      {
        version: '6.0.8',
        date: 'April 18, 2023',
      },
      {
        version: '6.0.7',
        date: 'April 11, 2023',
      },
      {
        version: '6.0.6',
        date: 'April 4, 2023',
      },
      {
        version: '6.0.5',
        date: 'March 28, 2023',
      },
      {
        version: '6.0.3',
        date: 'March 21, 2023',
      },
      {
        version: '6.0.2',
        date: 'March 14, 2023',
      },
      {
        version: '6.0.1',
        date: 'March 8, 2023',
      },
      {
        version: '6.0.0',
        date: 'March 2, 2023',
      },
    ],
  },
  {
    version: '5.10.0',
    date: 'January 3, 2023',
    github: 'https://github.com/mantinedev/mantine/releases/tag/5.10.0',
    link: 'https://v5.mantine.dev/changelog/5-10-0',
    patches: [
      {
        version: '5.10.5',
        date: 'February 26, 2023',
      },
      {
        version: '5.10.4',
        date: 'February 15, 2023',
      },
      {
        version: '5.10.3',
        date: 'February 3, 2023',
      },
      {
        version: '5.10.2',
        date: 'January 25, 2023',
      },
      {
        version: '5.10.1',
        date: 'January 17, 2023',
      },
      {
        version: '5.10.0',
        date: 'January 3, 2023',
      },
    ],
  },
  {
    version: '5.9.0',
    date: 'December 1, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/5.9.0',
    link: 'https://v5.mantine.dev/changelog/5-9-0',
    patches: [
      {
        version: '5.9.6',
        date: 'December 31, 2022',
      },
      {
        version: '5.9.5',
        date: 'December 17, 2022',
      },
      {
        version: '5.9.4',
        date: 'December 12, 2022',
      },
      {
        version: '5.9.3',
        date: 'December 10, 2022',
      },
      {
        version: '5.9.2',
        date: 'December 5, 2022',
      },
      {
        version: '5.9.1',
        date: 'December 4, 2022',
      },
      {
        version: '5.9.0',
        date: 'December 1, 2022',
      },
    ],
  },
  {
    version: '5.8.0',
    date: 'November 16, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/5.8.0',
    link: 'https://v5.mantine.dev/changelog/5-8-0',
    patches: [
      {
        version: '5.8.4',
        date: 'November 28, 2022',
      },
      {
        version: '5.8.3',
        date: 'November 23, 2022',
      },
      {
        version: '5.8.2',
        date: 'November 19, 2022',
      },
      {
        version: '5.8.0',
        date: 'November 16, 2022',
      },
    ],
  },
  {
    version: '5.7.0',
    date: 'November 4, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/5.7.0',
    link: 'https://v5.mantine.dev/changelog/5-7-0',
    patches: [
      {
        version: '5.7.2',
        date: 'November 12, 2022',
      },
      {
        version: '5.7.1',
        date: 'November 6, 2022',
      },
      {
        version: '5.7.0',
        date: 'November 4, 2022',
      },
    ],
  },
  {
    version: '5.6.0',
    date: 'October 20, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/5.6.0',
    link: 'https://v5.mantine.dev/changelog/5-6-0',
    patches: [
      {
        version: '5.6.4',
        date: 'November 2, 2022',
      },
      {
        version: '5.6.3',
        date: 'October 27, 2022',
      },
      {
        version: '5.6.2',
        date: 'October 24, 2022',
      },
      {
        version: '5.6.1',
        date: 'October 22, 2022',
      },
      {
        version: '5.6.0',
        date: 'October 20, 2022',
      },
    ],
  },
  {
    version: '5.5.0',
    date: 'October 2, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/5.5.0',
    link: 'https://v5.mantine.dev/changelog/5-5-0',
    patches: [
      {
        version: '5.5.6',
        date: 'October 18, 2022',
      },
      {
        version: '5.5.5',
        date: 'October 11, 2022',
      },
      {
        version: '5.5.4',
        date: 'October 5, 2022',
      },
      {
        version: '5.5.2',
        date: 'October 4, 2022',
      },
      {
        version: '5.5.1',
        date: 'October 3, 2022',
      },
      {
        version: '5.5.0',
        date: 'October 2, 2022',
      },
    ],
  },
  {
    version: '5.4.0',
    date: 'September 19, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/5.4.0',
    link: 'https://v5.mantine.dev/changelog/5-4-0',
    patches: [
      {
        version: '5.4.2',
        date: 'September 29, 2022',
      },
      {
        version: '5.4.1',
        date: 'September 24, 2022',
      },
      {
        version: '5.4.0',
        date: 'September 19, 2022',
      },
    ],
  },
  {
    version: '5.3.0',
    date: 'September 9, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/5.3.0',
    link: 'https://v5.mantine.dev/changelog/5-3-0',
    patches: [
      {
        version: '5.3.3',
        date: 'September 17, 2022',
      },
      {
        version: '5.3.2',
        date: 'September 15, 2022',
      },
      {
        version: '5.3.1',
        date: 'September 14, 2022',
      },
      {
        version: '5.3.0',
        date: 'September 9, 2022',
      },
    ],
  },
  {
    version: '5.2.0',
    date: 'August 18, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/5.2.0',
    link: 'https://v5.mantine.dev/changelog/5-2-0',
    patches: [
      {
        version: '5.2.7',
        date: 'September 8, 2022',
      },
      {
        version: '5.2.6',
        date: 'September 6, 2022',
      },
      {
        version: '5.2.5',
        date: 'September 3, 2022',
      },
      {
        version: '5.2.4',
        date: 'August 27, 2022',
      },
      {
        version: '5.2.3',
        date: 'August 22, 2022',
      },
      {
        version: '5.2.2',
        date: 'August 22, 2022',
      },
      {
        version: '5.2.0',
        date: 'August 18, 2022',
      },
    ],
  },
  {
    version: '5.1.0',
    date: 'August 8, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/5.1.0',
    link: 'https://v5.mantine.dev/changelog/5-1-0',
    patches: [
      {
        version: '5.1.7',
        date: 'August 18, 2022',
      },
      {
        version: '5.1.6',
        date: 'August 14, 2022',
      },
      {
        version: '5.1.5',
        date: 'August 13, 2022',
      },
      {
        version: '5.1.4',
        date: 'August 12, 2022',
      },
      {
        version: '5.1.3',
        date: 'August 11, 2022',
      },
      {
        version: '5.1.1',
        date: 'August 9, 2022',
      },
      {
        version: '5.1.0',
        date: 'August 8, 2022',
      },
    ],
  },
  {
    version: '5.0.0',
    date: 'July 25, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/5.0.0',
    link: 'https://v5.mantine.dev/changelog/5-0-0',
    patches: [
      {
        version: '5.0.3',
        date: 'August 5, 2022',
      },
      {
        version: '5.0.2',
        date: 'July 30, 2022',
      },
      {
        version: '5.0.0',
        date: 'July 25, 2022',
      },
    ],
  },
  {
    version: '4.2.0',
    date: 'April 27, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/4.2.0',
    link: 'https://v4.mantine.dev/changelog/4-2-0',
    patches: [
      {
        version: '4.2.12',
        date: 'July 3, 2022',
      },
      {
        version: '4.2.11',
        date: 'June 26, 2022',
      },
      {
        version: '4.2.10',
        date: 'June 19, 2022',
      },
      {
        version: '4.2.9',
        date: 'June 12, 2022',
      },
      {
        version: '4.2.8',
        date: 'June 5, 2022',
      },
      {
        version: '4.2.7',
        date: 'May 29, 2022',
      },
      {
        version: '4.2.6',
        date: 'May 22, 2022',
      },
      {
        version: '4.2.5',
        date: 'May 15, 2022',
      },
      {
        version: '4.2.3',
        date: 'May 8, 2022',
      },
      {
        version: '4.2.2',
        date: 'May 1, 2022',
      },
      {
        version: '4.2.0',
        date: 'April 27, 2022',
      },
    ],
  },
  {
    version: '4.1.0',
    date: 'March 28, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/4.1.0',
    link: 'https://v4.mantine.dev/changelog/4-1-0',
    patches: [
      {
        version: '4.1.5',
        date: 'April 24, 2022',
      },
      {
        version: '4.1.4',
        date: 'April 17, 2022',
      },
      {
        version: '4.1.3',
        date: 'April 9, 2022',
      },
      {
        version: '4.1.2',
        date: 'April 3, 2022',
      },
      {
        version: '4.1.1',
        date: 'April 1, 2022',
      },
      {
        version: '4.1.0',
        date: 'March 28, 2022',
      },
    ],
  },
  {
    version: '4.0.0',
    date: 'March 10, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/4.0.0',
    link: 'https://v4.mantine.dev/changelog/4-0-0',
    patches: [
      {
        version: '4.0.9',
        date: 'March 27, 2022',
      },
      {
        version: '4.0.8',
        date: 'March 24, 2022',
      },
      {
        version: '4.0.7',
        date: 'March 20, 2022',
      },
      {
        version: '4.0.6',
        date: 'March 18, 2022',
      },
      {
        version: '4.0.5',
        date: 'March 16, 2022',
      },
      {
        version: '4.0.4',
        date: 'March 13, 2022',
      },
      {
        version: '4.0.3',
        date: 'March 13, 2022',
      },
      {
        version: '4.0.2',
        date: 'March 12, 2022',
      },
      {
        version: '4.0.1',
        date: 'March 11, 2022',
      },
      {
        version: '4.0.0',
        date: 'March 10, 2022',
      },
    ],
  },
  {
    version: '3.6.0',
    date: 'January 14, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/3.6.0',
    link: 'https://v3.mantine.dev/changelog/3-6-0',
    patches: [
      {
        version: '3.6.14',
        date: 'March 3, 2022',
      },
      {
        version: '3.6.13',
        date: 'March 2, 2022',
      },
      {
        version: '3.6.12',
        date: 'March 1, 2022',
      },
      {
        version: '3.6.11',
        date: 'February 25, 2022',
      },
      {
        version: '3.6.10',
        date: 'February 24, 2022',
      },
      {
        version: '3.6.9',
        date: 'February 17, 2022',
      },
      {
        version: '3.6.8',
        date: 'February 16, 2022',
      },
      {
        version: '3.6.7',
        date: 'February 9, 2022',
      },
      {
        version: '3.6.6',
        date: 'February 5, 2022',
      },
      {
        version: '3.6.5',
        date: 'February 2, 2022',
      },
      {
        version: '3.6.4',
        date: 'January 30, 2022',
      },
      {
        version: '3.6.3',
        date: 'January 25, 2022',
      },
      {
        version: '3.6.2',
        date: 'January 20, 2022',
      },
      {
        version: '3.6.1',
        date: 'January 17, 2022',
      },
      {
        version: '3.6.0',
        date: 'January 14, 2022',
      },
    ],
  },
  {
    version: '3.5.0',
    date: 'January 3, 2022',
    github: 'https://github.com/mantinedev/mantine/releases/tag/3.5.0',
    link: 'https://v3.mantine.dev/changelog/3-5-0',
    patches: [
      {
        version: '3.5.5',
        date: 'January 12, 2022',
      },
      {
        version: '3.5.4',
        date: 'January 9, 2022',
      },
      {
        version: '3.5.3',
        date: 'January 8, 2022',
      },
      {
        version: '3.5.2',
        date: 'January 7, 2022',
      },
      {
        version: '3.5.1',
        date: 'January 6, 2022',
      },
      {
        version: '3.5.0',
        date: 'January 3, 2022',
      },
    ],
  },
  {
    version: '3.4.0',
    date: 'December 14, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/3.4.0',
    link: 'https://v3.mantine.dev/changelog/3-4-0',
    patches: [
      {
        version: '3.4.3',
        date: 'December 20, 2021',
      },
      {
        version: '3.4.2',
        date: 'December 18, 2021',
      },
      {
        version: '3.4.1',
        date: 'December 16, 2021',
      },
      {
        version: '3.4.0',
        date: 'December 14, 2021',
      },
    ],
  },
  {
    version: '3.3.0',
    date: 'December 2, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/3.3.0',
    link: 'https://v3.mantine.dev/changelog/3-3-0',
    patches: [
      {
        version: '3.3.5',
        date: 'December 7, 2021',
      },
      {
        version: '3.3.4',
        date: 'December 6, 2021',
      },
      {
        version: '3.3.3',
        date: 'December 6, 2021',
      },
      {
        version: '3.3.2',
        date: 'December 4, 2021',
      },
      {
        version: '3.3.1',
        date: 'December 3, 2021',
      },
      {
        version: '3.3.0',
        date: 'December 2, 2021',
      },
    ],
  },
  {
    version: '3.2.0',
    date: 'November 13, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/3.2.0',
    link: 'https://v3.mantine.dev/changelog/3-2-0',
    patches: [
      {
        version: '3.2.3',
        date: 'November 26, 2021',
      },
      {
        version: '3.2.2',
        date: 'November 22, 2021',
      },
      {
        version: '3.2.1',
        date: 'November 19, 2021',
      },
      {
        version: '3.2.0',
        date: 'November 13, 2021',
      },
    ],
  },
  {
    version: '3.1.0',
    date: 'October 28, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/3.1.0',
    link: 'https://v3.mantine.dev/changelog/3-1-0',
    patches: [
      {
        version: '3.1.9',
        date: 'November 13, 2021',
      },
      {
        version: '3.1.8',
        date: 'November 10, 2021',
      },
      {
        version: '3.1.7',
        date: 'November 8, 2021',
      },
      {
        version: '3.1.6',
        date: 'November 5, 2021',
      },
      {
        version: '3.1.5',
        date: 'November 5, 2021',
      },
      {
        version: '3.1.4',
        date: 'November 3, 2021',
      },
      {
        version: '3.1.3',
        date: 'November 2, 2021',
      },
      {
        version: '3.1.2',
        date: 'November 1, 2021',
      },
      {
        version: '3.1.1',
        date: 'November 1, 2021',
      },
      {
        version: '3.1.0',
        date: 'October 28, 2021',
      },
    ],
  },
  {
    version: '3.0.0',
    date: 'October 10, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/3.0.0',
    link: 'https://v3.mantine.dev/changelog/3-0-0',
    patches: [
      {
        version: '3.0.5',
        date: 'October 16, 2021',
      },
      {
        version: '3.0.4',
        date: 'October 14, 2021',
      },
      {
        version: '3.0.3',
        date: 'October 13, 2021',
      },
      {
        version: '3.0.2',
        date: 'October 12, 2021',
      },
      {
        version: '3.0.1',
        date: 'October 11, 2021',
      },
      {
        version: '3.0.0',
        date: 'October 10, 2021',
      },
    ],
  },
  {
    version: '2.5.0',
    date: 'September 16, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/2.5.0',
    link: 'https://v2.mantine.dev/changelog/2-5-0',
    patches: [
      {
        version: '2.5.1',
        date: 'September 17, 2021',
      },
      {
        version: '2.5.0',
        date: 'September 16, 2021',
      },
    ],
  },
  {
    version: '2.4.0',
    date: 'August 24, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/2.4.0',
    link: 'https://v2.mantine.dev/changelog/2-4-0',
    patches: [
      {
        version: '2.4.3',
        date: 'September 5, 2021',
      },
      {
        version: '2.4.2',
        date: 'September 5, 2021',
      },
      {
        version: '2.4.1',
        date: 'September 1, 2021',
      },
      {
        version: '2.4.0',
        date: 'August 24, 2021',
      },
    ],
  },
  {
    version: '2.3.0',
    date: 'August 15, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/2.3.0',
    link: 'https://v2.mantine.dev/changelog/2-3-0',
    patches: [
      {
        version: '2.3.2',
        date: 'August 24, 2021',
      },
      {
        version: '2.3.1',
        date: 'August 19, 2021',
      },
      {
        version: '2.3.0',
        date: 'August 15, 2021',
      },
    ],
  },
  {
    version: '2.2.0',
    date: 'August 2, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/2.2.0',
    link: 'https://v2.mantine.dev/changelog/2-2-0',
    patches: [
      {
        version: '2.2.3',
        date: 'August 15, 2021',
      },
      {
        version: '2.2.2',
        date: 'August 12, 2021',
      },
      {
        version: '2.2.1',
        date: 'August 4, 2021',
      },
      {
        version: '2.2.0',
        date: 'August 2, 2021',
      },
    ],
  },
  {
    version: '2.1.0',
    date: 'July 20, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/2.1.0',
    link: 'https://v2.mantine.dev/changelog/2-1-0',
    patches: [
      {
        version: '2.1.5',
        date: 'July 30, 2021',
      },
      {
        version: '2.1.4',
        date: 'July 27, 2021',
      },
      {
        version: '2.1.3',
        date: 'July 26, 2021',
      },
      {
        version: '2.1.2',
        date: 'July 24, 2021',
      },
      {
        version: '2.1.1',
        date: 'July 21, 2021',
      },
      {
        version: '2.1.0',
        date: 'July 20, 2021',
      },
    ],
  },
  {
    version: '2.0.0',
    date: 'July 5, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/2.0.0',
    link: 'https://v2.mantine.dev/changelog/2-0-0',
    patches: [
      {
        version: '2.0.7',
        date: 'July 18, 2021',
      },
      {
        version: '2.0.6',
        date: 'July 16, 2021',
      },
      {
        version: '2.0.5',
        date: 'July 14, 2021',
      },
      {
        version: '2.0.4',
        date: 'July 13, 2021',
      },
      {
        version: '2.0.3',
        date: 'July 11, 2021',
      },
      {
        version: '2.0.2',
        date: 'July 6, 2021',
      },
      {
        version: '2.0.0',
        date: 'July 5, 2021',
      },
    ],
  },
  {
    version: '1.3.0',
    date: 'June 1, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/1.3.0',
    link: 'https://v2.mantine.dev/changelog/1-3-0',
    patches: [
      {
        version: '1.3.1',
        date: 'June 2, 2021',
      },
      {
        version: '1.3.0',
        date: 'June 1, 2021',
      },
    ],
  },
  {
    version: '1.1.0',
    date: 'May 19, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/1.1.0',
    link: 'https://v2.mantine.dev/changelog/1-1-0',
    patches: [
      {
        version: '1.1.1',
        date: 'May 20, 2021',
      },
      {
        version: '1.1.0',
        date: 'May 19, 2021',
      },
    ],
  },
  {
    version: '1.0.0',
    date: 'May 3, 2021',
    github: 'https://github.com/mantinedev/mantine/releases/tag/1.0.0',
    link: 'https://v2.mantine.dev/changelog/1-0-0',
    patches: [
      {
        version: '1.0.6',
        date: 'May 9, 2021',
      },
      {
        version: '1.0.5',
        date: 'May 8, 2021',
      },
      {
        version: '1.0.4',
        date: 'May 8, 2021',
      },
      {
        version: '1.0.3',
        date: 'May 5, 2021',
      },
      {
        version: '1.0.2',
        date: 'May 5, 2021',
      },
      {
        version: '1.0.0',
        date: 'May 3, 2021',
      },
    ],
  },
];
