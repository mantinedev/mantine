import { ExtendComponent, Factory, useProps } from '../../core';
import { Popover, PopoverProps, PopoverStylesNames } from '../Popover';
import { PopoverCssVariables } from '../Popover/Popover';
import { HoverCardContextProvider } from './HoverCard.context';
import { HoverCardDropdown } from './HoverCardDropdown/HoverCardDropdown';
import { HoverCardGroup } from './HoverCardGroup/HoverCardGroup';
import { HoverCardTarget } from './HoverCardTarget/HoverCardTarget';
import { useHoverCard } from './use-hover-card';

export interface HoverCardProps extends Omit<PopoverProps, 'opened' | 'onChange'> {
  variant?: string;

  /** Initial opened state */
  initiallyOpened?: boolean;

  /** Called when the dropdown is opened */
  onOpen?: () => void;

  /** Called when the dropdown is closed */
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
    <HoverCardContextProvider
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
    </HoverCardContextProvider>
  );
}

HoverCard.displayName = '@mantine/core/HoverCard';
HoverCard.Target = HoverCardTarget;
HoverCard.Dropdown = HoverCardDropdown;
HoverCard.Group = HoverCardGroup;
HoverCard.extend = (input: ExtendComponent<HoverCardFactory>) => input;
