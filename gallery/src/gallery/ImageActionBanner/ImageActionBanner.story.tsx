import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ImageActionBanner } from './ImageActionBanner';

storiesOf('Gallery/ImageActionBanner', module).add('ImageActionBanner', () => (
  <GalleryStory attributes={attributes} component={ImageActionBanner} />
));
