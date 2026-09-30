import { Persona, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const IMAGE =
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png';

function Demo() {
  return (
    <Stack>
      <Persona
        name="Vitaly Rtishchev"
        secondaryText="radius: 1000px (default)"
        avatar={{ src: IMAGE }}
        presence="available"
      />
      <Persona
        name="Vitaly Rtishchev"
        secondaryText="radius: xl"
        avatar={{ src: IMAGE }}
        presence="available"
        radius="xl"
      />
      <Persona
        name="Vitaly Rtishchev"
        secondaryText="radius: md"
        avatar={{ src: IMAGE }}
        presence="available"
        radius="md"
      />
      <Persona
        name="Vitaly Rtishchev"
        secondaryText="radius: 0"
        avatar={{ src: IMAGE }}
        presence="available"
        radius={0}
      />
    </Stack>
  );
}

const code = `
import { Persona, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Persona
        name="Vitaly Rtishchev"
        secondaryText="radius: 1000px (default)"
        avatar={{ src: image }}
        presence="available"
      />
      <Persona
        name="Vitaly Rtishchev"
        secondaryText="radius: xl"
        avatar={{ src: image }}
        presence="available"
        radius="xl"
      />
      <Persona
        name="Vitaly Rtishchev"
        secondaryText="radius: md"
        avatar={{ src: image }}
        presence="available"
        radius="md"
      />
      <Persona
        name="Vitaly Rtishchev"
        secondaryText="radius: 0"
        avatar={{ src: image }}
        presence="available"
        radius={0}
      />
    </Stack>
  );
}
`;

export const radius: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 320,
};
