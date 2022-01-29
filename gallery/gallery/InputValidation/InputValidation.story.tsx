import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { InputValidation } from './InputValidation';

storiesOf('Gallery/InputValidation', module).add('InputValidation', () => (
  <GalleryStory attributes={attributes} component={InputValidation} />
));
