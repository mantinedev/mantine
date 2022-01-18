import React from 'react';
import { Container } from '@mantine/core';
import Head from 'next/head';
import { Layout } from '../Layout/Layout';
import { ComponentCanvas } from '../ComponentCanvas/ComponentCanvas';
import { CategoryHeader } from '../CategoryHeader/CategoryHeader';
import { GalleryCategory, GalleryComponent } from '../../data';

interface CategoryPageProps {
  category: GalleryCategory;
  components: GalleryComponent[];
}

export function CategoryPage({ category, components }: CategoryPageProps) {
  const canvases = components.map((component, index) => (
    <ComponentCanvas {...component} key={component.url} zIndex={components.length - index} />
  ));

  return (
    <Layout>
      <Head>
        <title>{`${category.name} | Mantine Gallery`}</title>
      </Head>
      <Container size="xl" mt={50}>
        <CategoryHeader category={category} />
        {canvases}
      </Container>
    </Layout>
  );
}
