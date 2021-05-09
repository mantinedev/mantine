import React from 'react';
import { ColorSwatch, Group, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { ColorSwatch, Group, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const swatches = [0, 'xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <ColorSwatch key={size} radius={size} color={theme.colors.blue[6]} size={40} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}`;

export function ColorSwatchRadiusDemo() {
  const theme = useMantineTheme();
  const swatches = ([0, 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <ColorSwatch key={size} size={40} radius={size} color={theme.colors.blue[6]} />
  ));

  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center" spacing="xs">
        {swatches}
      </Group>
    </CodeDemo>
  );
}
