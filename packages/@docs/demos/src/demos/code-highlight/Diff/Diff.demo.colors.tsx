import { Diff } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Diff } from '@mantine/code-highlight';

function Demo() {
  return (
    <Diff
      previousValue="The quick brown fox"
      currentValue="The quick red fox"
      addColor="blue"
      removeColor="orange"
    />
  );
}
`;

function Demo() {
  return (
    <Diff
      previousValue="The quick brown fox"
      currentValue="The quick red fox"
      addColor="blue"
      removeColor="orange"
    />
  );
}

export const colors: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
