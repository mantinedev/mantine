import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  itRendersChildren,
  itSupportsRef,
  itSupportsSystemProps,
  renderWithAct,
  actAsync,
} from '@mantine/tests';
import { FloatingTooltip, FloatingTooltipProps } from './FloatingTooltip';

const defaultProps: FloatingTooltipProps = {
  withinPortal: false,
  label: 'test-tooltip',
  children: 'test-target',
  transitionDuration: 0,
};

describe('@mantine/core/FloatingTooltip', () => {
  afterEach(() => jest.useRealTimers());

  itRendersChildren(FloatingTooltip, defaultProps);
  itSupportsRef(FloatingTooltip, { ...defaultProps, opened: true }, HTMLDivElement, 'tooltipRef');
  itSupportsSystemProps({
    component: FloatingTooltip,
    props: defaultProps,
    displayName: '@mantine/core/FloatingTooltip',
    refType: HTMLDivElement,
  });

  it('renders given label', async () => {
    await renderWithAct(<FloatingTooltip {...defaultProps} opened />);
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
