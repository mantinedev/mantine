import { GalleryCategoriesGroup, GalleryCategory } from './types';

export const GALLERY_CATEGORIES: GalleryCategoriesGroup[] = [
  {
    name: 'Application UI',
    categories: [
      { slug: 'navbars', name: 'Navbars' },
      { slug: 'headers', name: 'Headers' },
      { slug: 'footers', name: 'Footers' },
      { slug: 'grids', name: 'Grids' },
      { slug: 'users', name: 'User info and controls' },
      { slug: 'authentication', name: 'Authentication' },
      { slug: 'inputs', name: 'Inputs' },
      { slug: 'buttons', name: 'Buttons' },
      { slug: 'sliders', name: 'Sliders' },
      { slug: 'dropzones', name: 'Dropzones' },
      { slug: 'app-cards', name: 'Application cards' },
      { slug: 'stats', name: 'Stats' },
      { slug: 'tables', name: 'Tables' },
      { slug: 'dnd', name: "Drag'n'Drop" },
    ],
  },
  {
    name: 'Page sections',
    categories: [
      { slug: 'hero', name: 'Hero headers' },
      { slug: 'features', name: 'Features section' },
      { slug: 'banners', name: 'Banners' },
      { slug: 'faq', name: 'Frequently asked questions' },
      { slug: 'contact', name: 'Contact us section' },
    ],
  },
  {
    name: 'Blog UI',
    categories: [
      { slug: 'article-cards', name: 'Article cards' },
      { slug: 'toc', name: 'Table of contents' },
    ],
  },
];

const ALL_CATEGORIES = GALLERY_CATEGORIES.reduce((acc, group) => {
  acc.push(...group.categories);
  return acc;
}, [] as GalleryCategory[]);

export const GALLERY_CATEGORIES_SLUGS = ALL_CATEGORIES.map((item) => item.slug);

export const getCategoryData = (category: string) =>
  ALL_CATEGORIES.find((item) => item.slug === category);
