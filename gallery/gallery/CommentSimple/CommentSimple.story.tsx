import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { CommentSimple } from './CommentSimple';

storiesOf('Gallery/CommentSimple', module).add('CommentSimple', () => (
  <GalleryStory attributes={attributes} component={CommentSimple} />
));
