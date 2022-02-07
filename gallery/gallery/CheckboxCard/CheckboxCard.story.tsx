import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { CheckboxCard } from './CheckboxCard';

storiesOf('Gallery/CheckboxCard', module).add('CheckboxCard', () => (
  <GalleryStory attributes={attributes} component={CheckboxCard} />
));
