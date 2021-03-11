import OpenColor from 'open-color';

export default {
  siteMetadata: {
    title: 'Mantine Docs',
    description: 'Mantine documentation',
    author: '@rtivital',
    siteUrl: 'https://mantine.dev',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-LVZ08BVK0B',
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-cname',
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/src/docs/`,
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mantine Docs',
        short_name: 'mantine',
        start_url: '/',
        background_color: OpenColor.blue[6],
        theme_color: OpenColor.blue[6],
        display: 'minimal-ui',
        icon: 'src/images/favicon.svg',
      },
    },
  ],
};
