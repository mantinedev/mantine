import React from 'react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
import { SliderRoot } from './SliderRoot';

const defaultProps = {
  elementRef: () => {},
  size: 10,
  children: <div />,
};

describe('@mantine/core/SliderRoot', () => {
  itSupportsClassName(SliderRoot, defaultProps);
  itSupportsOthers(SliderRoot, defaultProps);
  itSupportsStyle(SliderRoot, defaultProps);
  itSupportsRef(SliderRoot, defaultProps, HTMLDivElement, 'elementRef');

  it('has correct displayName', () => {
    expect(SliderRoot.displayName).toEqual('@mantine/core/SliderRoot');
  });
});
