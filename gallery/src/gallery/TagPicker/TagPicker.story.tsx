import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { TagPicker } from './TagPicker';

storiesOf('Gallery/TagPicker', module).add('TagPicker', () => (
  <GalleryStory attributes={attributes} component={TagPicker} />
));
