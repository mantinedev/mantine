import React from 'react';
import { GalleryCanvasAttributes } from '../../types';

interface GalleryPreviewProps {
  children: React.ReactNode;
  canvas: GalleryCanvasAttributes['canvas'];
  withSpacing?: boolean;
}

export function GalleryPreview({ children, canvas, withSpacing = false }: GalleryPreviewProps) {
  return (
    <div
      style={{
        paddingTop: canvas?.maxWidth && withSpacing ? 40 : 0,
        maxWidth: canvas?.maxWidth || '100%',
        marginLeft: canvas?.center ? 'auto' : 'unset',
        marginRight: canvas?.center ? 'auto' : 'unset',
      }}
    >
      {children}
    </div>
  );
}
