import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { DndList } from './DndList';

storiesOf('Gallery/DndList', module).add('DndList', () => (
  <GalleryStory attributes={attributes} component={DndList} />
));
