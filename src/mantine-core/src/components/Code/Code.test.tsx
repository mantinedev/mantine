import React from 'react';
import { shallow } from 'enzyme';
import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
} from '@mantine/tests';
import { Code } from './Code';

describe('@mantine/core/Code', () => {
  itRendersChildren(Code, {});
  itSupportsClassName(Code, {});
  itSupportsOthers(Code, {});
  itSupportsStyle(Code, {});
  itSupportsMargins(Code, {});

  it('renders code element for inline code and pre element for block', () => {
    const inline = shallow(<Code block={false}>Code</Code>);
    const block = shallow(<Code block>Code</Code>);

    expect(inline.type()).toBe('code');
    expect(block.type()).toBe('pre');
  });

  it('has correct displayName', () => {
    expect(Code.displayName).toEqual('@mantine/core/Code');
  });
});
