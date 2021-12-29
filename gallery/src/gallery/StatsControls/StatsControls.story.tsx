import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { StatsControls } from './StatsControls';

storiesOf('Gallery/StatsControls', module).add('StatsControls', () => (
  <GalleryStory attributes={attributes} component={StatsControls} />
));
