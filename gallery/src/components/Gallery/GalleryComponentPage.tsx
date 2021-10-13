import React, { useState } from 'react';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import { Prism } from '@mantine/prism';
import Head from '../Head/Head';
import * as GalleryComponents from '../../gallery';
import { GalleryPreview } from './components/GalleryPreview/GalleryPreview';
import { ComponentPreviewControls } from './components/ComponentPreviewControls/ComponentPreviewControls';
import { GalleryComponent } from './types';

interface GalleryComponentPageProps {
  pageContext: GalleryComponent;
}

export default function GalleryComponentPage({ pageContext }: GalleryComponentPageProps) {
  const [state, setState] = useState('preview');
  const [primaryColor, setPrimaryColor] = useState('blue');
  const theme = useMantineTheme();
  const Component = GalleryComponents[pageContext._component];

  return (
    <div style={{ paddingBottom: 50, marginTop: -34 }}>
      <Head title={pageContext.attributes.title} />

      <ComponentPreviewControls
        state={state}
        onStateChange={setState}
        primaryColor={primaryColor}
        onPrimaryColorChange={setPrimaryColor}
        {...pageContext}
      />

      {state === 'preview' ? (
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
      ) : (
        <Prism language="tsx">{pageContext.code}</Prism>
      )}
    </div>
  );
}
