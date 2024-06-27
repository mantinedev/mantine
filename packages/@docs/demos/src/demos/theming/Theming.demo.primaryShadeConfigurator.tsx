import { useEffect, useState } from 'react';
import { Button, Group, MantineProvider, useMantineColorScheme } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = (props: any) => `
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade: ${props.primaryShade} }}>
      <Group>
        <Button>Filled</Button>
        <Button variant="light">Light</Button>
        <Button variant="outline">Outline</Button>
      </Group>
    </MantineProvider>
  );
}
`;

function Wrapper(props: any) {
  const [attr, setAttr] = useState<string | undefined>(undefined);
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    setAttr(colorScheme);
  }, [colorScheme]);

  return (
    <div id="primary-color-demo-root" data-mantine-color-scheme={attr}>
      <MantineProvider
        cssVariablesSelector="#primary-color-demo-root"
        getRootElement={() => document.createElement('div')}
        theme={{ primaryShade: props.primaryShade }}
      >
        <Group>
          <Button>Filled</Button>
          <Button variant="light">Light</Button>
          <Button variant="outline">Outline</Button>
        </Group>
      </MantineProvider>
    </div>
  );
}

export const primaryShadeConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: 'number',
      prop: 'primaryShade',
      initialValue: 6,
      libraryValue: '__none__',
      min: 0,
      max: 9,
    },
  ],
};
