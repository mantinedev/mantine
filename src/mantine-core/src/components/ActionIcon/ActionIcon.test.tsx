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
  itSupportsMargins,
} from '@mantine/tests';
import { Loader } from '../Loader/Loader';
import { ActionIcon } from './ActionIcon';

describe('@mantine/core/ActionIcon', () => {
  itSupportsClassName(ActionIcon, {});
  itSupportsOthers(ActionIcon, {});
  itSupportsStyle(ActionIcon, {});
  itSupportsMargins(ActionIcon, {});
  itSupportsRef(ActionIcon, {}, HTMLButtonElement, 'ref');
  itRendersChildren(ActionIcon, {});
  checkAccessibility([
    mount(
      <ActionIcon title="Action icon">
        <RocketIcon />
      </ActionIcon>
    ),
  ]);

  it('replaces icon with Loader when loading is set to true', () => {
    const loading = shallow(
      <ActionIcon loading>
        <span className="test-icon" />
      </ActionIcon>
    );

    const notLoading = shallow(
      <ActionIcon loading={false}>
        <span className="test-icon" />
      </ActionIcon>
    );

    expect(notLoading.find('.test-icon')).toHaveLength(1);
    expect(notLoading.find(Loader)).toHaveLength(0);

    expect(loading.find('.test-icon')).toHaveLength(0);
    expect(loading.find(Loader)).toHaveLength(1);
  });

  it('accepts component from component prop', () => {
    const TestComponent = (props: any) => <span data-test-prop {...props} />;
    const withTag = shallow(
      <ActionIcon component="a" href="https://mantine.dev">
        $
      </ActionIcon>
    );
    const withComponent = shallow(<ActionIcon component={TestComponent}>$</ActionIcon>);

    expect(withTag.type()).toBe('a');
    expect(withTag.render().attr('href')).toBe('https://mantine.dev');
    expect(withComponent.type()).toBe(TestComponent);
    expect(withComponent.render().attr('data-test-prop')).toBe('true');
  });

  it('has correct displayName', () => {
    expect((ActionIcon as any).displayName).toEqual('@mantine/core/ActionIcon');
  });
});
