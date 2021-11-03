import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ContainedInputs } from './ContainedInputs';

storiesOf('Gallery/ContainedInputs', module).add('ContainedInputs', () => (
  <GalleryStory attributes={attributes} component={ContainedInputs} />
));
