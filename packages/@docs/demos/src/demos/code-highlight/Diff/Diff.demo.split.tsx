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
  return <Diff previousValue={previousCode} currentValue={currentCode} mode="split" />;
}
`;

function Demo() {
  return <Diff previousValue={previousCode} currentValue={currentCode} mode="split" />;
}

export const split: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
