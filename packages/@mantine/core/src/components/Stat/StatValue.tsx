import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { useStatContext } from './Stat.context';

export type StatValueStylesNames = 'value' | 'prefix' | 'suffix';

export interface StatValueProps
  extends BoxProps, CompoundStylesApiProps<StatValueFactory>, ElementProps<'div', 'prefix'> {
  /** Content rendered before the value */
  prefix?: React.ReactNode;

  /** Content rendered after the value */
  suffix?: React.ReactNode;

  /** Value content */
  children?: React.ReactNode;
}

export type StatValueFactory = Factory<{
  props: StatValueProps;
  ref: HTMLDivElement;
  stylesNames: StatValueStylesNames;
  compound: true;
}>;

export const StatValue = factory<StatValueFactory>((_props) => {
  const props = useProps('StatValue', null, _props);
  const { className, style, classNames, styles, vars, prefix, suffix, children, mod, ...others } =
    props;
  const ctx = useStatContext();

  return (
    <Box
      mod={mod}
      {...ctx.getStyles('value', { className, style, classNames, styles })}
      {...others}
    >
      {prefix != null && <span {...ctx.getStyles('prefix', { classNames, styles })}>{prefix}</span>}
      {children}
      {suffix != null && <span {...ctx.getStyles('suffix', { classNames, styles })}>{suffix}</span>}
    </Box>
  );
});

StatValue.displayName = '@mantine/core/StatValue';
