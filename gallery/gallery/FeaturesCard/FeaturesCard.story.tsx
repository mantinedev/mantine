import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FeaturesCard } from './FeaturesCard';

storiesOf('Gallery/FeaturesCard', module).add('FeaturesCard', () => (
  <GalleryStory attributes={attributes} component={FeaturesCard} />
));
