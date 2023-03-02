import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { FileButton, Button, Group, Text, List } from '@mantine/core';

const code = `
import { useState } from 'react';
import { FileButton, Button, Group, Text, List } from '@mantine/core';

function Demo() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <>
      <Group position="center">
        <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <List size="sm" mt={5} withPadding>
        {files.map((file, index) => (
          <List.Item key={index}>{file.name}</List.Item>
        ))}
      </List>
    </>
  );
}

`;

function Demo() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <>
      <Group position="center">
        <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <List size="sm" mt={5} withPadding>
        {files.map((file, index) => (
          <List.Item key={index}>{file.name}</List.Item>
        ))}
      </List>
    </>
  );
}

export const multiple: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
