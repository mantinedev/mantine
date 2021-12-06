import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ImageBanner } from './ImageBanner';

storiesOf('Gallery/ImageBanner', module).add('ImageBanner', () => (
  <GalleryStory attributes={attributes} component={ImageBanner} />
));
