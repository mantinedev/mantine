import React from 'react';
import { Container } from './Container';

export default { title: 'Container' };

export const PaddingFromProps = () => (
  <div style={{ padding: 40 }}>
    <Container style={{ background: '#CCC' }} px={80}>
      With px
    </Container>

    <Container style={{ background: '#CCC' }} sx={{ paddingLeft: 50, paddingRight: 50 }}>
      With sx
    </Container>
  </div>
);
