import { patchConsoleError, render, screen, tests, userEvent } from '@mantine-tests/core';
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
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    selector: '[role="tooltip"]',
    // Gets ref from children instead of tooltip to allow nested tooltips/popovers to work
    refType: HTMLButtonElement,
    displayName: '@mantine/core/Tooltip',
    stylesApiSelectors: ['tooltip'],
  });

  it('throws error if children cannot be processed', () => {
    const TestTooltip: any = Tooltip;
    const error = new Error(
      '[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported'
    );
    patchConsoleError();
    expect(() => render(<TestTooltip>Hello</TestTooltip>)).toThrow(error);
    expect(() => render(<TestTooltip>{2}</TestTooltip>)).toThrow(error);
    expect(() =>
      render(
        <TestTooltip>
          <>fragment</>
        </TestTooltip>
      )
    ).toThrow(error);
    expect(() =>
      render(
        <TestTooltip>
          <div>node 1</div>
          <div>node 2</div>
        </TestTooltip>
      )
    ).toThrow(error);
    patchConsoleError.release();
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
