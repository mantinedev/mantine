import React from 'react';
import { Link } from 'gatsby';
import { Text, Box, Anchor, rem } from '@mantine/core';
import { Prism } from '@mantine/prism';

const code = `
import styled from '@emotion/styled';

const StyledComponent = styled.div\`
  text-align: center;
  background-color: \${({ theme }) =>
    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]};
  padding: ${rem(30)};
  border-radius: ${rem(5)};
  cursor: pointer;

  &:hover {
    background-color: \${({ theme }) =>
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]};
  }
\`;

function Demo() {
  return <StyledComponent />;
}
`;

export function StyledDemo() {
  return (
    <Box pt="xl">
      <Text mb="sm">
        Use styled components syntax with Mantine theme and{' '}
        <Anchor component={Link} to="/styles/styled/">
          @emotion/styled:
        </Anchor>
      </Text>
      <Prism
        language="tsx"
        radius="md"
        noCopy
        styles={(theme) => ({
          code: {
            backgroundColor:
              theme.colorScheme === 'dark' ? `${theme.colors.dark[7]} !important` : undefined,
          },
        })}
      >
        {code}
      </Prism>
    </Box>
  );
}
