import React from 'react';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { AlphaSlider } from './AlphaSlider';

const defaultProps = {
  value: 0.5,
  onChange: () => {},
  color: '#FF00FF',
  size: 'sm' as const,
};

describe('@mantine/core/AlphaSlider', () => {
  checkAccessibility([render(<AlphaSlider {...defaultProps} aria-label="test-label" />)]);
  itSupportsClassName(AlphaSlider, defaultProps);
  itSupportsOthers(AlphaSlider, defaultProps);
  itSupportsStyle(AlphaSlider, defaultProps);
  itSupportsSx(AlphaSlider, defaultProps);
  itSupportsRef(AlphaSlider, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(AlphaSlider.displayName).toEqual('@mantine/core/AlphaSlider');
  });
});
