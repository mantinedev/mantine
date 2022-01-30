import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FloatingLabelInput } from './FloatingLabelInput';

storiesOf('Gallery/FloatingLabelInput', module).add('FloatingLabelInput', () => (
  <GalleryStory attributes={attributes} component={FloatingLabelInput} />
));
