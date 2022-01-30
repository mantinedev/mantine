import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { HeaderSearch } from './HeaderSearch';

storiesOf('Gallery/HeaderSearch', module).add('HeaderSearch', () => (
  <GalleryStory attributes={attributes} component={HeaderSearch} />
));
