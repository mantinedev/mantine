import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FooterLinks } from './FooterLinks';

storiesOf('Gallery/FooterLinks', module).add('FooterLinks', () => (
  <GalleryStory attributes={attributes} component={FooterLinks} />
));
