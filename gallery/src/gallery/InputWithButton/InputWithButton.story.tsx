import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { InputWithButton } from './InputWithButton';

storiesOf('Gallery/InputWithButton', module).add('InputWithButton', () => (
  <GalleryStory attributes={attributes} component={InputWithButton} />
));
