import { Splitter } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  return (
    <Splitter h={350}>
      <Splitter.Pane
        defaultSize={30}
        min={15}
        bg="blue"
        c="white"
        fw={500}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        Sidebar
      </Splitter.Pane>
      <Splitter.Pane defaultSize={70} min={30}>
        <Splitter orientation="vertical" h="100%">
          <Splitter.Pane
            defaultSize={60}
            min={20}
            bg="teal"
            c="white"
            fw={500}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Editor
          </Splitter.Pane>
          <Splitter.Pane
            defaultSize={40}
            min={20}
            bg="grape"
            c="white"
            fw={500}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Terminal
          </Splitter.Pane>
        </Splitter>
      </Splitter.Pane>
    </Splitter>
  );
}

const code = `
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter h={350}>
      <Splitter.Pane defaultSize={30} min={15} bg="blue">
        Sidebar
      </Splitter.Pane>
      <Splitter.Pane defaultSize={70} min={30}>
        <Splitter orientation="vertical" h="100%">
          <Splitter.Pane defaultSize={60} min={20} bg="teal">
            Editor
          </Splitter.Pane>
          <Splitter.Pane defaultSize={40} min={20} bg="grape">
            Terminal
          </Splitter.Pane>
        </Splitter>
      </Splitter.Pane>
    </Splitter>
  );
}`;

export const nested: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: '100%',
};
