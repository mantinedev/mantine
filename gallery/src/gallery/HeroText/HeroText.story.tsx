import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineProvider } from '@mantine/core';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { HeroText } from './HeroText';

storiesOf('Gallery/HeroText', module).add('HeroText', () => (
  <>
    <GalleryPreview canvas={attributes.canvas} withSpacing>
      <HeroText />
    </GalleryPreview>
    <div
      style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], paddingBottom: 40, marginTop: 40 }}
    >
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <GalleryPreview canvas={attributes.canvas} withSpacing>
          <HeroText />
        </GalleryPreview>
      </MantineProvider>
    </div>
  </>
));
