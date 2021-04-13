import React from 'react';
import { RocketIcon } from '@modulz/radix-icons';
import { mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  isHasComposableAttribute,
} from '@mantine/tests';
import { ActionIcon } from './ActionIcon';

describe('@mantine/core/ActionIcon', () => {
  itSupportsClassName(ActionIcon, {});
  itSupportsOthers(ActionIcon, {});
  itSupportsStyle(ActionIcon, {});
  itSupportsRef(ActionIcon, {}, HTMLButtonElement, 'elementRef');
  itRendersChildren(ActionIcon, {});
  isHasComposableAttribute(ActionIcon, {});
  checkAccessibility([
    mount(
      <ActionIcon title="Action icon">
        <RocketIcon />
      </ActionIcon>
    ),
  ]);

  it('has correct displayName', () => {
    expect(ActionIcon.displayName).toEqual('@mantine/core/ActionIcon');
  });
});
