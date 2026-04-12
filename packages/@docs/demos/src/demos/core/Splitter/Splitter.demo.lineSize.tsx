import { Splitter, SplitterProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: SplitterProps) {
  return (
    <Splitter {...props} h={200}>
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
    <Splitter{{props}} h={200}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        First pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}`;

export const lineSize: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: '100%',
  controls: [
    {
      prop: 'lineSize',
      type: 'number',
      initialValue: 2,
      libraryValue: 2,
      min: 1,
      max: 10,
      step: 1,
    },
  ],
};
