import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';
import { ExternalLinkIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

export function ButtonRootDemo() {
  return (
    <CodeDemo>
      <ElementsGroup position="center">
        <Button color="red">Delete</Button>
        <Button variant="outline" rightIcon={<ExternalLinkIcon />}>
          Open in new tab
        </Button>
        <Button variant="link" color="gray">
          Barely visible
        </Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
