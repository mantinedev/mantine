import React, { forwardRef } from 'react';
import { useExtractedMargins, useSx, DefaultProps } from '@mantine/styles';

export interface CenterProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode;

  /** Set to true to use inline-flex instead of flex */
  inline?: boolean;
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(
  ({ style, className, inline = false, sx, ...others }: CenterProps, ref) => {
    const { sxClassName, css, cx } = useSx({ sx, className });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    return (
      <div
        {...rest}
        ref={ref}
        style={mergedStyles}
        className={cx(
          css({
            display: inline ? 'inline-flex' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }),
          sxClassName
        )}
      />
    );
  }
);

Center.displayName = '@mantine/core/Center';
