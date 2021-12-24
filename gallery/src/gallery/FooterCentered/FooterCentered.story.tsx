import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { FooterCentered } from './FooterCentered';

storiesOf('Gallery/FooterCentered', module).add('FooterCentered', () => (
  <GalleryStory attributes={attributes} component={FooterCentered} />
));
