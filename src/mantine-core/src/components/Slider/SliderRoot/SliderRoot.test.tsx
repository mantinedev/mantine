import React from 'react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsStylesApi,
  itSupportsMargins,
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
  itSupportsRef(SliderRoot, defaultProps, HTMLDivElement);
  itSupportsStylesApi(SliderRoot, defaultProps, ['root'], 'Slider');

  it('has correct displayName', () => {
    expect(SliderRoot.displayName).toEqual('@mantine/core/SliderRoot');
  });
});
