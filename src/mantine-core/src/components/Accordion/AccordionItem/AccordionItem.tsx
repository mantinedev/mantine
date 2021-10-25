import React from 'react';
import { useWindowEvent, useForceUpdate, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, ClassNames, useSxClassName } from '@mantine/styles';
import { Collapse } from '../../Collapse';
import { UnstyledButton } from '../../Button';
import { Center } from '../../Center';
import { ChevronIcon } from './ChevronIcon';
import useStyles, { AccordionIconPosition } from './AccordionItem.styles';

export type { AccordionIconPosition };
export type AccordionItemStylesNames = ClassNames<typeof useStyles>;

export interface PublicAccordionItemProps extends React.ComponentPropsWithoutRef<'div'> {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  disableIconRotation?: boolean;
  iconPosition?: AccordionIconPosition;
}

export interface AccordionItemType {
  type: any;
  props: PublicAccordionItemProps;
}

interface AccordionItemProps
  extends DefaultProps<AccordionItemStylesNames>,
    PublicAccordionItemProps {
  opened?: boolean;
  onToggle?(): void;
  transitionDuration?: number;
  id?: string;
}

export function AccordionItem({
  opened,
  onToggle,
  label,
  children,
  className,
  classNames,
  styles,
  sx,
  transitionDuration,
  icon = <ChevronIcon />,
  disableIconRotation = false,
  iconPosition = 'left',
  id,
  ...others
}: AccordionItemProps) {
  const forceUpdate = useForceUpdate();
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : transitionDuration;
  const sxClassName = useSxClassName({ sx });
  const { classes, cx } = useStyles(
    { transitionDuration: duration, disableIconRotation, iconPosition },
    { classNames, styles, name: 'Accordion' }
  );

  useWindowEvent('resize', () => forceUpdate());

  return (
    <div
      className={cx(classes.item, { [classes.itemOpened]: opened }, sxClassName, className)}
      {...others}
    >
      <UnstyledButton
        className={classes.control}
        onClick={onToggle}
        type="button"
        aria-expanded={opened}
        aria-controls={`${id}-body`}
        id={id}
      >
        <Center className={classes.icon}>{icon}</Center>

        <div className={classes.label}>{label}</div>
      </UnstyledButton>

      <Collapse in={opened} transitionDuration={duration}>
        <div className={classes.content} role="region" id={`${id}-body`} aria-labelledby={id}>
          <div className={classes.contentInner}>{children}</div>
        </div>
      </Collapse>
    </div>
  );
}

AccordionItem.displayName = '@mantine/core/AccordionItem';
