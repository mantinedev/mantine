import React from 'react';
import { StylesAPIStory } from '@mantine/storybook';
import { AspectRatio } from './AspectRatio';

export default {
  title: 'AspectRatio',
};

export function StylesApi() {
  return (
    <StylesAPIStory
      component={AspectRatio}
      name="AspectRatio"
      props={{
        children: <div>Aspect ratio</div>,
        ratio: 16 / 9,
      }}
    />
  );
}
