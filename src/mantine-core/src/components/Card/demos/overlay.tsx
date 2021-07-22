import React from 'react';
import { Card, Image, Text, Overlay } from '../../../index';
import { demoBase } from './_demo-base';

const code = `
import React from 'react';
import { Card, Image, Text, Overlay } from '@mantine/core';

function Demo() {
  return (
    <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm">
        <Image
          src="https://images.unsplash.com/long-image-url.jpg"
          height={160}
          alt="Noway"
        />

        <Text weight={500} size="lg">
          You&apos;ve won million dollars in cash
        </Text>

        <Text style={{ marginTop: 10 }} size="sm">
          Please click anywhere on this card to claim your reward, this is not a fraud, trust us
        </Text>

        <Overlay
          opacity={0}
          component="a"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        />
      </Card>
    </div>
  );
}
`;

function Demo() {
  return (
    <Card shadow="sm">
      <Image
        src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        height={160}
        alt="Norway"
      />

      <Text weight={500} size="lg">
        You&apos;ve won million dollars in cash
      </Text>
      <Text style={{ marginTop: 10 }} size="sm">
        Please click anywhere on this card to claim your reward, this is not fraud, trust us
      </Text>

      <Overlay
        opacity={0}
        component="a"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
      />
    </Card>
  );
}

export const overlay: MantineDemo = {
  ...demoBase,
  type: 'demo',
  code,
  component: Demo,
};
