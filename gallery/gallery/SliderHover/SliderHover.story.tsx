import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { SliderHover } from './SliderHover';

storiesOf('Gallery/SliderHover', module).add('SliderHover', () => (
  <GalleryStory attributes={attributes} component={SliderHover} />
));
