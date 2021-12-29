import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { StatsGroup } from './StatsGroup';

storiesOf('Gallery/StatsGroup', module).add('StatsGroup', () => (
  <GalleryStory attributes={attributes} component={StatsGroup} />
));
