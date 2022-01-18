import React from 'react';
import Head from 'next/head';
import { GALLERY_CATEGORIES } from '../../data';
import { GalleryBanner } from './GalleryBanner/GalleryBanner';
import { CategoriesList } from './CategoriesList/CategoriesList';

interface HomePageProps {
  componentsCountByCategory: Record<string, number>;
}

export function HomePage({ componentsCountByCategory }: HomePageProps) {
  const allComponentsCount = Object.keys(componentsCountByCategory).reduce(
    (acc, category) => acc + componentsCountByCategory[category],
    0
  );

  return (
    <>
      <Head>
        <title>Mantine gallery</title>
      </Head>
      <GalleryBanner componentsCount={allComponentsCount} />
      <CategoriesList
        groups={GALLERY_CATEGORIES}
        componentsCountByCategory={componentsCountByCategory}
      />
    </>
  );
}
