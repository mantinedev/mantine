import {
  Box,
  BoxProps,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Center.module.css';

export type CenterStylesNames = 'root';

export interface CenterProps extends BoxProps, StylesApiProps<CenterFactory> {
  /** Content to center */
  children?: React.ReactNode;

  /** If set, `inline-flex` is used instead of `flex` */
  inline?: boolean;
}

export type CenterFactory = PolymorphicFactory<{
  props: CenterProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: CenterStylesNames;
}>;

export const Center = polymorphicFactory<CenterFactory>((_props) => {
  const props = useProps('Center', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    inline,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<CenterFactory>({
    name: 'Center',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  return <Box mod={[{ inline }, mod]} {...getStyles('root')} {...others} />;
});

Center.classes = classes;
Center.displayName = '@mantine/core/Center';
