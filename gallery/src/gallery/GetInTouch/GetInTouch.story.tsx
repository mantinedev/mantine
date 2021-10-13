import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { GetInTouch } from './GetInTouch';

storiesOf('Gallery/GetInTouch', module).add('GetInTouch', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <GetInTouch />
  </GalleryPreview>
));
