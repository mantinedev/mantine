import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { ImageActionCard } from './ImageActionCard';

storiesOf('Gallery/ImageActionCard', module).add('ImageActionCard', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <ImageActionCard {...attributes.props} />
  </GalleryPreview>
));
