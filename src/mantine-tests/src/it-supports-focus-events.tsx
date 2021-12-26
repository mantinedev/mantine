import React from 'react';
import { render, fireEvent } from '@testing-library/react';

export function itSupportsFocusEvents(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  selector: string
) {
  it('supports focus events', () => {
    const onFocusSpy = jest.fn();
    const onBlurSpy = jest.fn();
    const { container } = render(
      <Component {...requiredProps} onFocus={onFocusSpy} onBlur={onBlurSpy} />
    );

    fireEvent.focus(container.querySelector(selector));
    expect(onFocusSpy).toHaveBeenCalled();

    fireEvent.blur(container.querySelector(selector));
    expect(onBlurSpy).toHaveBeenCalled();
  });
}
