import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeroContentLeft } from './HeroContentLeft';

storiesOf('Gallery/HeroContentLeft', module).add('HeroContentLeft', () => (
  <GalleryStory attributes={attributes} component={HeroContentLeft} />
));
