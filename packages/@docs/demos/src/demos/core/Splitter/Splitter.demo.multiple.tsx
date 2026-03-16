import { Splitter } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const colors = ['blue', 'teal', 'grape'] as const;
const labels = ['First', 'Second', 'Third'];

function Demo() {
  return (
    <Splitter h={200}>
      {labels.map((label, i) => (
        <Splitter.Pane
          defaultSize={i === 1 ? 50 : 25}
          min={10}
          key={label}
          bg={colors[i]}
          c="white"
          fw={500}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {label}
        </Splitter.Pane>
      ))}
    </Splitter>
  );
}

const code = `
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter h={200}>
      <Splitter.Pane defaultSize={25} min={10} bg="blue">
        First
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={10} bg="teal">
        Second
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="grape">
        Third
      </Splitter.Pane>
    </Splitter>
  );
}`;

export const multiple: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: '100%',
};
