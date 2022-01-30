import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FooterSocial } from './FooterSocial';

storiesOf('Gallery/FooterSocial', module).add('FooterSocial', () => (
  <GalleryStory attributes={attributes} component={FooterSocial} />
));
