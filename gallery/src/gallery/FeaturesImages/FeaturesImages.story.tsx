import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FeaturesImages } from './FeaturesImages';

storiesOf('Gallery/FeaturesImages', module).add('FeaturesImages', () => (
  <GalleryStory attributes={attributes} component={FeaturesImages} />
));
