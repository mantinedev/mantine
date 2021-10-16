import React from 'react';
import Head from '../Head/Head';
import { Layout } from '../Layout/Layout';
import { GalleryPage } from './components/GalleryPage/GalleryPage';
import { CategoriesList, CategoriesListItem } from './components/CategoriesList/CategoriesList';
import { GalleryBanner } from './components/GalleryBanner/GalleryBanner';

interface GalleryProps {
  pageContext: {
    componentsCount: number;
    categories: CategoriesListItem[];
  };
}

export default function Gallery({ pageContext }: GalleryProps) {
  return (
    <Layout>
      <Head title="Gallery" description="100+ premade responsive components" />
      <GalleryPage>
        <GalleryBanner componentsCount={pageContext.componentsCount} />
        <CategoriesList categories={pageContext.categories} />
      </GalleryPage>
    </Layout>
  );
}
