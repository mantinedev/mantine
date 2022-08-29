import React from 'react';
import styled from '@emotion/styled';

const code = `
import styled from '@emotion/styled';

const StyledComponent = styled.div\`
  text-align: center;
  background-color: \${({ theme }) =>
    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]};
  padding: 30px;
  border-radius: 5px;
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
  padding: 30px;
  border-radius: 5px;
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
