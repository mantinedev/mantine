import React from 'react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { SliderRoot } from './SliderRoot';

const defaultProps = {
  size: 10,
  children: <div />,
};

describe('@mantine/core/SliderRoot', () => {
  itSupportsClassName(SliderRoot, defaultProps);
  itSupportsOthers(SliderRoot, defaultProps);
  itSupportsStyle(SliderRoot, defaultProps);
  itSupportsMargins(SliderRoot, defaultProps);
  itSupportsSx(SliderRoot, defaultProps);
  itSupportsRef(SliderRoot, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(SliderRoot.displayName).toEqual('@mantine/core/SliderRoot');
  });
});
