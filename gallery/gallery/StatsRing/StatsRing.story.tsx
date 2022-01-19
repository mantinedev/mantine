import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { StatsRing } from './StatsRing';

storiesOf('Gallery/StatsRing', module).add('StatsRing', () => (
  <GalleryStory attributes={attributes} component={StatsRing} />
));
