import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FeaturesGrid } from './FeaturesGrid';

storiesOf('Gallery/FeaturesGrid', module).add('FeaturesGrid', () => (
  <GalleryStory attributes={attributes} component={FeaturesGrid} />
));
