import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { Highlight } from './Highlight';

const defaultProps = { children: 'Hello', highlight: 'He' };

describe('@mantine/core/Highlight', () => {
  itSupportsStyle(Highlight, defaultProps);
  itSupportsClassName(Highlight, defaultProps);
  itSupportsOthers(Highlight, defaultProps);
  itSupportsMargins(Highlight, defaultProps);
  itSupportsRef(Highlight, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Highlight.displayName).toEqual('@mantine/core/Highlight');
  });

  it('highlights correct value', () => {
    const element = shallow(<Highlight highlight="he">Hello</Highlight>);
    expect(element.render().find('mark').text()).toBe('He');
  });

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;

    const withTag = shallow(
      <Highlight component="a" href="https://mantine.dev" highlight="Ma">
        Mantine
      </Highlight>
    );

    const withComponent = shallow(
      <Highlight component={TestComponent} highlight="Ma">
        Mantine
      </Highlight>
    );

    expect(withTag.dive().type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.dive().type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });
});
