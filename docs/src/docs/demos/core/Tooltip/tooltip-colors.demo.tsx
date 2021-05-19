import React from 'react';
import { Tooltip, Button, Group, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Tooltip, Button, Group, useMantineTheme } from '@mantine/core';

function Demo() {
  const colors = Object.keys(useMantineTheme().colors)
  .filter((color) => color !== 'dark')
  .map((color) => (
    <Tooltip data-mantine-composable key={color} color={color} label={color} withArrow>
      <Button variant="outline" color={color}>
        {color}
      </Button>
    </Tooltip>
  ));

  return <Group position="center">{colors}</Group>;
}`;

export function TooltipColorsDemo() {
  const colors = Object.keys(useMantineTheme().colors)
    .filter((color) => color !== 'dark')
    .map((color) => (
      <Tooltip data-mantine-composable key={color} color={color} label={color} withArrow>
        <Button variant="outline" color={color}>
          {color}
        </Button>
      </Tooltip>
    ));

  return (
    <CodeDemo code={code} toggle language="tsx">
      <Group position="center">{colors}</Group>
    </CodeDemo>
  );
}
