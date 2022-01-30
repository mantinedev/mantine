import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { StatsCard } from './StatsCard';

storiesOf('Gallery/StatsCard', module).add('StatsCard', () => (
  <GalleryStory attributes={attributes} component={StatsCard} />
));
