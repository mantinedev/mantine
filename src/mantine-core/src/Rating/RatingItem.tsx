import React, { useId } from 'react';
import { MantineSize } from '@mantine/styles';
import { Box } from '../Box';
import { StarSymbol } from './StarSymbol';

interface RatingItemProps {
  classes: {
    input: string;
    label: string;
    symbolLabel: string;
    symbolBody: string;
  };
  size: MantineSize;
  getSymbolLabel: (value: number) => string;
  emptyIcon?: React.ReactNode;
  fullIcon?: React.ReactNode;
  isFull: boolean;
  isActive: boolean;
  checked: boolean;
  readonly: boolean;
  fractionValue: number;
  value: number;
  name: string;
  onClick: React.MouseEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}
export function RatingItem(props: RatingItemProps) {
  const {
    classes,
    size,
    getSymbolLabel,
    emptyIcon,
    fullIcon,
    isFull,
    isActive,
    checked,
    readonly,
    fractionValue,
    value,
    name,
    onClick,
    onChange,
    onBlur,
  } = props;
  const id = useId();

  return (
    <>
      {!readonly && (
        <input
          className={classes.input}
          id={id}
          type="radio"
          data-active={isActive}
          {...{ checked, name, value, onClick, onChange, onBlur }}
        />
      )}
      <Box
        component={readonly ? 'div' : 'label'}
        className={classes.label}
        htmlFor={id}
        sx={
          fractionValue === 1
            ? {}
            : {
                zIndex: isActive ? 2 : 0,
              }
        }
      >
        {!readonly && <div className={classes.symbolLabel}>{getSymbolLabel(value)}</div>}
        <Box
          className={classes.symbolBody}
          sx={
            fractionValue === 1
              ? {}
              : {
                  clipPath: `inset(0 ${isActive ? 100 - fractionValue * 100 : 100}% 0 0)`,
                }
          }
        >
          {isFull
            ? fullIcon || <StarSymbol size={size} type="full" />
            : emptyIcon || <StarSymbol size={size} type="empty" />}
        </Box>
      </Box>
    </>
  );
}
