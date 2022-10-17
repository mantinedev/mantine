import React, { forwardRef, useId, useState, useRef } from 'react';
import { DefaultProps, MantineSize, useComponentDefaultProps, Selectors } from '@mantine/styles';
import { useUncontrolled, clamp, useMergedRef } from '@mantine/hooks';
import { Box } from '../Box';
import { roundValueTo } from './utils';
import { RatingItem } from './RatingItem';
import useStyles, { RatingStylesParams } from './Rating.styles';

export type RatingStylesNames = Selectors<typeof useStyles>;

export interface RatingProps
  extends DefaultProps<RatingStylesNames, RatingStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Rating default value */
  defaultValue?: number;

  /** Rating value */
  value?: number;

  /** This icon will be displayed if symbol is empty */
  emptySymbol?: React.ReactNode | ((value: number) => React.ReactNode);

  /** This icon will be displayed if symbol is full */
  fullSymbol?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Rating fractions, by default it is 1 */
  fractions?: number;

  /** Predefined sizes for rating */
  size?: MantineSize;

  /** Total number of ratings */
  count?: number;

  /** It will be called if value changes */
  onChange?: (value: number) => void;

  /** It will be called if hover changes */
  onChangeHover?: (value: number) => void;

  /** Function should return labelText for the symbols*/
  getSymbolLabel?: (value: number) => string;

  /** Name of rating, should be unique within the page */
  name?: string;

  /** If true, you won't be able to interact */
  readonly?: boolean;

  /** If true, only the selected symbol will change to full symbol */
  highlightSelectedOnly?: boolean;
}

const defaultProps: Partial<RatingProps> = {
  size: 'sm',
  getSymbolLabel: (value) => `${value}`,
  count: 5,
  fractions: 1,
  readonly: false,
  highlightSelectedOnly: false,
};

export const Rating = forwardRef<HTMLInputElement, RatingProps>((props, ref) => {
  const {
    defaultValue,
    value,
    emptySymbol,
    fullSymbol,
    size,
    count,
    fractions,
    onChange,
    onChangeHover,
    getSymbolLabel,
    name,
    readonly,
    className,
    classNames,
    styles,
    unstyled,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    highlightSelectedOnly,
    ...others
  } = useComponentDefaultProps('Rating', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { readonly },
    { name: 'Rating', classNames, styles, unstyled }
  );

  const _name = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [stableValue, setStableValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: 0,
  });
  const decimalUnit = 1 / fractions;

  const [interactiveValue, setInteractiveValue] = useState(-1);
  const [isClientOutside, setClientOutside] = useState(true);

  const stableValueRounded = roundValueTo(stableValue, decimalUnit);

  const _value = interactiveValue !== -1 ? interactiveValue : stableValueRounded;

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnter?.(event);
    setClientOutside(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(event);

    const { left, right, width } = rootRef.current.getBoundingClientRect();
    const symbolWidth = width / count;

    const hoverPosition = theme.dir === 'rtl' ? right - event.clientX : event.clientX - left;
    const hoverValue = hoverPosition / symbolWidth;

    const rounded = clamp(
      roundValueTo(hoverValue + decimalUnit / 2, decimalUnit),
      decimalUnit,
      count
    );

    setInteractiveValue(rounded);
    if (onChangeHover && rounded !== interactiveValue) {
      onChangeHover(rounded);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(event);
    setInteractiveValue(-1);
    setClientOutside(true);
    if (onChangeHover && interactiveValue !== -1) {
      onChangeHover(-1);
    }
  };

  const handleBlur = () => {
    if (isClientOutside) {
      setInteractiveValue(-1);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.clientX === 0 && event.clientY === 0) {
      const resultedValue = parseFloat(event.currentTarget.value);
      setInteractiveValue(resultedValue);

      return;
    }

    setStableValue(0);
    setInteractiveValue(-1);
    if (onChange && parseFloat(event.currentTarget.value) === stableValueRounded) {
      onChange(0);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const resultedValue = parseFloat(event.target.value);

    setStableValue(resultedValue);
    if (onChange) {
      onChange(resultedValue);
    }
  };

  const integerItems = Array.from(new Array(count));
  return (
    <Box
      ref={useMergedRef(rootRef, ref)}
      className={cx(classes.root, className)}
      {...(!readonly
        ? {
            onMouseMove: handleMouseMove,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
          }
        : {})}
      {...others}
    >
      {integerItems.map((_, integerIndex) => {
        const integerValue = integerIndex + 1;
        const fractionItems = Array.from(new Array(integerIndex === 0 ? fractions + 1 : fractions));
        const isGroupActive = !readonly && Math.ceil(interactiveValue) === integerValue;

        return (
          <div key={integerValue} data-active={isGroupActive} className={classes.symbolGroup}>
            {fractionItems.map((__, fractionIndex) => {
              const fractionValue =
                decimalUnit * (integerIndex === 0 ? fractionIndex : fractionIndex + 1);
              const symbolValue = roundValueTo(integerValue - 1 + fractionValue, decimalUnit);
              const isFull = highlightSelectedOnly ? symbolValue === _value : symbolValue <= _value;
              const isChecked = symbolValue === stableValueRounded;
              const isSymbolActive = symbolValue === _value;

              return (
                <RatingItem
                  key={`${integerValue}-${symbolValue}`}
                  classes={{
                    input: classes.input,
                    label: classes.label,
                    symbolBody: classes.symbolBody,
                    symbolLabel: classes.symbolLabel,
                  }}
                  size={size}
                  getSymbolLabel={getSymbolLabel}
                  emptyIcon={emptySymbol}
                  fullIcon={fullSymbol}
                  isFull={isFull}
                  isActive={isSymbolActive}
                  checked={isChecked}
                  readonly={readonly}
                  fractionValue={fractionValue}
                  value={symbolValue}
                  name={name || _name}
                  onClick={handleClick}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              );
            })}
          </div>
        );
      })}
    </Box>
  );
});

Rating.displayName = '@mantine/core/Rating';
