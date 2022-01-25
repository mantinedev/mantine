import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ServerOverload } from './ServerOverload';

storiesOf('Gallery/ServerOverload', module).add('ServerOverload', () => (
  <GalleryStory attributes={attributes} component={ServerOverload} />
));
