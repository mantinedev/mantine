import { createEvent, fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
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
});
