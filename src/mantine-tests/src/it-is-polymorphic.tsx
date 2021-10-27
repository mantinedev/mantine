import React from 'react';
import { shallow } from 'enzyme';

export function itIsPolymorphic(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  options?: { dive: true }
) {
  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(
      <Component component="a" href="https://mantine.dev" {...requiredProps} />
    );
    const withComponent = shallow(<Component component={TestComponent} {...requiredProps} />);

    const _withTag = options?.dive ? withTag.dive() : withTag;
    const _withComponent = options?.dive ? withComponent.dive() : withComponent;

    expect(_withTag.type()).toBe('a');
    expect(_withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(_withComponent.type()).toBe(TestComponent);
    expect(_withComponent.render().attr('data-test-prop')).toBe('true');
  });
}
