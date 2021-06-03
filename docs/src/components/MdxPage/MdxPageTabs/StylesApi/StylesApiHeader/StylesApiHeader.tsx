import React from 'react';
import { Title, Text } from '@mantine/core';
import GatsbyLink from '../../../MdxProvider/GatsbyLink/GatsbyLink';

export function StylesApiHeader() {
  return (
    <>
      <Title order={2} style={{ fontWeight: 500, marginBottom: 15 }}>
        Mantine styles API
      </Title>

      <Text style={{ maxWidth: 600, marginBottom: 30 }}>
        Mantine components support styling of individual elements by adding your class or inline
        styles to any element inside component. For more information see{' '}
        <GatsbyLink to="/guides/styles/">styles API guide</GatsbyLink>.
      </Text>
    </>
  );
}
