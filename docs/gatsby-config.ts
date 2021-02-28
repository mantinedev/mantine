import OpenColor from 'open-color';

export default {
  siteMetadata: {
    title: 'Mantine Docs',
    description: 'Mantine documentation',
    author: '@rtivital',
    siteUrl: 'https://mantine.dev',
  },
  plugins: [
    'gatsby-plugin-cname',
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/Layout.tsx'),
        },
      },
    },
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
        name: 'mantine-docs',
        path: `${__dirname}/src/pages/core/`,
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
