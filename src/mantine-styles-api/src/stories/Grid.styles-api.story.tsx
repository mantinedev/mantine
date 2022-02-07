import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Col } from '@mantine/core';

storiesOf('@mantine/core/Grid/styles-api', module).add('With sx prop', () => (
  <div style={{ padding: 40 }}>
    <Grid sx={{ border: '1px solid red' }}>
      <Col span={4} sx={{ border: '1px solid blue' }}>
        Col
      </Col>
    </Grid>
  </div>
));
