import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps, itRendersChildren } from '@mantine/tests';
import { InputLabel, InputLabelProps } from './InputLabel';

const defaultProps: InputLabelProps = {};

describe('@mantine/core/InputLabel', () => {
  itRendersChildren(InputLabel, defaultProps);
  itSupportsSystemProps({
    component: InputLabel,
    props: defaultProps,
    displayName: '@mantine/core/InputLabel',
    refType: HTMLLabelElement,
  });

  it('renders required asterisk if required prop is true', () => {
    render(<InputLabel required />);
    expect(document.querySelector('.mantine-InputWrapper-required')).toBeInTheDocument();
  });

  it('does not render required asterisk if required prop is false', () => {
    render(<InputLabel required={false} />);
    expect(document.querySelector('.mantine-InputWrapper-required')).not.toBeInTheDocument();
  });
});
