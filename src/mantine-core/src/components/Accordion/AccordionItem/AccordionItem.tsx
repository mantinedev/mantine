import React from 'react';
import { useReducedMotion } from '@mantine/hooks';
import { DefaultProps, Selectors } from '@mantine/styles';
import { Box } from '../../Box';
import { Collapse } from '../../Collapse';
import { UnstyledButton } from '../../Button';
import { Center } from '../../Center';
import { ChevronIcon } from './ChevronIcon';
import useStyles, { AccordionIconPosition } from './AccordionItem.styles';

export type { AccordionIconPosition };
export type AccordionItemStylesNames = Selectors<typeof useStyles>;

export interface PublicAccordionItemProps
  extends DefaultProps<AccordionItemStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  disableIconRotation?: boolean;
  iconPosition?: AccordionIconPosition;
  controlRef?: React.ForwardedRef<HTMLButtonElement>;
}

export interface AccordionItemProps extends PublicAccordionItemProps {
  opened?: boolean;
  onToggle?(): void;
  transitionDuration?: number;
  id?: string;
  onControlKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  offsetIcon?: boolean;
  iconSize?: number;
  order?: 2 | 3 | 4 | 5 | 6;
}

export function AccordionItem({
  opened,
  onToggle,
  label,
  children,
  className,
  classNames,
  styles,
  transitionDuration,
  icon = <ChevronIcon />,
  disableIconRotation = false,
  offsetIcon = true,
  iconSize = 24,
  iconPosition = 'left',
  order = 3,
  id,
  controlRef,
  onControlKeyDown,
  ...others
}: AccordionItemProps) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : transitionDuration;
  const { classes, cx } = useStyles(
    { transitionDuration: duration, disableIconRotation, iconPosition, offsetIcon, iconSize },
    { classNames, styles, name: 'Accordion' }
  );

  const cappedOrder = Math.min(6, Math.max(2, order)) as 2 | 3 | 4 | 5 | 6;
  const Heading = `h${cappedOrder}` as const;

  return (
    <Box className={cx(classes.item, { [classes.itemOpened]: opened }, className)} {...others}>
      <Heading className={classes.itemTitle}>
        <UnstyledButton
          className={classes.control}
          onClick={onToggle}
          type="button"
          aria-expanded={opened}
          aria-controls={`${id}-body`}
          id={id}
          ref={controlRef}
          onKeyDown={onControlKeyDown}
        >
          <Center className={classes.icon}>{icon}</Center>
          <div className={classes.label}>{label}</div>
        </UnstyledButton>
      </Heading>

      <Collapse in={opened} transitionDuration={duration}>
        <div className={classes.content} role="region" id={`${id}-body`} aria-labelledby={id}>
          <div className={classes.contentInner}>{children}</div>
        </div>
      </Collapse>
    </Box>
  );
}

AccordionItem.displayName = '@mantine/core/AccordionItem';
