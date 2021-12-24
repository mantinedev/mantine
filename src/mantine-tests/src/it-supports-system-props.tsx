import React from 'react';
import { itSupportsClassName } from './it-supports-classname';
import { itSupportsStyle } from './it-supports-style';
import { itSupportsOthers } from './it-supports-others';
import { itSupportsSx } from './it-supports-sx';
import { itSupportsMargins } from './it-supports-margins';

export function itSupportsSystemProps<T extends React.FC>(
  Component: T,
  defaultProps: React.ComponentProps<T>,
  displayName: string
) {
  describe('it supports system props', () => {
    itSupportsClassName(Component, defaultProps);
    itSupportsOthers(Component, defaultProps);
    itSupportsMargins(Component, defaultProps);
    itSupportsStyle(Component, defaultProps);
    itSupportsSx(Component, defaultProps);
  });

  it('has correct displayName', () => {
    expect(Component.displayName).toBe(displayName);
  });
}
