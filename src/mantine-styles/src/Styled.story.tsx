import React from 'react';
import styled from '@emotion/styled';

const Element = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[0]};
  color: ${({ theme }) => theme.colors.orange[5]};
`;

export default { title: 'Styled' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Element>Hello there</Element>
    </div>
  );
}
