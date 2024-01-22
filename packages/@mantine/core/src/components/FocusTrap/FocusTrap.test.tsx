import React from 'react';
import { render, screen } from '@mantine-tests/core';
import { FocusTrap } from './FocusTrap';

describe('@mantine/core/FocusTrap', () => {
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
