import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { TableSelection } from './TableSelection';

storiesOf('Gallery/TableSelection', module).add('TableSelection', () => (
  <GalleryStory attributes={attributes} component={TableSelection} />
));
