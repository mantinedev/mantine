import React from 'react';
import { shallow } from 'enzyme';
import { dive } from './dive';

export function itIsPolymorphic(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  options?: { dive: number }
) {
  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(
      <Component component="a" href="https://mantine.dev" {...requiredProps} />
    );
    const withComponent = shallow(<Component component={TestComponent} {...requiredProps} />);

    const _withTag = dive(withTag, options?.dive);
    const _withComponent = dive(withComponent, options?.dive);

    expect(_withTag.type()).toBe('a');
    expect(_withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(_withComponent.type()).toBe(TestComponent);
    expect(_withComponent.render().attr('data-test-prop')).toBe('true');
  });
}
