import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineProvider } from '@mantine/core';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { FeaturesGrid } from './FeaturesGrid';

storiesOf('Gallery/FeaturesGrid', module).add('FeaturesGrid', () => (
  <>
    <GalleryPreview canvas={attributes.canvas} withSpacing>
      <FeaturesGrid {...attributes.props} />
    </GalleryPreview>
    <div
      style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], paddingBottom: 40, marginTop: 40 }}
    >
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <GalleryPreview canvas={attributes.canvas} withSpacing>
          <FeaturesGrid {...attributes.props} />
        </GalleryPreview>
      </MantineProvider>
    </div>
  </>
));
