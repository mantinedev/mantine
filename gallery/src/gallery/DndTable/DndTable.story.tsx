import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { DndTable } from './DndTable';

storiesOf('Gallery/DndTable', module).add('DndTable', () => (
  <GalleryStory attributes={attributes} component={DndTable} />
));
