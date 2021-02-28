import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text/Text';
import { Title } from '../Title/Title';
import { Container } from './Container';

storiesOf('@mantine/core', module).add('Container', () => (
  <>
    <Container size="xs">
      <Title order={4}>XS Container</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit natus illum quaerat dicta
        maxime dolore saepe sit quibusdam error eos libero exercitationem vitae a qui rerum, eveniet
        expedita. Eos, ipsa!
      </Text>
    </Container>

    <Container size="sm" style={{ marginTop: 20 }}>
      <Title order={4}>SM Container</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit natus illum quaerat dicta
        maxime dolore saepe sit quibusdam error eos libero exercitationem vitae a qui rerum, eveniet
        expedita. Eos, ipsa!
      </Text>
    </Container>

    <Container size="md" style={{ marginTop: 20 }}>
      <Title order={4}>MD Container</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit natus illum quaerat dicta
        maxime dolore saepe sit quibusdam error eos libero exercitationem vitae a qui rerum, eveniet
        expedita. Eos, ipsa!
      </Text>
    </Container>

    <Container size="lg" style={{ marginTop: 20 }}>
      <Title order={4}>LG Container</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit natus illum quaerat dicta
        maxime dolore saepe sit quibusdam error eos libero exercitationem vitae a qui rerum, eveniet
        expedita. Eos, ipsa!
      </Text>
    </Container>

    <Container size="xl" style={{ marginTop: 20 }}>
      <Title order={4}>XL Container</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit natus illum quaerat dicta
        maxime dolore saepe sit quibusdam error eos libero exercitationem vitae a qui rerum, eveniet
        expedita. Eos, ipsa!
      </Text>
    </Container>
  </>
));
