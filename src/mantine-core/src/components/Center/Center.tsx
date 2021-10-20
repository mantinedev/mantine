import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { useExtractedMargins } from '@mantine/styles';

export interface CenterProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode;

  /** Set to true to use inline-flex instead of flex */
  inline?: boolean;
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(
  ({ style, className, inline = false, ...others }: CenterProps, ref) => {
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    return (
      <div
        {...rest}
        ref={ref}
        className={clsx('mantine-Center', className)}
        style={{
          display: inline ? 'inline-flex' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...mergedStyles,
        }}
      />
    );
  }
);

Center.displayName = '@mantine/core/Center';
