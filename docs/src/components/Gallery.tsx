import React from 'react';
import * as GalleryComponent from '../gallery';

export default function Gallery(props) {
  const Component = GalleryComponent[props.pageContext._component];
  return (
    <div>
      <Component />
    </div>
  );
}
