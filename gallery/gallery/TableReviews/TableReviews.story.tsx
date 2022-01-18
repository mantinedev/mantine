import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { TableReviews } from './TableReviews';

storiesOf('Gallery/TableReviews', module).add('TableReviews', () => (
  <GalleryStory attributes={attributes} component={TableReviews} />
));
