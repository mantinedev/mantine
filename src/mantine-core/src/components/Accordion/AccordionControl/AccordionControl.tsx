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
    <div className={cx(classes.item, { [classes.itemOpened]: opened }, className)} {...others}>
      <UnstyledButton className={classes.control} onClick={onToggle}>
        <div className={classes.label}>{label}</div>
        <div className={classes.icon}>
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
          style={_styles.contentInner}
          ref={(node) => setRect(node)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

AccordionControl.displayName = '@mantine/core/AccordionControl';
