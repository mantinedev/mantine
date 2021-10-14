import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ImageCard } from './ImageCard';

storiesOf('Gallery/ImageCard', module).add('ImageCard', () => (
  <GalleryStory attributes={attributes} component={ImageCard} />
));
