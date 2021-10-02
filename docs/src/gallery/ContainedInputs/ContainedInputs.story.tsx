import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { ContainedInputs } from './ContainedInputs';

storiesOf('Gallery/ContainedInputs', module).add('ContainedInputs', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <ContainedInputs />
  </GalleryPreview>
));
