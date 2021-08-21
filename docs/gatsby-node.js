const fsp = require('fs/promises');
const fs = require('fs');

const convertCase = (string) => {
  const splitted = string
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .split(' ');
  return splitted.join('-');
};

const GALLERY_CATEGORIES = [{ slug: 'forms', name: 'Forms and inputs' }];

exports.createPages = async function ({ actions }) {
  const paths = await fsp.readdir('./src/gallery');
  const components = paths
    .map((componentName) => {
      if (fs.lstatSync(`./src/gallery/${componentName}`).isDirectory()) {
        const code = fs.readFileSync(`./src/gallery/${componentName}/${componentName}.tsx`, 'utf8');

        return {
          _component: componentName,
          attributes: {
            code,
            url: `/gallery/component/${convertCase(componentName)}`,
            ...require(`./src/gallery/${componentName}/attributes.json`),
          },
        };
      }

      return null;
    })
    .filter((c) => c);

  const categories = components.reduce((acc, component) => {
    if (!Array.isArray(acc[component.attributes.category])) {
      acc[component.attributes.category] = [];
    }

    acc[component.attributes.category].push(component);
    return acc;
  }, {});

  components.forEach((component) => {
    actions.createPage({
      path: component.attributes.url,
      component: require.resolve('./src/components/Gallery/GalleryComponentPage.tsx'),
      context: component,
    });
  });

  Object.keys(categories).forEach((category) => {
    actions.createPage({
      path: `/gallery/category/${category}/`,
      component: require.resolve('./src/components/Gallery/GalleryCategoryPage.tsx'),
      context: {
        category,
        components: categories[category],
      },
    });
  });

  actions.createPage({
    path: '/gallery/',
    component: require.resolve('./src/components/Gallery/Gallery.tsx'),
    context: {
      categories: GALLERY_CATEGORIES.map((category) => ({
        category: category.slug,
        name: category.name,
        count: categories[category.slug].length,
        url: `/gallery/category/${category.slug}/`,
      })),
    },
  });
};
