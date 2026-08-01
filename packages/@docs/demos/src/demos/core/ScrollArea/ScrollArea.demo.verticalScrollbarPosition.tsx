import { ScrollArea, ScrollAreaProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { Content } from './_content';

function Wrapper(props: ScrollAreaProps) {
  return (
    <ScrollArea w={300} h={200} type="always" scrollbars="y" {...props}>
      <Content />
    </ScrollArea>
  );
}

const code = `
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea
      w={300}
      h={200}
      type="always"
      scrollbars="y"
      {{props}}
    >
      {/* ... content */}
    </ScrollArea>
  );
}
`;

export const verticalScrollbarPosition: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  centered: true,
  code,
  controls: [
    {
      prop: 'verticalScrollbarPosition',
      type: 'segmented',
      initialValue: 'right',
      libraryValue: null,
      data: ['left', 'right'],
    },
    {
      prop: 'offsetScrollbars',
      type: 'boolean',
      initialValue: true,
      libraryValue: null,
    },
  ],
};
