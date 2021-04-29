import React, { useContext } from 'react';
import { ElementsGroup, ActionIcon } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import { ColorSchemeContext } from '../../../components/Layout/ColorScheme.context';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Button } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import ColorSchemeContext from './ColorSchemeContext';

function Demo() {
  const colorSchemeContext = useContext(ColorSchemeContext);
  const dark = colorSchemeContext.colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => colorSchemeContext.onChange(dark ? 'light' : 'dark')}
      title="Toggle color scheme"
    >
      {dark ? (
        <SunIcon style={{ width: 18, height: 18 }} />
      ) : (
        <MoonIcon style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  );
}`;

export function DarkThemeToggleDemo() {
  const colorSchemeContext = useContext(ColorSchemeContext);
  const dark = colorSchemeContext.colorScheme === 'dark';

  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <ActionIcon
          variant="outline"
          color={dark ? 'yellow' : 'blue'}
          onClick={() => colorSchemeContext.onChange(dark ? 'light' : 'dark')}
          title="Toggle color scheme"
        >
          {dark ? (
            <SunIcon style={{ width: 18, height: 18 }} />
          ) : (
            <MoonIcon style={{ width: 18, height: 18 }} />
          )}
        </ActionIcon>
      </ElementsGroup>
    </CodeDemo>
  );
}
