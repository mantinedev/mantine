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

const TOUCH_MOVE_THRESHOLD = 10;
const EMULATED_CLICK_TIMEOUT = 500;

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
  extends BoxProps, StylesApiProps<RatingFactory>, ElementProps<'div', 'onChange'> {
  /** Uncontrolled component default value @category state */
  defaultValue?: number;

  /** Controlled component value @category state */
  value?: number;

  /** Called when value changes @category state */
  onChange?: (value: number) => void;

  /** Icon displayed for unselected rating items. Can be a function that receives the rating value. @category appearance */
  emptySymbol?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Icon displayed for selected rating items. Can be a function that receives the rating value. @category appearance */
  fullSymbol?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Number of fractions each item can be divided into, must be `1` or greater @default 1 @category behavior */
  fractions?: number;

  /** Controls component size @default 'sm' @category appearance */
  size?: MantineSize | number | (string & {});

  /** Number of rating items (stars) @default 5 @category appearance */
  count?: number;

  /** Called when rating item is hovered. Receives -1 when hover ends. @category behavior */
  onHover?: (value: number) => void;

  /** Function to generate `aria-label` for each rating value. Receives the rating value as argument. In `readOnly` mode, used to generate `aria-label` of the root element for the current value @default (value) => String(value) @category accessibility */
  getSymbolLabel?: (value: number) => string;

  /** Name attribute for form submission. If not provided, a unique id will be generated. */
  name?: string;

  /** When true, rating cannot be changed by user interaction @default false @category behavior */
  readOnly?: boolean;

  /** When true, rating cannot be changed and is displayed with disabled styles @default false @category behavior */
  disabled?: boolean;

  /** When true, clicking the same rating value clears the rating to 0 @default false @category behavior */
  allowClear?: boolean;

  /** When true, only the clicked rating item is highlighted, not all items up to the selected value @default false @category appearance */
  highlightSelectedOnly?: boolean;

  /** Key of `theme.colors` or any CSS color value @default 'yellow' @category appearance */
  color?: MantineColor;
}

export type RatingFactory = Factory<{
  props: RatingProps;
  ref: HTMLDivElement;
  stylesNames: RatingStylesNames;
  vars: RatingCssVariables;
}>;

const defaultProps = {
  size: 'sm',
  getSymbolLabel: (value) => `${value}`,
  count: 5,
  fractions: 1,
  color: 'yellow',
} satisfies Partial<RatingProps>;

const varsResolver = createVarsResolver<RatingFactory>((theme, { size, color }) => ({
  root: {
    '--rating-size': getSize(size, 'rating-size'),
    '--rating-color': getThemeColor(color, theme),
  },
}));

export const Rating = factory<RatingFactory>((_props) => {
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
    disabled,
    allowClear,
    onMouseMove,
    onHover,
    onMouseLeave,
    onTouchStart,
    onTouchMove,
    onTouchCancel,
    onTouchEnd,
    size,
    variant,
    getSymbolLabel,
    color,
    emptySymbol,
    fullSymbol,
    highlightSelectedOnly,
    attributes,
    mod,
    ref,
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
    attributes,
    vars,
    varsResolver,
  });

  const { dir } = useDirection();

  const _name = useId(name);
  const _id = useId(id);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchStartPosition = useRef<{ x: number; y: number } | null>(null);
  const lastTouchTimestamp = useRef(0);

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

  if (!(_fractions >= 1)) {
    throw new Error(
      `[@mantine/core] Rating: fractions prop must be a number greater than or equal to 1, received ${fractions}`
    );
  }

  const interactive = !readOnly && !disabled;

  const decimalUnit = 1 / _fractions;
  const stableValueRounded = roundValueTo(_value, decimalUnit);
  const finalValue = hovered !== -1 ? hovered : stableValueRounded;

  const getRatingFromCoordinates = (x: number) => {
    if (!rootRef.current) {
      return 0;
    }

    const { left, right, width } = rootRef.current.getBoundingClientRect();
    const symbolWidth = width / _count;

    const hoverPosition = dir === 'rtl' ? right - x : x - left;
    const hoverValue = hoverPosition / symbolWidth;

    return clamp(roundValueTo(hoverValue + decimalUnit / 2, decimalUnit), decimalUnit, _count);
  };

  const applyValue = (newValue: number) => {
    // If allowClear is true and selecting the same value, reset to 0
    if (allowClear && newValue === stableValueRounded) {
      setValue(0);
    } else {
      setValue(newValue);
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnter?.(event);
    interactive && setOutside(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(event);

    if (!interactive) {
      return;
    }

    const rounded = getRatingFromCoordinates(event.clientX);

    setHovered(rounded);
    rounded !== hovered && onHover?.(rounded);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(event);

    if (!interactive) {
      return;
    }

    setHovered(-1);
    setOutside(true);
    hovered !== -1 && onHover?.(-1);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const { touches } = event;

    touchStartPosition.current =
      touches.length === 1 ? { x: touches[0].clientX, y: touches[0].clientY } : null;

    onTouchStart?.(event);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const startPosition = touchStartPosition.current;
    const touch = event.touches[0];

    if (
      startPosition &&
      touch &&
      Math.hypot(touch.clientX - startPosition.x, touch.clientY - startPosition.y) >
        TOUCH_MOVE_THRESHOLD
    ) {
      touchStartPosition.current = null;
    }

    onTouchMove?.(event);
  };

  const handleTouchCancel = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartPosition.current = null;

    onTouchCancel?.(event);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startPosition = touchStartPosition.current;
    const touch = event.changedTouches[0];
    touchStartPosition.current = null;

    if (startPosition && touch && interactive) {
      event.preventDefault();
      applyValue(getRatingFromCoordinates(touch.clientX));
      lastTouchTimestamp.current = Date.now();
    }

    onTouchEnd?.(event);
  };

  const handleItemBlur = () => isOutside && setHovered(-1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | number) => {
    if (interactive) {
      if (typeof event === 'number') {
        setHovered(event);
      } else {
        setHovered(parseFloat(event.target.value));
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | number) => {
    if (!interactive || Date.now() - lastTouchTimestamp.current < EMULATED_CLICK_TIMEOUT) {
      return;
    }

    applyValue(typeof event === 'number' ? event : parseFloat(event.target.value));
  };

  const items = Array(_count)
    .fill(0)
    .map((_, index) => {
      const integerValue = index + 1;
      const fractionItems = Array.from(new Array(index === 0 ? _fractions + 1 : _fractions));
      const isGroupActive = interactive && Math.ceil(hovered) === integerValue;

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
                disabled={disabled}
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
        onTouchMove={handleTouchMove}
        onTouchCancel={handleTouchCancel}
        onTouchEnd={handleTouchEnd}
        variant={variant}
        size={size}
        id={_id}
        role={readOnly ? 'img' : 'radiogroup'}
        aria-label={readOnly ? getSymbolLabel(stableValueRounded) : undefined}
        aria-disabled={!readOnly && disabled ? true : undefined}
        mod={[{ disabled }, mod]}
        {...others}
      >
        {items}
      </Box>
    </RatingProvider>
  );
});

Rating.classes = classes;
Rating.varsResolver = varsResolver;
Rating.displayName = '@mantine/core/Rating';

export namespace Rating {
  export type Props = RatingProps;
  export type StylesNames = RatingStylesNames;
  export type Factory = RatingFactory;
}
