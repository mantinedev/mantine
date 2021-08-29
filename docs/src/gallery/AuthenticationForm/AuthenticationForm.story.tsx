import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineProvider } from '@mantine/core';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { AuthenticationForm } from './AuthenticationForm';

storiesOf('Gallery/AuthenticationForm', module).add('AuthenticationForm', () => (
  <>
    <GalleryPreview canvas={attributes.canvas} withSpacing>
      <AuthenticationForm />
    </GalleryPreview>
    <div
      style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], paddingBottom: 40, marginTop: 40 }}
    >
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <GalleryPreview canvas={attributes.canvas} withSpacing>
          <AuthenticationForm />
        </GalleryPreview>
      </MantineProvider>
    </div>
  </>
));
