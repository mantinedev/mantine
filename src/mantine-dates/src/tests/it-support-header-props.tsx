import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export interface HeaderTestProps {
  nextIcon?: React.ReactNode;
  previousIcon?: React.ReactNode;
  nextLabel?: string;
  previousLabel?: string;
  onNext?(): void;
  onPrevious?(): void;
  onLevelClick?(): void;
  levelControlAriaLabel?: any;
  nextDisabled?: boolean;
  previousDisabled?: boolean;
  withNext?: boolean;
  withPrevious?: boolean;
  hasNextLevel?: boolean;
  __preventFocus?: boolean;
  getLevelControlAriaLabel?(month: Date): string;
}

export function itSupportsHeaderProps(
  Component: React.FC<HeaderTestProps>,
  requiredProps?: Record<string, any>
) {
  it('supports nextIcon and previousIcon props', () => {
    render(
      <Component {...requiredProps} nextIcon="test-next-icon" previousIcon="test-previous-icon" />
    );

    expect(screen.getByLabelText('next').textContent).toBe('test-next-icon');
    expect(screen.getByLabelText('prev').textContent).toBe('test-previous-icon');
  });

  it('supports nextLabel and previousLabel props', () => {
    const { container } = render(
      <Component
        {...requiredProps}
        nextLabel="test-next-label"
        previousLabel="test-previous-label"
      />
    );

    expect(container.querySelector('[data-next]')).toHaveAttribute('aria-label', 'test-next-label');
    expect(container.querySelector('[data-previous]')).toHaveAttribute(
      'aria-label',
      'test-previous-label'
    );
  });

  it('supports onNext and onPrevious props', async () => {
    const onNext = jest.fn();
    const onPrevious = jest.fn();
    render(<Component {...requiredProps} onNext={onNext} onPrevious={onPrevious} />);

    await userEvent.click(screen.getByLabelText('next'));
    expect(onNext).toHaveBeenCalledTimes(1);
    expect(onPrevious).toHaveBeenCalledTimes(0);

    await userEvent.click(screen.getByLabelText('prev'));
    expect(onNext).toHaveBeenCalledTimes(1);
    expect(onPrevious).toHaveBeenCalledTimes(1);
  });

  it('calls onLevelClick when level control is clicked', async () => {
    const spy = jest.fn();
    render(<Component {...requiredProps} levelControlAriaLabel="click me" onLevelClick={spy} />);

    await userEvent.click(screen.getByLabelText('click me'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('supports nextDisabled prop', () => {
    const { rerender } = render(<Component {...requiredProps} nextDisabled />);
    expect(screen.getByLabelText('next')).toHaveAttribute('data-disabled');
    expect(screen.getByLabelText('next')).toHaveAttribute('disabled');

    rerender(<Component {...requiredProps} nextDisabled={false} />);
    expect(screen.getByLabelText('next')).not.toHaveAttribute('data-disabled');
    expect(screen.getByLabelText('next')).not.toHaveAttribute('disabled');
  });

  it('supports previousDisabled prop', () => {
    const { rerender } = render(<Component {...requiredProps} previousDisabled />);
    expect(screen.getByLabelText('prev')).toHaveAttribute('data-disabled');
    expect(screen.getByLabelText('prev')).toHaveAttribute('disabled');

    rerender(<Component {...requiredProps} previousDisabled={false} />);
    expect(screen.getByLabelText('prev')).not.toHaveAttribute('data-disabled');
    expect(screen.getByLabelText('prev')).not.toHaveAttribute('disabled');
  });

  it('supports hasNextLevel prop', () => {
    const { rerender } = render(
      <Component {...requiredProps} levelControlAriaLabel="test-level" hasNextLevel />
    );
    expect(screen.getByLabelText('test-level')).not.toHaveAttribute('data-static');

    rerender(
      <Component {...requiredProps} levelControlAriaLabel="test-level" hasNextLevel={false} />
    );
    expect(screen.getByLabelText('test-level')).toHaveAttribute('data-static');
  });

  it('does not call onLevelClick when level is clicked and hasNextLevel is false', async () => {
    const spy = jest.fn();
    const { rerender } = render(
      <Component
        {...requiredProps}
        levelControlAriaLabel="test-level"
        hasNextLevel
        onLevelClick={spy}
      />
    );

    await userEvent.click(screen.getByLabelText('test-level'));
    expect(spy).toHaveBeenCalledTimes(1);

    rerender(
      <Component
        {...requiredProps}
        levelControlAriaLabel="test-level"
        hasNextLevel={false}
        onLevelClick={spy}
      />
    );

    await userEvent.click(screen.getByLabelText('test-level'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('handles focus as usual when __preventFocus is set to false', async () => {
    render(
      <Component {...requiredProps} __preventFocus={false} levelControlAriaLabel="test-level" />
    );
    await userEvent.click(screen.getByLabelText('next'));
    expect(screen.getByLabelText('next')).toHaveFocus();

    await userEvent.click(screen.getByLabelText('test-level'));
    expect(screen.getByLabelText('test-level')).toHaveFocus();

    await userEvent.click(screen.getByLabelText('prev'));
    expect(screen.getByLabelText('prev')).toHaveFocus();
  });

  it('does not focus controls on click when __preventFocus is set to true', async () => {
    render(<Component {...requiredProps} __preventFocus levelControlAriaLabel="test-level" />);

    await userEvent.click(screen.getByLabelText('next'));
    expect(document.body).toHaveFocus();

    await userEvent.click(screen.getByLabelText('test-level'));
    expect(document.body).toHaveFocus();

    await userEvent.click(screen.getByLabelText('prev'));
    expect(document.body).toHaveFocus();
  });
}
