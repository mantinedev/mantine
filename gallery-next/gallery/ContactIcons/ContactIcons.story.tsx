import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ContactIcons } from './ContactIcons';

storiesOf('Gallery/ContactIcons', module).add('ContactIcons', () => (
  <GalleryStory attributes={attributes} component={ContactIcons} />
));
