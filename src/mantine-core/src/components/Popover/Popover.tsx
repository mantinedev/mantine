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
  ClassNames,
  getDefaultZIndex,
} from '@mantine/styles';
import { Box } from '../Box';
import { Popper, SharedPopperProps } from '../Popper';
import { PopoverBody, PopoverBodyStylesNames } from './PopoverBody/PopoverBody';
import useStyles from './Popover.styles';

export type PopoverStylesNames = ClassNames<typeof useStyles> | PopoverBodyStylesNames;

export interface PopoverProps
  extends DefaultProps<PopoverStylesNames>,
    SharedPopperProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Disable closing by click outside */
  noClickOutside?: boolean;

  /** Disable focus trap (may impact close on escape feature) */
  noFocusTrap?: boolean;

  /** Disables close on escape */
  noEscape?: boolean;

  /** Adds close button */
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

  /** Optional popover title */
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

export function Popover({
  className,
  children,
  target,
  title,
  onClose,
  opened,
  zIndex = getDefaultZIndex('popover'),
  arrowSize = 4,
  withArrow = false,
  transition = 'fade',
  transitionDuration = 200,
  transitionTimingFunction,
  gutter = 10,
  position = 'left',
  placement = 'center',
  disabled = false,
  noClickOutside = false,
  noFocusTrap = false,
  noEscape = false,
  withCloseButton = false,
  radius = 'sm',
  spacing = 'md',
  shadow = 'sm',
  closeButtonLabel,
  positionDependencies = [],
  withinPortal = true,
  id,
  classNames,
  styles,
  width,
  clickOutsideEvents = ['click', 'touchstart'],
  ...others
}: PopoverProps) {
  const { classes, cx } = useStyles(null, { classNames, styles, name: 'Popover' });
  const handleClose = () => typeof onClose === 'function' && onClose();
  const [referenceElement, setReferenceElement] = useState(null);
  const [rootElement, setRootElement] = useState<HTMLDivElement>(null);
  const [dropdownElement, setDropdownElement] = useState<HTMLDivElement>(null);
  const focusTrapRef = useFocusTrap(!noFocusTrap && opened);

  useClickOutside(() => !noClickOutside && handleClose(), clickOutsideEvents, [
    rootElement,
    dropdownElement,
  ]);

  const returnFocus = useFocusReturn({
    opened: opened || noFocusTrap,
    transitionDuration,
    shouldReturnFocus: false,
  });

  const handleKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!noEscape && event.nativeEvent.code === 'Escape') {
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
