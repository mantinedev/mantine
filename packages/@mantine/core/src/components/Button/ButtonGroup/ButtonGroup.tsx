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
import classes from '../Button.module.css';

export type ButtonGroupStylesNames = 'group';
export type ButtonGroupCssVariables = {
  group: '--button-border-width';
};

export interface ButtonGroupProps extends BoxProps, StylesApiProps<ButtonGroupFactory> {
  /** `Button` components */
  children?: React.ReactNode;

  /** Orientation of the group @default horizontal */
  orientation?: 'horizontal' | 'vertical';

  /** `border-width` of the child `Button` components. Numbers are converted to rem. @default 1 */
  borderWidth?: number | string;
}

export type ButtonGroupFactory = Factory<{
  props: ButtonGroupProps;
  ref: HTMLDivElement;
  stylesNames: ButtonGroupStylesNames;
  vars: ButtonGroupCssVariables;
}>;

const defaultProps = {
  orientation: 'horizontal',
} satisfies Partial<ButtonGroupProps>;

const varsResolver = createVarsResolver<ButtonGroupFactory>((_, { borderWidth }) => ({
  group: { '--button-border-width': rem(borderWidth) },
}));

export const ButtonGroup = factory<ButtonGroupFactory>((_props) => {
  const props = useProps('ButtonGroup', defaultProps, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    mod,
    attributes,
    ...others
  } = useProps('ButtonGroup', defaultProps, _props);

  const getStyles = useStyles<ButtonGroupFactory>({
    name: 'ButtonGroup',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
    rootSelector: 'group',
  });

  return (
    <Box
      {...getStyles('group')}
      mod={[{ 'data-orientation': orientation }, mod]}
      role="group"
      {...others}
    />
  );
});

ButtonGroup.classes = classes;
ButtonGroup.varsResolver = varsResolver;
ButtonGroup.displayName = '@mantine/core/ButtonGroup';
