import React, { useRef, useState, useEffect, forwardRef } from 'react';
import { DefaultProps, ClassNames, useExtractedMargins } from '@mantine/styles';
import { Button } from '../Button/Button';
import useStyles from './Spoiler.styles';

export type SpoilerStylesNames = ClassNames<typeof useStyles>;

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

export const Spoiler = forwardRef<HTMLDivElement, SpoilerProps>(
  (
    {
      className,
      style,
      children,
      maxHeight = 100,
      hideLabel,
      showLabel,
      transitionDuration = 200,
      controlRef,
      initialState = false,
      classNames,
      styles,
      sx,
      ...others
    }: SpoilerProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { transitionDuration },
      { sx, classNames, styles, name: 'Spoiler' }
    );
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const [show, setShowState] = useState(initialState);
    const [spoiler, setSpoilerState] = useState(initialState);
    const contentRef = useRef<HTMLDivElement>(null);

    const spoilerMoreContent = show ? hideLabel : showLabel;

    useEffect(() => {
      setSpoilerState(maxHeight < contentRef.current.clientHeight);
    }, [maxHeight, children]);

    return (
      <div className={cx(classes.root, className)} style={mergedStyles} ref={ref} {...rest}>
        <div
          className={classes.content}
          style={{
            maxHeight: !show ? maxHeight : contentRef.current && contentRef.current.clientHeight,
          }}
        >
          <div ref={contentRef}>{children}</div>
        </div>

        {spoiler && (
          <Button
            variant="link"
            ref={controlRef}
            onClick={() => setShowState((opened) => !opened)}
            className={classes.control}
          >
            {spoilerMoreContent}
          </Button>
        )}
      </div>
    );
  }
);

Spoiler.displayName = '@mantine/core/Spoiler';
