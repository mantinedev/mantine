import { useState } from 'react';
import { Box, Button, ButtonProps, Collapse, CollapseProps, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Box, Button, ButtonProps, Collapse, CollapseProps, Text } from '@mantine/core';

interface CollapsedDemoProps extends Partial<CollapseProps> {
  buttonProps: ButtonProps & { children: React.ReactNode };
}

function CollapsedDemo({ children, buttonProps, ...others }: CollapsedDemoProps) {
  const [opened, setOpened] = useState(false);

  return (
    <Box maw={400} mx="auto" mt="md">
      <Button onClick={() => setOpened((o) => !o)} mb={5} {...buttonProps} />
      <Collapse expanded={opened} {...others}>
        {children}
      </Collapse>
    </Box>
  );
}

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea atque in est quaerat dolore odio! Quibusdam, a nihil modi, maiores consequuntur ex quod suscipit illum ducimus doloribus odit commodi tenetur.';

function Demo() {
  return (
    <CollapsedDemo buttonProps={{ children: 'Root collapse' }}>
      <Text mt="md" size="lg" fw={700}>
        This collapse contains another collapse
      </Text>
      <Text mt="xs">{lorem}</Text>
      <CollapsedDemo buttonProps={{ variant: 'default', children: 'Inner collapse' }}>
        <Text mt="md" size="lg" fw={700}>
          This collapse is inside another collapse
        </Text>
        <Text mt="xs">{lorem}</Text>
      </CollapsedDemo>
    </CollapsedDemo>
  );
}
`;

interface CollapsedDemoProps extends Partial<CollapseProps> {
  buttonProps: ButtonProps & { children: React.ReactNode };
}

function CollapsedDemo({ children, buttonProps, ...others }: CollapsedDemoProps) {
  const [opened, setOpened] = useState(false);

  return (
    <Box maw={400} mx="auto" mt="md">
      <Button onClick={() => setOpened((o) => !o)} mb={5} {...buttonProps} />
      <Collapse expanded={opened} {...others}>
        {children}
      </Collapse>
    </Box>
  );
}

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea atque in est quaerat dolore odio! Quibusdam, a nihil modi, maiores consequuntur ex quod suscipit illum ducimus doloribus odit commodi tenetur.';

function Demo() {
  return (
    <CollapsedDemo buttonProps={{ children: 'Root collapse' }}>
      <Text mt="md" size="lg" fw={700}>
        This collapse contains another collapse
      </Text>
      <Text mt="xs">{lorem}</Text>
      <CollapsedDemo buttonProps={{ variant: 'default', children: 'Inner collapse' }}>
        <Text mt="md" size="lg" fw={700}>
          This collapse is inside another collapse
        </Text>
        <Text mt="xs">{lorem}</Text>
      </CollapsedDemo>
    </CollapsedDemo>
  );
}

export const nested: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
