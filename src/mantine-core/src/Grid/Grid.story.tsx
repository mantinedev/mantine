import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../Card/Card';
import { Grid, Col } from './Grid';

storiesOf('@mantine/core/Grid', module).add('General usage', () => (
  <div style={{ background: 'blue' }}>
    <Grid>
      <Col span={3}>
        <Card shadow="md">1</Card>
      </Col>
      <Col span={3}>
        <Card shadow="md">2</Card>
      </Col>
      <Col span={3}>
        <Card shadow="md">3</Card>
      </Col>
      <Col span={3}>
        <Card shadow="md">4</Card>
      </Col>
    </Grid>
  </div>
));
