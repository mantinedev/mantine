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

export type StatLabelStylesNames = 'label';

export interface StatLabelProps
  extends BoxProps, CompoundStylesApiProps<StatLabelFactory>, ElementProps<'div'> {
  /** Label content */
  children?: React.ReactNode;
}

export type StatLabelFactory = Factory<{
  props: StatLabelProps;
  ref: HTMLDivElement;
  stylesNames: StatLabelStylesNames;
  compound: true;
}>;

export const StatLabel = factory<StatLabelFactory>((_props) => {
  const props = useProps('StatLabel', null, _props);
  const { className, style, classNames, styles, vars, mod, ...others } = props;
  const ctx = useStatContext();

  return (
    <Box
      mod={mod}
      {...ctx.getStyles('label', { className, style, classNames, styles })}
      {...others}
    />
  );
});

StatLabel.displayName = '@mantine/core/StatLabel';
