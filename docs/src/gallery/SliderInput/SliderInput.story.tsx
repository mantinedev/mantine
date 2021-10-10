import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { SliderInput } from './SliderInput';

storiesOf('Gallery/SliderInput', module).add('SliderInput', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <SliderInput />
  </GalleryPreview>
));
