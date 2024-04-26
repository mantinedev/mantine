import userEvent from '@testing-library/user-event';
import { render } from '@mantine-tests/core';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
  listSelector: string;
}

export function itHandlesControlsKeyboardEvents(
  options: Options,
  name = 'handles arrow keyboard events correctly'
) {
  it(`${name} (numberOfColumns=1)`, async () => {
    const { container } = render(<options.component {...options.props} numberOfColumns={1} />);
    const controls = container.querySelectorAll('table button');

    await userEvent.click(controls[0]);
    expect(controls[0]).toHaveFocus();

    await userEvent.type(controls[0], '{ArrowRight}', { skipClick: true });
    expect(controls[1]).toHaveFocus();

    await userEvent.type(controls[1], '{ArrowDown}', { skipClick: true });
    expect(controls[4]).toHaveFocus();

    await userEvent.type(controls[4], '{ArrowLeft}', { skipClick: true });
    expect(controls[3]).toHaveFocus();

    await userEvent.type(controls[3], '{ArrowUp}', { skipClick: true });
    expect(controls[0]).toHaveFocus();
  });

  it(`${name} (numberOfColumns=2)`, async () => {
    const { container } = render(<options.component {...options.props} numberOfColumns={2} />);
    const columns = container.querySelectorAll(options.listSelector);
    const firstColumnControls = columns[0].querySelectorAll('button');
    const secondColumnControls = columns[1].querySelectorAll('button');

    await userEvent.click(firstColumnControls[1]);
    expect(firstColumnControls[1]).toHaveFocus();

    await userEvent.type(firstColumnControls[1], '{ArrowRight}');
    expect(firstColumnControls[2]).toHaveFocus();

    await userEvent.type(firstColumnControls[2], '{ArrowRight}');
    expect(firstColumnControls[3]).toHaveFocus();

    await userEvent.type(firstColumnControls[firstColumnControls.length - 1], '{ArrowRight}');
    expect(secondColumnControls[0]).toHaveFocus();

    await userEvent.type(secondColumnControls[0], '{ArrowDown}');
    expect(secondColumnControls[3]).toHaveFocus();

    await userEvent.type(secondColumnControls[3], '{ArrowLeft}');
    expect(secondColumnControls[2]).toHaveFocus();

    await userEvent.type(secondColumnControls[0], '{ArrowLeft}');
    expect(firstColumnControls[firstColumnControls.length - 1]).toHaveFocus();
  });

  it(`${name} at edges`, async () => {
    const { container } = render(<options.component {...options.props} numberOfColumns={1} />);
    const controls = container.querySelectorAll('table button');

    await userEvent.type(controls[2], '{ArrowRight}');
    expect(controls[3]).toHaveFocus();

    await userEvent.type(controls[0], '{ArrowLeft}');
    expect(controls[0]).toHaveFocus();

    await userEvent.type(controls[0], '{ArrowUp}');
    expect(controls[0]).toHaveFocus();

    await userEvent.type(controls[controls.length - 1], '{ArrowDown}');
    expect(controls[controls.length - 1]).toHaveFocus();
  });
}
