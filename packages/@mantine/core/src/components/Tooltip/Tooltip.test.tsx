import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Tooltip, TooltipProps } from './Tooltip';
import { TooltipStylesNames } from './Tooltip.types';
import { TooltipFloating } from './TooltipFloating/TooltipFloating';
import { TooltipGroup } from './TooltipGroup/TooltipGroup';

const defaultProps: TooltipProps = {
  withinPortal: false,
  opened: true,
  transitionProps: { duration: 0 },
  label: 'test-tooltip',
  children: <button type="button">test-target</button>,
};

describe('@mantine/core/Tooltip', () => {
  tests.itSupportsSystemProps<TooltipProps, TooltipStylesNames>({
    component: Tooltip,
    props: defaultProps,
    varsResolver: true,
    attributes: false,
    id: false,
    selector: '[role="tooltip"]',
    // Gets ref from children instead of tooltip to allow nested tooltips/popovers to work
    displayName: '@mantine/core/Tooltip',
    stylesApiSelectors: ['tooltip'],
  });

  it('shows tooltip when target element is hovered', async () => {
    render(
      <Tooltip label="test-tooltip" transitionProps={{ duration: 0 }}>
        <button type="button">target</button>
      </Tooltip>
    );

    await userEvent.hover(screen.getByRole('button'));
    expect(screen.getByText('test-tooltip')).toBeInTheDocument();

    await userEvent.unhover(screen.getByRole('button'));
    expect(screen.queryAllByText('test-tooltip')).toHaveLength(0);
  });

  it('does not set data-interactive attribute by default', () => {
    render(<Tooltip {...defaultProps} />);
    expect(screen.getByRole('tooltip')).not.toHaveAttribute('data-interactive');
  });

  it('sets data-interactive attribute when tooltip is opened with interactive prop', () => {
    render(<Tooltip {...defaultProps} interactive />);
    expect(screen.getByRole('tooltip')).toHaveAttribute('data-interactive');
  });

  it('does not set data-interactive attribute on a hidden tooltip with keepMounted prop', () => {
    render(<Tooltip {...defaultProps} interactive opened={false} keepMounted />);
    expect(screen.getByRole('tooltip', { hidden: true })).not.toHaveAttribute('data-interactive');
  });

  it('does not set data-interactive attribute on a disabled tooltip', () => {
    render(<Tooltip {...defaultProps} interactive disabled keepMounted />);
    expect(screen.getByRole('tooltip', { hidden: true })).not.toHaveAttribute('data-interactive');
  });

  it('exposes TooltipGroup and TooltipFloating as static properties', () => {
    expect(Tooltip.Floating).toBe(TooltipFloating);
    expect(Tooltip.Group).toBe(TooltipGroup);
  });

  it('shows tooltip by default', () => {
    render(
      <Tooltip label="test-tooltip" defaultOpened transitionProps={{ duration: 0 }}>
        <button type="button">target</button>
      </Tooltip>
    );

    expect(screen.getByText('test-tooltip')).toBeInTheDocument();
  });
});
