import React from 'react';

interface GalleryPageProps {
  children: React.ReactNode;
}

export function GalleryPage({ children }: GalleryPageProps) {
  return <div style={{ paddingTop: 22 }}>{children}</div>;
}
