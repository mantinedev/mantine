import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { NavbarMinimalColored } from './NavbarMinimalColored';

storiesOf('Gallery/NavbarMinimalColored', module).add('NavbarMinimalColored', () => (
  <GalleryStory attributes={attributes} component={NavbarMinimalColored} />
));
