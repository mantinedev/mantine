import React from 'react';
import { shallow } from 'enzyme';
import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
} from '@mantine/tests';
import { Text } from './Text';

describe('@mantine/core/Text', () => {
  itRendersChildren(Text, {});
  itSupportsStyle(Text, {});
  itSupportsClassName(Text, {});
  itSupportsOthers(Text, {});

  it('has correct displayName', () => {
    expect(Text.displayName).toEqual('@mantine/core/Text');
  });

  it('sets font-weight based on weight prop', () => {
    const element = shallow(<Text weight={600} />);
    expect(element.render().css('font-weight')).toBe('600');
  });

  it('sets text-transform based on transform prop', () => {
    const element = shallow(<Text transform="uppercase" />);
    expect(element.render().css('text-transform')).toBe('uppercase');
  });

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(<Text<'a'> component="a" href="https://mantine.dev" />);
    const withComponent = shallow(<Text<typeof TestComponent> component={TestComponent} />);

    expect(withTag.type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });
});
