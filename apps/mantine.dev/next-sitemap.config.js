/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://mantine.dev',
  generateRobotsTxt: true,
  output: 'export',
  generateIndexSitemap: false,
};
