import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FaqWithImage } from './FaqWithImage';

storiesOf('Gallery/FaqWithImage', module).add('FaqWithImage', () => (
  <GalleryStory attributes={attributes} component={FaqWithImage} />
));
