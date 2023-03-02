import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export interface ComponentTestProps {
  numberOfColumns?: number;
}

export function itHandlesMonthKeyboardEvents(
  Component: React.FC<ComponentTestProps>,
  requiredProps?: Record<string, any>
) {
  it('handles month arrow keyboard events correctly (numberOfColumns=1)', async () => {
    const { container } = render(<Component {...requiredProps} numberOfColumns={1} />);
    const days = container.querySelectorAll('table button');

    await userEvent.click(days[0]);
    expect(days[0]).toHaveFocus();

    await userEvent.type(days[0], '{ArrowRight}', { skipClick: true });
    expect(days[1]).toHaveFocus();

    await userEvent.type(days[1], '{ArrowDown}', { skipClick: true });
    expect(days[8]).toHaveFocus();

    await userEvent.type(days[8], '{ArrowLeft}', { skipClick: true });
    expect(days[7]).toHaveFocus();

    await userEvent.type(days[7], '{ArrowUp}', { skipClick: true });
    expect(days[0]).toHaveFocus();
  });

  it('handles month arrow keyboard events correctly (numberOfColumns=2)', async () => {
    const { container } = render(<Component {...requiredProps} numberOfColumns={2} />);
    const months = container.querySelectorAll('.mantine-Month-month');
    const firstMonthDays = months[0].querySelectorAll('button');
    const secondMonthDays = months[1].querySelectorAll('button');

    await userEvent.click(firstMonthDays[5]);
    expect(firstMonthDays[5]).toHaveFocus();

    await userEvent.type(firstMonthDays[5], '{ArrowRight}', { skipClick: true });
    expect(firstMonthDays[6]).toHaveFocus();

    await userEvent.type(firstMonthDays[6], '{ArrowRight}', { skipClick: true });
    expect(secondMonthDays[0]).toHaveFocus();

    await userEvent.type(secondMonthDays[0], '{ArrowDown}', { skipClick: true });
    expect(secondMonthDays[7]).toHaveFocus();

    await userEvent.type(secondMonthDays[7], '{ArrowLeft}', { skipClick: true });
    expect(firstMonthDays[13]).toHaveFocus();
  });

  it('handles month arrow keyboard events correctly at month edges', async () => {
    const { container } = render(<Component {...requiredProps} numberOfColumns={1} />);
    const days = container.querySelectorAll('table button');

    await userEvent.type(days[6], '{ArrowRight}');
    expect(days[6]).toHaveFocus();

    await userEvent.type(days[0], '{ArrowLeft}');
    expect(days[0]).toHaveFocus();

    await userEvent.type(days[0], '{ArrowUp}');
    expect(days[0]).toHaveFocus();

    await userEvent.type(days[days.length - 1], '{ArrowDown}');
    expect(days[days.length - 1]).toHaveFocus();
  });
}
