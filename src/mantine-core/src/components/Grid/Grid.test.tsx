import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@mantine/tests';
import { Grid, GridProps } from './Grid';
import { Col } from './Col/Col';

const defaultProps: GridProps = {
  children: [<Col key={1}>1</Col>, <Col key={2}>2</Col>],
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

  it('supports getting Col ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Grid>
        <Grid.Col ref={ref} />
      </Grid>
    );
    expect(ref.current instanceof HTMLDivElement).toBe(true);
  });
});
