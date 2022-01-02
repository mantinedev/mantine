import React from 'react';
import {
  checkAccessibility,
  itSupportsStyle,
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Spoiler } from './Spoiler';

const defaultProps = {
  maxHeight: 100,
  showLabel: 'show',
  hideLabel: 'hide',
  children: 'test-children',
};

describe('@mantine/core/Spoiler', () => {
  checkAccessibility([<Spoiler {...defaultProps} />]);
  itSupportsOthers(Spoiler, defaultProps);
  itSupportsMargins(Spoiler, defaultProps);
  itSupportsClassName(Spoiler, defaultProps);
  itRendersChildren(Spoiler, defaultProps);
  itSupportsStyle(Spoiler, defaultProps);
  itSupportsSx(Spoiler, defaultProps);
  itSupportsRef(Spoiler, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Spoiler.displayName).toEqual('@mantine/core/Spoiler');
  });
});
