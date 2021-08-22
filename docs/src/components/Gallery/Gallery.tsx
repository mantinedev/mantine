import React from 'react';
import Head from '../Head/Head';
import { GalleryPage } from './components/GalleryPage/GalleryPage';
import { CategoriesList, CategoryCardProps } from './components/CategoriesList/CategoriesList';

interface GalleryProps {
  pageContext: {
    categories: CategoryCardProps[];
  };
}

export default function Gallery({ pageContext }: GalleryProps) {
  return (
    <>
      <Head title="Gallery" description="100+ premade responsive components" />
      <GalleryPage>
        <CategoriesList categories={pageContext.categories} />
      </GalleryPage>
    </>
  );
}
