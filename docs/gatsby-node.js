const fsp = require('fs/promises');
const fs = require('fs');

exports.createPages = async function ({ actions }) {
  const paths = await fsp.readdir('./src/gallery');
  for (const path of paths) {
    if (fs.lstatSync(`./src/gallery/${path}`).isDirectory()) {
      actions.createPage({
        path: `/g/${path}`,
        component: require.resolve('./src/components/Gallery.tsx'),
        context: {
          _component: path,
          attributes: require(`./src/gallery/${path}/attributes.json`),
        },
      });
    }
  }

  actions.createPage({
    path: '/g/hello',
    component: require.resolve('./src/components/Gallery.tsx'),
  });
};
