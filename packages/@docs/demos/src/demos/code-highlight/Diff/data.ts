export const previousCode = `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`;

export const currentCode = `import { useReducer } from 'react';

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <button onClick={() => dispatch({ type: 'increment' })}>
      Count: {count}
    </button>
  );
}`;

export const dataCode = `
export const previousCode = \`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}\`;

export const currentCode = \`import { useReducer } from 'react';

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <button onClick={() => dispatch({ type: 'increment' })}>
      Count: {count}
    </button>
  );
}\`;
`;
