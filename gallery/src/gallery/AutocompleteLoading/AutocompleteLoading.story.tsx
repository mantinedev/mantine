import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { AutocompleteLoading } from './AutocompleteLoading';

storiesOf('Gallery/AutocompleteLoading', module).add('AutocompleteLoading', () => (
  <GalleryStory attributes={attributes} component={AutocompleteLoading} />
));
