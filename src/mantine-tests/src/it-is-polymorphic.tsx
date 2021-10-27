import React from 'react';
import { shallow } from 'enzyme';

export function itIsPolymorphic(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(
      <Component component="a" href="https://mantine.dev" {...requiredProps} />
    );
    const withComponent = shallow(<Component component={TestComponent} {...requiredProps} />);

    expect(withTag.type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });
}
