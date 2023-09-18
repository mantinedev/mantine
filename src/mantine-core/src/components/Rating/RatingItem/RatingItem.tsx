import React from 'react';
import { MantineSize, BoxProps, ElementProps, Box } from '../../../core';
import { StarSymbol } from '../StarSymbol/StarSymbol';
import { useRatingContext } from '../Rating.context';

export interface RatingItemProps extends BoxProps, ElementProps<'input', 'value' | 'size'> {
  size: MantineSize;
  getSymbolLabel: ((value: number) => string) | undefined;
  emptyIcon?: React.ReactNode | ((value: number) => React.ReactNode);
  fullIcon?: React.ReactNode | ((value: number) => React.ReactNode);
  full: boolean;
  active: boolean;
  fractionValue: number;
  value: number;
  id: string;
  onChange(event: React.ChangeEvent<HTMLInputElement> | number): void;
}

export function RatingItem({
  size,
  getSymbolLabel,
  emptyIcon,
  fullIcon,
  full,
  active,
  value,
  readOnly,
  fractionValue,
  color,
  id,
  onChange,
  style,
  ...others
}: RatingItemProps) {
  const ctx = useRatingContext();
  const _fullIcon = typeof fullIcon === 'function' ? fullIcon(value) : fullIcon;
  const _emptyIcon = typeof emptyIcon === 'function' ? emptyIcon(value) : emptyIcon;

  return (
    <>
      {!readOnly && (
        <input
          {...ctx.getStyles('input')}
          onKeyDown={(event) => event.key === ' ' && onChange(value)}
          id={id}
          type="radio"
          data-active={active || undefined}
          aria-label={getSymbolLabel?.(value)}
          value={value}
          onChange={onChange}
          {...others}
        />
      )}

      <Box
        component={readOnly ? 'div' : 'label'}
        {...ctx.getStyles('label')}
        data-read-only={readOnly || undefined}
        htmlFor={id}
        onClick={() => onChange(value)}
        __vars={{
          '--rating-item-z-index': (fractionValue === 1 ? undefined : active ? 2 : 0)?.toString(),
        }}
      >
        <Box
          {...ctx.getStyles('symbolBody')}
          __vars={{
            '--rating-symbol-clip-path':
              fractionValue === 1
                ? undefined
                : `inset(0 ${active ? 100 - fractionValue * 100 : 100}% 0 0)`,
          }}
        >
          {full
            ? _fullIcon || <StarSymbol type="full" />
            : _emptyIcon || <StarSymbol type="empty" />}
        </Box>
      </Box>
    </>
  );
}

RatingItem.displayName = '@mantine/core/RatingItem';
