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
import { Tooltip, TooltipProps } from './Tooltip';

const defaultProps: TooltipProps = {
  withinPortal: false,
  label: 'test-tooltip',
  children: 'test-target',
  transitionDuration: 0,
};

describe('@mantine/core/Tooltip', () => {
  afterEach(() => jest.useRealTimers());

  itRendersChildren(Tooltip, defaultProps);
  itSupportsRef(Tooltip, { ...defaultProps, opened: true }, HTMLDivElement, 'tooltipRef');
  itSupportsSystemProps({
    component: Tooltip,
    props: defaultProps,
    displayName: '@mantine/core/Tooltip',
    refType: HTMLDivElement,
  });

  it('renders given label', async () => {
    await renderWithAct(<Tooltip {...defaultProps} opened />);
    expect(screen.getByText('test-tooltip')).toBeInTheDocument();
  });

  it('shows/hide tooltip when mouse enters/leaves element', async () => {
    await renderWithAct(
      <Tooltip {...defaultProps}>
        <button type="button">test-target</button>
      </Tooltip>
    );
    expect(screen.queryAllByText('test-tooltip')).toHaveLength(0);
    await actAsync(() => userEvent.hover(screen.getByRole('button')));
    expect(screen.getByText('test-tooltip')).toBeInTheDocument();
    await actAsync(() => userEvent.unhover(screen.getByRole('button')));
    expect(screen.queryAllByText('test-tooltip')).toHaveLength(0);
  });

  it('shows/hide tooltip when element focuses/blurs', async () => {
    await renderWithAct(
      <Tooltip {...defaultProps}>
        <button type="button">test-target</button>
      </Tooltip>
    );
    expect(screen.queryAllByText('test-tooltip')).toHaveLength(0);
    await actAsync(() => userEvent.tab());
    expect(screen.getByRole('button')).toHaveFocus();
    expect(screen.getByText('test-tooltip')).toBeInTheDocument();
    await actAsync(() => userEvent.tab());
    expect(screen.getByRole('button')).not.toHaveFocus();
    expect(screen.queryAllByText('test-tooltip')).toHaveLength(0);
  });

  it('supports onMouseLeave and onMouseEnter events', async () => {
    const onMouseLeave = jest.fn();
    const onMouseEnter = jest.fn();

    await renderWithAct(
      <Tooltip {...defaultProps} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <button type="button">test-target</button>
      </Tooltip>
    );

    await actAsync(() => userEvent.hover(screen.getByRole('button')));
    expect(onMouseEnter).toHaveBeenCalled();
    expect(screen.getByText('test-tooltip')).toBeInTheDocument();
    await actAsync(() => userEvent.unhover(screen.getByRole('button')));
    expect(onMouseLeave).toHaveBeenCalled();
    expect(screen.queryAllByText('test-tooltip')).toHaveLength(0);
  });

  it('supports close delay', async () => {
    jest.useFakeTimers();

    await renderWithAct(
      <Tooltip {...defaultProps} delay={500}>
        <button type="button">test-target</button>
      </Tooltip>
    );
    expect(screen.queryAllByText('test-tooltip')).toHaveLength(0);
    await actAsync(() => userEvent.hover(screen.getByRole('button')));
    expect(screen.getByText('test-tooltip')).toBeInTheDocument();
    await actAsync(() => userEvent.unhover(screen.getByRole('button')));
    expect(screen.getByText('test-tooltip')).toBeInTheDocument();
    await actAsync(() => jest.runAllTimers());
    expect(screen.queryAllByText('test-tooltip')).toHaveLength(0);
  });

  it('sets body width based on prop', async () => {
    const { container } = await renderWithAct(<Tooltip {...defaultProps} opened width={164} />);
    expect(container.querySelector('.mantine-Tooltip-body')).toHaveStyle({ width: '164px' });
  });

  it('sets body pointer-events style based on allowPointerEvents prop', async () => {
    const { container: allow } = await renderWithAct(
      <Tooltip {...defaultProps} opened allowPointerEvents />
    );
    const { container: disallow } = await renderWithAct(
      <Tooltip {...defaultProps} opened allowPointerEvents={false} />
    );

    expect(allow.querySelector('.mantine-Tooltip-body')).toHaveStyle({ pointerEvents: 'all' });
    expect(disallow.querySelector('.mantine-Tooltip-body')).toHaveStyle({ pointerEvents: 'none' });
  });

  it('sets body white-space style based on wrapLines prop', async () => {
    const { container: wrap } = await renderWithAct(<Tooltip {...defaultProps} opened wrapLines />);
    const { container: noWrap } = await renderWithAct(
      <Tooltip {...defaultProps} opened wrapLines={false} />
    );

    expect(wrap.querySelector('.mantine-Tooltip-body')).toHaveStyle({ whiteSpace: 'normal' });
    expect(noWrap.querySelector('.mantine-Tooltip-body')).toHaveStyle({ whiteSpace: 'nowrap' });
  });
});
