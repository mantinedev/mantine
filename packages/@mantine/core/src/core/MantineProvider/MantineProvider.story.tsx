import { useState } from 'react';
import { Button } from '../../components/Button';
import { Group } from '../../components/Group';
import { Stack } from '../../components/Stack';
import { DEFAULT_THEME } from './default-theme';
import { v8CssVariablesResolver } from './MantineCssVariables/v8-css-variables-resolver';
import { MantineProvider } from './MantineProvider';

export default { title: 'MantineProvider' };

export function ForceColorScheme() {
  const [forceColorScheme, setForceColorScheme] = useState<'light' | 'dark' | undefined>(undefined);
  return (
    <div style={{ padding: 40 }}>
      <MantineProvider forceColorScheme={forceColorScheme} defaultColorScheme="auto">
        <button type="button" onClick={() => setForceColorScheme('light')}>
          Force light
        </button>
        <button type="button" onClick={() => setForceColorScheme('dark')}>
          Force dark
        </button>
        <button type="button" onClick={() => setForceColorScheme(undefined)}>
          Force undefined
        </button>
      </MantineProvider>
    </div>
  );
}

const COLORS = Object.keys(DEFAULT_THEME.colors);

function ColorButtons({ label }: { label: string }) {
  return (
    <Stack gap="xs">
      <div style={{ fontWeight: 700, marginBottom: 4 }}>{label}</div>
      {COLORS.map((color) => (
        <Group key={color} gap="xs">
          <Button variant="light" color={color} size="xs">
            {color} light
          </Button>
          <Button variant="filled" color={color} size="xs">
            {color} filled
          </Button>
          <Button variant="outline" color={color} size="xs">
            {color} outline
          </Button>
          <Button variant="subtle" color={color} size="xs">
            {color} subtle
          </Button>
        </Group>
      ))}
    </Stack>
  );
}

export function V8CssVariablesResolver() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40 }}>
      <MantineProvider cssVariablesResolver={v8CssVariablesResolver}>
        <ColorButtons label="v8 (css variables resolver)" />
      </MantineProvider>
    </div>
  );
}
