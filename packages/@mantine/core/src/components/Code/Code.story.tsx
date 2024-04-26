import { Code } from './Code';

export default { title: 'Code' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Code>Some code</Code>
      <Code color="blue.4">Code with color</Code>
    </div>
  );
}
export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Code unstyled>Some code</Code>
    </div>
  );
}

const code = `
export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Code>Some code</Code>
      <Code color="blue.4">Code with color</Code>
    </div>
  );
}
`.trim();

export function Block() {
  return (
    <div style={{ padding: 40 }}>
      <Code block>{code}</Code>
    </div>
  );
}
