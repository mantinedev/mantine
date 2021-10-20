import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeroForm } from './HeroForm';

storiesOf('Gallery/HeroForm', module).add('HeroForm', () => (
  <GalleryStory attributes={attributes} component={HeroForm} />
));
