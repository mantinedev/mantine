import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Container.module.css';

export type ContainerStylesNames = 'root';
export type ContainerCssVariables = {
  root: '--container-size';
};

export interface ContainerProps
  extends BoxProps, StylesApiProps<ContainerFactory>, ElementProps<'div'> {
  /** `max-width` of the container, value is not responsive – it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set. @default 'md' */
  size?: MantineSize | (string & {}) | number;

  /** If set, the container takes 100% width of its parent and `size` prop is ignored. @default false */
  fluid?: boolean;

  /** Centering strategy @default 'block' */
  strategy?: 'block' | 'grid';
}

export type ContainerFactory = Factory<{
  props: ContainerProps;
  ref: HTMLDivElement;
  stylesNames: ContainerStylesNames;
  vars: ContainerCssVariables;
}>;

const defaultProps = {
  strategy: 'block',
} satisfies Partial<ContainerProps>;

const varsResolver = createVarsResolver<ContainerFactory>((_, { size, fluid }) => ({
  root: {
    '--container-size': fluid ? undefined : getSize(size, 'container-size'),
  },
}));

export const Container = factory<ContainerFactory>((_props) => {
  const props = useProps('Container', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    fluid,
    mod,
    attributes,
    strategy,
    ...others
  } = props;

  const getStyles = useStyles<ContainerFactory>({
    name: 'Container',
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

  return <Box mod={[{ fluid, strategy }, mod]} {...getStyles('root')} {...others} />;
});

Container.classes = classes;
Container.displayName = '@mantine/core/Container';
