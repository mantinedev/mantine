/* eslint-disable no-console */
import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { dropzoneChildren } from '../../Dropzone/demos/_base';
import { FullScreenDropzone } from '../FullScreenDropzone';
import { IMAGE_MIME_TYPE } from '../../mime-types';

const code = `
import { useState } from 'react';
import { Button } from '@mantine/core';
import { FullScreenDropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function Demo() {
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <Button color={disabled ? 'blue' : 'red'} onClick={() => setDisabled((d) => !d)}>
        {disabled ? 'Enable' : 'Disable'} full screen dropzone
      </Button>

      <FullScreenDropzone
        disabled={disabled}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          console.log(files);
          setDisabled(true);
        }}
      >
        {/* See dropzone children in previous demo */}
      </FullScreenDropzone>
    </>
  );
}
`;

function Demo() {
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <Button color={disabled ? 'blue' : 'red'} onClick={() => setDisabled((d) => !d)}>
        {disabled ? 'Enable' : 'Disable'} full screen dropzone
      </Button>

      <FullScreenDropzone
        disabled={disabled}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          console.log(files);
          setDisabled(true);
        }}
      >
        {dropzoneChildren}
      </FullScreenDropzone>
    </>
  );
}

export const fullScreen: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
