import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { StatsSegments } from './StatsSegments';

storiesOf('Gallery/StatsSegments', module).add('StatsSegments', () => (
  <GalleryStory attributes={attributes} component={StatsSegments} />
));
