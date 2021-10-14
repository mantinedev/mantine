import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { SliderInput } from './SliderInput';

storiesOf('Gallery/SliderInput', module).add('SliderInput', () => (
  <GalleryStory attributes={attributes} component={SliderInput} />
));
