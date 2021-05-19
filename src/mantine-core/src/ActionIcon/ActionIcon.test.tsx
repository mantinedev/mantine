import React from 'react';
import { RocketIcon } from '@modulz/radix-icons';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
} from '@mantine/tests';
import { ActionIcon } from './ActionIcon';

describe('@mantine/core/ActionIcon', () => {
  itSupportsClassName(ActionIcon, {});
  itSupportsOthers(ActionIcon, {});
  itSupportsStyle(ActionIcon, {});
  itSupportsRef(ActionIcon, {}, HTMLButtonElement, 'elementRef');
  itRendersChildren(ActionIcon, {});
  checkAccessibility([
    mount(
      <ActionIcon title="Action icon">
        <RocketIcon />
      </ActionIcon>
    ),
  ]);

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(
      <ActionIcon<'a'> component="a" href="https://mantine.dev">
        $
      </ActionIcon>
    );
    const withComponent = shallow(
      <ActionIcon<typeof TestComponent> component={TestComponent}>$</ActionIcon>
    );

    expect(withTag.type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });

  it('has correct displayName', () => {
    expect(ActionIcon.displayName).toEqual('@mantine/core/ActionIcon');
  });
});
