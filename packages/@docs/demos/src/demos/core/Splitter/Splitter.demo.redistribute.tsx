import { Splitter } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const colors = ['blue', 'teal', 'grape', 'orange'] as const;
const labels = ['Panel A', 'Panel B', 'Panel C', 'Panel D'];

function Demo() {
  return (
    <Splitter redistribute="nearest" h={200}>
      {labels.map((label, i) => (
        <Splitter.Pane
          defaultSize={25}
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
    <Splitter redistribute="nearest" h={200}>
      <Splitter.Pane defaultSize={25} min={10} bg="blue">
        Panel A
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="teal">
        Panel B
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="grape">
        Panel C
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="orange">
        Panel D
      </Splitter.Pane>
    </Splitter>
  );
}`;

export const redistribute: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: '100%',
};
