import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  MantineRadius,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './ExampleComponent.module.css';

export type ExampleComponentStylesNames = 'root' | 'inner';
export type ExampleComponentVariant = 'filled' | 'outline';
export type ExampleComponentCssVariables = {
  root: '--radius';
};

export interface ExampleComponentProps
  extends BoxProps, StylesApiProps<ExampleComponentFactory>, ElementProps<'div'> {
  /** Component border-radius */
  radius: MantineRadius;
}

export type ExampleComponentFactory = Factory<{
  props: ExampleComponentProps;
  ref: HTMLDivElement;
  stylesNames: ExampleComponentStylesNames;
  vars: ExampleComponentCssVariables;
  variant: ExampleComponentVariant;
}>;

const defaultProps = {
  radius: 'md',
} satisfies Partial<ExampleComponentProps>;

const varsResolver = createVarsResolver<ExampleComponentFactory>((_theme, { radius }) => ({
  root: {
    '--radius': getRadius(radius),
  },
}));

export const ExampleComponent = factory<ExampleComponentFactory>((_props) => {
  const props = useProps('ExampleComponent', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    radius,
    children,
    ...others
  } = props;

  const getStyles = useStyles<ExampleComponentFactory>({
    name: 'ExampleComponent',
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

  return (
    <Box {...getStyles('root')} {...others}>
      <div {...getStyles('inner')}>{children}</div>
    </Box>
  );
});

ExampleComponent.displayName = '@mantine/core/ExampleComponent';
ExampleComponent.classes = classes;
