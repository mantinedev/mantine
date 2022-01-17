import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { AuthenticationForm } from './AuthenticationForm';

storiesOf('Gallery/AuthenticationForm', module).add('AuthenticationForm', () => (
  <GalleryStory attributes={attributes} component={AuthenticationForm} />
));
