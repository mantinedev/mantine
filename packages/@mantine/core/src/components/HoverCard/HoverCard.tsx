import { ExtendComponent, Factory, useProps } from '../../core';
import { Popover, PopoverProps, PopoverStylesNames } from '../Popover';
import { PopoverCssVariables } from '../Popover/Popover';
import { HoverCardContext, HoverCardContextValue } from './HoverCard.context';
import { HoverCardDropdown, HoverCardDropdownProps } from './HoverCardDropdown/HoverCardDropdown';
import {
  HoverCardGroup,
  HoverCardGroupContextValue,
  HoverCardGroupProps,
} from './HoverCardGroup/HoverCardGroup';
import { HoverCardTarget, HoverCardTargetProps } from './HoverCardTarget/HoverCardTarget';
import { useHoverCard } from './use-hover-card';

export interface HoverCardEvents {
  /** Determines whether the dropdown should be opened when the target is hovered @default true */
  hover?: boolean | undefined;

  /** Determines whether the dropdown should be opened when the target is focused with the keyboard @default true */
  focus?: boolean | undefined;

  /** Determines whether the dropdown should be opened when the target is tapped on touch devices. Requires `hover` to be enabled @default false */
  touch?: boolean | undefined;
}

export interface HoverCardProps extends Omit<PopoverProps, 'opened' | 'onChange'> {
  /** Initial opened state */
  initiallyOpened?: boolean | undefined;

  /** Called when the dropdown is opened */
  onOpen?: (() => void) | undefined;

  /** Called when the dropdown is closed */
  onClose?: (() => void) | undefined;

  /**
   * Delay in ms before the dropdown opens after mouse enters the target.
   * Overridden by HoverCard.Group delay if used within a group.
   * @default 0
   */
  openDelay?: number | undefined;

  /**
   * Delay in ms before the dropdown closes after mouse leaves the target or dropdown.
   * Overridden by HoverCard.Group delay if used within a group.
   * @default 150
   */
  closeDelay?: number | undefined;

  /**
   * Determines which events open the dropdown. Fields that are not specified keep their default values.
   * @default { hover: true, focus: true, touch: false }
   */
  events?: HoverCardEvents | undefined;

  /**
   * If set, the dropdown stays open while the pointer travels from the target to the dropdown
   * and remains over it. Set it if the dropdown contains interactive content.
   * @default false
   */
  interactive?: boolean | undefined;

  /**
   * Accessible relation between the target and the dropdown. `dialog` sets `aria-haspopup`,
   * `aria-expanded` and `aria-controls` on the target, `tooltip` sets `aria-describedby` instead
   * and should be used if the dropdown contains only descriptive content.
   * @default 'dialog'
   */
  role?: 'dialog' | 'tooltip' | undefined;

  /** Determines whether the dropdown should be closed when the user presses outside of the target and the dropdown @default true */
  closeOnClickOutside?: boolean | undefined;

  /** Not supported by `HoverCard`: outside press is always detected with the `pointerdown` event. Use `closeOnClickOutside` to disable it. */
  clickOutsideEvents?: string[] | undefined;

  /**
   * Determines whether focus should be returned to the target when the dropdown closes.
   * Ignored when focus activation is enabled (`events.focus`, the default), otherwise moving
   * focus away from the target would return it and reopen the dropdown.
   * `Escape` pressed inside the dropdown always returns focus to the target.
   * @default false
   */
  returnFocus?: boolean | undefined;

  /** Called when the dropdown is closed with `Escape` key or with a press outside of the target and the dropdown */
  onDismiss?: (() => void) | undefined;
}

export type HoverCardFactory = Factory<{
  props: HoverCardProps;
  stylesNames: PopoverStylesNames;
  vars: PopoverCssVariables;
}>;

const DEFAULT_EVENTS = { hover: true, focus: true, touch: false };

const defaultProps = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: false,
  interactive: false,
  closeOnEscape: true,
  closeOnClickOutside: true,
  role: 'dialog',
} satisfies Partial<HoverCardProps>;

export function HoverCard(props: HoverCardProps) {
  const {
    children,
    onOpen,
    onClose,
    openDelay,
    closeDelay,
    initiallyOpened,
    events,
    interactive,
    closeOnEscape,
    closeOnClickOutside,
    returnFocus,
    onDismiss,
    id,
    role,
    withRoles,
    ...others
  } = useProps('HoverCard', defaultProps, props);

  const resolvedEvents = { ...DEFAULT_EVENTS, ...events };
  const rolesEnabled = withRoles !== false;

  const hoverCard = useHoverCard({
    openDelay,
    closeDelay,
    defaultOpened: initiallyOpened,
    onOpen,
    onClose,
    events: resolvedEvents,
    interactive,
    closeOnEscape,
    closeOnClickOutside,
    onDismiss,
    id,
  });

  return (
    <HoverCardContext
      value={{
        openDropdown: hoverCard.openDropdown,
        closeDropdown: hoverCard.closeDropdown,
        assignTarget: hoverCard.assignTarget,
        getReferenceProps: hoverCard.getReferenceProps,
        getFloatingProps: hoverCard.getFloatingProps,
        reference: hoverCard.reference,
        floating: hoverCard.floating,
        opened: hoverCard.opened!,
        dropdownId: hoverCard.dropdownId,
        role,
        withRoles: rolesEnabled,
      }}
    >
      <Popover
        {...others}
        id={id}
        closeOnEscape={closeOnEscape}
        closeOnClickOutside={closeOnClickOutside}
        returnFocus={resolvedEvents.focus ? false : returnFocus}
        withRoles={role === 'tooltip' ? false : withRoles}
        opened={hoverCard.opened}
        __staticSelector="HoverCard"
      >
        {children}
      </Popover>
    </HoverCardContext>
  );
}

HoverCard.displayName = '@mantine/core/HoverCard';
HoverCard.Target = HoverCardTarget;
HoverCard.Dropdown = HoverCardDropdown;
HoverCard.Group = HoverCardGroup;
HoverCard.extend = (input: ExtendComponent<HoverCardFactory>) => input;

export namespace HoverCard {
  export type Props = HoverCardProps;
  export type Events = HoverCardEvents;
  export type DropdownProps = HoverCardDropdownProps;
  export type TargetProps = HoverCardTargetProps;
  export type GroupProps = HoverCardGroupProps;
  export type ContextValue = HoverCardContextValue;

  export namespace Group {
    export type Props = HoverCardGroupProps;
    export type ContextValue = HoverCardGroupContextValue;
  }
}
