import React from 'react';
import { itSupportsSystemProps, checkAccessibility, patchConsoleError } from '@mantine/tests';
import { render } from '@testing-library/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { TooltipFloating } from './TooltipFloating/TooltipFloating';
import { TooltipGroup } from './TooltipGroup/TooltipGroup';
import { TOOLTIP_ERRORS } from './Tooltip.errors';

const defaultProps: TooltipProps = {
  withinPortal: false,
  opened: true,
  transitionDuration: 0,
  label: 'test-tooltip',
  children: <button type="button">test-target</button>,
};

describe('@mantine/core/Tooltip', () => {
  checkAccessibility([<Tooltip {...defaultProps} />]);
  itSupportsSystemProps({
    component: Tooltip,
    props: defaultProps,
    displayName: '@mantine/core/Tooltip',
    name: 'Tooltip',
  });

  it('throws error if children cannot be processed', () => {
    const TestTooltip: any = Tooltip;
    const error = new Error(TOOLTIP_ERRORS.children);
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

  it('allows to get child ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Tooltip label="tooltip" opened>
        <button type="button" ref={ref}>
          target
        </button>
      </Tooltip>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('exposes TooltipGroup and TooltipFloating as static properties', () => {
    expect(Tooltip.Floating).toBe(TooltipFloating);
    expect(Tooltip.Group).toBe(TooltipGroup);
  });
});
