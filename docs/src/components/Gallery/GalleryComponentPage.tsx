import React from 'react';
import * as GalleryComponent from '../../gallery';

export default function GalleryComponentPage(props) {
  const Component = GalleryComponent[props.pageContext._component];
  console.log(props.pageContext);
  return (
    <div>
      <Component />
    </div>
  );
}
