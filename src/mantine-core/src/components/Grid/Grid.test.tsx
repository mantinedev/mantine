import React from 'react';
import { itSupportsSystemProps } from '@mantine/tests';
import { Grid, GridProps } from './Grid';
import { Col } from './Col/Col';

const defaultProps: GridProps = {
  children: [<Col span={1}>1</Col>, <Col span={1}>2</Col>],
};

describe('@mantine/core/Grid', () => {
  itSupportsSystemProps({
    component: Grid,
    props: defaultProps,
    displayName: '@mantine/core/Grid',
    refType: HTMLDivElement,
  });

  it('exposes Col as Grid.Col', () => {
    expect(Grid.Col).toBe(Col);
  });
});
