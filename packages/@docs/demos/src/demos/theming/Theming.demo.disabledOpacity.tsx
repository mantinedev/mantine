import { Box, Button, Checkbox, Switch, TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = (props: Record<string, any>) => `
import { MantineProvider, Button, Checkbox, Switch, TextInput } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ disabledOpacity: ${props.disabledOpacity} }}>
      <Button disabled>Disabled button</Button>
      <TextInput mt="md" label="Disabled input" placeholder="Disabled input" disabled />
      <Checkbox mt="md" label="Disabled checkbox" defaultChecked disabled />
      <Switch mt="md" label="Disabled switch" defaultChecked disabled />
    </MantineProvider>
  );
}
`;

function Wrapper(props: { disabledOpacity: number }) {
  return (
    <Box style={{ '--mantine-disabled-opacity': props.disabledOpacity } as React.CSSProperties}>
      <Button disabled>Disabled button</Button>
      <TextInput mt="md" label="Disabled input" placeholder="Disabled input" disabled />
      <Checkbox mt="md" label="Disabled checkbox" defaultChecked disabled />
      <Switch mt="md" label="Disabled switch" defaultChecked disabled />
    </Box>
  );
}

export const disabledOpacity: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: [
    {
      type: 'number',
      prop: 'disabledOpacity',
      initialValue: 0.5,
      libraryValue: 0.5,
      min: 0.1,
      max: 1,
      step: 0.05,
    },
  ],
};
