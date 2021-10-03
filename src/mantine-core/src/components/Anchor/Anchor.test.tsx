import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsMargins,
} from '@mantine/tests';
import { Anchor } from './Anchor';

describe('@mantine/core/Anchor', () => {
  itSupportsClassName(Anchor, {});
  itRendersChildren(Anchor, {});
  itSupportsOthers(Anchor, {});
  itSupportsStyle(Anchor, {});
  itSupportsMargins(Anchor, {});
  itSupportsRef(Anchor, {}, HTMLAnchorElement, 'ref');

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const anchor = shallow(<Anchor<typeof TestComponent> component={TestComponent} />);
    expect(anchor.dive().type()).toBe(TestComponent);
  });

  it('has correct displayName', () => {
    expect(Anchor.displayName).toEqual('@mantine/core/Anchor');
  });
});
