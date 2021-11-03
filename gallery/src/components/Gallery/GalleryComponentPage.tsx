import React, { useState } from 'react';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import { Prism } from '@mantine/prism';
import Head from '../Head/Head';
import { Layout } from '../Layout/Layout';
import * as GalleryComponents from '../../gallery';
import { GalleryPreview } from './components/GalleryPreview/GalleryPreview';
import { ComponentPreviewControls } from './components/ComponentPreviewControls/ComponentPreviewControls';
import { GalleryComponent } from './types';

interface GalleryComponentPreviewProps {
  pageContext: GalleryComponent;
  primaryColor: string;
  component: any;
}

function GalleryComponentPreview({
  pageContext,
  primaryColor,
  component: Component,
}: GalleryComponentPreviewProps) {
  const theme = useMantineTheme();
  return (
    <div style={{ padding: pageContext.attributes.canvas.maxWidth ? theme.spacing.sm : 0 }}>
      <GalleryPreview
        canvas={pageContext.attributes.canvas}
        withSpacing={!!pageContext.attributes.canvas.maxWidth}
      >
        <MantineProvider theme={{ colorScheme: theme.colorScheme, primaryColor }}>
          <Component {...pageContext.attributes.props} />
        </MantineProvider>
      </GalleryPreview>
    </div>
  );
}

interface GalleryComponentPageProps {
  pageContext: GalleryComponent;
}

export default function GalleryComponentPage({ pageContext }: GalleryComponentPageProps) {
  const [state, setState] = useState('preview');
  const [primaryColor, setPrimaryColor] = useState('blue');

  return (
    <Layout>
      <Head title={pageContext.attributes.title} />

      <ComponentPreviewControls
        state={state}
        onStateChange={setState}
        primaryColor={primaryColor}
        onPrimaryColorChange={setPrimaryColor}
        {...pageContext}
      />

      {state === 'preview' ? (
        <GalleryComponentPreview
          component={GalleryComponents[pageContext._component]}
          primaryColor={primaryColor}
          pageContext={pageContext}
        />
      ) : (
        <Prism language="tsx">{pageContext.code}</Prism>
      )}
    </Layout>
  );
}
