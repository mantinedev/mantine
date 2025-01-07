import { Switch } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './Switch.demo.styles.module.css';

const cssCode = `.track {
  transition:
    background-color 200ms ease,
    border-color 200ms ease;

  input:checked + & {
    background-color: var(--mantine-color-lime-5);
    border-color: var(--mantine-color-lime-5);

    & > .thumb {
      background-color: var(--mantine-color-black);
      border-color: var(--mantine-color-black);
    }
  }
}

.thumb {
  transition:
    inset-inline-start 200ms ease,
    background-color 200ms ease,
    border-color 200ms ease;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: var(--mantine-color-lime-5);
    position: absolute;
    left: calc(50% - 4px);
    top: calc(50% - 4px);
  }
}`;

const code = `
import { Switch } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Switch classNames={classes} size="lg" />;
}
`;

function Demo() {
  return <Switch classNames={classes} size="lg" />;
}

export const styles: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
    { fileName: 'Demo.tsx', code, language: 'tsx' },
  ],
  centered: true,
  defaultExpanded: false,
};
