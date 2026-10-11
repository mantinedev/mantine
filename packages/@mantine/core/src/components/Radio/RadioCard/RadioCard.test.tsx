import { createEvent, fireEvent } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import { RadioCard, RadioCardProps, RadioCardStylesNames } from './RadioCard';

const defaultProps: RadioCardProps = {};

describe('@mantine/core/RadioCard', () => {
  tests.axe([
    <RadioCard key="1">Label</RadioCard>,
    <RadioCard checked key="2">
      Label
    </RadioCard>,
  ]);

  tests.itSupportsSystemProps<RadioCardProps, RadioCardStylesNames>({
    component: RadioCard,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/RadioCard',
    stylesApiSelectors: ['card'],
  });

  it('sets aria-checked attribute based on checked prop', () => {
    const { rerender } = render(<RadioCard checked />);
    expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'true');

    rerender(<RadioCard checked={false} />);
    expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'false');
  });

  it('sets data-checked attribute based on checked prop', () => {
    const { rerender } = render(<RadioCard checked />);
    expect(screen.getByRole('radio')).toHaveAttribute('data-checked', 'true');

    rerender(<RadioCard checked={false} />);
    expect(screen.getByRole('radio')).not.toHaveAttribute('data-checked');
  });

  it('sets data-with-border attribute based on withBorder prop', () => {
    const { rerender } = render(<RadioCard withBorder />);
    expect(screen.getByRole('radio')).toHaveAttribute('data-with-border', 'true');

    rerender(<RadioCard withBorder={false} />);
    expect(screen.getByRole('radio')).not.toHaveAttribute('data-with-border');
  });

  it('handles arrow down keyboard navigation', () => {
    render(
      <div>
        <RadioCard name="test" value="1">
          Option 1
        </RadioCard>
        <RadioCard name="test" value="2">
          Option 2
        </RadioCard>
        <RadioCard name="test" value="3">
          Option 3
        </RadioCard>
      </div>
    );

    const radios = screen.getAllByRole('radio');
    radios[0].focus();

    const arrowDownEvent = createEvent.keyDown(radios[0], { code: 'ArrowDown' });
    fireEvent(radios[0], arrowDownEvent);

    expect(radios[1]).toHaveFocus();
  });

  it('handles arrow up keyboard navigation', () => {
    render(
      <div>
        <RadioCard name="test" value="1">
          Option 1
        </RadioCard>
        <RadioCard name="test" value="2">
          Option 2
        </RadioCard>
        <RadioCard name="test" value="3">
          Option 3
        </RadioCard>
      </div>
    );

    const radios = screen.getAllByRole('radio');
    radios[1].focus();

    const arrowUpEvent = createEvent.keyDown(radios[1], { code: 'ArrowUp' });
    fireEvent(radios[1], arrowUpEvent);

    expect(radios[0]).toHaveFocus();
  });

  it('wraps around when navigating with arrow down from last item', () => {
    render(
      <div>
        <RadioCard name="test" value="1">
          Option 1
        </RadioCard>
        <RadioCard name="test" value="2">
          Option 2
        </RadioCard>
      </div>
    );

    const radios = screen.getAllByRole('radio');
    radios[1].focus();

    const arrowDownEvent = createEvent.keyDown(radios[1], { code: 'ArrowDown' });
    fireEvent(radios[1], arrowDownEvent);

    expect(radios[0]).toHaveFocus();
  });

  it('wraps around when navigating with arrow up from first item', () => {
    render(
      <div>
        <RadioCard name="test" value="1">
          Option 1
        </RadioCard>
        <RadioCard name="test" value="2">
          Option 2
        </RadioCard>
      </div>
    );

    const radios = screen.getAllByRole('radio');
    radios[0].focus();

    const arrowUpEvent = createEvent.keyDown(radios[0], { code: 'ArrowUp' });
    fireEvent(radios[0], arrowUpEvent);

    expect(radios[1]).toHaveFocus();
  });

  it('integrates with RadioGroup context for value', () => {
    render(
      <RadioGroup value="2">
        <RadioCard value="1">Option 1</RadioCard>
        <RadioCard value="2">Option 2</RadioCard>
        <RadioCard value="3">Option 3</RadioCard>
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');
    expect(radios[1]).toHaveAttribute('aria-checked', 'true');
    expect(radios[0]).toHaveAttribute('aria-checked', 'false');
    expect(radios[2]).toHaveAttribute('aria-checked', 'false');
  });

  it('integrates with RadioGroup context for name', () => {
    render(
      <RadioGroup name="group-name">
        <RadioCard value="1">Option 1</RadioCard>
        <RadioCard value="2">Option 2</RadioCard>
      </RadioGroup>
    );

    screen.getAllByRole('radio').forEach((radio) => {
      expect(radio).toHaveAttribute('name', 'group-name');
    });
  });

  it('calls RadioGroup onChange when clicked', () => {
    const spy = jest.fn();
    render(
      <RadioGroup value="1" onChange={spy}>
        <RadioCard value="1">Option 1</RadioCard>
        <RadioCard value="2">Option 2</RadioCard>
      </RadioGroup>
    );

    fireEvent.click(screen.getAllByRole('radio')[1]);
    expect(spy).toHaveBeenCalledWith('2');
  });

  it('skips disabled cards in arrow navigation', () => {
    const spy = jest.fn();
    render(
      <RadioGroup value="1" onChange={spy}>
        <RadioCard value="1">Option 1</RadioCard>
        <RadioCard value="2" disabled>
          Option 2
        </RadioCard>
        <RadioCard value="3">Option 3</RadioCard>
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');
    radios[0].focus();
    fireEvent(radios[0], createEvent.keyDown(radios[0], { code: 'ArrowDown' }));

    expect(radios[2]).toHaveFocus();
    expect(spy).toHaveBeenCalledWith('3');
    expect(spy).not.toHaveBeenCalledWith('2');
  });

  it('disables all cards and blocks selection when Radio.Group is disabled', async () => {
    const spy = jest.fn();
    render(
      <RadioGroup disabled onChange={spy}>
        <RadioCard value="1">Option 1</RadioCard>
        <RadioCard value="2">Option 2</RadioCard>
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');
    radios.forEach((radio) => {
      expect(radio).toBeDisabled();
      expect(radio).toHaveAttribute('data-disabled', 'true');
    });

    await userEvent.click(radios[1]);
    expect(spy).not.toHaveBeenCalled();
  });

  it('makes only the checked card a tab stop', () => {
    render(
      <RadioGroup value="2">
        <RadioCard value="1">Option 1</RadioCard>
        <RadioCard value="2">Option 2</RadioCard>
        <RadioCard value="3">Option 3</RadioCard>
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');
    expect(radios.map((radio) => radio.tabIndex)).toEqual([-1, 0, -1]);
  });

  it('makes the first enabled card a tab stop when no card is checked', () => {
    render(
      <RadioGroup>
        <RadioCard value="1" disabled>
          Option 1
        </RadioCard>
        <RadioCard value="2">Option 2</RadioCard>
        <RadioCard value="3">Option 3</RadioCard>
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');
    expect(radios.map((radio) => radio.tabIndex)).toEqual([-1, 0, -1]);
  });

  it('moves the tab stop to the newly selected card', async () => {
    render(
      <RadioGroup defaultValue="1">
        <RadioCard value="1">Option 1</RadioCard>
        <RadioCard value="2">Option 2</RadioCard>
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');
    await userEvent.click(radios[1]);
    expect(radios.map((radio) => radio.tabIndex)).toEqual([-1, 0]);
  });

  it('selects first and last enabled cards with Home and End keys', () => {
    const spy = jest.fn();
    render(
      <RadioGroup value="2" onChange={spy}>
        <RadioCard value="1">Option 1</RadioCard>
        <RadioCard value="2">Option 2</RadioCard>
        <RadioCard value="3">Option 3</RadioCard>
        <RadioCard value="4" disabled>
          Option 4
        </RadioCard>
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');
    radios[1].focus();
    fireEvent(radios[1], createEvent.keyDown(radios[1], { code: 'End' }));
    expect(radios[2]).toHaveFocus();
    expect(spy).toHaveBeenLastCalledWith('3');

    fireEvent(radios[2], createEvent.keyDown(radios[2], { code: 'Home' }));
    expect(radios[0]).toHaveFocus();
    expect(spy).toHaveBeenLastCalledWith('1');
  });
});
