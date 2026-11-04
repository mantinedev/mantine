import { Diff } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const previousValue = `line 1
line 2
line 3
line 4
line 5
old line 6
line 7
line 8
line 9
line 10`;

const currentValue = `line 1
line 2
line 3
line 4
line 5
new line 6
line 7
line 8
line 9
line 10`;

const code = `
import { Diff } from '@mantine/code-highlight';

const previousValue = \`line 1
line 2
line 3
line 4
line 5
old line 6
line 7
line 8
line 9
line 10\`;

const currentValue = \`line 1
line 2
line 3
line 4
line 5
new line 6
line 7
line 8
line 9
line 10\`;

function Demo() {
  return <Diff previousValue={previousValue} currentValue={currentValue} contextLines={2} />;
}
`;

function Demo() {
  return <Diff previousValue={previousValue} currentValue={currentValue} contextLines={2} />;
}

export const contextLines: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
