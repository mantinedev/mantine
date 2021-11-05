import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { SliderFilled } from './SliderFilled';

storiesOf('Gallery/SliderFilled', module).add('SliderFilled', () => (
  <GalleryStory attributes={attributes} component={SliderFilled} />
));
