import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsOthers,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
import { Overlay } from './Overlay';

describe('@mantine/core/Overlay', () => {
  itSupportsStyle(Overlay, {});
  itSupportsClassName(Overlay, {});
  itSupportsOthers(Overlay, {});
  itSupportsRef(Overlay, {}, HTMLDivElement);

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(<Overlay<'a'> component="a" href="https://mantine.dev" />);
    const withComponent = shallow(<Overlay<typeof TestComponent> component={TestComponent} />);

    expect(withTag.type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });

  it('has correct displayName', () => {
    expect(Overlay.displayName).toEqual('@mantine/core/Overlay');
  });
});
