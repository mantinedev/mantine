import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ArticleCardFooter } from './ArticleCardFooter';

storiesOf('Gallery/ArticleCardFooter', module).add('ArticleCardFooter', () => (
  <GalleryStory attributes={attributes} component={ArticleCardFooter} />
));
