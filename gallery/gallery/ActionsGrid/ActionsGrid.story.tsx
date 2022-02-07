import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ActionsGrid } from './ActionsGrid';

storiesOf('Gallery/ActionsGrid', module).add('ActionsGrid', () => (
  <GalleryStory attributes={attributes} component={ActionsGrid} />
));
