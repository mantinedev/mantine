import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { SliderMarks } from './SliderMarks';

storiesOf('Gallery/SliderMarks', module).add('SliderMarks', () => (
  <GalleryStory attributes={attributes} component={SliderMarks} />
));
