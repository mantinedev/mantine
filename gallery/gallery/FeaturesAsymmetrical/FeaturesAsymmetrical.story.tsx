import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FeaturesAsymmetrical } from './FeaturesAsymmetrical';

storiesOf('Gallery/FeaturesAsymmetrical', module).add('FeaturesAsymmetrical', () => (
  <GalleryStory attributes={attributes} component={FeaturesAsymmetrical} />
));
