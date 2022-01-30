import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeroImageRight } from './HeroImageRight';

storiesOf('Gallery/HeroImageRight', module).add('HeroImageRight', () => (
  <GalleryStory attributes={attributes} component={HeroImageRight} />
));
