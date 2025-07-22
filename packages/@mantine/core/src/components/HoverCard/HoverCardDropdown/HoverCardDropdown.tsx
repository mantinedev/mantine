import { createEventHandler, useProps } from '../../../core';
import { Popover, PopoverDropdownProps } from '../../Popover';
import { useHoverCardContext } from '../HoverCard.context';
import { useHoverCardGroupContext } from '../HoverCardGroup/HoverCardGroup.context';

export interface HoverCardDropdownProps extends PopoverDropdownProps {
  /** Dropdown content */
  children?: React.ReactNode;
}

export function HoverCardDropdown(props: HoverCardDropdownProps) {
  const { children, onMouseEnter, onMouseLeave, ...others } = useProps(
    'HoverCardDropdown',
    null,
    props
  );

  const ctx = useHoverCardContext();
  const withinGroup = useHoverCardGroupContext();

  if (withinGroup && ctx.getFloatingProps && ctx.floating) {
    const floatingProps = ctx.getFloatingProps();

    return (
      <Popover.Dropdown
        ref={ctx.floating}
        {...floatingProps}
        onMouseEnter={createEventHandler<any>(onMouseEnter, floatingProps.onMouseEnter)}
        onMouseLeave={createEventHandler<any>(onMouseLeave, floatingProps.onMouseLeave)}
        {...others}
      >
        {children}
      </Popover.Dropdown>
    );
  }

  const handleMouseEnter = createEventHandler<any>(onMouseEnter, ctx.openDropdown);
  const handleMouseLeave = createEventHandler<any>(onMouseLeave!, ctx.closeDropdown);

  return (
    <Popover.Dropdown onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...others}>
      {children}
    </Popover.Dropdown>
  );
}

HoverCardDropdown.displayName = '@mantine/core/HoverCardDropdown';
