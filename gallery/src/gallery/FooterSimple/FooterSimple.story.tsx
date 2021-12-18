import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FooterSimple } from './FooterSimple';

storiesOf('Gallery/FooterSimple', module).add('FooterSimple', () => (
  <GalleryStory attributes={attributes} component={FooterSimple} />
));
