import React, { forwardRef } from 'react';
import { useContextStylesApi, DefaultProps } from '@mantine/styles';
import { createScopedKeydownHandler } from '@mantine/utils';
import { UnstyledButton } from '../../Button';
import { Center } from '../../Center';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionItemContext } from '../AccordionItem.context';
import useStyles from './AccordionControl.styles';

export interface AccordionControlProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'button'> {
  disabled?: boolean;
  chevron?: React.ReactNode;
  children?: React.ReactNode;
}

export const AccordionControl = forwardRef<HTMLButtonElement, AccordionControlProps>(
  (
    { disabled, onKeyDown, chevron, children, className, ...others }: AccordionControlProps,
    ref
  ) => {
    const ctx = useAccordionContext();
    const { value } = useAccordionItemContext();
    const { classNames, styles, unstyled } = useContextStylesApi();
    const { classes, cx } = useStyles(
      {
        transitionDuration: ctx.transitionDuration,
        chevronPosition: ctx.chevronPosition,
        chevronSize: ctx.chevronSize,
      },
      { name: 'Accordion', classNames, styles, unstyled }
    );

    const isActive = ctx.isItemActive(value);
    const Heading = `h${ctx.order}` as const;

    return (
      <Heading className={classes.itemTitle}>
        <UnstyledButton
          {...others}
          ref={ref}
          data-accordion-control
          disabled={disabled}
          className={cx(classes.control, className)}
          onClick={() => ctx.onChange(value)}
          type="button"
          aria-expanded={isActive}
          aria-controls={ctx.getRegionId(value)}
          id={ctx.getControlId(value)}
          unstyled={unstyled}
          onKeyDown={createScopedKeydownHandler({
            siblingSelector: '[data-accordion-control]',
            parentSelector: '[data-accordion]',
            activateOnFocus: false,
            loop: ctx.loop,
            orientation: 'vertical',
            onKeyDown,
          })}
        >
          <Center className={classes.chevron} data-rotate={!ctx.disableChevronRotation && isActive}>
            {chevron || ctx.chevron}
          </Center>
          <div className={classes.label}>{children}</div>
        </UnstyledButton>
      </Heading>
    );
  }
);
