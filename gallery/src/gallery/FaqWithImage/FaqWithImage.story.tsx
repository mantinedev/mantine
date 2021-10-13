import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/core';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { FaqWithImage } from './FaqWithImage';

storiesOf('Gallery/FaqWithImage', module).add('FaqWithImage', () => (
  <>
    <GalleryPreview canvas={attributes.canvas} withSpacing>
      <FaqWithImage />
    </GalleryPreview>
    <div
      style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], paddingBottom: 40, marginTop: 40 }}
    >
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <GalleryPreview canvas={attributes.canvas} withSpacing>
          <FaqWithImage />
        </GalleryPreview>
      </MantineProvider>
    </div>
  </>
));
