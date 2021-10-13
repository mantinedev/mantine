import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { ContactIcons } from './ContactIcons';

storiesOf('Gallery/ContactIcons', module).add('ContactIcons', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <ContactIcons />
  </GalleryPreview>
));
