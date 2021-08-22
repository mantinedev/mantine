import React from 'react';
import { Container } from '@mantine/core';
import Head from '../Head/Head';
import { GalleryPage } from './components/GalleryPage/GalleryPage';
import { ComponentCanvas } from './components/ComponentCanvas/ComponentCanvas';
import { GalleryPageCategory, GalleryComponent } from './types';

interface GalleryCategoryPageProps {
  pageContext: {
    category: GalleryPageCategory;
    components: GalleryComponent[];
  };
}

export default function GalleryCategoryPage({ pageContext }: GalleryCategoryPageProps) {
  const canvases = pageContext.components.map((component) => (
    <ComponentCanvas {...component} key={component.url} />
  ));

  return (
    <>
      <Head title={pageContext.category.name} />
      <GalleryPage>
        <Container style={{ paddingTop: 40 }}>{canvases}</Container>
      </GalleryPage>
    </>
  );
}
