import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ImageActionCard } from './ImageActionCard';

storiesOf('Gallery/ImageActionCard', module).add('ImageActionCard', () => (
  <GalleryStory attributes={attributes} component={ImageActionCard} />
));
