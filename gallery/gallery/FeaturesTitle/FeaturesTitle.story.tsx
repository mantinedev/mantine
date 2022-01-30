import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FeaturesTitle } from './FeaturesTitle';

storiesOf('Gallery/FeaturesTitle', module).add('FeaturesTitle', () => (
  <GalleryStory attributes={attributes} component={FeaturesTitle} />
));
