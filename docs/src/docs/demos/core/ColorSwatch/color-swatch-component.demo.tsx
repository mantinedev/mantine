import React from 'react';
import { Link } from 'gatsby';
import { ColorSwatch, ElementsGroup, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Link } from 'gatsby';
import { ColorSwatch, ElementsGroup, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();

  return (
    <ElementsGroup position="center" spacing="xs">
      <ColorSwatch component="a" href="https://mantine.dev" color={theme.colors.blue[6]} />
      <ColorSwatch component="button" href="https://mantine.dev" color={theme.colors.lime[6]} />
      <ColorSwatch component={Link} to="/pages/theming" color={theme.colors.red[6]} />
    </ElementsGroup>
  );
}`;

export function ColorSwatchComponentDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center" spacing="xs">
        <ColorSwatch component="a" href="https://mantine.dev" color={theme.colors.blue[6]} />
        <ColorSwatch component="button" href="https://mantine.dev" color={theme.colors.lime[6]} />
        <ColorSwatch component={Link} to="/pages/theming" color={theme.colors.red[6]} />
      </ElementsGroup>
    </CodeDemo>
  );
}
