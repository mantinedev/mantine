import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { NavbarSegmented } from './NavbarSegmented';

storiesOf('Gallery/NavbarSegmented', module).add('NavbarSegmented', () => (
  <GalleryStory attributes={attributes} component={NavbarSegmented} />
));
