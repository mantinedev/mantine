import { Box, Notification, NotificationProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: NotificationProps) {
  return (
    <Box maw={400} mx="auto">
      <Notification onClose={() => {}} {...props} />
    </Box>
  );
}

const code = `
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  centered: true,
  code,
  dimmed: true,
  controls: [
    { prop: 'loading', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'withCloseButton', type: 'boolean', initialValue: true, libraryValue: true },
    { prop: 'withBorder', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    { prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
    {
      prop: 'title',
      type: 'string',
      initialValue: 'We notify you that',
      libraryValue: '',
    },
    {
      prop: 'children',
      type: 'string',
      initialValue: 'You are now obligated to give a star to Mantine project on GitHub',
      libraryValue: '',
    },
  ],
};
