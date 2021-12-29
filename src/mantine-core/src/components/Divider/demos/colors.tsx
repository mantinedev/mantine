import React from 'react';
import { DEFAULT_THEME } from '@mantine/styles';
import { Divider } from '../Divider';

const code = `
<Divider color="dark" /> // default color for when the colorScheme is dark
<Divider color="gray" /> // default color for when the colorScheme is light
<Divider color="red" />
<Divider color="pink" />
<Divider color="grape" />
<Divider color="violet" />
<Divider color="indigo" />
<Divider color="blue" />
<Divider color="cyan" />
<Divider color="teal" />
<Divider color="green" />
<Divider color="lime" />
<Divider color="yellow" />
<Divider color="orange" />
`;

const getColors = () =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Divider key={color} color={color} style={{ marginTop: 15 }} />
  ));

function Demo() {
  return <>{getColors()}</>;
}

export const colors: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
