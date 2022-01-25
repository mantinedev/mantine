import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { CommentHtml } from './CommentHtml';

storiesOf('Gallery/CommentHtml', module).add('CommentHtml', () => (
  <GalleryStory attributes={attributes} component={CommentHtml} />
));
