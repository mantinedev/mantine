import { NumericFormat } from 'react-number-format';
import { factory, Factory, useProps } from '../../core';

export interface NumberFormatterProps extends React.ComponentPropsWithoutRef<'span'> {
  /** Value to format */
  value?: number | string;

  /** If set, negative values are allowed @default true */
  allowNegative?: boolean;

  /** Limits the number of digits that are displayed after the decimal point @default Infinity */
  decimalScale?: number;

  /** Character used as a decimal separator @default '.' */
  decimalSeparator?: string;

  /** If set, zeros are added after `decimalSeparator` to match given `decimalScale`. @default false */
  fixedDecimalScale?: boolean;

  /** Prefix added before the value */
  prefix?: string;

  /** Suffix added after the value */
  suffix?: string;

  /** Defines the thousand grouping style */
  thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';

  /** Character used to separate thousands, set to `true` for `,`. Thousands are not separated if not set */
  thousandSeparator?: string | boolean;
}

export type NumberFormatterFactory = Factory<{
  props: NumberFormatterProps;
  ref: HTMLSpanElement;
}>;

export const NumberFormatter = factory<NumberFormatterFactory>((_props) => {
  const { value, defaultValue, ref, ...others } = useProps('NumberFormatter', null, _props);

  if (value === undefined) {
    return null;
  }

  return <NumericFormat displayType="text" value={value} getInputRef={ref} {...others} />;
});

NumberFormatter.displayName = '@mantine/core/NumberFormatter';

export namespace NumberFormatter {
  export type Props = NumberFormatterProps;
  export type Factory = NumberFormatterFactory;
}
