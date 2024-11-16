import { useFocusReturn, useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  closeOnEscape,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  rem,
  useProps,
} from '../../../core';
import { FloatingArrow } from '../../Floating';
import { FocusTrap } from '../../FocusTrap';
import { OptionalPortal } from '../../Portal';
import { Transition } from '../../Transition';
import type { PopoverStylesNames } from '../Popover';
import { usePopoverContext } from '../Popover.context';
import classes from '../Popover.module.css';

export interface PopoverDropdownProps
  extends BoxProps,
    CompoundStylesApiProps<PopoverDropdownFactory>,
    ElementProps<'div'> {}

export type PopoverDropdownFactory = Factory<{
  props: PopoverDropdownProps;
  ref: HTMLDivElement;
  stylesNames: PopoverStylesNames;
  compound: true;
}>;

const defaultProps: Partial<PopoverDropdownProps> = {};

export const PopoverDropdown = factory<PopoverDropdownFactory>((_props, ref) => {
  const props = useProps('PopoverDropdown', defaultProps, _props);
  const {
    className,
    style,
    vars,
    children,
    onKeyDownCapture,
    variant,
    classNames,
    styles,
    ...others
  } = props;

  const ctx = usePopoverContext();

  const returnFocus = useFocusReturn({
    opened: ctx.opened,
    shouldReturnFocus: ctx.returnFocus,
  });

  const accessibleProps = ctx.withRoles
    ? {
        'aria-labelledby': ctx.getTargetId(),
        id: ctx.getDropdownId(),
        role: 'dialog',
        tabIndex: -1,
      }
    : {};

  const mergedRef = useMergedRef(ref, ctx.floating);

  if (ctx.disabled) {
    return null;
  }

  return (
    <OptionalPortal {...ctx.portalProps} withinPortal={ctx.withinPortal}>
      <Transition
        mounted={ctx.opened}
        {...ctx.transitionProps}
        transition={ctx.transitionProps?.transition || 'fade'}
        duration={ctx.transitionProps?.duration ?? 150}
        keepMounted={ctx.keepMounted}
        exitDuration={
          typeof ctx.transitionProps?.exitDuration === 'number'
            ? ctx.transitionProps.exitDuration
            : ctx.transitionProps?.duration
        }
      >
        {(transitionStyles) => (
          <FocusTrap active={ctx.trapFocus && ctx.opened} innerRef={mergedRef}>
            <Box
              {...accessibleProps}
              {...others}
              variant={variant}
              onKeyDownCapture={closeOnEscape(ctx.onClose, {
                active: ctx.closeOnEscape,
                onTrigger: returnFocus,
                onKeyDown: onKeyDownCapture,
              })}
              data-position={ctx.placement}
              data-fixed={ctx.floatingStrategy === 'fixed' || undefined}
              {...ctx.getStyles('dropdown', {
                className,
                props,
                classNames,
                styles,
                style: [
                  {
                    ...transitionStyles,
                    zIndex: ctx.zIndex as React.CSSProperties['zIndex'],
                    top: ctx.y ?? 0,
                    left: ctx.x ?? 0,
                    width: ctx.width === 'target' ? undefined : rem(ctx.width),
                  },
                  ctx.resolvedStyles.dropdown,
                  styles?.dropdown,
                  style,
                ],
              })}
            >
              {children}

              <FloatingArrow
                ref={ctx.arrowRef}
                arrowX={ctx.arrowX}
                arrowY={ctx.arrowY}
                visible={ctx.withArrow}
                position={ctx.placement}
                arrowSize={ctx.arrowSize}
                arrowRadius={ctx.arrowRadius}
                arrowOffset={ctx.arrowOffset}
                arrowPosition={ctx.arrowPosition}
                {...ctx.getStyles('arrow', {
                  props,
                  classNames,
                  styles,
                })}
              />
            </Box>
          </FocusTrap>
        )}
      </Transition>
    </OptionalPortal>
  );
});

PopoverDropdown.classes = classes;
PopoverDropdown.displayName = '@mantine/core/PopoverDropdown';
