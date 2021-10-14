import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeroTitle } from './HeroTitle';

storiesOf('Gallery/HeroTitle', module).add('HeroTitle', () => (
  <GalleryStory attributes={attributes} component={HeroTitle} />
));
