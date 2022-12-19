import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export interface ComponentTestProps {
  numberOfColumns?: number;
}

export function itHandlesControlsKeyboardEvents(
  Component: React.FC<ComponentTestProps>,
  name: string,
  listSelector: string,
  requiredProps?: Record<string, any>
) {
  it(`handles ${name} arrow keyboard events correctly (numberOfColumns=1)`, async () => {
    const { container } = render(<Component {...requiredProps} numberOfColumns={1} />);
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

  it(`handles ${name} arrow keyboard events correctly (numberOfColumns=2)`, async () => {
    const { container } = render(<Component {...requiredProps} numberOfColumns={2} />);
    const columns = container.querySelectorAll(listSelector);
    const firstColumnControls = columns[0].querySelectorAll('button');
    const secondColumnControls = columns[1].querySelectorAll('button');

    await userEvent.click(firstColumnControls[1]);
    expect(firstColumnControls[1]).toHaveFocus();

    await userEvent.type(firstColumnControls[1], '{ArrowRight}', { skipClick: true });
    expect(firstColumnControls[2]).toHaveFocus();

    await userEvent.type(firstColumnControls[2], '{ArrowRight}', { skipClick: true });
    expect(secondColumnControls[0]).toHaveFocus();

    await userEvent.type(secondColumnControls[0], '{ArrowDown}', { skipClick: true });
    expect(secondColumnControls[3]).toHaveFocus();

    await userEvent.type(secondColumnControls[3], '{ArrowLeft}', { skipClick: true });
    expect(firstColumnControls[5]).toHaveFocus();
  });

  it(`handles ${name} arrow keyboard events correctly at edges`, async () => {
    const { container } = render(<Component {...requiredProps} numberOfColumns={1} />);
    const controls = container.querySelectorAll('table button');

    await userEvent.type(controls[2], '{ArrowRight}');
    expect(controls[2]).toHaveFocus();

    await userEvent.type(controls[0], '{ArrowLeft}');
    expect(controls[0]).toHaveFocus();

    await userEvent.type(controls[0], '{ArrowUp}');
    expect(controls[0]).toHaveFocus();

    await userEvent.type(controls[controls.length - 1], '{ArrowDown}');
    expect(controls[controls.length - 1]).toHaveFocus();
  });
}
