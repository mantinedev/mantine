import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { InputWithButton } from './InputWithButton';

storiesOf('Gallery/InputWithButton', module).add('InputWithButton', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <InputWithButton />
  </GalleryPreview>
));
