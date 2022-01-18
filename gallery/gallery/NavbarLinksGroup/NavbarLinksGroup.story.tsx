import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { NavbarLinksGroup } from './NavbarLinksGroup';

storiesOf('Gallery/NavbarLinksGroup', module).add('NavbarLinksGroup', () => (
  <GalleryStory attributes={attributes} component={NavbarLinksGroup} />
));
