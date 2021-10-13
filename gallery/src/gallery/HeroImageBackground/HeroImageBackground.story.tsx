import React from 'react';
import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { GalleryPreview } from '../../components/Gallery/components/GalleryPreview/GalleryPreview';
import { HeroImageBackground } from './HeroImageBackground';

storiesOf('Gallery/HeroImageBackground', module).add('HeroImageBackground', () => (
  <>
    <GalleryPreview canvas={attributes.canvas} withSpacing>
      <HeroImageBackground />
    </GalleryPreview>
  </>
));
