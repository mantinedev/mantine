import React, { useState } from 'react';
import {
  useClickOutside,
  useFocusTrap,
  useMergedRef,
  useFocusReturn,
  useUuid,
} from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  Selectors,
  getDefaultZIndex,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import { Popper, SharedPopperProps } from '../Popper';
import { PopoverBody, PopoverBodyStylesNames } from './PopoverBody/PopoverBody';
import useStyles from './Popover.styles';

export type PopoverStylesNames = Selectors<typeof useStyles> | PopoverBodyStylesNames;

export interface PopoverProps
  extends DefaultProps<PopoverStylesNames>,
    SharedPopperProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Defines whether Popover can be closed with outside click, defaults to true */
  closeOnClickOutside?: boolean;

  /** Defines whether Popover should trap focus, defaults to true */
  trapFocus?: boolean;

  /** Defines whether Popover can be closed with Escape key, defaults to true */
  closeOnEscape?: boolean;

  /** Displays close button */
  withCloseButton?: boolean;

  /** True to disable popover */
  disabled?: boolean;

  /** True to display popover */
  opened: boolean;

  /** Called when popover closes */
  onClose?(): void;

  /** Element which is used to position popover */
  target: React.ReactNode;

  /** Content inside popover */
  children: React.ReactNode;

  /** Popover title */
  title?: React.ReactNode;

  /** Popover body padding, value from theme.spacing or number to set padding in px */
  spacing?: MantineNumberSize;

  /** Popover body radius, value from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Popover shadow, value from theme.shadows or string to set box-shadow to any value */
  shadow?: MantineShadow;

  /** aria-label for close button */
  closeButtonLabel?: string;

  /** useEffect dependencies to force update tooltip position */
  positionDependencies?: any[];

  /** Whether to render the popover in a Portal */
  withinPortal?: boolean;

  /** Popover body width */
  width?: number | string;

  /** Events that should trigger outside clicks */
  clickOutsideEvents?: string[];
}

const defaultProps: Partial<PopoverProps> = {
  zIndex: getDefaultZIndex('popover'),
  arrowSize: 4,
  withArrow: false,
  transition: 'fade',
  transitionDuration: 200,
  gutter: 10,
  position: 'left',
  placement: 'center',
  disabled: false,
  closeOnClickOutside: true,
  trapFocus: true,
  closeOnEscape: true,
  withCloseButton: false,
  radius: 'sm',
  spacing: 'md',
  shadow: 'sm',
  positionDependencies: [],
  withinPortal: true,
  clickOutsideEvents: ['mousedown', 'touchstart'],
};

export function Popover(props: PopoverProps) {
  const {
    className,
    children,
    target,
    title,
    onClose,
    opened,
    zIndex,
    arrowSize,
    withArrow,
    transition,
    transitionDuration,
    transitionTimingFunction,
    gutter,
    position,
    placement,
    disabled,
    closeOnClickOutside,
    trapFocus,
    closeOnEscape,
    withCloseButton,
    radius,
    spacing,
    shadow,
    closeButtonLabel,
    positionDependencies,
    withinPortal,
    id,
    classNames,
    styles,
    width,
    clickOutsideEvents,
    ...others
  } = useMantineDefaultProps('Popover', defaultProps, props);

  const { classes, cx } = useStyles(null, { classNames, styles, name: 'Popover' });
  const handleClose = () => typeof onClose === 'function' && onClose();
  const [referenceElement, setReferenceElement] = useState(null);
  const [rootElement, setRootElement] = useState<HTMLDivElement>(null);
  const [dropdownElement, setDropdownElement] = useState<HTMLDivElement>(null);
  const focusTrapRef = useFocusTrap(trapFocus && opened);

  useClickOutside(() => closeOnClickOutside && handleClose(), clickOutsideEvents, [
    rootElement,
    dropdownElement,
  ]);

  const returnFocus = useFocusReturn({
    opened: opened || trapFocus,
    transitionDuration: 0,
    shouldReturnFocus: false,
  });

  const handleKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (closeOnEscape && event.nativeEvent.code === 'Escape') {
      handleClose();
      window.setTimeout(returnFocus, 0);
    }
  };

  const uuid = useUuid(id);
  const titleId = `${uuid}-title`;
  const bodyId = `${uuid}-body`;

  return (
    <Box className={cx(classes.root, className)} id={id} ref={setRootElement} {...others}>
      <Popper
        referenceElement={referenceElement}
        transitionDuration={transitionDuration}
        transition={transition}
        mounted={opened && !disabled}
        position={position}
        placement={placement}
        gutter={gutter}
        withArrow={withArrow}
        arrowSize={arrowSize}
        zIndex={zIndex}
        arrowClassName={classes.arrow}
        forceUpdateDependencies={[radius, shadow, spacing, ...positionDependencies]}
        withinPortal={withinPortal}
      >
        <PopoverBody
          shadow={shadow}
          radius={radius}
          spacing={spacing}
          withCloseButton={withCloseButton}
          title={title}
          titleId={titleId}
          bodyId={bodyId}
          closeButtonLabel={closeButtonLabel}
          onClose={handleClose}
          ref={useMergedRef(focusTrapRef, setDropdownElement)}
          onKeyDownCapture={handleKeydown}
          classNames={classNames}
          styles={styles}
          width={width}
        >
          {children}
        </PopoverBody>
      </Popper>

      <div className={classes.target} ref={setReferenceElement}>
        {target}
      </div>
    </Box>
  );
}

Popover.displayName = '@mantine/core/Popover';
