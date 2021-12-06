import React from 'react';
import { Container } from '@mantine/core';
import Head from '../Head/Head';
import { Layout } from '../Layout/Layout';
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
    <Layout>
      <Head title={pageContext.category.name} />
      <GalleryPage>
        <Container size="xl" mt={50}>
          <CategoryHeader category={pageContext.category} />
          {canvases}
        </Container>
      </GalleryPage>
    </Layout>
  );
}
