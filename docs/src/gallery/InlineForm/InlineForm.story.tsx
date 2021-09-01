import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { InlineForm } from './InlineForm';

storiesOf('Gallery/InlineForm', module).add('InlineForm', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <InlineForm />
  </GalleryPreview>
));
