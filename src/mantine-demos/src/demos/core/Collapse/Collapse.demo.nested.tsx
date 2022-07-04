import React, { useState } from 'react';
import { Button, Text, Collapse, CollapseProps } from '@mantine/core';

export function CollapsedDemo({
  children,
  buttonProps,
  ...others
}: Partial<CollapseProps> & { buttonProps?: any }) {
  const [opened, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto', marginTop: 15 }}>
      <Button onClick={() => setOpen((o) => !o)} mb={5} {...buttonProps} />
      <Collapse in={opened} {...others}>
        {children}
      </Collapse>
    </div>
  );
}

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea atque in est quaerat dolore odio! Quibusdam, a nihil modi, maiores consequuntur ex quod suscipit illum ducimus doloribus odit commodi tenetur.';

function Demo() {
  return (
    <CollapsedDemo buttonProps={{ children: 'Root collapse' }}>
      <Text mt="md" size="lg" weight={700}>
        This collapse contains another collapse
      </Text>
      <Text mt="xs">{lorem}</Text>
      <CollapsedDemo buttonProps={{ variant: 'outline', children: 'Inner collapse' }}>
        <Text mt="md" size="lg" weight={700}>
          This collapse is inside another collapse
        </Text>
        <Text mt="xs">{lorem}</Text>
      </CollapsedDemo>
    </CollapsedDemo>
  );
}

export const nested: MantineDemo = {
  type: 'demo',
  component: Demo,
};
