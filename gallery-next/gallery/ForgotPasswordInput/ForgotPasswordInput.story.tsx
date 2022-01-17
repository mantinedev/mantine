import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ForgotPasswordInput } from './ForgotPasswordInput';

storiesOf('Gallery/ForgotPasswordInput', module).add('ForgotPasswordInput', () => (
  <GalleryStory attributes={attributes} component={ForgotPasswordInput} />
));
