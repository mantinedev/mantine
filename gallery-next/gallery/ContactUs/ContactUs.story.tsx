import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ContactUs } from './ContactUs';

storiesOf('Gallery/ContactUs', module).add('ContactUs', () => (
  <GalleryStory attributes={attributes} component={ContactUs} />
));
