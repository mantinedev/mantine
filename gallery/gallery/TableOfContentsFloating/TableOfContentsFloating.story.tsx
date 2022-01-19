import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { TableOfContentsFloating } from './TableOfContentsFloating';

storiesOf('Gallery/TableOfContentsFloating', module).add('TableOfContentsFloating', () => (
  <GalleryStory attributes={attributes} component={TableOfContentsFloating} />
));
