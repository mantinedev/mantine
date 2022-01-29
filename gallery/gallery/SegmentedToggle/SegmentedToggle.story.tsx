import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { SegmentedToggle } from './SegmentedToggle';

storiesOf('Gallery/SegmentedToggle', module).add('SegmentedToggle', () => (
  <GalleryStory attributes={attributes} component={SegmentedToggle} />
));
