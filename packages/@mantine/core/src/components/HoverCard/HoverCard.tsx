import { useDisclosure } from '@mantine/hooks';
import { ExtendComponent, Factory, useProps } from '../../core';
import { useDelayedHover } from '../Floating';
import { Popover, PopoverProps, PopoverStylesNames } from '../Popover';
import { PopoverCssVariables } from '../Popover/Popover';
import { HoverCardContextProvider } from './HoverCard.context';
import { HoverCardDropdown } from './HoverCardDropdown/HoverCardDropdown';
import { HoverCardTarget } from './HoverCardTarget/HoverCardTarget';
import { HoverCardGroup } from './HoverCardGroup/HoverCardGroup';
import { useHoverCard } from './use-hover-card';
import { useHoverCardGroupContext } from './HoverCardGroup/HoverCardGroup.context';

export interface HoverCardProps extends Omit<PopoverProps, 'opened' | 'onChange'> {
  variant?: string;

  /** Initial opened state */
  initiallyOpened?: boolean;

  /** Called when dropdown is opened */
  onOpen?: () => void;

  /** Called when dropdown is closed */
  onClose?: () => void;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;
}

export type HoverCardFactory = Factory<{
  props: HoverCardProps;
  stylesNames: PopoverStylesNames;
  vars: PopoverCssVariables;
}>;

const defaultProps: Partial<HoverCardProps> = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: false,
};

export function HoverCard(props: HoverCardProps) {
  const { children, onOpen, onClose, openDelay, closeDelay, initiallyOpened, ...others } = useProps(
    'HoverCard',
    defaultProps,
    props
  );

  const withinGroup = useHoverCardGroupContext();

  // Use the new hook if within a group, otherwise use the legacy implementation
  if (withinGroup) {
    const hoverCard = useHoverCard({
      openDelay,
      closeDelay,
      defaultOpened: initiallyOpened,
      onOpen,
      onClose,
    });

    // For group mode, we don't need the legacy delayed hover since the group handles delays
    const openDropdown = () => { };
    const closeDropdown = () => { };

    return (
      <HoverCardContextProvider value={{
        openDropdown,
        closeDropdown,
        getReferenceProps: hoverCard.getReferenceProps,
        getFloatingProps: hoverCard.getFloatingProps,
        reference: hoverCard.reference,
        floating: hoverCard.floating,
      }}>
        <Popover {...others} opened={hoverCard.opened} __staticSelector="HoverCard">
          {children}
        </Popover>
      </HoverCardContextProvider>
    );
  }

  // Legacy implementation for backward compatibility
  const [opened, { open, close }] = useDisclosure(initiallyOpened, { onClose, onOpen });
  const { openDropdown, closeDropdown } = useDelayedHover({ open, close, openDelay, closeDelay });

  return (
    <HoverCardContextProvider value={{ openDropdown, closeDropdown }}>
      <Popover {...others} opened={opened} __staticSelector="HoverCard">
        {children}
      </Popover>
    </HoverCardContextProvider>
  );
}

HoverCard.displayName = '@mantine/core/HoverCard';
HoverCard.Target = HoverCardTarget;
HoverCard.Dropdown = HoverCardDropdown;
HoverCard.Group = HoverCardGroup;
HoverCard.extend = (input: ExtendComponent<HoverCardFactory>) => input;
