import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itRendersChildren, itSupportsSystemProps, renderWithAct, actAsync } from '@mantine/tests';
import { FloatingTooltip, FloatingTooltipProps } from './FloatingTooltip';

const defaultProps: FloatingTooltipProps = {
  label: 'test-tooltip',
  children: 'test-target',
  transitionDuration: 0,
};

describe('@mantine/core/FloatingTooltip', () => {
  afterEach(() => jest.useRealTimers());

  itRendersChildren(FloatingTooltip, defaultProps);

  itSupportsSystemProps({
    component: FloatingTooltip,
    props: defaultProps,
    displayName: '@mantine/core/FloatingTooltip',
    refType: HTMLDivElement,
  });

  it('supports getting ref with tooltipRef prop', async () => {
    const ref = React.createRef<typeof HTMLDivElement>();
    await act(async () => {
      await renderWithAct(<FloatingTooltip {...defaultProps} {...{ tooltipRef: ref as any }} />);
      userEvent.hover(screen.getByText(/test-target/i));
    });
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('renders given label', async () => {
    await act(async () => {
      await renderWithAct(<FloatingTooltip {...defaultProps} />);
      userEvent.hover(screen.getByText(/test-target/i));
    });
    expect(screen.getByText('test-tooltip')).toBeInTheDocument();
  });

  it('shows/hide tooltip when mouse enters/leaves element', async () => {
    await renderWithAct(
      <FloatingTooltip {...defaultProps}>
        <button type="button">test-target</button>
      </FloatingTooltip>
    );
    expect(screen.queryAllByText('test-tooltip')).toHaveLength(0);
    await actAsync(() => userEvent.hover(screen.getByRole('button')));
    expect(screen.getByText('test-tooltip')).toBeInTheDocument();
    await actAsync(() => userEvent.unhover(screen.getByRole('button')));
    expect(screen.queryAllByText('test-tooltip')).toHaveLength(0);
  });
});
