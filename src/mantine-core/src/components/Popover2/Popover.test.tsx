import React from 'react';
import { itRendersChildren, checkAccessibility } from '@mantine/tests';
import { Popover, PopoverProps } from './Popover';
import { PopoverDropdown } from './PopoverDropdown/PopoverDropdown';
import { PopoverTarget } from './PopoverTarget/PopoverTarget';

const defaultProps: PopoverProps = {
  opened: true,
  children: null,
};

function TestContainer() {
  return (
    <Popover opened>
      <Popover.Target>
        <button type="button">test</button>
      </Popover.Target>

      <Popover.Dropdown>Dropdown</Popover.Dropdown>
    </Popover>
  );
}

describe('@mantine/core/component', () => {
  checkAccessibility([<TestContainer />]);
  itRendersChildren(Popover, defaultProps);

  it('exposes PopoverTarget and PopoverDropdown as static properties', () => {
    expect(Popover.Dropdown).toBe(PopoverDropdown);
    expect(Popover.Target).toBe(PopoverTarget);
  });
});
