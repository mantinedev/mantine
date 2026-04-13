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

const previousCode = \`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}\`;

const currentCode = \`import { useReducer } from 'react';

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <button onClick={() => dispatch({ type: 'increment' })}>
      Count: {count}
    </button>
  );
}\`;

function Demo() {
  return <Diff previousValue={previousCode} currentValue={currentCode} />;
}
`;

function Demo() {
  return <Diff previousValue={previousCode} currentValue={currentCode} />;
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
