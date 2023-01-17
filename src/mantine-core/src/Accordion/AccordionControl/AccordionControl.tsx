import React, { forwardRef } from 'react';
import { DefaultProps, Selectors, useComponentDefaultProps } from '@mantine/styles';
import { createScopedKeydownHandler } from '@mantine/utils';
import { UnstyledButton } from '../../UnstyledButton';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionItemContext } from '../AccordionItem.context';
import useStyles from './AccordionControl.styles';

export type AccordionControlStylesNames = Selectors<typeof useStyles>;

export interface AccordionControlProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'button'> {
  /** Disables control button */
  disabled?: boolean;

  /** Custom chevron icon */
  chevron?: React.ReactNode;

  /** Control label */
  children?: React.ReactNode;

  /** Icon rendered next to label */
  icon?: React.ReactNode;
}

const defaultProps: Partial<AccordionControlProps> = {};

export const AccordionControl = forwardRef<HTMLButtonElement, AccordionControlProps>(
  (props: AccordionControlProps, ref) => {
    const { disabled, onKeyDown, onClick, chevron, children, className, icon, ...others } =
      useComponentDefaultProps('AccordionControl', defaultProps, props);
    const ctx = useAccordionContext();
    const { value } = useAccordionItemContext();
    const { classes, cx } = useStyles(
      {
        transitionDuration: ctx.transitionDuration,
        chevronPosition: ctx.chevronPosition,
        chevronSize: ctx.chevronSize,
        radius: ctx.radius,
      },
      {
        name: 'Accordion',
        classNames: ctx.classNames,
        styles: ctx.styles,
        unstyled: ctx.unstyled,
        variant: ctx.variant,
      }
    );

    const isActive = ctx.isItemActive(value);
    const shouldWrapWithHeading = typeof ctx.order === 'number';
    const Heading = `h${ctx.order}` as const;

    const content = (
      <UnstyledButton<'button'>
        {...others}
        ref={ref}
        data-accordion-control
        disabled={disabled}
        className={cx(classes.control, className)}
        onClick={(event) => {
          onClick?.(event);
          ctx.onChange(value);
        }}
        type="button"
        data-active={isActive || undefined}
        aria-expanded={isActive}
        aria-controls={ctx.getRegionId(value)}
        id={ctx.getControlId(value)}
        unstyled={ctx.unstyled}
        onKeyDown={createScopedKeydownHandler({
          siblingSelector: '[data-accordion-control]',
          parentSelector: '[data-accordion]',
          activateOnFocus: false,
          loop: ctx.loop,
          orientation: 'vertical',
          onKeyDown,
        })}
      >
        <span
          className={classes.chevron}
          data-rotate={(!ctx.disableChevronRotation && isActive) || undefined}
        >
          {chevron || ctx.chevron}
        </span>
        <span className={classes.label}>{children}</span>
        {icon && <span className={classes.icon}>{icon}</span>}
      </UnstyledButton>
    );

    return shouldWrapWithHeading ? (
      <Heading className={classes.itemTitle}>{content}</Heading>
    ) : (
      content
    );
  }
);

AccordionControl.displayName = '@mantine/core/AccordionControl';
