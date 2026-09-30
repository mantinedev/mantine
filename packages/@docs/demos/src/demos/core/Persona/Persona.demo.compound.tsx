import { Persona } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const IMAGE =
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png';

function Demo() {
  return (
    <Persona>
      <Persona.Avatar src={IMAGE} />
      <Persona.Presence presence="available" />
      <Persona.Text level={1}>Vitaly Rtishchev</Persona.Text>
      <Persona.Text level={2}>Creator of Mantine</Persona.Text>
    </Persona>
  );
}

const code = `
import { Persona } from '@mantine/core';

function Demo() {
  return (
    <Persona>
      <Persona.Avatar src={image} />
      <Persona.Presence presence="available" />
      <Persona.Text level={1}>Vitaly Rtishchev</Persona.Text>
      <Persona.Text level={2}>Creator of Mantine</Persona.Text>
    </Persona>
  );
}
`;

export const compound: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 320,
};
