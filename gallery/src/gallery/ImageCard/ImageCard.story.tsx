import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { ImageCard } from './ImageCard';

storiesOf('Gallery/ImageCard', module).add('ImageCard', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <ImageCard {...attributes.props} />
  </GalleryPreview>
));
