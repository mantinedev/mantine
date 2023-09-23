import React, { useRef, useState } from 'react';
import { clamp, useId, useMergedRef, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  MantineSize,
  MantineColor,
  useDirection,
  getSize,
  getThemeColor,
} from '../../core';
import { RatingProvider } from './Rating.context';
import classes from './Rating.module.css';
import { RatingItem } from './RatingItem/RatingItem';

function roundValueTo(value: number, to: number) {
  const rounded = Math.round(value / to) * to;
  const precision = `${to}`.split('.')[1]?.length || 0;
  return Number(rounded.toFixed(precision));
}

export type RatingStylesNames =
  | 'root'
  | 'starSymbol'
  | 'input'
  | 'label'
  | 'symbolBody'
  | 'symbolGroup';

export type RatingCssVariables = {
  root: '--rating-size' | '--rating-color';
};

export interface RatingProps
  extends BoxProps,
    StylesApiProps<RatingFactory>,
    ElementProps<'div', 'onChange'> {
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

export type RatingFactory = Factory<{
  props: RatingProps;
  ref: HTMLDivElement;
  stylesNames: RatingStylesNames;
  vars: RatingCssVariables;
}>;

const defaultProps: Partial<RatingProps> = {
  size: 'sm',
  getSymbolLabel: (value) => `${value}`,
  count: 5,
  fractions: 1,
  color: 'yellow',
};

const varsResolver = createVarsResolver<RatingFactory>((theme, { size, color }) => ({
  root: {
    '--rating-size': getSize(size, 'rating-size'),
    '--rating-color': getThemeColor(color, theme),
  },
}));

export const Rating = factory<RatingFactory>((_props, ref) => {
  const props = useProps('Rating', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    name,
    id,
    value,
    defaultValue,
    onChange,
    fractions,
    count,
    onMouseEnter,
    readOnly,
    onMouseMove,
    onHover,
    onMouseLeave,
    size,
    variant,
    getSymbolLabel,
    color,
    emptySymbol,
    fullSymbol,
    highlightSelectedOnly,
    ...others
  } = props;

  const getStyles = useStyles<RatingFactory>({
    name: 'Rating',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const { dir } = useDirection();

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

  const _fractions = Math.floor(fractions!);
  const _count = Math.floor(count!);

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

    const { left, right, width } = rootRef.current!.getBoundingClientRect();
    const symbolWidth = width / _count;

    const hoverPosition = dir === 'rtl' ? right - event.clientX : event.clientX - left;
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
        <div
          key={integerValue}
          data-active={isGroupActive || undefined}
          {...getStyles('symbolGroup')}
        >
          {fractionItems.map((__, fractionIndex) => {
            const fractionValue = decimalUnit * (index === 0 ? fractionIndex : fractionIndex + 1);
            const symbolValue = roundValueTo(integerValue - 1 + fractionValue, decimalUnit);

            return (
              <RatingItem
                key={`${integerValue}-${symbolValue}`}
                size={size!}
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
                id={`${_id}-${index}-${fractionIndex}`}
              />
            );
          })}
        </div>
      );
    });

  return (
    <RatingProvider value={{ getStyles }}>
      <Box
        ref={useMergedRef(rootRef, ref)}
        {...getStyles('root')}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variant={variant}
        size={size}
        id={_id}
        {...others}
      >
        {items}
      </Box>
    </RatingProvider>
  );
});

Rating.classes = classes;
Rating.displayName = '@mantine/core/Rating';
