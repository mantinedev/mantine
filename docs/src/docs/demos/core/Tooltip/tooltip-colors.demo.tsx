import React from 'react';
import { Tooltip, Button, ElementsGroup, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Tooltip, Button, ElementsGroup, useMantineTheme } from '@mantine/core';

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
  
  return <ElementsGroup position="center">{colors}</ElementsGroup>;
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
      <ElementsGroup position="center">{colors}</ElementsGroup>
    </CodeDemo>
  );
}
