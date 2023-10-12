import React from 'react';
import { wait, render, screen, userEvent } from '@mantine/tests';
import { FocusTrap } from './FocusTrap';

describe('@mantine/core/FocusTrap', () => {
  it('traps focus at given node', async () => {
    render(
      <FocusTrap>
        <div>
          <input />
          <button type="button">Button</button>
        </div>
      </FocusTrap>
    );

    await wait(10);
    expect(screen.getByRole('textbox')).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole('button')).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole('textbox')).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole('button')).toHaveFocus();
  });

  it('does not trap focus if active is false', async () => {
    render(
      <FocusTrap active={false}>
        <div>
          <input />
          <button type="button">Button</button>
        </div>
      </FocusTrap>
    );

    await wait(10);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole('textbox')).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole('button')).toHaveFocus();

    userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('traps focus on shift + tab', async () => {
    render(
      <FocusTrap>
        <div>
          <input />
          <button type="button">Button</button>
          <input type="radio" />
        </div>
      </FocusTrap>
    );

    await wait(10);
    expect(screen.getByRole('textbox')).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole('button')).toHaveFocus();

    userEvent.tab({ shift: true });
    await wait(10);
    expect(screen.getByRole('textbox')).toHaveFocus();

    userEvent.tab({ shift: true });
    await wait(10);
    expect(screen.getByRole('radio')).toHaveFocus();
  });

  it('traps focus on shift + tab and handles Radio Groups', async () => {
    render(
      <FocusTrap>
        <div>
          <label htmlFor="1">
            Option One
            <input type="radio" name="group" id="1" />
          </label>

          <label htmlFor="2">
            Option Two
            <input type="radio" name="group" id="2" />
          </label>

          <label htmlFor="3">
            Option Three
            <input type="radio" name="group" id="3" />
          </label>

          <button type="button">Button</button>
        </div>
      </FocusTrap>
    );

    await wait(10);
    expect(screen.getByLabelText('Option One')).toHaveFocus();

    userEvent.tab();
    expect(screen.getByRole('button')).toHaveFocus();

    userEvent.tab({ shift: true });
    await wait(10);
    expect(screen.getByLabelText('Option Three')).toHaveFocus();

    userEvent.tab({ shift: true });
    await wait(10);
    expect(screen.getByRole('button')).toHaveFocus();
  });

  it('manages aria-hidden attributes', () => {
    const adjacentDiv = document.createElement('div');
    adjacentDiv.setAttribute('data-testid', 'adjacent');
    document.body.appendChild(adjacentDiv);

    const { rerender } = render(
      <FocusTrap active>
        <div />
      </FocusTrap>
    );

    const adjacent = screen.getByTestId('adjacent');
    expect(adjacent).toHaveAttribute('aria-hidden', 'true');

    rerender(
      <FocusTrap active={false}>
        <div />
      </FocusTrap>
    );

    expect(adjacent).not.toHaveAttribute('aria-hidden');
  });

  it('has correct displayName', () => {
    expect(FocusTrap.displayName).toBe('@mantine/core/FocusTrap');
  });
});
