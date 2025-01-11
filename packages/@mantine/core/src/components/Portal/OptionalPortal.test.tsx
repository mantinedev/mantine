import { render, screen, tests } from '@mantine-tests/core';
import { OptionalPortal } from './OptionalPortal';

describe('@mantine/core/OptionalPortal', () => {
  tests.itHasExtend({ component: OptionalPortal });
  tests.itSupportsRef({
    component: OptionalPortal,
    props: { children: 'test' },
    refType: HTMLDivElement,
  });

  it('correctly handles withinPortal prop', () => {
    const target = document.createElement('div');
    const { rerender } = render(
      <OptionalPortal withinPortal={false} target={target}>
        <span>test-portal</span>
      </OptionalPortal>
    );
    expect(screen.getByText('test-portal')).toBeInTheDocument();
    expect(target.querySelectorAll('*')).toHaveLength(0);

    rerender(
      <OptionalPortal withinPortal target={target}>
        <span>test-portal</span>
      </OptionalPortal>
    );

    expect(screen.queryByText('test-portal')).not.toBeInTheDocument();
    expect(target.querySelectorAll('*')).toHaveLength(1);
  });
});
