import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { SliderWhite } from './SliderWhite';

storiesOf('Gallery/SliderWhite', module).add('SliderWhite', () => (
  <GalleryStory attributes={attributes} component={SliderWhite} />
));
