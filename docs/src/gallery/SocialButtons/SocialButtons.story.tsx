import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { SocialButtons } from './SocialButtons';

storiesOf('Gallery/SocialButtons', module).add('SocialButtons', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <SocialButtons />
  </GalleryPreview>
));
