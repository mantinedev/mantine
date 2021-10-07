/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { FullScreenDropzone } from './FullScreenDropzone';

const children = (isDragging: boolean) =>
  isDragging ? <div>Drop files here</div> : <div>Drag and drop files here</div>;

storiesOf('@mantine/dropzone/FullScreenDropzone', module).add('General usage', () => (
  <div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dolores expedita
      accusamus aperiam dolorem veniam maxime alias distinctio ullam magnam aspernatur nam delectus,
      dolorum sapiente ea aliquid sunt, molestias quam.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dolores expedita
      accusamus aperiam dolorem veniam maxime alias distinctio ullam magnam aspernatur nam delectus,
      dolorum sapiente ea aliquid sunt, molestias quam.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dolores expedita
      accusamus aperiam dolorem veniam maxime alias distinctio ullam magnam aspernatur nam delectus,
      dolorum sapiente ea aliquid sunt, molestias quam.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dolores expedita
      accusamus aperiam dolorem veniam maxime alias distinctio ullam magnam aspernatur nam delectus,
      dolorum sapiente ea aliquid sunt, molestias quam.
    </p>
    <FullScreenDropzone onDrop={console.log}>{children}</FullScreenDropzone>
  </div>
));
