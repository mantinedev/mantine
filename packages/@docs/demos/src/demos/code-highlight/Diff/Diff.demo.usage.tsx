import { Diff } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';
import { currentCode, dataCode, previousCode } from './data';

const code = `
import { Diff } from '@mantine/code-highlight';
import { currentCode, previousCode } from './data';

function Demo() {
  return <Diff previousValue={previousCode} currentValue={currentCode} />;
}
`;

function Demo() {
  return <Diff previousValue={previousCode} currentValue={currentCode} />;
}

export const usage: MantineDemo = {
  type: 'code',
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  component: Demo,
};
