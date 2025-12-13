import {
  BoxProps,
  ElementProps,
  factory,
  Factory,
  MantineRadius,
  Modal,
  ModalProps,
  Popover,
  PopoverProps,
  StylesApiProps,
  UnstyledButton,
  useProps,
  useStyles,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ScheduleEventData } from '../../types';
import { useScheduleContext } from '../Schedule/Schedule.context';
import { ScheduleEvent } from '../ScheduleEvent/ScheduleEvent';
import classes from './MoreEvents.module.css';

export type MoreEventsDropdownType = 'popover' | 'modal';

export type MoreEventsStylesNames = 'moreEventsButton' | 'moreEventsList' | 'moreEventsDropdown';

export interface MoreEventsProps
  extends BoxProps, StylesApiProps<MoreEventsFactory>, ElementProps<'button'> {
  /** List of events to display */
  events: ScheduleEventData[];

  /** Events count to use for `+X more` label */
  moreEventsCount: number;

  /** Key of `theme.radius` or any valid CSS value to set border-radius @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Title for the Modal component, ignored if `dropdownType` is not 'modal' */
  modalTitle?: string;

  /** Type of dropdown to use for displaying more events @default `'popover'` */
  dropdownType?: MoreEventsDropdownType;

  /** Props passed down to `Popover` component */
  popoverProps?: Partial<Omit<PopoverProps, 'children'>>;

  /** Props passed down to `Modal` component */
  modalProps?: Partial<Omit<ModalProps, 'children'>>;

  /** Called when the dropdown is closed */
  onDropdownClose?: () => void;
}

export type MoreEventsFactory = Factory<{
  props: MoreEventsProps;
  ref: HTMLButtonElement;
  stylesNames: MoreEventsStylesNames;
}>;

const defaultProps = {
  dropdownType: 'popover',
} satisfies Partial<MoreEventsProps>;

export const MoreEvents = factory<MoreEventsFactory>((_props) => {
  const props = useProps('MoreEvents', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    radius,
    dropdownType,
    events,
    moreEventsCount,
    popoverProps,
    modalProps,
    onDropdownClose,
    children,
    modalTitle,
    ...others
  } = props;

  const ctx = useScheduleContext();
  const [dropdownOpened, dropdownHandlers] = useDisclosure();

  const getStyles = useStyles<MoreEventsFactory>({
    name: 'MoreEvents',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    rootSelector: 'moreEventsButton',
  });

  const handleClose = () => {
    dropdownHandlers.close();
    onDropdownClose?.();
  };

  const eventsList = (
    <div {...getStyles('moreEventsList')}>
      {events.map((event) => (
        <ScheduleEvent key={event.id} radius={radius} event={event}>
          {event.title}
        </ScheduleEvent>
      ))}
    </div>
  );

  return (
    <>
      {dropdownType === 'modal' && (
        <Modal
          opened={dropdownOpened}
          onClose={handleClose}
          unstyled={unstyled}
          radius={radius}
          title={modalTitle}
          {...modalProps}
        >
          {eventsList}
        </Modal>
      )}

      <Popover
        position="bottom-start"
        width={260}
        opened={dropdownOpened}
        trapFocus
        returnFocus={false}
        unstyled={unstyled}
        disabled={popoverProps?.disabled || dropdownType === 'modal'}
        radius={radius}
        transitionProps={{ transition: 'pop', duration: 120 }}
        offset={-46}
        {...popoverProps}
        onChange={(_opened) => {
          if (!_opened) {
            popoverProps?.onChange?.(_opened);
            handleClose();
          }
        }}
      >
        <Popover.Target>
          <UnstyledButton
            {...getStyles('moreEventsButton')}
            onClick={() => dropdownHandlers.toggle()}
            {...others}
          >
            {ctx.labels.moreLabel(moreEventsCount)}
          </UnstyledButton>
        </Popover.Target>

        <Popover.Dropdown {...getStyles('moreEventsDropdown')}>{eventsList}</Popover.Dropdown>
      </Popover>
    </>
  );
});

MoreEvents.displayName = '@mantine/schedule/MoreEvents';
MoreEvents.classes = classes;
