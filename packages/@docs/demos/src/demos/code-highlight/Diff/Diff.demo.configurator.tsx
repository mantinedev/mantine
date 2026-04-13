import { Diff } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const previousCode = `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`;

const currentCode = `import { useReducer } from 'react';

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <button onClick={() => dispatch({ type: 'increment' })}>
      Count: {count}
    </button>
  );
}`;

const code = `
import { Diff } from '@mantine/code-highlight';

function Demo() {
  return <Diff previousValue={previousValue} currentValue={currentValue}{{props}} />;
}
`;

function Wrapper(props: any) {
  return <Diff previousValue={previousCode} currentValue={currentCode} {...props} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
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
