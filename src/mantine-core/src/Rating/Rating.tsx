import React, { forwardRef, useState, useRef } from 'react';
import {
  DefaultProps,
  MantineSize,
  useComponentDefaultProps,
  Selectors,
  MantineColor,
} from '@mantine/styles';
import { useUncontrolled, clamp, useMergedRef, useId } from '@mantine/hooks';
import { Box } from '../Box';
import { RatingItem, RatingItemStylesNames } from './RatingItem/RatingItem';
import useStyles from './Rating.styles';

function roundValueTo(value: number, to: number) {
  const rounded = Math.round(value / to) * to;
  const precision = `${to}`.split('.')[1]?.length || 0;
  return Number(rounded.toFixed(precision));
}

export type RatingStylesNames = Selectors<typeof useStyles> | RatingItemStylesNames;

export interface RatingProps
  extends DefaultProps<RatingStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  variant?: string;

  /** Default value for uncontrolled component */
  defaultValue?: number;

  /** Value for controlled component */
  value?: number;

  /** Called when value changes */
  onChange?(value: number): void;

  /** The icon that is displayed when symbol is empty */
  emptySymbol?: React.ReactNode | ((value: number) => React.ReactNode);

  /** This icon that is displayed when symbol is full */
  fullSymbol?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Number of fractions each item can be divided into, 1 by default */
  fractions?: number;

  /** Controls component size */
  size?: MantineSize;

  /** Number of controls that should be rendered */
  count?: number;

  /** Called when item is hovered */
  onHover?(value: number): void;

  /** Function should return labelText for the symbols */
  getSymbolLabel?: (value: number) => string;

  /** Name of rating, should be unique within the page */
  name?: string;

  /** If true, you won't be able to interact */
  readOnly?: boolean;

  /** If true, only the selected symbol will change to full symbol */
  highlightSelectedOnly?: boolean;

  /** Key of theme.colors or any CSS color value, yellow by default */
  color?: MantineColor;
}

const defaultProps: Partial<RatingProps> = {
  size: 'sm',
  getSymbolLabel: (value) => `${value}`,
  count: 5,
  fractions: 1,
  color: 'yellow',
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
    onHover,
    getSymbolLabel,
    name,
    readOnly,
    className,
    classNames,
    styles,
    unstyled,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    highlightSelectedOnly,
    color,
    id,
    variant,
    ...others
  } = useComponentDefaultProps('Rating', defaultProps, props);

  const { classes, cx, theme } = useStyles(null, {
    name: 'Rating',
    classNames,
    styles,
    unstyled,
    variant,
    size,
  });

  const _name = useId(name);
  const _id = useId(id);
  const rootRef = useRef<HTMLDivElement>(null);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: 0,
    onChange,
  });

  const [hovered, setHovered] = useState(-1);
  const [isOutside, setOutside] = useState(true);

  const _fractions = Math.floor(fractions);
  const _count = Math.floor(count);

  const decimalUnit = 1 / _fractions;
  const stableValueRounded = roundValueTo(_value, decimalUnit);
  const finalValue = hovered !== -1 ? hovered : stableValueRounded;

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnter?.(event);
    !readOnly && setOutside(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(event);

    if (readOnly) {
      return;
    }

    const { left, right, width } = rootRef.current.getBoundingClientRect();
    const symbolWidth = width / _count;

    const hoverPosition = theme.dir === 'rtl' ? right - event.clientX : event.clientX - left;
    const hoverValue = hoverPosition / symbolWidth;

    const rounded = clamp(
      roundValueTo(hoverValue + decimalUnit / 2, decimalUnit),
      decimalUnit,
      _count
    );

    setHovered(rounded);
    rounded !== hovered && onHover?.(rounded);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(event);

    if (readOnly) {
      return;
    }

    setHovered(-1);
    setOutside(true);
    hovered !== -1 && onHover?.(-1);
  };

  const handleItemBlur = () => isOutside && setHovered(-1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | number) => {
    if (!readOnly) {
      if (typeof event === 'number') {
        setValue(event);
      } else {
        setValue(parseFloat(event.target.value));
      }
    }
  };

  const items = Array(_count)
    .fill(0)
    .map((_, index) => {
      const integerValue = index + 1;
      const fractionItems = Array.from(new Array(index === 0 ? _fractions + 1 : _fractions));
      const isGroupActive = !readOnly && Math.ceil(hovered) === integerValue;

      return (
        <div key={integerValue} data-active={isGroupActive} className={classes.symbolGroup}>
          {fractionItems.map((__, fractionIndex) => {
            const fractionValue = decimalUnit * (index === 0 ? fractionIndex : fractionIndex + 1);
            const symbolValue = roundValueTo(integerValue - 1 + fractionValue, decimalUnit);

            return (
              <RatingItem
                key={`${integerValue}-${symbolValue}`}
                size={size}
                variant={variant}
                getSymbolLabel={getSymbolLabel}
                emptyIcon={emptySymbol}
                fullIcon={fullSymbol}
                full={
                  highlightSelectedOnly ? symbolValue === finalValue : symbolValue <= finalValue
                }
                active={symbolValue === finalValue}
                checked={symbolValue === stableValueRounded}
                readOnly={readOnly}
                fractionValue={fractionValue}
                value={symbolValue}
                name={_name}
                onChange={handleChange}
                onBlur={handleItemBlur}
                classNames={classNames}
                styles={styles}
                unstyled={unstyled}
                color={color}
                id={`${_id}-${index}-${fractionIndex}`}
              />
            );
          })}
        </div>
      );
    });

  return (
    <Box
      ref={useMergedRef(rootRef, ref)}
      className={cx(classes.root, className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...others}
    >
      {items}
    </Box>
  );
});

Rating.displayName = '@mantine/core/Rating';
