import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ArticleCardVertical } from './ArticleCardVertical';

storiesOf('Gallery/ArticleCardVertical', module).add('ArticleCardVertical', () => (
  <GalleryStory attributes={attributes} component={ArticleCardVertical} />
));
