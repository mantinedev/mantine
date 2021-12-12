import React from 'react';
import { shallow } from 'enzyme';
import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Code } from './Code';

const defaultProps = {};

describe('@mantine/core/Code', () => {
  itRendersChildren(Code, defaultProps);
  itSupportsSx(Code, defaultProps);
  itSupportsClassName(Code, defaultProps);
  itSupportsOthers(Code, defaultProps);
  itSupportsStyle(Code, defaultProps);
  itSupportsMargins(Code, defaultProps);
  itSupportsRef(Code, defaultProps, HTMLElement);

  it('renders code element for inline code and pre element for block', () => {
    const inline = shallow(<Code block={false}>Code</Code>);
    const block = shallow(<Code block>Code</Code>);

    expect(inline.dive().type()).toBe('code');
    expect(block.dive().type()).toBe('pre');
  });

  it('has correct displayName', () => {
    expect(Code.displayName).toEqual('@mantine/core/Code');
  });
});
