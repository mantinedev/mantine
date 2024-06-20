import { Slider } from '@mantine/core';
import classes from './CustomizeSlider.demo.module.css';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

export function CustomizeSliderDemo() {
  return <Slider classNames={classes} defaultValue={40} marks={marks} size={2} />;
}

const tsxCode = `
import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

export function CustomizeSliderDemo() {
  return <Slider classNames={classes} defaultValue={40} marks={marks} size={2} />;
}`;

const cssCode = `
.track {
  &::before {
    background-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));
  }
}

.mark {
  width: rem(6px);
  height: rem(6px);
  border-radius: rem(6px);
  transform: translateX(rem(-3px)) translateY(rem(-2px));
  border-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));

  &[data-filled] {
    border-color: var(--mantine-color-blue-6);
  }
}

.markLabel {
  font-size: var(--mantine-font-size-xs);
  margin-bottom: rem(5px);
  margin-top: 0;
}

.thumb {
  height: rem(16px);
  width: rem(16px);
  background-color: var(--mantine-color-white);
  border-width: rem(1px);
  box-shadow: var(--mantine-shadow-sm);
}

`;

export const code = [
  { fileName: 'Demo.module.css', code: cssCode, language: 'scss' as const },
  { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' as const },
];
