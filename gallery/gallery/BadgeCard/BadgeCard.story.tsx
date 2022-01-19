import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { BadgeCard } from './BadgeCard';

storiesOf('Gallery/BadgeCard', module).add('BadgeCard', () => (
  <GalleryStory attributes={attributes} component={BadgeCard} />
));
