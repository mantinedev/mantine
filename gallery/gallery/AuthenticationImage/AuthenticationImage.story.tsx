import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { AuthenticationImage } from './AuthenticationImage';

storiesOf('Gallery/AuthenticationImage', module).add('AuthenticationImage', () => (
  <GalleryStory attributes={attributes} component={AuthenticationImage} />
));
