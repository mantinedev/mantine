/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { FullScreenDropzone } from './FullScreenDropzone';
import { DropzoneStatus } from '../Dropzone';
import { IMAGE_MIME_TYPE } from '../mime-types';

const children = (status: DropzoneStatus) =>
  status.accepted ? <div>Drop files here</div> : <div>Drag and drop files here</div>;

storiesOf('FullScreenDropzone', module).add('With other content', () => (
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
    <FullScreenDropzone onDrop={console.log} accept={IMAGE_MIME_TYPE}>
      {children}
    </FullScreenDropzone>
  </div>
));
