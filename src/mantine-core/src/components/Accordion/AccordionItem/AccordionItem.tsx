import React, { useState } from 'react';
import { useWindowEvent, useForceUpdate, useReducedMotion } from '@mantine/hooks';
import { DefaultProps, mergeStyles } from '@mantine/styles';
import { ChevronIcon } from './ChevronIcon';
import useStyles from './AccordionItem.styles';

export type AccordionItemStylesNames = keyof ReturnType<typeof useStyles>['classes'];

export interface PublicAccordionItemProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Accordion.Item control label */
  label?: React.ReactNode;

  /** Icon on the left side of label */
  icon?: React.ReactNode;

  /** Accordion.Item content */
  children?: React.ReactNode;

  /** Get item control ref */
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
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
  style,
  id,
  ...others
}: AccordionItemProps) {
  const forceUpdate = useForceUpdate();
  const reduceMotion = useReducedMotion();
  const { classes, cx } = useStyles(
    { transitionDuration: reduceMotion ? 0 : transitionDuration },
    classNames,
    'accordion'
  );
  const _styles = mergeStyles(classes, styles);
  const [rect, setRect] = useState<HTMLDivElement>(null);

  useWindowEvent('resize', () => forceUpdate());

  return (
    <div
      className={cx(classes.item, { [classes.itemOpened]: opened }, className)}
      style={{ ..._styles.item, ...(opened ? _styles.itemOpened : null), ...style }}
      {...others}
    >
      <button
        className={classes.control}
        style={_styles.control}
        onClick={onToggle}
        type="button"
        aria-expanded={opened}
        aria-controls={`${id}-body`}
        id={id}
      >
        <div className={classes.label} style={_styles.label}>
          {label}
        </div>
        <div className={classes.icon} style={_styles.icon}>
          <ChevronIcon />
        </div>
      </button>

      <div
        className={classes.content}
        role="region"
        id={`${id}-body`}
        aria-labelledby={id}
        style={{
          ..._styles.content,
          height: opened ? (!rect ? 'auto' : rect.getBoundingClientRect().height) : 0,
        }}
      >
        <div
          className={classes.contentInner}
          style={{ ..._styles.contentInner, opacity: opened ? 1 : 0 }}
          ref={(node) => setRect(node)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

AccordionItem.displayName = '@mantine/core/AccordionItem';
