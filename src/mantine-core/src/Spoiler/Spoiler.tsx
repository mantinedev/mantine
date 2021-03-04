import React, { useRef, useState, useEffect } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { useReducedMotion } from '@mantine/hooks';
import useStyles from './Spoiler.styles';

interface SpoilerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Max height of visible content, when this point is reached spoiler appears */
  maxHeight: number;

  /** Label for close spoiler action */
  hideLabel: React.ReactNode;

  /** Label for open spoiler action */
  showLabel: React.ReactNode;

  /** Get ref of spoiler toggle button */
  controlRef?: React.MutableRefObject<HTMLButtonElement> | React.RefCallback<HTMLButtonElement>;

  /** Spoiler reveal transition duration in ms, 0 or null to turn off animation */
  transitionDuration?: number;

  overlayColor?: string;
}

export function Spoiler({
  className,
  children,
  maxHeight = 100,
  hideLabel,
  showLabel,
  overlayColor = '#fff',
  themeOverride,
  transitionDuration = 200,
  controlRef,
  ...others
}: SpoilerProps) {
  const classes = useStyles({
    transitionDuration: !useReducedMotion() && transitionDuration,
    theme: useMantineTheme(themeOverride),
  });
  const [show, setShowState] = useState(false);
  const [spoiler, setSpoilerState] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const spoilerMoreContent = show ? hideLabel : showLabel;

  useEffect(() => {
    setSpoilerState(maxHeight < contentRef.current.clientHeight);
  }, [maxHeight, children]);

  return (
    <div className={cx(classes.spoiler, { [classes.shown]: show }, className)} {...others}>
      <div
        className={classes.content}
        style={{
          maxHeight: !show ? maxHeight : contentRef.current && contentRef.current.clientHeight,
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
      {spoiler && (
        <button
          ref={controlRef}
          type="button"
          className={classes.more}
          onClick={() => setShowState((opened) => !opened)}
          style={{
            backgroundImage: `linear-gradient(0deg, ${overlayColor} 20%, rgba(0, 0, 0, 0) 1000%)`,
          }}
        >
          {spoilerMoreContent}
        </button>
      )}
    </div>
  );
}

Spoiler.displayName = '@mantine/core/Spoiler';
