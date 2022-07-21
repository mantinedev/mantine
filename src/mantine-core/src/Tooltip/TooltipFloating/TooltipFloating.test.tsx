import React from 'react';
import { itSupportsSystemProps, checkAccessibility, patchConsoleError } from '@mantine/tests';
import { render } from '@testing-library/react';
import { TooltipFloating, TooltipFloatingProps } from './TooltipFloating';
import { TOOLTIP_ERRORS } from '../Tooltip.errors';

const defaultProps: TooltipFloatingProps = {
  withinPortal: false,
  label: 'test-tooltip',
  children: <button type="button">test-target</button>,
};

describe('@mantine/core/Tooltip', () => {
  checkAccessibility([<TooltipFloating {...defaultProps} />]);
  itSupportsSystemProps({
    component: TooltipFloating,
    props: defaultProps,
    displayName: '@mantine/core/TooltipFloating',
    providerName: 'TooltipFloating',
  });

  it('throws error if children cannot be processed', () => {
    const TestTooltip: any = TooltipFloating;
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
      <TooltipFloating label="tooltip">
        <button type="button" ref={ref}>
          target
        </button>
      </TooltipFloating>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
