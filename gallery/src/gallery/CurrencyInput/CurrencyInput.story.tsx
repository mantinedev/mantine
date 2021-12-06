import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { CurrencyInput } from './CurrencyInput';

storiesOf('Gallery/CurrencyInput', module).add('CurrencyInput', () => (
  <GalleryStory attributes={attributes} component={CurrencyInput} />
));
