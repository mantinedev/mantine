import React from 'react';
import { storiesOf } from '@storybook/react';
import { upperFirst } from '@mantine/hooks';
import * as demos from '@mantine/core/src/demos';
import Demo from '../../docs/src/components/Demo/Demo';

const stories = storiesOf('Documentation demo', module);

Object.keys(demos).forEach((key) => {
  Object.keys(demos[key]).forEach((story) => {
    stories.add(`${key.replace('Demos', '')} – ${upperFirst(story)}`, () => (
      <Demo data={demos[key][story]} />
    ));
  });
});
