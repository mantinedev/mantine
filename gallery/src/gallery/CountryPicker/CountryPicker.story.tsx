import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { CountryPicker } from './CountryPicker';

storiesOf('Gallery/CountryPicker', module).add('CountryPicker', () => (
  <GalleryStory attributes={attributes} component={CountryPicker} />
));
