import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { DoubleNavbar } from './DoubleNavbar';

storiesOf('Gallery/DoubleNavbar', module).add('DoubleNavbar', () => (
  <GalleryStory attributes={attributes} component={DoubleNavbar} />
));
