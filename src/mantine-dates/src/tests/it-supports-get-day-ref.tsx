import React from 'react';
import { render } from '@testing-library/react';

export interface MonthTestProps {
  __getDayRef?(rowIndex: number, cellIndex: number, node: HTMLButtonElement): void;
}

export function itSupportsGetDayRef(
  Component: React.FC<MonthTestProps>,
  requiredProps?: Record<string, any>
) {
  it('supports __getDayRef', () => {
    const daysRefs: Record<string, HTMLButtonElement> = {};
    render(
      <Component
        {...requiredProps}
        __getDayRef={(rowIndex, cellIndex, node) => {
          daysRefs[`${rowIndex}.${cellIndex}`] = node;
        }}
      />
    );

    expect(Object.keys(daysRefs)).toHaveLength(35);
    expect(daysRefs['0.0']).toBeInstanceOf(HTMLButtonElement);
  });
}
