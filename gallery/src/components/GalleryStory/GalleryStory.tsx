import React from 'react';
import { GalleryPreview } from '../Gallery/components/GalleryPreview/GalleryPreview';
import { GalleryCanvasAttributes } from '../Gallery/types';

interface GalleryStoryProps {
  attributes: GalleryCanvasAttributes;
  component: React.FC<any>;
}

export function GalleryStory({ attributes, component: Component }: GalleryStoryProps) {
  return (
    <GalleryPreview canvas={attributes.canvas} withSpacing>
      <Component {...(attributes.props || null)} />
    </GalleryPreview>
  );
}
