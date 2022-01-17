import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { NavbarSearch } from './NavbarSearch';

storiesOf('Gallery/NavbarSearch', module).add('NavbarSearch', () => (
  <GalleryStory attributes={attributes} component={NavbarSearch} />
));
