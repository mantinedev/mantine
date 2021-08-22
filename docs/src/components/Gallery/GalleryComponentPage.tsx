import React from 'react';
import * as GalleryComponents from '../../gallery';
import { GalleryComponent } from './types';

interface GalleryComponentPageProps {
  pageContext: GalleryComponent;
}

export default function GalleryComponentPage({ pageContext }: GalleryComponentPageProps) {
  const Component = GalleryComponents[pageContext._component];
  return (
    <div style={{ paddingTop: 22 }}>
      <div
        style={{
          paddingTop: pageContext.attributes.canvas?.maxWidth ? 40 : 0,
          maxWidth: pageContext.attributes.canvas?.maxWidth || '100%',
          marginLeft: pageContext.attributes.canvas?.center ? 'auto' : 'unset',
          marginRight: pageContext.attributes.canvas?.center ? 'auto' : 'unset',
        }}
      >
        <Component />
      </div>
    </div>
  );
}
