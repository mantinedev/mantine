const fsp = require('fs/promises');
const fs = require('fs');

const convertCase = (string) => {
  const splitted = string
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .split(' ');
  return splitted.join('-');
};

const GALLERY_CATEGORIES = [
  {
    name: 'Landing page sections',
    categories: [
      { slug: 'hero', name: 'Hero headers' },
      { slug: 'features', name: 'Features section' },
      { slug: 'banners', name: 'Banners' },
      { slug: 'faq', name: 'Frequently asked questions' },
      { slug: 'contact', name: 'Contact us section' },
    ],
  },
  {
    name: 'Application UI',
    categories: [
      { slug: 'navbars', name: 'Navbars' },
      { slug: 'users', name: 'User info and controls' },
      { slug: 'authentication', name: 'Authentication' },
      { slug: 'inputs', name: 'Inputs' },
    ],
  },
  {
    name: 'Blog',
    categories: [{ slug: 'cards', name: 'Blog cards' }],
  },
];

const getCategory = (slug) => {
  for (const group of GALLERY_CATEGORIES) {
    const cat = group.categories.find((cat) => cat.slug === slug);

    if (cat) {
      return cat;
    }
  }

  return {};
};

exports.createPages = async function ({ actions }) {
  const paths = await fsp.readdir('./src/gallery');
  const components = paths
    .map((componentName) => {
      if (fs.lstatSync(`./src/gallery/${componentName}`).isDirectory()) {
        const code = fs.readFileSync(`./src/gallery/${componentName}/${componentName}.tsx`, 'utf8');
        const attributes = require(`./src/gallery/${componentName}/attributes.json`);
        const galleryCategory = getCategory(attributes.category);
        const category = {
          name: galleryCategory.name,
          path: `/category/${attributes.category}/`,
        };

        return {
          _component: componentName,
          code,
          category,
          url: `/component/${convertCase(componentName)}`,
          attributes: attributes,
        };
      }

      return null;
    })
    .filter((c) => c);

  const componentsCount = Math.floor(components.length / 10) * 10;

  const categories = components.reduce((acc, component) => {
    if (!Array.isArray(acc[component.attributes.category])) {
      acc[component.attributes.category] = [];
    }

    acc[component.attributes.category].push(component);
    return acc;
  }, {});

  components.forEach((component) => {
    actions.createPage({
      path: component.url,
      component: require.resolve('./src/components/Gallery/GalleryComponentPage.tsx'),
      context: component,
    });
  });

  Object.keys(categories).forEach((category) => {
    actions.createPage({
      path: `/category/${category}/`,
      component: require.resolve('./src/components/Gallery/GalleryCategoryPage.tsx'),
      context: {
        category: getCategory(category),
        components: categories[category],
      },
    });
  });

  actions.createPage({
    path: '/',
    component: require.resolve('./src/components/Gallery/Gallery.tsx'),
    context: {
      componentsCount,
      categories: GALLERY_CATEGORIES.map((category) => {
        const total = category.categories.reduce(
          (acc, cat) => categories[cat.slug].length + acc,
          0
        );
        return {
          category: category.slug,
          name: category.name,
          count: total,
          groups: category.categories.map((cat) => ({
            ...cat,
            category: cat.slug,
            url: `/category/${cat.slug}/`,
            count: categories[cat.slug].length,
          })),
        };
      }),
    },
  });
};
