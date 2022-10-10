import React, { forwardRef, useId, useState, useRef } from 'react';
import { DefaultProps, MantineSize, useComponentDefaultProps, Selectors } from '@mantine/styles';
import { useUncontrolled, mergeRefs, clamp } from '@mantine/hooks';
import { StarSymbol } from './StarSymbol';
import { Box } from '../Box';
import { roundValueTo } from './utils';
import useStyles, { RatingStylesParams } from './Rating.styles';

interface SymbolProps {
  size: MantineSize;
  getSymbolLabel: RatingProps['getSymbolLabel'];
  value: number;
  emptyIcon: React.ReactNode;
  fullIcon: React.ReactNode;
  isFull: boolean;
  readonly: boolean;
  inputProps: React.ComponentPropsWithoutRef<'input'>;
  labelProps: { className: string; style: React.CSSProperties };
  symbolBodyProps: React.ComponentPropsWithoutRef<'div'>;
  isActive: boolean;
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
    isActive,
  } = props;
  const id = useId();

  return (
    <>
      {!readonly && <input {...inputProps} id={id} type="radio" data-active={isActive} />}
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

export type RatingStylesNames = Selectors<typeof useStyles>;

export interface RatingProps
  extends DefaultProps<RatingStylesNames, RatingStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
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

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnter?.(event);
    setClientOutside(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(event);

    const { left, right, width } = rootRef.current.getBoundingClientRect();

    const symbolWidth = width / count;

    let hoverPosition;
    if (theme.dir === 'rtl') hoverPosition = right - event.clientX;
    else hoverPosition = event.clientX - left;

    const hoverValue = hoverPosition / symbolWidth;

    let rounded = roundValueTo(hoverValue + decimalUnit / 2, decimalUnit);

    rounded = clamp(rounded, decimalUnit, count);

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

  return (
    <Box
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
      {Array.from(new Array(count)).map((_, integerIndex) => {
        const integerValue = integerIndex + 1;
        const fractionItems = Array.from(new Array(integerIndex === 0 ? fractions + 1 : fractions));
        const isGroupActive = !readonly && Math.ceil(interactiveValue) === integerValue;

        return (
          <div key={integerValue} data-active={isGroupActive} className={classes.symbolGroup}>
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
                  isActive={isSymbolActive}
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
                    onBlur: handleBlur,
                    name: name || _name,
                    value: symbolValue,
                    checked: isChecked,
                    onChange: handleChange,
                    onClick: handleClick,
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
