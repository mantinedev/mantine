import { Diff } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';
import { currentCode, dataCode, previousCode } from './data';

const code = `
import { Diff } from '@mantine/code-highlight';
import { currentCode, previousCode } from './data';

function Demo() {
  return <Diff previousValue={previousCode} currentValue={currentCode} mode="split" />;
}
`;

function Demo() {
  return <Diff previousValue={previousCode} currentValue={currentCode} mode="split" />;
}

export const split: MantineDemo = {
  type: 'code',
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  component: Demo,
};
