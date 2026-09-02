import { createEventHandler, useProps } from '../../../core';
import { Popover, PopoverDropdownProps } from '../../Popover';
import { useHoverCardContext } from '../HoverCard.context';

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
  const floatingProps = ctx.getFloatingProps();

  const accessibleProps =
    ctx.withRoles && ctx.role === 'tooltip' ? { role: 'tooltip', id: ctx.dropdownId } : undefined;

  return (
    <Popover.Dropdown
      ref={ctx.floating}
      {...floatingProps}
      {...accessibleProps}
      onMouseEnter={createEventHandler<any>(onMouseEnter, floatingProps.onMouseEnter)}
      onMouseLeave={createEventHandler<any>(onMouseLeave, floatingProps.onMouseLeave)}
      {...others}
    >
      {children}
    </Popover.Dropdown>
  );
}

HoverCardDropdown.displayName = '@mantine/core/HoverCardDropdown';
