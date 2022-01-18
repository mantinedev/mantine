import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeroBullets } from './HeroBullets';

storiesOf('Gallery/HeroBullets', module).add('HeroBullets', () => (
  <GalleryStory attributes={attributes} component={HeroBullets} />
));
