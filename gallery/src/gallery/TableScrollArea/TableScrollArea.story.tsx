import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { TableScrollArea } from './TableScrollArea';

storiesOf('Gallery/TableScrollArea', module).add('TableScrollArea', () => (
  <GalleryStory attributes={attributes} component={TableScrollArea} />
));
