import React from 'react';
import { useMantineTheme } from '@mantine/core';
import Head from '../Head/Head';
import * as GalleryComponents from '../../gallery';
import { GalleryPreview } from './components/GalleryPreview/GalleryPreview';
import { GalleryComponent } from './types';

interface GalleryComponentPageProps {
  pageContext: GalleryComponent;
}

export default function GalleryComponentPage({ pageContext }: GalleryComponentPageProps) {
  const theme = useMantineTheme();
  const Component = GalleryComponents[pageContext._component];
  return (
    <>
      <Head title={pageContext.attributes.title} />
      <div
        style={{
          paddingTop: 22,
          padding: pageContext.attributes.canvas.maxWidth ? theme.spacing.sm : 0,
        }}
      >
        <GalleryPreview
          canvas={pageContext.attributes.canvas}
          withSpacing={!!pageContext.attributes.canvas.maxWidth}
        >
          <Component {...pageContext.attributes.props} />
        </GalleryPreview>
      </div>
    </>
  );
}
