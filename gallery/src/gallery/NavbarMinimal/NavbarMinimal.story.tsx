import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { NavbarMinimal } from './NavbarMinimal';

storiesOf('Gallery/NavbarMinimal', module).add('NavbarMinimal', () => (
  <GalleryStory attributes={attributes} component={NavbarMinimal} />
));
