import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { SliderLabel } from './SliderLabel';

storiesOf('Gallery/SliderLabel', module).add('SliderLabel', () => (
  <GalleryStory attributes={attributes} component={SliderLabel} />
));
