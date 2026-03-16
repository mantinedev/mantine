import { Splitter } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  return (
    <Splitter withHandle={false} h={200}>
      <Splitter.Pane
        defaultSize={50}
        min={20}
        bg="blue"
        c="white"
        fw={500}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        First pane
      </Splitter.Pane>
      <Splitter.Pane
        defaultSize={50}
        min={20}
        bg="teal"
        c="white"
        fw={500}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}

const code = `
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter withHandle={false} h={200}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        First pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}`;

export const withHandle: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: '100%',
};
