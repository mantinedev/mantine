import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryStory } from '../../components/GalleryStory/GalleryStory';
import { QuantityInput } from './QuantityInput';

storiesOf('Gallery/QuantityInput', module).add('QuantityInput', () => (
  <GalleryStory attributes={attributes} component={QuantityInput} />
));
