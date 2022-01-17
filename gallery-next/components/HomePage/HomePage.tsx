import React from 'react';
// import Head from '../Head/Head';
// import { Layout } from '../Layout/Layout';
// import { GalleryPage } from './components/GalleryPage/GalleryPage';
// import { CategoriesList, CategoriesListItem } from './components/CategoriesList/CategoriesList';
import { GalleryBanner } from './GalleryBanner/GalleryBanner';

// interface GalleryProps {
//   pageContext: {
//     componentsCount: number;
//     categories: CategoriesListItem[];
//   };
// }

export function HomePage({ pageContext }) {
  return <GalleryBanner componentsCount={90} />;
}
