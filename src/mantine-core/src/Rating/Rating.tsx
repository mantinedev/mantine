import React, { forwardRef, useId, useState, useRef } from 'react';
import { DefaultProps, MantineSize, useComponentDefaultProps, Selectors } from '@mantine/styles';
import { useUncontrolled, mergeRefs, clamp } from '@mantine/hooks';
import { StarSymbol } from './StarSymbol';
import { Box } from '../Box';
import useStyles, { RatingStylesParams } from './Rating.styles';

interface SymbolProps {
  getSymbolLabel: RatingProps['getSymbolLabel'];
  value: number;
  inputProps: React.ComponentPropsWithoutRef<'input'>;
  symbolBodyProps: React.ComponentPropsWithoutRef<'div'>;
  labelProps: { className: string; style: React.CSSProperties };
  emptyIcon: React.ReactNode;
  fullIcon: React.ReactNode;
  isFull: boolean;
  size: MantineSize;
  readonly: boolean;
}
export function Symbol(props: SymbolProps) {
  const {
    value,
    getSymbolLabel,
    inputProps,
    labelProps,
    isFull,
    emptyIcon,
    fullIcon,
    size,
    symbolBodyProps,
    readonly,
  } = props;
  const id = useId();

  return (
    <>
      {!readonly && <input value={value} {...inputProps} id={id} type="radio" />}
      <Box component={readonly ? 'div' : 'label'} {...labelProps} htmlFor={id}>
        {!readonly && <div className="symbol-label">{getSymbolLabel(value)}</div>}
        <div {...symbolBodyProps}>
          {isFull
            ? fullIcon || <StarSymbol size={size} type="full" />
            : emptyIcon || <StarSymbol size={size} type="empty" />}
        </div>
      </Box>
    </>
  );
}

function getDecimalPrecision(num: number) {
  const decimalPrecision = `${num}`.split('.')[1]?.length || 0;
  return decimalPrecision;
}

function cutDecimalTo(value: number, num: number) {
  return Number(value.toFixed(num));
}

function roundValueTo(value: number, to: number) {
  const rounded = Math.round(value / to) * to;
  return cutDecimalTo(rounded, getDecimalPrecision(to));
}

export type RatingStylesNames = Selectors<typeof useStyles>;

export interface RatingProps extends DefaultProps<RatingStylesNames, RatingStylesParams> {
  /** Rating default value */
  defaultValue?: number;

  /** Rating value */
  value?: number;

  /** This icon will be displayed if empty */
  emptySymbol?: React.ReactNode;

  /** This icon will be displayed if full */
  fullSymbol?: React.ReactNode;

  /** Rating Fraction, by default it is 1 */
  fractions?: number;

  /** Size */
  size?: MantineSize;

  /** No of ratings */
  count?: number;

  /** called on onChange event */
  onChange?: (value: number) => void;

  /** called if hover change */
  onChangeHover?: (value: number) => void;

  /** return labelText for a symbol, by default the function return the value */
  getSymbolLabel?: (value: number) => string;

  /** name of rating, should be unique within the page */
  name?: string;

  /** Readonly */
  readonly?: boolean;
}

const defaultProps: Partial<RatingProps> = {
  size: 'sm',
  getSymbolLabel: (value) => `${value}`,
  count: 5,
  fractions: 1,
  readonly: false,
};

export const Rating = forwardRef<HTMLInputElement, RatingProps>((props, ref) => {
  const {
    defaultValue,
    value,
    emptySymbol,
    fullSymbol,
    fractions,
    size,
    count,
    onChange,
    onChangeHover,
    getSymbolLabel,
    name,
    readonly,
    className,
    classNames,
    styles,
    unstyled,
    ...others
  } = useComponentDefaultProps('Rating', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { size, readonly },
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
  let _value = stableValueRounded;
  if (interactiveValue !== -1) _value = interactiveValue;

  const handleMouseEnter = () => {
    setClientOutside(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const { left, right } = rootRef.current.getBoundingClientRect();
    const symbolWidth = rootRef.current.firstElementChild.clientWidth;

    let hoverPosition;
    if (theme.dir === 'rtl') hoverPosition = right - event.clientX;
    else hoverPosition = event.clientX - left;

    const hoverValue = hoverPosition / symbolWidth;

    let rounded = roundValueTo(hoverValue + decimalUnit / 2, decimalUnit);
    rounded = clamp(rounded, decimalUnit, count);

    setInteractiveValue(rounded);
    if (onChangeHover && rounded !== interactiveValue) onChangeHover(rounded);
  };

  const handleMouseLeave = () => {
    setInteractiveValue(-1);
    setClientOutside(true);
    if (onChangeHover && interactiveValue !== -1) onChangeHover(-1);
  };

  const handleBlur = () => {
    if (isClientOutside) {
      setInteractiveValue(-1);
    }
  };

  // const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  // const resultedValue = parseFloat(event.currentTarget.value);
  // setInteractiveValue(resultedValue);
  // };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.clientX === 0 && event.clientY === 0) {
      // called by keyboard event
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
    let resultedValue = parseFloat(event.target.value);
    if (interactiveValue !== -1) resultedValue = interactiveValue;

    setStableValue(resultedValue);
    if (onChange) onChange(resultedValue);
  };

  return (
    <Box
      aria-label={`${stableValueRounded} star rating`}
      ref={mergeRefs(rootRef, ref)}
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
      {Array.from({ length: count }).map((_, integerIndex) => {
        const integerValue = integerIndex + 1;
        const fractionItems = Array.from({
          length: integerIndex === 0 ? fractions + 1 : fractions,
        });
        const isGroupActive = !readonly && Math.ceil(interactiveValue) === integerValue;

        return (
          <div
            key={integerValue}
            style={{
              transform: isGroupActive ? 'scale(1.2)' : undefined,
              zIndex: isGroupActive ? 1 : 0,
            }}
            className={classes.symbolGroup}
          >
            {fractionItems.map((__, fractionIndex) => {
              // first symbolGroup will have one more symbol for 0 rating
              const fractionValue =
                decimalUnit * (integerIndex === 0 ? fractionIndex : fractionIndex + 1);
              const symbolValue = roundValueTo(integerValue - 1 + fractionValue, decimalUnit);
              const isFull = symbolValue <= _value;
              const isChecked = symbolValue === stableValueRounded;
              const isSymbolActive = symbolValue === _value;

              return (
                <Symbol
                  key={`${integerValue}-${symbolValue}`}
                  size={size}
                  getSymbolLabel={getSymbolLabel}
                  value={symbolValue}
                  readonly={readonly}
                  labelProps={{
                    className: classes.label,
                    style:
                      fractionValue === 1
                        ? {}
                        : {
                            zIndex: isSymbolActive ? 2 : 0,
                          },
                  }}
                  symbolBodyProps={{
                    className: classes.symbolBody,
                    style:
                      fractionValue === 1
                        ? {}
                        : {
                            clipPath: `inset(0 ${
                              isSymbolActive ? 100 - fractionValue * 100 : 100
                            }% 0 0)`,
                            WebkitClipPath: `inset(0 ${
                              isSymbolActive ? 100 - fractionValue * 100 : 100
                            }% 0 0)`,
                          },
                  }}
                  inputProps={{
                    className: classes.input,
                    // onFocus: handleFocus,
                    onBlur: handleBlur,
                    name: name || _name,
                    value: symbolValue,
                    checked: isChecked,
                    onChange: handleChange,
                    onClick: (event) => {
                      handleClick(event);
                    },
                  }}
                  emptyIcon={emptySymbol}
                  fullIcon={fullSymbol}
                  isFull={isFull}
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
