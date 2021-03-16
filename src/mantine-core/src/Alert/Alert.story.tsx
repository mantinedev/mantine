import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text/Text';
import { Alert } from './Alert';

storiesOf('@mantine/core/Alert', module).add('Alert', () => (
  <>
    <div style={{ maxWidth: 400 }}>
      <Alert title="Everything is fine!" color="teal">
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
  </>
));
