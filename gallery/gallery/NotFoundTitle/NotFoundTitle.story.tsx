import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { NotFoundTitle } from './NotFoundTitle';

storiesOf('Gallery/NotFoundTitle', module).add('NotFoundTitle', () => (
  <GalleryStory attributes={attributes} component={NotFoundTitle} />
));
