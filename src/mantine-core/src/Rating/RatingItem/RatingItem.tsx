import React from 'react';
import { MantineSize, Selectors, DefaultProps, MantineColor } from '@mantine/styles';
import { Box } from '../../Box';
import { StarSymbol } from '../StarSymbol/StarSymbol';
import useStyles from './RatingItem.styles';

export type RatingItemStylesNames = Selectors<typeof useStyles>;

export interface RatingItemProps
  extends DefaultProps<RatingItemStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'size'> {
  variant: string;
  size: MantineSize;
  getSymbolLabel: (value: number) => string;
  emptyIcon?: React.ReactNode | ((value: number) => React.ReactNode);
  fullIcon?: React.ReactNode | ((value: number) => React.ReactNode);
  color: MantineColor;
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
  classNames,
  styles,
  unstyled,
  color,
  id,
  variant,
  onChange,
  ...others
}: RatingItemProps) {
  const { classes } = useStyles(null, {
    name: 'Rating',
    classNames,
    styles,
    unstyled,
    size,
    variant,
  });
  const _fullIcon = typeof fullIcon === 'function' ? fullIcon(value) : fullIcon;
  const _emptyIcon = typeof emptyIcon === 'function' ? emptyIcon(value) : emptyIcon;

  return (
    <>
      {!readOnly && (
        <input
          onKeyDown={(event) => event.key === ' ' && onChange(value)}
          className={classes.input}
          id={id}
          type="radio"
          data-active={active}
          aria-label={getSymbolLabel(value)}
          value={value}
          onChange={onChange}
          {...others}
        />
      )}

      <Box
        component={readOnly ? 'div' : 'label'}
        className={classes.label}
        data-read-only={readOnly || undefined}
        htmlFor={id}
        sx={fractionValue === 1 ? undefined : { zIndex: active ? 2 : 0 }}
        onClick={() => onChange(value)}
      >
        <Box
          className={classes.symbolBody}
          sx={
            fractionValue === 1
              ? undefined
              : { clipPath: `inset(0 ${active ? 100 - fractionValue * 100 : 100}% 0 0)` }
          }
        >
          {full
            ? _fullIcon || <StarSymbol color={color} size={size} type="full" />
            : _emptyIcon || <StarSymbol color={color} size={size} type="empty" />}
        </Box>
      </Box>
    </>
  );
}

RatingItem.displayName = '@mantine/core/RatingItem';
