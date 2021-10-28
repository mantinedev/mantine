import React from 'react';
import { MediaQuery } from '../MediaQuery';
import { Badge } from '../../Badge';
import { Group } from '../../Group';

const code = `
const hide = { display: 'none' };

<MediaQuery largerThan="lg">
  <Badge>Larger than lg</Badge>
</MediaQuery>

<MediaQuery smallerThan="lg">
  <Badge color="red">Smaller than lg</Badge>
</MediaQuery>

<MediaQuery smallerThan="xl" largerThan="sm">
  <Badge color="pink">Smaller than xl, larger than sm</Badge>
</MediaQuery>

<MediaQuery smallerThan={1500} largerThan={800}>
  <Badge color="cyan">Smaller than 1500px, larger than 800px</Badge>
</MediaQuery>
`;

function Demo() {
  const hide = { display: 'none' };

  return (
    <Group position="center">
      <MediaQuery largerThan="lg" styles={hide}>
        <Badge>Larger than lg</Badge>
      </MediaQuery>
      <MediaQuery smallerThan="lg" styles={hide}>
        <Badge color="red">Smaller than lg</Badge>
      </MediaQuery>
      <MediaQuery smallerThan="xl" largerThan="sm" styles={hide}>
        <Badge color="pink">Smaller than xl, larger than sm</Badge>
      </MediaQuery>
      <MediaQuery smallerThan={1500} largerThan={800} styles={hide}>
        <Badge color="cyan">Smaller than 1500px, larger than 800px</Badge>
      </MediaQuery>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
