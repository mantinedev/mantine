import { render } from '@testing-library/react';
import { screen, tests } from '@mantine-tests/core';
import { MantineProvider } from '../../core';
import { OptionalPortal } from './OptionalPortal';

describe('@mantine/core/OptionalPortal', () => {
  tests.itHasExtend({ component: OptionalPortal });

  it('correctly handles withinPortal prop', () => {
    const target = document.createElement('div');
    const { rerender } = render(
      <MantineProvider>
        <OptionalPortal withinPortal={false} target={target}>
          <span>test-portal</span>
        </OptionalPortal>
      </MantineProvider>
    );
    expect(screen.getByText('test-portal')).toBeInTheDocument();
    expect(target.querySelectorAll('*')).toHaveLength(0);

    rerender(
      <MantineProvider>
        <OptionalPortal withinPortal target={target}>
          <span>test-portal</span>
        </OptionalPortal>
      </MantineProvider>
    );

    expect(screen.queryByText('test-portal')).not.toBeInTheDocument();
    expect(target.querySelectorAll('*')).toHaveLength(1);
  });
});
