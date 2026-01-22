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

export interface HoverCardProps extends Omit<PopoverProps, 'opened' | 'onChange'> {
  /** Initial opened state */
  initiallyOpened?: boolean;

  /** Called when the dropdown is opened */
  onOpen?: () => void;

  /** Called when the dropdown is closed */
  onClose?: () => void;

  /**
   * Delay in ms before the dropdown opens after mouse enters the target.
   * Overridden by HoverCard.Group delay if used within a group.
   * @default `0`
   */
  openDelay?: number;

  /**
   * Delay in ms before the dropdown closes after mouse leaves the target or dropdown.
   * Overridden by HoverCard.Group delay if used within a group.
   * @default `150`
   */
  closeDelay?: number;
}

export type HoverCardFactory = Factory<{
  props: HoverCardProps;
  stylesNames: PopoverStylesNames;
  vars: PopoverCssVariables;
}>;

const defaultProps = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: false,
} satisfies Partial<HoverCardProps>;

export function HoverCard(props: HoverCardProps) {
  const { children, onOpen, onClose, openDelay, closeDelay, initiallyOpened, ...others } = useProps(
    'HoverCard',
    defaultProps,
    props
  );

  const hoverCard = useHoverCard({
    openDelay,
    closeDelay,
    defaultOpened: initiallyOpened,
    onOpen,
    onClose,
  });

  return (
    <HoverCardContext
      value={{
        openDropdown: hoverCard.openDropdown,
        closeDropdown: hoverCard.closeDropdown,
        getReferenceProps: hoverCard.getReferenceProps,
        getFloatingProps: hoverCard.getFloatingProps,
        reference: hoverCard.reference,
        floating: hoverCard.floating,
      }}
    >
      <Popover {...others} opened={hoverCard.opened} __staticSelector="HoverCard">
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
  export type DropdownProps = HoverCardDropdownProps;
  export type TargetProps = HoverCardTargetProps;
  export type GroupProps = HoverCardGroupProps;
  export type ContextValue = HoverCardContextValue;

  export namespace Group {
    export type Props = HoverCardGroupProps;
    export type ContextValue = HoverCardGroupContextValue;
  }
}
