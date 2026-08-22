import { render, screen, userEvent } from '@mantine-tests/core';
import { TooltipFloating } from './TooltipFloating';

function TargetWithoutMouseCoordinates({ onMouseEnter, ...others }: any) {
  return (
    <button {...others} type="button" onClick={() => onMouseEnter({ chartX: 10, chartY: 20 })}>
      target
    </button>
  );
}

describe('@mantine/core/TooltipFloating', () => {
  it('does not set NaN position when children call onMouseEnter without mouse coordinates', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <TooltipFloating label="test-tooltip" withinPortal={false}>
        <TargetWithoutMouseCoordinates />
      </TooltipFloating>
    );

    await userEvent.click(screen.getByRole('button'));

    const nanWarnings = spy.mock.calls.filter((call) => String(call[0]).includes('NaN'));
    spy.mockRestore();

    expect(nanWarnings).toHaveLength(0);
    expect(screen.getByText('test-tooltip').getAttribute('style')).not.toContain('NaN');
  });
});
