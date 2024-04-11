import React, { useState } from 'react';
import { Checkbox, Text, UnstyledButton } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './Checkbox.demo.card.module.css';

const cssCode = `.root {
  position: relative;
}

.control {
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-7));
  border: 1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
  padding: var(--mantine-spacing-md);
  padding-left: 60px;
  border-radius: var(--mantine-radius-md);
  transition: border-color 100ms ease;

  &[data-checked] {
    border-color: var(--mantine-color-blue-filled);
  }
}

.checkboxWrapper {
  position: absolute;
  top: var(--mantine-spacing-md);
  left: var(--mantine-spacing-md);
  pointer-events: none;
}

.checkbox {
  &:not(:checked) {
    background-color: var(--mantine-color-body);
  }
}

.label {
  font-family: var(--mantine-font-family-monospace);
  font-weight: bold;
  font-size: var(--mantine-font-size-md);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 8px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`;

const code = `
import { useState } from 'react';
import { Checkbox, UnstyledButton, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={classes.root}>
      <Checkbox
        classNames={{ root: classes.checkboxWrapper, input: classes.checkbox }}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        tabIndex={-1}
        size="md"
        aria-label="Checkbox example"
      />

      <UnstyledButton
        className={classes.control}
        data-checked={checked || undefined}
        onClick={() => setChecked((c) => !c)}
      >
        <Text className={classes.label}>@mantine/core</Text>
        <Text className={classes.description}>
          Core components library: inputs, buttons, overlays, etc.
        </Text>
      </UnstyledButton>
    </div>
  );
}
`;

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={classes.root}>
      <Checkbox
        classNames={{ root: classes.checkboxWrapper, input: classes.checkbox }}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        tabIndex={-1}
        size="md"
        aria-label="Checkbox example"
      />

      <UnstyledButton
        className={classes.control}
        data-checked={checked || undefined}
        onClick={() => setChecked((c) => !c)}
      >
        <Text className={classes.label}>@mantine/core</Text>
        <Text className={classes.description}>
          Core components library: inputs, buttons, overlays, etc.
        </Text>
      </UnstyledButton>
    </div>
  );
}

export const card: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 320,
  component: Demo,
  defaultExpanded: false,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'Demo.module.css', language: 'scss', code: cssCode },
  ],
};
