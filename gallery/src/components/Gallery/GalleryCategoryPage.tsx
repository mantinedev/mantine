import React from 'react';
import { Container } from '@mantine/core';
import Head from '../Head/Head';
import { GalleryPage } from './components/GalleryPage/GalleryPage';
import { ComponentCanvas } from './components/ComponentCanvas/ComponentCanvas';
import { CategoryHeader } from './components/CategoryHeader/CategoryHeader';
import { GalleryPageCategory, GalleryComponent } from './types';

interface GalleryCategoryPageProps {
  pageContext: {
    category: GalleryPageCategory;
    components: GalleryComponent[];
  };
}

export default function GalleryCategoryPage({ pageContext }: GalleryCategoryPageProps) {
  const canvases = pageContext.components.map((component, index) => (
    <ComponentCanvas
      {...component}
      key={component.url}
      zIndex={pageContext.components.length - index}
    />
  ));

  return (
    <>
      <Head title={pageContext.category.name} />
      <GalleryPage>
        <Container size="lg" style={{ paddingTop: 40 }}>
          <CategoryHeader category={pageContext.category} />
          {canvases}
        </Container>
      </GalleryPage>
    </>
  );
}
