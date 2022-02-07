import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeroText } from './HeroText';

storiesOf('Gallery/HeroText', module).add('HeroText', () => (
  <GalleryStory attributes={attributes} component={HeroText} />
));
