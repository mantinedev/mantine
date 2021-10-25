import React from 'react';
import { MediaQuery } from '../MediaQuery';
import { Text } from '../../Text';

const code = `
<MediaQuery
  query="(max-width: 1200px) and (min-width: 800px)"
  styles={{ fontSize: 20, '&:hover': { backgroundColor: 'silver' } }}
>
  <Text>(max-width: 1200px) and (min-width: 800px) breakpoints</Text>
</MediaQuery>
`;

function Demo() {
  return (
    <MediaQuery
      query="(max-width: 1200px) and (min-width: 800px)"
      styles={{ fontSize: 20, '&:hover': { backgroundColor: 'silver' } }}
    >
      <Text>(max-width: 1200px) and (min-width: 800px) breakpoints</Text>
    </MediaQuery>
  );
}

export const query: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
