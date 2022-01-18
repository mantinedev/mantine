import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ButtonProgress } from './ButtonProgress';

storiesOf('Gallery/ButtonProgress', module).add('ButtonProgress', () => (
  <GalleryStory attributes={attributes} component={ButtonProgress} />
));
