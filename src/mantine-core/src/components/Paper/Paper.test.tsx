import React from 'react';
import { shallow } from 'enzyme';
import {
  itRendersChildren,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
  itSupportsOthers,
  itSupportsMargins,
} from '@mantine/tests';
import { Paper } from './Paper';

describe('@mantine/core/Paper', () => {
  itRendersChildren(Paper, {});
  itSupportsClassName(Paper, {});
  itSupportsStyle(Paper, {});
  itSupportsRef(Paper, {}, HTMLDivElement, 'elementRef');
  itSupportsOthers(Paper, {});
  itSupportsMargins(Paper, {});

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(<Paper<'a'> component="a" href="https://mantine.dev" />);
    const withComponent = shallow(<Paper<typeof TestComponent> component={TestComponent} />);

    expect(withTag.type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });

  it('has correct displayName', () => {
    expect(Paper.displayName).toEqual('@mantine/core/Paper');
  });
});
