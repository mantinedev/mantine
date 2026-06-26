import { createRef } from 'react';
import { render, tests } from '@mantine-tests/core';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  expanded: true,
  children: <div style={{ height: '20vh' }} />,
};

describe('@mantine/core/Collapse', () => {
  tests.itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    children: true,
    classes: false,
    displayName: '@mantine/core/Collapse',
  });

  it('applies style and ref props when transitionDuration is 0 (#9010)', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(
      <Collapse
        expanded
        transitionDuration={0}
        ref={ref}
        style={{ color: 'red' }}
        data-testid="collapse"
      >
        <div />
      </Collapse>
    );

    const element = container.querySelector<HTMLDivElement>('[data-testid="collapse"]')!;
    expect(element).toHaveStyle({ color: 'rgb(255, 0, 0)' });
    expect(ref.current).toBe(element);
  });
});
