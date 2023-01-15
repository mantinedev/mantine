import React, { forwardRef } from 'react';
import { Selectors, useComponentDefaultProps } from '@mantine/styles';
import { Paper, PaperProps } from '../../Paper';
import { Transition, TransitionOverride } from '../../Transition';
import { FocusTrap } from '../../FocusTrap';
import { useModalBaseContext } from '../ModalBase.context';
import useStyles from './ModalBaseContent.styles';

export type ModalBaseContentStylesNames = Selectors<typeof useStyles>;

export interface ModalBaseContentProps
  extends PaperProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof PaperProps> {
  /** Props added to Transition component */
  transitionProps?: TransitionOverride;
}

const defaultProps: Partial<ModalBaseContentProps> = {};

export const ModalBaseContent = forwardRef<HTMLElement, ModalBaseContentProps>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, transitionProps, style, onKeyDown, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Content`,
    defaultProps,
    props
  );

  const { classes, cx } = useStyles({ zIndex: ctx.zIndex + 1 }, ctx.stylesApi);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const shouldTrigger =
      (event.target as HTMLElement)?.getAttribute('data-mantine-stop-propagation') !== 'true';
    shouldTrigger && event.key === 'Escape' && ctx.closeOnEscape && ctx.onClose();
    onKeyDown?.(event);
  };

  return (
    <Transition mounted={ctx.opened} transition="pop" {...ctx.transitionProps} {...transitionProps}>
      {(transitionStyles) => (
        <div className={cx(classes.inner)}>
          <FocusTrap active={ctx.opened && ctx.trapFocus}>
            <Paper
              component="section"
              role="dialog"
              tabIndex={-1}
              aria-modal
              aria-describedby={ctx.bodyMounted ? ctx.getBodyId() : undefined}
              aria-labelledby={ctx.titleMounted ? ctx.getTitleId() : undefined}
              onKeyDown={handleKeyDown}
              ref={ref}
              className={cx(classes.content, className)}
              style={{ ...style, ...transitionStyles }}
              shadow={ctx.shadow}
              {...others}
            >
              {others.children}
            </Paper>
          </FocusTrap>
        </div>
      )}
    </Transition>
  );
});
