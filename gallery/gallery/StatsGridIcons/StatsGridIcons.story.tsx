import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { StatsGridIcons } from './StatsGridIcons';

storiesOf('Gallery/StatsGridIcons', module).add('StatsGridIcons', () => (
  <GalleryStory attributes={attributes} component={StatsGridIcons} />
));
