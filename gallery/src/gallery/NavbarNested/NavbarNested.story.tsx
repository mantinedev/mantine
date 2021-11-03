import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { NavbarNested } from './NavbarNested';

storiesOf('Gallery/NavbarNested', module).add('NavbarNested', () => (
  <GalleryStory attributes={attributes} component={NavbarNested} />
));
