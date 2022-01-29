import React from 'react';
import { GalleryPreview } from '../GalleryPreview/GalleryPreview';
import { CanvasAttributes } from '../../data';

interface GalleryStoryProps {
  attributes: CanvasAttributes;
  component: React.FC<any>;
}

export function GalleryStory({ attributes, component: Component }: GalleryStoryProps) {
  return (
    <GalleryPreview canvas={attributes.canvas} withSpacing>
      <Component {...(attributes.props || null)} />
    </GalleryPreview>
  );
}
