import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { FaqWithBg } from './FaqWithBg';

storiesOf('Gallery/FaqWithBg', module).add('FaqWithBg', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <FaqWithBg />
  </GalleryPreview>
));
