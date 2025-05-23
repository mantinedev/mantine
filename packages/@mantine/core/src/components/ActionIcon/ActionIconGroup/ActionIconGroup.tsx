import {
  Box,
  BoxProps,
  createVarsResolver,
  factory,
  Factory,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import classes from '../ActionIcon.module.css';

export type ActionIconGroupStylesNames = 'group';
export type ActionIconGroupCssVariables = {
  group: '--ai-border-width';
};

export interface ActionIconGroupProps extends BoxProps, StylesApiProps<ActionIconGroupFactory> {
  /** `ActionIcon` and `ActionIcon.GroupSection` components only */
  children?: React.ReactNode;

  /** Group orientation, `'horizontal'` by default */
  orientation?: 'horizontal' | 'vertical';

  /** `border-width` of the child components. `1` by default */
  borderWidth?: number | string;
}

export type ActionIconGroupFactory = Factory<{
  props: ActionIconGroupProps;
  ref: HTMLDivElement;
  stylesNames: ActionIconGroupStylesNames;
  vars: ActionIconGroupCssVariables;
}>;

const defaultProps = {
  orientation: 'horizontal',
} satisfies Partial<ActionIconGroupProps>;

const varsResolver = createVarsResolver<ActionIconGroupFactory>((_, { borderWidth }) => ({
  group: { '--ai-border-width': rem(borderWidth) },
}));

export const ActionIconGroup = factory<ActionIconGroupFactory>((_props, ref) => {
  const props = useProps('ActionIconGroup', defaultProps, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant,
    mod,
    ...others
  } = useProps('ActionIconGroup', defaultProps, _props);

  const getStyles = useStyles<ActionIconGroupFactory>({
    name: 'ActionIconGroup',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'group',
  });

  return (
    <Box
      {...getStyles('group')}
      ref={ref}
      variant={variant}
      mod={[{ 'data-orientation': orientation }, mod]}
      role="group"
      {...others}
    />
  );
});

ActionIconGroup.classes = classes;
ActionIconGroup.displayName = '@mantine/core/ActionIconGroup';
