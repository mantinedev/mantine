import { Persona } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { PersonaStylesApi } from '@docs/styles-api';

const IMAGE =
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png';

const code = `
import { Persona } from '@mantine/core';

function Demo() {
  return (
    <Persona
      name="Vitaly Rtishchev"
      secondaryText="Creator of Mantine"
      tertiaryText="Available"
      avatar={{ src: image }}
      presence="available"{{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <Persona
      name="Vitaly Rtishchev"
      secondaryText="Creator of Mantine"
      tertiaryText="Available"
      avatar={{ src: IMAGE }}
      presence="available"
      {...props}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: PersonaStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 320,
};
