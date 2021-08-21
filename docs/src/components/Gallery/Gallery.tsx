import React from 'react';
import Head from '../Head/Head';
import { GalleryPage } from './components/GalleryPage/GalleryPage';
import { CategoriesList } from './components/CategoriesList/CategoriesList';

export default function Gallery() {
  return (
    <>
      <Head title="Gallery" description="100+ responsive components premade with Mantine" />
      <GalleryPage>
        <CategoriesList />
      </GalleryPage>
    </>
  );
}
