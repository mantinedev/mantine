import React from 'react';
import { Link } from 'gatsby';
import { Text, Box, Anchor } from '@mantine/core';
import { Prism } from '@mantine/prism';

const code = `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      sx={{
        '&:hover': {
          backgroundColor: '#eee',
        },

        '@media (max-width: 755px)': {
          fontSize: 14,
        },
      }}
    >
      My custom text
    </Text>
  );
}
`;

export function SxDemo() {
  return (
    <Box pt="xl">
      <Text mb="sm">
        Add inline styles to any component with{' '}
        <Anchor component={Link} to="/styles/sx/">
          sx prop:
        </Anchor>
      </Text>
      <Prism language="tsx">{code}</Prism>
    </Box>
  );
}
