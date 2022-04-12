import React from 'react';
import { DefaultProps, ClassNames } from '@mantine/styles';
import { createScopedKeydownHandler } from '@mantine/utils';
import { Box } from '../../Box';
import { Collapse } from '../../Collapse';
import { UnstyledButton } from '../../Button';
import { Center } from '../../Center';
import { useAccordionContext } from '../Accordion.context';
import useStyles from './AccordionItem.styles';

export type AccordionItemStylesNames = ClassNames<typeof useStyles>;

export interface AccordionItemProps
  extends DefaultProps<AccordionItemStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  label?: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export function AccordionItem({
  label,
  children,
  className,
  value,
  disabled,
  ...others
}: AccordionItemProps) {
  const ctx = useAccordionContext();
  const { classes, cx } = useStyles(
    {
      transitionDuration: ctx.transitionDuration,
      disableIconRotation: ctx.disableIconRotation,
      iconPosition: ctx.iconPosition,
      offsetIcon: ctx.offsetIcon,
      iconSize: ctx.iconSize,
    },
    { name: 'Accordion' }
  );

  const cappedOrder = Math.min(6, Math.max(2, ctx.order)) as 2 | 3 | 4 | 5 | 6;
  const Heading = `h${cappedOrder}` as const;
  const isActive = ctx.isItemActive(value);

  return (
    <Box className={cx(classes.item, { [classes.itemOpened]: isActive }, className)} {...others}>
      <Heading className={classes.itemTitle}>
        <UnstyledButton
          data-accordion-control
          disabled={disabled}
          className={classes.control}
          onClick={() => ctx.onChange(value)}
          type="button"
          aria-expanded={isActive}
          aria-controls={ctx.getRegionId(value)}
          id={ctx.getControlId(value)}
          onKeyDown={createScopedKeydownHandler({
            siblingSelector: '[data-accordion-control]',
            parentSelector: '[data-accordion]',
            activateOnFocus: false,
            loop: ctx.loop,
            orientation: 'vertical',
          })}
        >
          <Center className={classes.icon}>{ctx.icon}</Center>
          <div className={classes.label}>{label}</div>
        </UnstyledButton>
      </Heading>

      <Collapse in={isActive} transitionDuration={ctx.transitionDuration}>
        <div
          className={classes.content}
          role="region"
          id={ctx.getRegionId(value)}
          aria-labelledby={ctx.getControlId(value)}
        >
          <div className={classes.contentInner}>{children}</div>
        </div>
      </Collapse>
    </Box>
  );
}

AccordionItem.displayName = '@mantine/core/AccordionItem';
