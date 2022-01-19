import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { StatsGrid } from './StatsGrid';

storiesOf('Gallery/StatsGrid', module).add('StatsGrid', () => (
  <GalleryStory attributes={attributes} component={StatsGrid} />
));
