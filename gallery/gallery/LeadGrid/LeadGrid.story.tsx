import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { LeadGrid } from './LeadGrid';

storiesOf('Gallery/LeadGrid', module).add('LeadGrid', () => (
  <GalleryStory attributes={attributes} component={LeadGrid} />
));
