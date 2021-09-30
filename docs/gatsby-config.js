const remarkSlug = require('remark-slug');

module.exports = {
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
      resolve: 'gatsby-plugin-layout',
      options: {
        component: `${__dirname}/src/components/Layout/Layout`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        remarkPlugins: [remarkSlug],
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
        background_color: '#228be6',
        theme_color: '#228be6',
        display: 'minimal-ui',
        icon: 'src/images/favicon.svg',
      },
    },

    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#228be6',
        showSpinner: false,
      },
    },
  ],
};
