import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
  itIsPolymorphic,
} from '@mantine/tests';
import { Highlight } from './Highlight';

const defaultProps = { children: 'Hello', highlight: 'He' };

describe('@mantine/core/Highlight', () => {
  itSupportsStyle(Highlight, defaultProps);
  itSupportsClassName(Highlight, defaultProps);
  itSupportsOthers(Highlight, defaultProps);
  itSupportsMargins(Highlight, defaultProps);
  itIsPolymorphic(Highlight, defaultProps, { dive: true });
  itSupportsRef(Highlight, defaultProps, HTMLDivElement);

  it('highlights correct value', () => {
    const element = shallow(<Highlight highlight="he">Hello</Highlight>);
    expect(element.render().find('mark').text()).toBe('He');
  });

  it('has correct displayName', () => {
    expect(Highlight.displayName).toEqual('@mantine/core/Highlight');
  });
});
