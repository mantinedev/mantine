import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { TableOfContents } from './TableOfContents';

storiesOf('Gallery/TableOfContents', module).add('TableOfContents', () => (
  <GalleryStory attributes={attributes} component={TableOfContents} />
));
