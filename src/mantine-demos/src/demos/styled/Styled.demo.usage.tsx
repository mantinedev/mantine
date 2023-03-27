import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { rem } from '@mantine/core';
import styled from '@emotion/styled';

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

const StyledComponent = styled.div`
  text-align: center;
  background-color: ${({ theme }) =>
    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]};
  padding: ${rem(30)};
  border-radius: ${rem(5)};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]};
  }
`;

function Demo() {
  return <StyledComponent>Styled component</StyledComponent>;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
