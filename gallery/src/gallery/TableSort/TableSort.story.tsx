import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { TableSort } from './TableSort';

storiesOf('Gallery/TableSort', module).add('TableSort', () => (
  <GalleryStory attributes={attributes} component={TableSort} />
));
