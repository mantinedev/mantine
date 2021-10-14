import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { InlineForm } from './InlineForm';

storiesOf('Gallery/InlineForm', module).add('InlineForm', () => (
  <GalleryStory attributes={attributes} component={InlineForm} />
));
