import { Button, TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = (props: Record<string, any>) => `
import { MantineProvider, TextInput, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ defaultRadius: '${props.defaultRadius}' }}>
      <Button fullWidth>Button with defaultRadius</Button>
      <TextInput mt="sm" label="TextInput with defaultRadius" placeholder="TextInput with default radius" />
    </MantineProvider>
  );
}
`;

function Wrapper(props: any) {
  return (
    <>
      <Button radius={props.defaultRadius} fullWidth>
        Button with defaultRadius
      </Button>
      <TextInput
        mt="sm"
        radius={props.defaultRadius}
        label="TextInput with defaultRadius"
        placeholder="TextInput with default radius"
      />
    </>
  );
}

export const defaultRadiusConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [{ type: 'size', prop: 'defaultRadius', initialValue: 'sm', libraryValue: '__none__' }],
};
