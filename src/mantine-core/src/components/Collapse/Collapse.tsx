import React, { useState, useRef } from 'react';
import { useWindowEvent, useForceUpdate, useReducedMotion } from '@mantine/hooks';
import cx from 'clsx';

import { useMantineTheme, DefaultProps, mergeStyles } from '../../theme';
import useStyles from './Collapse.styles';

export type CollapseStylesNames = keyof ReturnType<typeof useStyles>;

export interface CollapseProps
  extends DefaultProps<CollapseStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Any valid JSX Element */
  children: React.ReactNode;

  /** Controlled state (controls if Collapse is opened or closed) */
  in: boolean;

  /** Callback invoked when animation finish */
  onTransitionEnd?: () => void;

  /** Transition duration for collapse transitions in ms */
  transitionDuration?: number;

  /** Transition timing function for collapse transitions, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;
}

export function Collapse({
  children,
  in: isOpened,
  transitionDuration = 300,
  transitionTimingFunction,
  themeOverride,
  className,
  classNames,
  style,
  styles,
  onTransitionEnd,
  ...others
}: CollapseProps) {
  const forceUpdate = useForceUpdate();
  const theme = useMantineTheme(themeOverride);
  const reduceMotion = useReducedMotion();
  const collapseRef = useRef<HTMLDivElement>(null);

  const classes = useStyles(
    {
      theme,
      transitionDuration: reduceMotion ? 0 : transitionDuration,
      transitionTimingFunction,
    },
    classNames,
    'collapse'
  );
  const _styles = mergeStyles(classes, styles);
  const [rect, setRect] = useState<HTMLDivElement>(null);

  useWindowEvent('resize', forceUpdate);

  const handleTransitionEnd = (e) => {
    if (onTransitionEnd && e.propertyName === 'height') {
      onTransitionEnd();
    }
  };

  return (
      <div
        className={cx(classes.root, className)}
        role="region"
        ref={collapseRef}
        onTransitionEnd={handleTransitionEnd}
        style={{
          ..._styles.root,
          ...style,
          height: isOpened ? (rect ? `${rect.getBoundingClientRect().height}px` : 'auto') : '0px',
        }}
        {...others}
      >
        <div
          className={classes.content}
          style={{ ..._styles.content, opacity: isOpened ? 1 : 0 }}
          ref={(node) => setRect(node)}
        >
          {children}
        </div>
      </div>
   );
}

Collapse.displayName = '@mantine/core/Collapse';
