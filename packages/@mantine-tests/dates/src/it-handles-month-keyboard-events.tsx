import userEvent from '@testing-library/user-event';
import { render } from '@mantine-tests/core';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
  name: string;
}

export function itHandlesMonthKeyboardEvents(
  options: Options,
  name = 'handles month arrow keyboard events correctly'
) {
  it(`${name} (numberOfColumns=1)`, async () => {
    const { container } = render(<options.component {...options.props} numberOfColumns={1} />);
    const days = container.querySelectorAll('table button');

    await userEvent.click(days[0]);
    expect(days[0]).toHaveFocus();

    await userEvent.type(days[4], '{ArrowRight}');
    expect(days[5]).toHaveFocus();

    await userEvent.type(days[4], '{ArrowDown}');
    expect(days[11]).toHaveFocus();

    await userEvent.type(days[8], '{ArrowLeft}');
    expect(days[7]).toHaveFocus();

    await userEvent.type(days[11], '{ArrowUp}');
    expect(days[4]).toHaveFocus();
  });

  it(`${name} (numberOfColumns=2)`, async () => {
    const { container } = render(<options.component {...options.props} numberOfColumns={2} />);
    const months = container.querySelectorAll(`.mantine-${options.name}-month`);
    const firstMonthDays = months[0].querySelectorAll('button');
    const secondMonthDays = months[1].querySelectorAll('button');

    await userEvent.click(firstMonthDays[5]);
    expect(firstMonthDays[5]).toHaveFocus();

    await userEvent.type(firstMonthDays[5], '{ArrowRight}');
    expect(firstMonthDays[6]).toHaveFocus();

    await userEvent.type(firstMonthDays[6], '{ArrowRight}');
    expect(firstMonthDays[7]).toHaveFocus();

    await userEvent.type(secondMonthDays[0], '{ArrowDown}');
    expect(secondMonthDays[7]).toHaveFocus();

    await userEvent.type(secondMonthDays[7], '{ArrowLeft}');
    expect(secondMonthDays[6]).toHaveFocus();

    await userEvent.type(secondMonthDays[14], '{ArrowUp}');
    expect(secondMonthDays[7]).toHaveFocus();
  });

  it(`${name} at month edges`, async () => {
    const { container } = render(<options.component {...options.props} numberOfColumns={1} />);
    const days = container.querySelectorAll('table button');

    await userEvent.type(days[6], '{ArrowRight}');
    expect(days[7]).toHaveFocus();

    await userEvent.type(days[0], '{ArrowLeft}');
    expect(days[0]).toHaveFocus();

    await userEvent.type(days[0], '{ArrowUp}');
    expect(days[0]).toHaveFocus();

    await userEvent.type(days[days.length - 1], '{ArrowDown}');
    expect(days[days.length - 1]).toHaveFocus();
  });
}
