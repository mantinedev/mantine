/* eslint-disable no-console */
import React from 'react';
import { Button } from '../Button';
import { FileButton } from './FileButton';

export default { title: 'FileButton' };

export function Usage() {
  return (
    <FileButton accept="image/jpeg,image/png" onChange={(file) => console.log(file)}>
      {(props) => <Button {...props}>Upload files</Button>}
    </FileButton>
  );
}

export function Multiple() {
  return (
    <FileButton multiple onChange={(files) => console.log(files)}>
      {(props) => <Button {...props}>Upload files</Button>}
    </FileButton>
  );
}
