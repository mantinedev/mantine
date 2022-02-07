import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { NotFoundImage } from './NotFoundImage';

storiesOf('Gallery/NotFoundImage', module).add('NotFoundImage', () => (
  <GalleryStory attributes={attributes} component={NotFoundImage} />
));
