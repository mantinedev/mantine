import { NumericFormat } from 'react-number-format';
import { ExtendComponent, Factory, MantineThemeComponent, useProps } from '../../core';

export interface NumberFormatterProps extends React.ComponentProps<'span'> {
  /** Value to format */
  value?: number | string | undefined;

  /** If set, negative values are allowed @default true */
  allowNegative?: boolean | undefined;

  /** Limits the number of digits that are displayed after the decimal point @default Infinity */
  decimalScale?: number | undefined;

  /** Character used as a decimal separator, `'.'` by default */
  decimalSeparator?: string | undefined;

  /** If set, zeros are added after `decimalSeparator` to match given `decimalScale`. @default false */
  fixedDecimalScale?: boolean | undefined;

  /** Prefix added before the value */
  prefix?: string | undefined;

  /** Suffix added after the value */
  suffix?: string | undefined;

  /** Defines the thousand grouping style */
  thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none' | undefined;

  /** A character used to separate thousands @default  ',' */
  thousandSeparator?: string | boolean | undefined;
}

export type NumberFormatterFactory = Factory<{
  props: NumberFormatterProps;
  ref: HTMLDivElement;
}>;

export function NumberFormatter(_props: NumberFormatterProps) {
  const { value, defaultValue, ...others } = useProps('NumberFormatter', null, _props);

  if (value === undefined) {
    return null;
  }

  return <NumericFormat displayType="text" value={value} {...others} />;
}

const extendNumberFormatter = (c: ExtendComponent<NumberFormatterFactory>): MantineThemeComponent =>
  c;

NumberFormatter.extend = extendNumberFormatter;
NumberFormatter.displayName = '@mantine/core/NumberFormatter';

export namespace NumberFormatter {
  export type Props = NumberFormatterProps;
  export type Factory = NumberFormatterFactory;
}
