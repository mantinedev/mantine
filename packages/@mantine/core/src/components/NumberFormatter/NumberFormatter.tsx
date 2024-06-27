import { NumericFormat } from 'react-number-format';
import { ExtendComponent, Factory, MantineThemeComponent, useProps } from '../../core';

export interface NumberFormatterProps extends React.ComponentPropsWithoutRef<'span'> {
  /** Value to format */
  value?: number | string;

  /** Determines whether negative values are allowed, `true` by default */
  allowNegative?: boolean;

  /** Limits the number of digits that are displayed after the decimal point, by default there is no limit */
  decimalScale?: number;

  /** Character used as a decimal separator, `'.'` by default */
  decimalSeparator?: string;

  /** If set, 0s are added after `decimalSeparator` to match given `decimalScale`. `false` by default */
  fixedDecimalScale?: boolean;

  /** Prefix added before the value */
  prefix?: string;

  /** Suffix added after the value */
  suffix?: string;

  /** Defines the thousand grouping style */
  thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';

  /** A character used to separate thousands, `','` by default */
  thousandSeparator?: string | boolean;
}

export type NumberFormatterFactory = Factory<{
  props: NumberFormatterProps;
  ref: HTMLDivElement;
}>;

const defaultProps: Partial<NumberFormatterProps> = {};

export function NumberFormatter(_props: NumberFormatterProps) {
  const props = useProps('NumberFormatter', defaultProps, _props);
  const { value, defaultValue, ...others } = props;

  if (value === undefined) {
    return null;
  }

  return <NumericFormat displayType="text" value={value} {...others} />;
}

const extendNumberFormatter = (c: ExtendComponent<NumberFormatterFactory>): MantineThemeComponent =>
  c;

NumberFormatter.extend = extendNumberFormatter;
NumberFormatter.displayName = '@mantine/core/NumberFormatter';
