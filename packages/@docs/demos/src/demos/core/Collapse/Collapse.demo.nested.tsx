import { useState } from 'react';
import { Box, Button, Collapse, CollapseProps, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

export function CollapsedDemo({
  children,
  buttonProps,
  ...others
}: Partial<CollapseProps> & { buttonProps?: any }) {
  const [opened, setOpened] = useState(false);

  return (
    <Box maw={400} mx="auto" mt="md">
      <Button onClick={() => setOpened((o) => !o)} mb={5} {...buttonProps} />
      <Collapse in={opened} {...others}>
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
      <CollapsedDemo buttonProps={{ variant: 'outline', children: 'Inner collapse' }}>
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
};
