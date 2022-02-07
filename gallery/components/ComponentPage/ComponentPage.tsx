import React, { useState } from 'react';
import Head from 'next/head';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import { Prism } from '@mantine/prism';
import rtlPlugin from 'stylis-plugin-rtl';
import { useGalleryDirection } from '../DirectionContext/DirectionContext';
import * as GalleryComponents from '../../gallery';
import { GalleryPreview } from '../GalleryPreview/GalleryPreview';
import { ComponentPreviewControls } from '../ComponentPreviewControls/ComponentPreviewControls';
import { GalleryComponent } from '../../data';

interface ComponentPreviewProps {
  data: GalleryComponent;
  primaryColor: string;
  component: any;
}

function ComponentPreview({ data, primaryColor, component: Component }: ComponentPreviewProps) {
  const theme = useMantineTheme();
  const dir = useGalleryDirection();
  return (
    <div style={{ padding: data.attributes.canvas.maxWidth ? theme.spacing.sm : 0 }}>
      <GalleryPreview
        canvas={data.attributes.canvas}
        withSpacing={!!data.attributes.canvas.maxWidth}
      >
        <MantineProvider
          theme={{ colorScheme: theme.colorScheme, primaryColor }}
          emotionOptions={
            dir === 'rtl' ? { key: 'mantine-rtl', stylisPlugins: [rtlPlugin] } : { key: 'mantine' }
          }
        >
          <Component {...data.attributes.props} />
        </MantineProvider>
      </GalleryPreview>
    </div>
  );
}

interface ComponentPageProps {
  data: GalleryComponent;
}

export function ComponentPage({ data }: ComponentPageProps) {
  const [state, setState] = useState('preview');
  const [primaryColor, setPrimaryColor] = useState('blue');

  return (
    <>
      <Head>
        <title>{`${data.attributes.title} | Mantine Gallery`}</title>
      </Head>

      <ComponentPreviewControls
        state={state}
        onStateChange={setState}
        primaryColor={primaryColor}
        onPrimaryColorChange={setPrimaryColor}
        {...data}
      />

      {state === 'preview' ? (
        <ComponentPreview
          component={GalleryComponents[data.component]}
          primaryColor={primaryColor}
          data={data}
        />
      ) : (
        <Prism language="tsx">{data.code}</Prism>
      )}
    </>
  );
}
