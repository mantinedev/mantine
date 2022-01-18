import React from 'react';
import { Box } from '@mantine/core';
import { CanvasAttributes } from '../../data';

interface GalleryPreviewProps {
  children: React.ReactNode;
  canvas: CanvasAttributes['canvas'];
  withSpacing?: boolean;
}

export function GalleryPreview({ children, canvas, withSpacing = false }: GalleryPreviewProps) {
  return (
    <Box
      sx={{
        paddingTop: canvas?.maxWidth && withSpacing ? 40 : 0,
        maxWidth: canvas?.maxWidth || '100%',
        marginLeft: canvas?.center ? 'auto' : 'unset',
        marginRight: canvas?.center ? 'auto' : 'unset',
      }}
    >
      {children}
    </Box>
  );
}
