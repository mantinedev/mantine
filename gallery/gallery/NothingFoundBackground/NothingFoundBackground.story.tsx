import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { NothingFoundBackground } from './NothingFoundBackground';

storiesOf('Gallery/NothingFoundBackground', module).add('NothingFoundBackground', () => (
  <GalleryStory attributes={attributes} component={NothingFoundBackground} />
));
