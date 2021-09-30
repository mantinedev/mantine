import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../Card/Card';
import { Grid, Col } from './index';

storiesOf('@mantine/core/Grid', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <div style={{ background: 'blue' }}>
        <Grid gutter="xl" align="center">
          <Col span={10} offset={2}>
            <Card shadow="md">Col with offset</Card>
          </Col>
          <Col sm={4} lg={6} span={12}>
            <Card shadow="md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto illo pariatur
              veritatis, nemo rem numquam eligendi rerum ex laudantium accusamus quisquam aliquid
              recusandae, provident cumque voluptas, iste consequatur repellendus maiores.
            </Card>
          </Col>
          <Col sm={4} lg={6} span={12}>
            <Card shadow="md">2</Card>
          </Col>
          <Col sm={4} lg={6} span={12}>
            <Card shadow="md">3</Card>
          </Col>
          <Col sm={12} lg={6} span={12}>
            <Card shadow="md">4</Card>
          </Col>
        </Grid>
      </div>
    </div>
  ))
  .add('Column content overflow', () => (
    <div style={{ padding: 40 }}>
      <div style={{ background: 'blue' }}>
        <Grid gutter="xl" align="center">
          <Col span={10}>
            <Card shadow="md">2</Card>
          </Col>
          <Col span={2}>
            <Card shadow="md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, quidem? Commodi, nemo
              deserunt. Beatae dolor quam corporis non blanditiis temporibus maiores, natus nemo
              deleniti corrupti repellendus illo amet earum nam?
            </Card>
          </Col>
        </Grid>
      </div>
    </div>
  ));
