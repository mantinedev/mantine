import React from 'react';
import { Button } from '../Button';
import { CopyButton } from './CopyButton';

export default { title: 'CopyButton' };

export function Usage() {
  return (
    <CopyButton value="mantine.dev" timeout={100}>
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied to clipboard' : 'Copy to clipboard'}
        </Button>
      )}
    </CopyButton>
  );
}
