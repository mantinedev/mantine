import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ServerError } from './ServerError';

storiesOf('Gallery/ServerError', module).add('ServerError', () => (
  <GalleryStory attributes={attributes} component={ServerError} />
));
