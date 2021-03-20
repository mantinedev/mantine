import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text/Text';
import { Title } from '../Title/Title';
import { Container } from './Container';

const content = (
  <Text>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit natus illum quaerat dicta maxime
    dolore saepe sit quibusdam error eos libero exercitationem vitae a qui rerum, eveniet expedita.
    Eos, ipsa!
  </Text>
);

const containers = ([200, 'xs', 'sm', 'md', 'lg', 'xl', 2000] as const).map((size) => (
  <Container size={size} key={size} style={{ marginTop: 20 }}>
    <Title order={4}>Container size: {size}</Title>
    {content}
  </Container>
));

storiesOf('@mantine/core/Container', module)
  .add('Sizes', () => <>{containers}</>)
  .add('Fluid', () => (
    <Container fluid>
      <Title order={4}>Fluid Container</Title>
      {content}
    </Container>
  ));
