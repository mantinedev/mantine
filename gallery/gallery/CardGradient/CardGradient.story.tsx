import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { CardGradient } from './CardGradient';

storiesOf('Gallery/CardGradient', module).add('CardGradient', () => (
  <GalleryStory attributes={attributes} component={CardGradient} />
));
