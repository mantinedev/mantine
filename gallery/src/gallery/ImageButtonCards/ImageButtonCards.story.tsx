import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ImageButtonCards } from './ImageButtonCards';

storiesOf('Gallery/ImageButtonCards', module).add('ImageButtonCards', () => (
  <GalleryStory attributes={attributes} component={ImageButtonCards} />
));
