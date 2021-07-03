import React, { useState } from 'react';
import cx from 'clsx';
import { useWindowEvent, useForceUpdate, useReducedMotion } from '@mantine/hooks';
import { useMantineTheme, DefaultProps, mergeStyles } from '../../../theme';
import { UnstyledButton } from '../../Button/UnstyledButton/UnstyledButton';
import { AccordionItemProps } from '../AccordionItem/AccordionItem';
import { ChevronIcon } from './ChevronIcon';
import useStyles from './AccordionControl.styles';

export type AccordionControlStylesNames = keyof ReturnType<typeof useStyles>;

interface AccordionControlProps
  extends DefaultProps<AccordionControlStylesNames>,
    AccordionItemProps {
  opened: boolean;
  onToggle(): void;
  transitionDuration: number;
}

export function AccordionControl({
  opened,
  onToggle,
  label,
  children,
  className,
  classNames,
  styles,
  themeOverride,
  transitionDuration,
  style,
  ...others
}: AccordionControlProps) {
  const forceUpdate = useForceUpdate();
  const theme = useMantineTheme(themeOverride);
  const reduceMotion = useReducedMotion();
  const classes = useStyles(
    { theme, transitionDuration: reduceMotion ? 0 : transitionDuration },
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
      <UnstyledButton
        className={classes.control}
        style={_styles.control}
        onClick={onToggle}
        type="button"
      >
        <div className={classes.label} style={_styles.label}>
          {label}
        </div>
        <div className={classes.icon} style={_styles.icon}>
          <ChevronIcon />
        </div>
      </UnstyledButton>

      <div
        className={classes.content}
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

AccordionControl.displayName = '@mantine/core/AccordionControl';
