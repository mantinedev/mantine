import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { DndListHandle } from './DndListHandle';

storiesOf('Gallery/DndListHandle', module).add('DndListHandle', () => (
  <GalleryStory attributes={attributes} component={DndListHandle} />
));
