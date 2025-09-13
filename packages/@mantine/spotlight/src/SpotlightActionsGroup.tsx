import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';
import classes from './Spotlight.module.css';

export type SpotlightActionsGroupStylesNames = 'actionsGroup';

export interface SpotlightActionsGroupProps
  extends BoxProps,
    CompoundStylesApiProps<SpotlightActionsGroupFactory>,
    ElementProps<'div'> {
  /** `Spotlight.Action` components */
  children?: React.ReactNode;

  /** Group label */
  label?: string;
}

export type SpotlightActionsGroupFactory = Factory<{
  props: SpotlightActionsGroupProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightActionsGroupStylesNames;
  compound: true;
}>;

export const SpotlightActionsGroup = factory<SpotlightActionsGroupFactory>((props, ref) => {
  const { className, style, styles, classNames, label, children, ...others } = useProps(
    'SpotlightActionsGroup',
    null,
    props
  );

  const ctx = useSpotlightContext();

  return (
    <Box
      {...ctx.getStyles('actionsGroup', { className, style, classNames, styles })}
      ref={ref}
      {...others}
      __vars={{
        '--spotlight-label': `'${label?.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`,
      }}
    >
      {children}
    </Box>
  );
});

SpotlightActionsGroup.classes = classes;
SpotlightActionsGroup.displayName = '@mantine/core/SpotlightActionsGroup';
