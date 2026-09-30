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

export type StatIconStylesNames = 'icon';

export interface StatIconProps
  extends BoxProps, CompoundStylesApiProps<StatIconFactory>, ElementProps<'div'> {
  /** Icon content */
  children?: React.ReactNode;
}

export type StatIconFactory = Factory<{
  props: StatIconProps;
  ref: HTMLDivElement;
  stylesNames: StatIconStylesNames;
  compound: true;
}>;

export const StatIcon = factory<StatIconFactory>((_props) => {
  const props = useProps('StatIcon', null, _props);
  const { className, style, classNames, styles, vars, mod, ...others } = props;
  const ctx = useStatContext();

  return (
    <Box
      mod={mod}
      {...ctx.getStyles('icon', { className, style, classNames, styles })}
      {...others}
    />
  );
});

StatIcon.displayName = '@mantine/core/StatIcon';
