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
  itSupportsRef(ActionIcon, {}, HTMLButtonElement);
  itRendersChildren(ActionIcon, {});
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

  it('has data-mantine-composable attribute', () => {
    const element = shallow(<ActionIcon />);
    expect(element.render().attr('data-mantine-composable')).toBe('true');
  });
});
