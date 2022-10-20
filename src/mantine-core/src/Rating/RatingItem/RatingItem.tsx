import React, { useId } from 'react';
import { MantineSize, Selectors, DefaultProps, MantineColor } from '@mantine/styles';
import { Box } from '../../Box';
import { StarSymbol } from '../StarSymbol/StarSymbol';
import useStyles from './RatingItem.styles';

export type RatingItemStylesNames = Selectors<typeof useStyles>;

export interface RatingItemProps
  extends DefaultProps<RatingItemStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'size'> {
  size: MantineSize;
  getSymbolLabel: (value: number) => string;
  emptyIcon?: React.ReactNode | ((value: number) => React.ReactNode);
  fullIcon?: React.ReactNode | ((value: number) => React.ReactNode);
  color: MantineColor;
  full: boolean;
  active: boolean;
  fractionValue: number;
  value: number;
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
  ...others
}: RatingItemProps) {
  const id = useId();
  const { classes } = useStyles(null, { name: 'Rating', classNames, styles, unstyled });
  const _fullIcon = typeof fullIcon === 'function' ? fullIcon(value) : fullIcon;
  const _emptyIcon = typeof emptyIcon === 'function' ? emptyIcon(value) : emptyIcon;

  return (
    <>
      {!readOnly && (
        <input
          className={classes.input}
          id={id}
          type="radio"
          data-active={active}
          aria-label={getSymbolLabel(value)}
          value={value}
          {...others}
        />
      )}

      <Box
        component={readOnly ? 'div' : 'label'}
        className={classes.label}
        data-read-only={readOnly || undefined}
        htmlFor={id}
        sx={fractionValue === 1 ? undefined : { zIndex: active ? 2 : 0 }}
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
