import { GalleryCategoriesGroup, GalleryCategory } from './types';
import images from './images';

export const GALLERY_CATEGORIES: GalleryCategoriesGroup[] = [
  {
    name: 'Application UI',
    categories: [
      { slug: 'navbars', name: 'Navbars', images: images.navbars },
      { slug: 'headers', name: 'Headers', images: images.headers },
      { slug: 'footers', name: 'Footers', images: images.footers },
      { slug: 'grids', name: 'Grids', images: images.grids },
      { slug: 'users', name: 'User info and controls', images: images.users },
      { slug: 'inputs', name: 'Inputs', images: images.inputs },
      { slug: 'buttons', name: 'Buttons', images: images.buttons },
      { slug: 'color-scheme', name: 'Color scheme toggles', images: images['color-scheme'] },
      { slug: 'sliders', name: 'Sliders', images: images.sliders },
      { slug: 'dropzones', name: 'Dropzones', images: images.dropzones },
      { slug: 'app-cards', name: 'Application cards', images: images['app-cards'] },
      { slug: 'stats', name: 'Stats', images: images.stats },
      { slug: 'tables', name: 'Tables', images: images.tables },
      { slug: 'dnd', name: "Drag'n'Drop", images: images.dnd },
    ],
  },
  {
    name: 'Page sections',
    categories: [
      { slug: 'hero', name: 'Hero headers', images: images.hero },
      { slug: 'features', name: 'Features section', images: images.features },
      { slug: 'authentication', name: 'Authentication', images: images.authentication },
      { slug: 'faq', name: 'Frequently asked questions', images: images.faq },
      { slug: 'contact', name: 'Contact us section', images: images.contact },
      { slug: 'error-pages', name: 'Error pages', images: images['error-pages'] },
      { slug: 'banners', name: 'Banners', images: images.banners },
    ],
  },
  {
    name: 'Blog UI',
    categories: [
      { slug: 'article-cards', name: 'Article cards', images: images['article-cards'] },
      { slug: 'toc', name: 'Table of contents', images: images.toc },
      { slug: 'comments', name: 'Comments', images: images.comments },
    ],
  },
];

const ALL_CATEGORIES = GALLERY_CATEGORIES.reduce<GalleryCategory[]>((acc, group) => {
  acc.push(...group.categories);
  return acc;
}, []);

export const GALLERY_CATEGORIES_SLUGS = ALL_CATEGORIES.map((item) => item.slug);

export const getCategoryData = (category: string) =>
  ALL_CATEGORIES.find((item) => item.slug === category);
