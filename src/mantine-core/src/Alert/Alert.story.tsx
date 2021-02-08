import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import Text from '../Text/Text';
import Alert from './Alert';

storiesOf('@mantine/core', module).add('Alert', () => (
  <MantineProvider>
    <div style={{ maxWidth: 400 }}>
      <Alert title="Everything is fine!">
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus, consequatur
          possimus enim ab dolores dolor provident maiores autem? Eos, ea accusantium. Ex rem
          dolorem sequi quisquam maiores odit in!
        </Text>
      </Alert>
      <Alert color="red" style={{ marginTop: 20 }} title="Error happened">
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus, consequatur
          possimus enim ab dolores dolor provident maiores autem? Eos, ea accusantium. Ex rem
          dolorem sequi quisquam maiores odit in!
        </Text>
      </Alert>
      <Alert color="blue" style={{ marginTop: 20 }}>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus, consequatur
          possimus enim ab dolores dolor provident maiores autem? Eos, ea accusantium. Ex rem
          dolorem sequi quisquam maiores odit in!
        </Text>
      </Alert>
    </div>
  </MantineProvider>
));
