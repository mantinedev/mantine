import React from 'react';
import clsx from 'clsx';
import { useExtractedMargins } from '@mantine/styles';

export interface CenterProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode;

  /** Set to true to use inline-flex instead of flex */
  inline?: boolean;
}

export function Center({ style, className, inline = false, ...others }: CenterProps) {
  const { mergedStyles, rest } = useExtractedMargins({ others, style });

  return (
    <div
      {...rest}
      className={clsx('mantine-center', className)}
      style={{
        display: inline ? 'inline-flex' : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...mergedStyles,
      }}
    />
  );
}

Center.displayName = '@mantine/core/Center';
