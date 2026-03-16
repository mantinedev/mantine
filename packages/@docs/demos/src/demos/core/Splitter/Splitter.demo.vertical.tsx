import { Splitter } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  return (
    <Splitter orientation="vertical" h={300}>
      <Splitter.Pane
        defaultSize={60}
        min={20}
        bg="blue"
        c="white"
        fw={500}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        Top pane
      </Splitter.Pane>
      <Splitter.Pane
        defaultSize={40}
        min={20}
        bg="teal"
        c="white"
        fw={500}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        Bottom pane
      </Splitter.Pane>
    </Splitter>
  );
}

const code = `
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter orientation="vertical" h={300}>
      <Splitter.Pane defaultSize={60} min={20} bg="blue">
        Top pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={40} min={20} bg="teal">
        Bottom pane
      </Splitter.Pane>
    </Splitter>
  );
}`;

export const vertical: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: '100%',
};
