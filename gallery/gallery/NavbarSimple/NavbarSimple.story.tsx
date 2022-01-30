import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { NavbarSimple } from './NavbarSimple';

storiesOf('Gallery/NavbarSimple', module).add('NavbarSimple', () => (
  <GalleryStory attributes={attributes} component={NavbarSimple} />
));
