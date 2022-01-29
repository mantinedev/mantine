import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { NavbarSimpleColored } from './NavbarSimpleColored';

storiesOf('Gallery/NavbarSimpleColored', module).add('NavbarSimpleColored', () => (
  <GalleryStory attributes={attributes} component={NavbarSimpleColored} />
));
