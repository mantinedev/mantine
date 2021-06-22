import React, { useRef, useState, useEffect } from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, mergeStyles } from '../../theme';
import { Button } from '../Button/Button';
import useStyles from './Spoiler.styles';

export type SpoilerStylesNames = keyof ReturnType<typeof useStyles>;

export interface SpoilerProps
  extends DefaultProps<SpoilerStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Max height of visible content, when this point is reached spoiler appears */
  maxHeight: number;

  /** Label for close spoiler action */
  hideLabel: React.ReactNode;

  /** Label for open spoiler action */
  showLabel: React.ReactNode;

  /** Get ref of spoiler toggle button */
  controlRef?: React.ForwardedRef<HTMLButtonElement>;

  /** Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state will be updated on mount */
  initialState?: boolean;

  /** Spoiler reveal transition duration in ms, 0 or null to turn off animation */
  transitionDuration?: number;
}

export function Spoiler({
  className,
  style,
  children,
  maxHeight = 100,
  hideLabel,
  showLabel,
  themeOverride,
  transitionDuration = 200,
  controlRef,
  initialState = false,
  classNames,
  styles,
  ...others
}: SpoilerProps) {
  const classes = useStyles(
    {
      transitionDuration: !useReducedMotion() && transitionDuration,
      theme: useMantineTheme(themeOverride),
    },
    classNames,
    'spoiler'
  );
  const _styles = mergeStyles(classes, styles);
  const [show, setShowState] = useState(initialState);
  const [spoiler, setSpoilerState] = useState(initialState);
  const contentRef = useRef<HTMLDivElement>(null);

  const spoilerMoreContent = show ? hideLabel : showLabel;

  useEffect(() => {
    setSpoilerState(maxHeight < contentRef.current.clientHeight);
  }, [maxHeight, children]);

  return (
    <div className={cx(classes.root, className)} style={{ ...style, ..._styles.root }} {...others}>
      <div
        className={classes.content}
        style={{
          ..._styles.content,
          maxHeight: !show ? maxHeight : contentRef.current && contentRef.current.clientHeight,
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>

      {spoiler && (
        <Button
          variant="link"
          elementRef={controlRef}
          onClick={() => setShowState((opened) => !opened)}
          themeOverride={themeOverride}
          className={classes.control}
          style={_styles.control}
        >
          {spoilerMoreContent}
        </Button>
      )}
    </div>
  );
}

Spoiler.displayName = '@mantine/core/Spoiler';
