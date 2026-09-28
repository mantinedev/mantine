import { Diff } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';
import { currentCode, dataCode, previousCode } from './data';

const code = `
import { Diff } from '@mantine/code-highlight';
import { currentCode, previousCode } from './data';

function Demo() {
  return <Diff previousValue={previousCode} currentValue={currentCode}{{props}} />;
}
`;

function Wrapper(props: any) {
  return <Diff previousValue={previousCode} currentValue={currentCode} {...props} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  controls: [
    {
      prop: 'mode',
      type: 'segmented',
      data: ['unified', 'split'],
      initialValue: 'unified',
      libraryValue: 'unified',
    },
    {
      prop: 'diffMethod',
      type: 'segmented',
      data: ['chars', 'words', 'lines'],
      initialValue: 'words',
      libraryValue: 'words',
    },
    {
      prop: 'withLineNumbers',
      type: 'boolean',
      initialValue: true,
      libraryValue: true,
    },
  ],
};
