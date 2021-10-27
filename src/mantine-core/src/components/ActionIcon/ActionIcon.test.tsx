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
  itIsPolymorphic,
} from '@mantine/tests';
import { Loader } from '../Loader/Loader';
import { ActionIcon } from './ActionIcon';

describe('@mantine/core/ActionIcon', () => {
  itSupportsClassName(ActionIcon, {});
  itSupportsOthers(ActionIcon, {});
  itSupportsStyle(ActionIcon, {});
  itSupportsMargins(ActionIcon, {});
  itIsPolymorphic(ActionIcon, {});
  itSupportsRef(ActionIcon, {}, HTMLButtonElement);
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

  it('has correct displayName', () => {
    expect(ActionIcon.displayName).toEqual('@mantine/core/ActionIcon');
  });
});
