import { useRef, useState } from 'react';
import { clamp, useId, useMergedRef, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  getThemeColor,
  MantineColor,
  MantineSize,
  StylesApiProps,
  useDirection,
  useProps,
  useStyles,
} from '../../core';
import { RatingProvider } from './Rating.context';
import { RatingItem } from './RatingItem/RatingItem';
import classes from './Rating.module.css';

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
  onChange?: (value: number) => void;

  /** Icon displayed when the symbol is empty */
  emptySymbol?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Icon displayed when the symbol is full */
  fullSymbol?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Number of fractions each item can be divided into, `1` by default */
  fractions?: number;

  /** Controls component size, `'sm'` by default */
  size?: MantineSize | number | (string & {});

  /** Number of controls, `5` by default */
  count?: number;

  /** Called when one of the controls is hovered */
  onHover?: (value: number) => void;

  /** A function to assign `aria-label` of the the control at index given in the argument. If not specified, control index is used as `aria-label`. */
  getSymbolLabel?: (index: number) => string;

  /** `name` attribute passed down to all inputs. By default, `name` is generated randomly. */
  name?: string;

  /** If set, the user cannot interact with the component, `false` by default */
  readOnly?: boolean;

  /** If set, only the selected symbol changes to full symbol when selected, `false` by default */
  highlightSelectedOnly?: boolean;

  /** Key of `theme.colors` or any CSS color value, `'yellow'` by default */
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
    onTouchStart,
    onTouchEnd,
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

  const getRatingFromCoordinates = (x: number) => {
    const { left, right, width } = rootRef.current!.getBoundingClientRect();
    const symbolWidth = width / _count;

    const hoverPosition = dir === 'rtl' ? right - x : x - left;
    const hoverValue = hoverPosition / symbolWidth;

    return clamp(roundValueTo(hoverValue + decimalUnit / 2, decimalUnit), decimalUnit, _count);
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnter?.(event);
    !readOnly && setOutside(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(event);

    if (readOnly) {
      return;
    }

    const rounded = getRatingFromCoordinates(event.clientX);

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

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const { touches } = event;
    if (touches.length !== 1) {
      return;
    }

    if (!readOnly) {
      const touch = touches[0];
      setValue(getRatingFromCoordinates(touch.clientX));
    }

    onTouchStart?.(event);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();

    onTouchEnd?.(event);
  };

  const handleItemBlur = () => isOutside && setHovered(-1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | number) => {
    if (!readOnly) {
      if (typeof event === 'number') {
        setHovered(event);
      } else {
        setHovered(parseFloat(event.target.value));
      }
    }
  };

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
                onInputChange={handleInputChange}
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
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
