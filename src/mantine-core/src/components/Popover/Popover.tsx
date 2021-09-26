import React, { useState } from 'react';
import { useClickOutside, useFocusTrap, useMergedRef } from '@mantine/hooks';
import {
  mergeStyles,
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  ClassNames,
  useUuid,
} from '@mantine/styles';
import { Popper, SharedPopperProps } from '../Popper/Popper';
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
}

export function Popover({
  className,
  style,
  children,
  target,
  title,
  onClose,
  opened,
  zIndex = 1,
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
  id,
  classNames,
  styles,
  ...others
}: PopoverProps) {
  const { classes, cx } = useStyles(null, classNames, 'popover');
  const _styles = mergeStyles(classes, styles);
  const handleClose = () => typeof onClose === 'function' && onClose();
  const [referenceElement, setReferenceElement] = useState(null);
  const [rootElement, setRootElement] = useState<HTMLDivElement>(null);
  const [dropdownElement, setDropdownElement] = useState<HTMLDivElement>(null);
  const focusTrapRef = useFocusTrap(!noFocusTrap);

  useClickOutside(() => !noClickOutside && handleClose(), null, [rootElement, dropdownElement]);

  const handleKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!noEscape && event.nativeEvent.code === 'Escape') {
      handleClose();
    }
  };

  const uuid = useUuid(id);
  const titleId = `${uuid}-title`;
  const bodyId = `${uuid}-body`;

  return (
    <div
      className={cx(classes.root, className)}
      id={id}
      style={{ ...style, ..._styles.root }}
      ref={setRootElement}
      {...others}
    >
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
        arrowStyle={_styles.arrow}
        forceUpdateDependencies={[radius, shadow, spacing, ...positionDependencies]}
      >
        <PopoverBody
          shadow={shadow}
          radius={radius}
          spacing={spacing}
          withCloseButton={withCloseButton}
          titleId={titleId}
          bodyId={bodyId}
          closeButtonLabel={closeButtonLabel}
          onClose={handleClose}
          elementRef={useMergedRef(focusTrapRef, setDropdownElement)}
          onKeyDownCapture={handleKeydown}
          classNames={classNames}
          styles={styles}
        >
          {children}
        </PopoverBody>
      </Popper>

      <div className={classes.target} style={_styles.target} ref={setReferenceElement}>
        {target}
      </div>
    </div>
  );
}

Popover.displayName = '@mantine/core/Popover';
