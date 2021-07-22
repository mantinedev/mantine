import React from 'react';
import { shallow } from 'enzyme';
import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
} from '@mantine/tests';
import { Text, Anchor } from './Text';

describe('@mantine/core/Text', () => {
  itRendersChildren(Text, {});
  itSupportsStyle(Text, {});
  itSupportsClassName(Text, {});
  itSupportsOthers(Text, {});
  itSupportsRef(Text, {}, HTMLDivElement, 'elementRef');

  it('has correct displayName', () => {
    expect(Text.displayName).toEqual('@mantine/core/Text');
    expect(Anchor.displayName).toEqual('@mantine/core/Anchor');
  });

  it('sets font-weight, test-transform and text-align based on props', () => {
    const withWeight = shallow(<Text weight={600} />);
    const withTransform = shallow(<Text transform="uppercase" />);
    const withAlign = shallow(<Text align="right" />);

    expect(withWeight.render().css('font-weight')).toBe('600');
    expect(withTransform.render().css('text-transform')).toBe('uppercase');
    expect(withAlign.render().css('text-align')).toBe('right');
  });

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(<Text<'a'> component="a" href="https://mantine.dev" />);
    const anchor = shallow(<Anchor<typeof TestComponent> component={TestComponent} />);
    const withComponent = shallow(<Text<typeof TestComponent> component={TestComponent} />);

    expect(withTag.type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.type()).toBe(TestComponent);
    expect(anchor.dive().type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });
});
