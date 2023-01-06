import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
import { Paper, PaperProps } from '../../Paper';
import { Transition, TransitionOverride } from '../../Transition';
import { FocusTrap } from '../../FocusTrap';
import { useModalBaseContext } from '../ModalBase.context';
import useStyles from './ModalBaseContent.styles';

export interface ModalBaseContentProps
  extends PaperProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof PaperProps> {
  /** Props added to Transition component */
  transitionProps?: TransitionOverride;
}

const defaultProps: Partial<ModalBaseContentProps> = {
  shadow: 'xl',
};

export const ModalBaseContent = forwardRef<HTMLElement, ModalBaseContentProps>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, transitionProps, style, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Content`,
    defaultProps,
    props
  );

  const { classes, cx } = useStyles({ zIndex: ctx.zIndex + 1 }, { name: ctx.__staticSelector });

  return (
    <Transition mounted={ctx.opened} transition="pop" {...ctx.transitionProps} {...transitionProps}>
      {(styles) => (
        <div className={cx(classes.inner)}>
          <FocusTrap active={ctx.opened && ctx.trapFocus}>
            <Paper
              component="section"
              role="dialog"
              tabIndex={-1}
              aria-modal
              aria-describedby={ctx.bodyMounted ? ctx.getBodyId() : undefined}
              aria-labelledby={ctx.titleMounted ? ctx.getTitleId() : undefined}
              ref={ref}
              className={cx(classes.content, className)}
              style={{ ...style, ...styles }}
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
