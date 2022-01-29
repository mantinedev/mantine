import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { StatsRingCard } from './StatsRingCard';

storiesOf('Gallery/StatsRingCard', module).add('StatsRingCard', () => (
  <GalleryStory attributes={attributes} component={StatsRingCard} />
));
