import { useState } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { buildValue } from './build-value';
import { DigitColumn } from './DigitColumn';
import { getDigitParts } from './get-digit-parts';
import { getRenderSlots } from './get-render-slots';
import classes from './RollingNumber.module.css';

export type RollingNumberStylesNames =
  | 'root'
  | 'inner'
  | 'copyValue'
  | 'digit'
  | 'digitColumn'
  | 'char';
export type RollingNumberCssVariables = {
  root: '--rn-duration' | '--rn-timing-function';
};

export interface RollingNumberProps
  extends BoxProps, StylesApiProps<RollingNumberFactory>, ElementProps<'span'> {
  /** Number value to display @category state */
  value: number;

  /** Prefix added before the value @category appearance */
  prefix?: string;

  /** Suffix added after the value @category appearance */
  suffix?: string;

  /** Character used as a decimal separator @default '.' @category appearance */
  decimalSeparator?: string;

  /** Character used to separate thousands, set to `true` for `,` @default false @category appearance */
  thousandSeparator?: string | boolean;

  /** Number of decimal places to display @category appearance */
  decimalScale?: number;

  /** If set, trailing zeros are added to match `decimalScale` @default false @category appearance */
  fixedDecimalScale?: boolean;

  /** Animation duration in milliseconds @default 600 @category appearance */
  animationDuration?: number;

  /** CSS timing function for animation @default 'ease' @category appearance */
  timingFunction?: string;

  /** If set, use tabular (monospace) numbers @default true @category appearance */
  tabularNumbers?: boolean;

  /** If set, the root element acts as an `aria-live="polite"` region (`role="status"`) with the formatted value as its text content, so screen readers announce value changes. When `false`, the root uses `role="img"` with the value in `aria-label` so the current value is still accessible but updates are not announced. @default false @category accessibility */
  withLiveRegion?: boolean;
}

export type RollingNumberFactory = Factory<{
  props: RollingNumberProps;
  ref: HTMLSpanElement;
  stylesNames: RollingNumberStylesNames;
  vars: RollingNumberCssVariables;
}>;

const defaultProps = {
  animationDuration: 600,
  timingFunction: 'ease',
  decimalSeparator: '.',
  tabularNumbers: true,
} satisfies Partial<RollingNumberProps>;

const varsResolver = createVarsResolver<RollingNumberFactory>(
  (_, { animationDuration, timingFunction }) => ({
    root: {
      '--rn-duration': `${animationDuration}ms`,
      '--rn-timing-function': timingFunction,
    },
  })
);

export const RollingNumber = factory<RollingNumberFactory>((_props) => {
  const props = useProps('RollingNumber', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    value,
    prefix,
    suffix,
    decimalSeparator,
    thousandSeparator,
    decimalScale,
    fixedDecimalScale,
    animationDuration,
    timingFunction,
    tabularNumbers,
    withLiveRegion,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<RollingNumberFactory>({
    name: 'RollingNumber',
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

  const [transition, setTransition] = useState({ from: value, to: value });

  let previousValue = transition.from;
  if (!Object.is(transition.to, value)) {
    previousValue = transition.to;
    setTransition({ from: transition.to, to: value });
  }

  const valueDirection: 'up' | 'down' = Math.abs(value) >= Math.abs(previousValue) ? 'up' : 'down';

  const current = getDigitParts({ value, decimalScale, fixedDecimalScale });
  const prev = getDigitParts({ value: previousValue, decimalScale, fixedDecimalScale });

  const slots = getRenderSlots({
    current,
    previous: prev,
    prefix,
    suffix,
    decimalSeparator,
    thousandSeparator,
  });

  const accessibleValue = buildValue({
    value,
    prefix,
    suffix,
    decimalSeparator,
    thousandSeparator,
    decimalScale,
    fixedDecimalScale,
  });

  return (
    <Box
      component="span"
      {...getStyles('root')}
      mod={[{ 'tabular-numbers': tabularNumbers }, mod]}
      role={withLiveRegion ? 'status' : 'img'}
      aria-label={withLiveRegion ? undefined : accessibleValue}
      {...others}
    >
      <span {...getStyles('inner')}>
        <span {...getStyles('copyValue')} aria-hidden={withLiveRegion ? undefined : true}>
          {accessibleValue}
        </span>
        {slots.map((slot) => {
          if (slot.type === 'digit') {
            return (
              <DigitColumn
                key={slot.key}
                digit={slot.digit}
                previousDigit={slot.previousDigit}
                getStyles={getStyles}
                empty={slot.empty}
                valueDirection={valueDirection}
              />
            );
          }

          return (
            <span
              key={slot.key}
              {...getStyles('char')}
              data-empty={slot.empty || undefined}
              data-reduce-motion
              aria-hidden="true"
            >
              {slot.char}
            </span>
          );
        })}
      </span>
    </Box>
  );
});

RollingNumber.classes = classes;
RollingNumber.varsResolver = varsResolver;
RollingNumber.displayName = '@mantine/core/RollingNumber';
