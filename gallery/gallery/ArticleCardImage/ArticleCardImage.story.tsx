import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ArticleCardImage } from './ArticleCardImage';

storiesOf('Gallery/ArticleCardImage', module).add('ArticleCardImage', () => (
  <GalleryStory attributes={attributes} component={ArticleCardImage} />
));
