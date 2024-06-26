export interface ReviewData {
  title: string;
  body: string;
  link: string;
  author: {
    avatar: string;
    nickname: string;
  };
}

export const reviews: ReviewData[] = [
  {
    title: 'You nailed it!',
    body: "<p>Man, I've been doing Front-End for 20 years. This is, hands-down, the best component library I've ever used. What's more, the parts that I didn't like (Styling from JS Objects, slow with big forms) have been addressed in v7. Please keep it up, this library deserves more exposure, it just works and works well and beautifully. Many thanks to <a href='https://github.com/rtivital' target='_blank'>@rtivital</a> and the contributors!</p>",
    link: 'https://github.com/orgs/mantinedev/discussions/6150',
    author: {
      nickname: 'sideral',
      avatar: 'https://avatars.githubusercontent.com/u/192025?v=4',
    },
  },
  {
    title: "One of the best UI libraries I've come across.",
    body: '<p>I am a senior Frontend Developer and wanted to use something new instead of Material UI and came across this, it has been well thought of all the different scenarios you and come across, and the hooks are just pure love :)</p><p>Thank you so much for this.</p>',
    link: 'https://github.com/orgs/mantinedev/discussions/5783',
    author: {
      nickname: 'smsuraj100',
      avatar: 'https://avatars.githubusercontent.com/u/16137686?v=4',
    },
  },
  {
    title: 'Absurdly good',
    body: "<p>Hope this kind of post is ok - just wanted to say thank you.</p><p>I've been writing software professionally for 25 years, with the last 15 in web (mostly internal projects in my company). This is easily the best component library I've ever used.</p><p>In every other instance I've run into the boundaries of what the library does and have to spend a lot of time and energy customizing or extending it. Not only does Mantine provide easy access to everything under the hood, but 99% the things you need are provided as default options. I've started to lose count of the \"guess I'd better build my standard xyz... oh wait, they have that too\" moments. Also the docs are perfect.</p><p>Bravo, thank you.</p>",
    link: 'https://github.com/orgs/mantinedev/discussions/5504',
    author: {
      nickname: 'leighton-carr',
      avatar: 'https://avatars.githubusercontent.com/u/18201458?v=4',
    },
  },
  {
    title: 'Thank you mantine 💘',
    body: '<p>Dear Mantine Team, thank you for putting this library together. I have started to use and love Mantine in my free time, and bringing this great library to good use in our company now. All the developers are very pleased with the development experience, the time savings for any bigger project is insane. The amount of flexibility we have with our designers and developers will result in great products. All thanks to every contributor. Continue the good work!</p>',
    link: 'https://github.com/orgs/mantinedev/discussions/3741',
    author: {
      nickname: 'Gitgud6969',
      avatar: 'https://avatars.githubusercontent.com/u/57042505?v=4',
    },
  },
  {
    title: 'A solution for every problem',
    body: '<p>Mantine has a solution for every problem I’ve needed to solve in my web app. Components and props are named clearly, design choices promote simplicity, and it looks beautiful out of the box. Thank you for jump starting my application in a big way!</p>',
    link: 'https://github.com/orgs/mantinedev/discussions/5456',
    author: {
      nickname: 'SeeSharpCode',
      avatar: 'https://avatars.githubusercontent.com/u/10228483?v=4',
    },
  },
  {
    title: 'Thank you Mantine!',
    body: '<p>Out of all react component libraries that I have ever seen this one is the most straight forward, easy to use, well documented and really beautiful. I plan on switching and using this full time. Just wanted to say huge thanks to the people that made this.</p>',
    link: 'https://github.com/orgs/mantinedev/discussions/259',
    author: {
      nickname: 'OmkoBass',
      avatar: 'https://avatars.githubusercontent.com/u/40026131?v=4',
    },
  },
  {
    title: 'Mantine >>>',
    body: "<p>I started using Mantine for a personal project and it covers so many cases!! Enjoying every part of it so far and can't wait to get more in-depth with it.</p>",
    link: 'https://github.com/orgs/mantinedev/discussions/6219',
    author: {
      nickname: 'wvha',
      avatar: 'https://avatars.githubusercontent.com/u/20240349?v=4',
    },
  },
  {
    title: 'Insane documentation',
    body: '<p>I just have to say that the level of documentation, examples, and pure utility this provides is insane. Thanks to all the contributors.</p>',
    link: 'https://github.com/orgs/mantinedev/discussions/767',
    author: {
      nickname: 'adamhp',
      avatar: 'https://avatars.githubusercontent.com/u/7103990?v=4',
    },
  },
];
