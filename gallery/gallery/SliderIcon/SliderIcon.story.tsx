import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { SliderIcon } from './SliderIcon';

storiesOf('Gallery/SliderIcon', module).add('SliderIcon', () => (
  <GalleryStory attributes={attributes} component={SliderIcon} />
));
