import React from 'react';
import { ColorSwatch, ElementsGroup } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { ColorSwatch, ElementsGroup } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';

export function ColorSwatchDemo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.colors[color][6]} />
  ));

  return (
    <ElementsGroup position="center" spacing="xs">
      {swatches}
    </ElementsGroup>
  );
}`;

export function ColorSwatchBaseDemo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.colors[color][6]} />
  ));

  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center" spacing="xs">
        {swatches}
      </ElementsGroup>
    </CodeDemo>
  );
}
