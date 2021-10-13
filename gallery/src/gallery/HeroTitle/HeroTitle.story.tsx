import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { HeroTitle } from './HeroTitle';

storiesOf('Gallery/HeroTitle', module).add('HeroTitle', () => (
  <GalleryPreview canvas={attributes.canvas} withSpacing>
    <HeroTitle />
  </GalleryPreview>
));
