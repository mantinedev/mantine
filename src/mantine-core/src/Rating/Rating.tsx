import React, { forwardRef, useId, useState, useRef } from 'react';
import { DefaultProps, MantineSize, useComponentDefaultProps, Selectors } from '@mantine/styles';
import { useUncontrolled, mergeRefs, clamp } from '@mantine/hooks';
import { StarSymbol } from './StarSymbol';
import { Box } from '../Box';
import useStyles, { RatingStylesParams } from './Rating.styles';

interface RatingItemProps {
  getSymbolLabel: RatingProps['getSymbolLabel'];
  value: number;
  inputProps: React.ComponentPropsWithoutRef<'input'>;
  symbolProps: React.ComponentPropsWithoutRef<'div'>;
  labelProps: { className: string; style: React.CSSProperties };
  emptyIcon: React.ReactNode;
  fullIcon: React.ReactNode;
  isFull: boolean;
  size: MantineSize;
  readonly: boolean;
}
export function RatingItem(props: RatingItemProps) {
  const {
    value,
    getSymbolLabel,
    inputProps,
    labelProps,
    isFull,
    emptyIcon,
    fullIcon,
    size,
    symbolProps,
    readonly,
  } = props;
  const id = useId();

  return (
    <>
      {!readonly && <input value={value} {...inputProps} id={id} type="radio" />}
      <Box component={readonly ? 'div' : 'label'} {...labelProps} htmlFor={id}>
        {!readonly && <div className="symbol-label">{getSymbolLabel(value)}</div>}
        <div {...symbolProps}>
          {isFull
            ? fullIcon || <StarSymbol size={size} type="full" />
            : emptyIcon || <StarSymbol size={size} type="empty" />}
        </div>
      </Box>
    </>
  );
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
    onChange,
    finalValue: 0,
  });

  const [interactiveValue, setInteractiveValue] = useState(-1);
  const [isClientOutside, setClientOutside] = useState(true);

  let _value = stableValue;
  if (interactiveValue !== -1) _value = interactiveValue;

  const decimalUnit = 1 / fractions;

  const handleMouseEnter = () => {
    setClientOutside(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const { left, right } = rootRef.current.getBoundingClientRect();
    const symbolWidth = rootRef.current.firstElementChild.clientWidth;

    let hoverPosition;
    if (theme.dir === 'rtl') hoverPosition = right - event.clientX;
    else hoverPosition = event.clientX - left;

    const hoverValue = clamp(hoverPosition / symbolWidth, decimalUnit, count);
    const rounded = Math.ceil(hoverValue / decimalUnit) * decimalUnit;

    setInteractiveValue(rounded);
  };

  const handleMouseLeave = () => {
    setInteractiveValue(-1);
    setClientOutside(true);
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
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let resultedValue = parseFloat(event.target.value);
    if (interactiveValue !== -1) resultedValue = interactiveValue;

    setStableValue(resultedValue);
  };

  return (
    <Box
      aria-label={`${stableValue} star rating`}
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
      {Array.from({ length: count }).map((_, itemIndex) => {
        const integerValue = itemIndex + 1;
        const fractionItems = Array.from({ length: itemIndex === 0 ? fractions + 1 : fractions });
        const isFractionsActive = !readonly && Math.ceil(interactiveValue) === integerValue;

        return (
          <div
            key={integerValue}
            style={{
              transform: isFractionsActive ? 'scale(1.25)' : undefined,
              zIndex: isFractionsActive ? 1 : 0,
            }}
            className={classes.fractionContainer}
          >
            {fractionItems.map((__, fractionIndex) => {
              const decimalValue =
                decimalUnit * (itemIndex === 0 ? fractionIndex : fractionIndex + 1);
              const itemValue = integerValue - 1 + decimalValue;
              const isFull = itemValue <= _value;
              const isActive = itemValue === stableValue;
              const isCurrentActive = itemValue === _value;

              return (
                <RatingItem
                  key={`${integerValue}-${itemValue}`}
                  size={size}
                  getSymbolLabel={getSymbolLabel}
                  value={itemValue}
                  readonly={readonly}
                  labelProps={{
                    className: classes.label,
                    style:
                      decimalValue === 1
                        ? {}
                        : {
                            zIndex: isCurrentActive ? 2 : 0,
                          },
                  }}
                  symbolProps={{
                    className: classes.symbol,
                    style: {
                      clipPath: `inset(0 ${100 - decimalValue * 100}% 0 0)`,
                      WebkitClipPath: `inset(0 ${100 - decimalValue * 100}% 0 0)`,
                    },
                  }}
                  inputProps={{
                    className: classes.input,
                    // onFocus: handleFocus,
                    onBlur: handleBlur,
                    name: name || _name,
                    value: itemValue,
                    checked: isActive,
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
