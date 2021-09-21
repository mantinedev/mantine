import React from 'react';
import { useWindowEvent, useForceUpdate, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, mergeStyles } from '@mantine/styles';
import { Collapse } from '../../Collapse/Collapse';
import { UnstyledButton } from '../../Button';
import { Center } from '../../Center/Center';
import { ChevronIcon } from './ChevronIcon';
import useStyles, { AccordionIconPosition } from './AccordionItem.styles';

export type { AccordionIconPosition };
export type AccordionItemStylesNames = keyof ReturnType<typeof useStyles>['classes'];

export interface PublicAccordionItemProps extends React.ComponentPropsWithoutRef<'div'> {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
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
  transitionDuration,
  icon = <ChevronIcon />,
  disableIconRotation = false,
  iconPosition = 'left',
  style,
  id,
  ...others
}: AccordionItemProps) {
  const forceUpdate = useForceUpdate();
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : transitionDuration;
  const { classes, cx } = useStyles(
    { transitionDuration: duration, disableIconRotation, iconPosition },
    classNames,
    'accordion'
  );
  const _styles = mergeStyles(classes, styles);

  useWindowEvent('resize', () => forceUpdate());

  return (
    <div
      className={cx(classes.item, { [classes.itemOpened]: opened }, className)}
      style={{ ..._styles.item, ...(opened ? _styles.itemOpened : null), ...style }}
      {...others}
    >
      <UnstyledButton
        className={classes.control}
        style={_styles.control}
        onClick={onToggle}
        type="button"
        aria-expanded={opened}
        aria-controls={`${id}-body`}
        id={id}
      >
        <Center className={classes.icon} style={_styles.icon}>
          {icon}
        </Center>

        <div className={classes.label} style={_styles.label}>
          {label}
        </div>
      </UnstyledButton>

      <Collapse in={opened} transitionDuration={duration}>
        <div
          className={classes.content}
          role="region"
          id={`${id}-body`}
          aria-labelledby={id}
          style={_styles.content}
        >
          <div className={classes.contentInner} style={_styles.contentInner}>
            {children}
          </div>
        </div>
      </Collapse>
    </div>
  );
}

AccordionItem.displayName = '@mantine/core/AccordionItem';
