import React from 'react';
import Head from 'next/head';
import { GALLERY_CATEGORIES } from '../../data';
import { GalleryBanner } from './GalleryBanner/GalleryBanner';
import { CategoriesList } from './CategoriesList/CategoriesList';

interface HomePageProps {
  componentsCountByCategory: Record<string, number>;
}

export function HomePage({ componentsCountByCategory }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Mantine gallery</title>
      </Head>
      <GalleryBanner componentsCount={90} />
      <CategoriesList
        groups={GALLERY_CATEGORIES}
        componentsCountByCategory={componentsCountByCategory}
      />
    </>
  );
}
