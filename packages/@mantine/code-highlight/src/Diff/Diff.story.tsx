import { Diff } from './Diff';

export default { title: 'Diff' };

const previousCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button color="blue">Click me</Button>;
}`;

const currentCode = `import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button color="teal">Click me</Button>
    </Group>
  );
}`;

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Diff previousValue={previousCode} currentValue={currentCode} />
    </div>
  );
}

export function SplitMode() {
  return (
    <div style={{ padding: 40 }}>
      <Diff previousValue={previousCode} currentValue={currentCode} mode="split" />
    </div>
  );
}

export function DiffMethodChars() {
  return (
    <div style={{ padding: 40 }}>
      <Diff
        previousValue="The quick brown fox"
        currentValue="The quick red fox"
        diffMethod="chars"
      />
    </div>
  );
}

export function DiffMethodLines() {
  return (
    <div style={{ padding: 40 }}>
      <Diff
        previousValue="The quick brown fox"
        currentValue="The quick red fox"
        diffMethod="lines"
      />
    </div>
  );
}

export function ContextLines() {
  const prev = `line 1
line 2
line 3
line 4
line 5
line 6
line 7
old line 8
line 9
line 10`;

  const next = `line 1
line 2
line 3
line 4
line 5
line 6
line 7
new line 8
line 9
line 10`;

  return (
    <div style={{ padding: 40 }}>
      <Diff previousValue={prev} currentValue={next} contextLines={2} />
    </div>
  );
}

export function WithoutLineNumbers() {
  return (
    <div style={{ padding: 40 }}>
      <Diff previousValue={previousCode} currentValue={currentCode} withLineNumbers={false} />
    </div>
  );
}

export function CustomColors() {
  return (
    <div style={{ padding: 40 }}>
      <Diff
        previousValue="The quick brown fox"
        currentValue="The quick red fox"
        addColor="blue"
        removeColor="orange"
      />
    </div>
  );
}

export function IdenticalStrings() {
  return (
    <div style={{ padding: 40 }}>
      <Diff previousValue="same content" currentValue="same content" />
    </div>
  );
}

export function EmptyStrings() {
  return (
    <div style={{ padding: 40 }}>
      <Diff previousValue="" currentValue="new content" />
    </div>
  );
}

export function MultiLineHunk() {
  const prev = `line 1
old a
old b
old c
line 5`;

  const next = `line 1
new x
line 5`;

  return (
    <div style={{ padding: 40 }}>
      <Diff previousValue={prev} currentValue={next} />
    </div>
  );
}

export function SplitMultiLineHunk() {
  const prev = `line 1
old a
old b
old c
line 5`;

  const next = `line 1
new x
line 5`;

  return (
    <div style={{ padding: 40 }}>
      <Diff previousValue={prev} currentValue={next} mode="split" />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Diff previousValue={previousCode} currentValue={currentCode} unstyled />
    </div>
  );
}
