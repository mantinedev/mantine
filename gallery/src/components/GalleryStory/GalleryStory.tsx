import React from 'react';
import { DEFAULT_THEME, MantineProvider } from '@mantine/core';
import { GalleryPreview } from '../Gallery/components/GalleryPreview/GalleryPreview';
import { GalleryCanvasAttributes } from '../Gallery/types';

interface GalleryStoryProps {
  attributes: GalleryCanvasAttributes;
  component: React.FC<any>;
}

export function GalleryStory({ attributes, component: Component }: GalleryStoryProps) {
  return (
    <>
      <GalleryPreview canvas={attributes.canvas} withSpacing>
        <Component {...(attributes.props || null)} />
      </GalleryPreview>
      <div
        style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], paddingBottom: 40, marginTop: 40 }}
      >
        <MantineProvider theme={{ colorScheme: 'dark' }}>
          <GalleryPreview canvas={attributes.canvas} withSpacing>
            <Component {...(attributes.props || null)} />
          </GalleryPreview>
        </MantineProvider>
      </div>
    </>
  );
}
