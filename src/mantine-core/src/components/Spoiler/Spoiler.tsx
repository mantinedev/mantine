import React, { useRef, useState, useEffect } from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { DefaultProps, useMantineTheme, mergeStyles } from '../../theme';
import { Button } from '../Button/Button';
import useStyles from './Spoiler.styles';

export interface SpoilerProps
  extends DefaultProps<typeof useStyles>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Max height of visible content, when this point is reached spoiler appears */
  maxHeight: number;

  /** Label for close spoiler action */
  hideLabel: React.ReactNode;

  /** Label for open spoiler action */
  showLabel: React.ReactNode;

  /** Get ref of spoiler toggle button */
  controlRef?: React.ForwardedRef<HTMLButtonElement>;

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
  classNames,
  styles,
  ...others
}: SpoilerProps) {
  const classes = useStyles(
    {
      transitionDuration: !useReducedMotion() && transitionDuration,
      theme: useMantineTheme(themeOverride),
    },
    classNames
  );
  const _styles = mergeStyles(classes, styles);
  const [show, setShowState] = useState(false);
  const [spoiler, setSpoilerState] = useState(false);
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
        >
          {spoilerMoreContent}
        </Button>
      )}
    </div>
  );
}

Spoiler.displayName = '@mantine/core/Spoiler';
