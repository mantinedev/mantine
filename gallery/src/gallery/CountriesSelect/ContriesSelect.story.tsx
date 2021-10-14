import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { CountriesSelect } from './CountriesSelect';

storiesOf('Gallery/CountriesSelect', module).add('CountriesSelect', () => (
  <GalleryStory attributes={attributes} component={CountriesSelect} />
));
