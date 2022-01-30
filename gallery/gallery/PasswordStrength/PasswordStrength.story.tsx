import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { PasswordStrength } from './PasswordStrength';

storiesOf('Gallery/PasswordStrength', module).add('PasswordStrength', () => (
  <GalleryStory attributes={attributes} component={PasswordStrength} />
));
