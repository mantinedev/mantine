import React from 'react';
import { Link } from 'gatsby';
import { ColorSwatch, Group, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Link } from 'gatsby';
import { ColorSwatch, Group, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch component="a" href="https://mantine.dev" color={theme.colors.blue[6]} />
      <ColorSwatch component="button" href="https://mantine.dev" color={theme.colors.lime[6]} />
      <ColorSwatch component={Link} to="/pages/theming" color={theme.colors.red[6]} />
    </Group>
  );
}`;

export function ColorSwatchComponentDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center" spacing="xs">
        <ColorSwatch component="a" href="https://mantine.dev" color={theme.colors.blue[6]} />
        <ColorSwatch component="button" color={theme.colors.lime[6]} />
        <ColorSwatch component={Link} to="/pages/theming" color={theme.colors.red[6]} />
      </Group>
    </CodeDemo>
  );
}
