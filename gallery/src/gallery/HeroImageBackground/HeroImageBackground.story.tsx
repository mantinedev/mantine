import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeroImageBackground } from './HeroImageBackground';

storiesOf('Gallery/HeroImageBackground', module).add('HeroImageBackground', () => (
  <GalleryStory attributes={attributes} component={HeroImageBackground} />
));
