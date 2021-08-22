import React from 'react';
import * as GalleryComponents from '../../gallery';
import { GalleryPreview } from './components/GalleryPreview/GalleryPreview';
import { GalleryComponent } from './types';

interface GalleryComponentPageProps {
  pageContext: GalleryComponent;
}

export default function GalleryComponentPage({ pageContext }: GalleryComponentPageProps) {
  const Component = GalleryComponents[pageContext._component];
  return (
    <div style={{ paddingTop: 22 }}>
      <GalleryPreview canvas={pageContext.attributes.canvas} withSpacing>
        <Component {...pageContext.attributes.props} />
      </GalleryPreview>
    </div>
  );
}
