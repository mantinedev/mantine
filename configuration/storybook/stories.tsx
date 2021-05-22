import React from 'react';
import { storiesOf } from '@storybook/react';
import * as demos from '@mantine/core/src/demos';
import Demo from '../../docs/src/components/Demo/Demo';

Object.keys(demos).forEach((key) => {
  const stories = storiesOf(key, module);
  Object.keys(demos[key]).forEach((story) => {
    stories.add(story, () => <Demo data={demos[key][story]} />);
  });
});
