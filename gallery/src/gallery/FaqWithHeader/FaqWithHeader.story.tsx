import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/core';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { FaqWithHeader } from './FaqWithHeader';

storiesOf('Gallery/FaqWithHeader', module).add('FaqWithHeader', () => (
  <>
    <GalleryPreview canvas={attributes.canvas} withSpacing>
      <FaqWithHeader />
    </GalleryPreview>
    <div
      style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], paddingBottom: 40, marginTop: 40 }}
    >
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <GalleryPreview canvas={attributes.canvas} withSpacing>
          <FaqWithHeader />
        </GalleryPreview>
      </MantineProvider>
    </div>
  </>
));
