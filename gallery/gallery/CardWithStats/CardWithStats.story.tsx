import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { CardWithStats } from './CardWithStats';

storiesOf('Gallery/CardWithStats', module).add('CardWithStats', () => (
  <GalleryStory attributes={attributes} component={CardWithStats} />
));
