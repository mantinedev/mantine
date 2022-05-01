import { itRendersChildren } from '@mantine/tests';
import { Popover, PopoverProps } from './Popover';
import { PopoverDropdown } from './PopoverDropdown/PopoverDropdown';
import { PopoverTarget } from './PopoverTarget/PopoverTarget';

const defaultProps: PopoverProps = {
  opened: true,
  children: null,
};

describe('@mantine/core/component', () => {
  itRendersChildren(Popover, defaultProps);

  it('exposes PopoverTarget and PopoverDropdown as static properties', () => {
    expect(Popover.Dropdown).toBe(PopoverDropdown);
    expect(Popover.Target).toBe(PopoverTarget);
  });
});
