import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { CountriesSelect } from './CountriesSelect';

storiesOf('Gallery/CountriesSelect', module).add('CountriesSelect', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <CountriesSelect />
  </GalleryPreview>
));
