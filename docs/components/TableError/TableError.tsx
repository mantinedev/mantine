import React from 'react';
import { Text, Anchor } from '@mantine/core';

interface TableErrorProps {
  errorOf: string;
}

export function TableError({ errorOf }: TableErrorProps) {
  return (
    <Text>
      <Text span c="red">
        Error loading component {errorOf} data.{' '}
      </Text>
      If you see this message please let us know by{' '}
      <Anchor
        href="https://github.com/mantinedev/mantine/issues/new?assignees=&labels=&template=docs_report.yml"
        target="_blank"
      >
        opening an issue on GitHub
      </Anchor>
      .
    </Text>
  );
}
