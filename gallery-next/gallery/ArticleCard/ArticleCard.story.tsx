import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { ArticleCard } from './ArticleCard';

storiesOf('Gallery/ArticleCard', module).add('ArticleCard', () => (
  <GalleryStory attributes={attributes} component={ArticleCard} />
));
