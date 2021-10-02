import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { ImageButtonCards } from './ImageButtonCards';

storiesOf('Gallery/ImageButtonCards', module).add('ImageButtonCards', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <ImageButtonCards />
  </GalleryPreview>
));
