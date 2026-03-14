import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  MantineFontSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { getTitleSize } from './get-title-size';
import classes from './Title.module.css';

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;
export type TitleSize = `h${TitleOrder}` | React.CSSProperties['fontSize'] | MantineFontSize;

export type TitleStylesNames = 'root';
export type TitleCssVariables = {
  root: '--title-fw' | '--title-lh' | '--title-fz' | '--title-line-clamp' | '--title-text-wrap';
};

export interface TitleProps
  extends BoxProps, StylesApiProps<TitleFactory>, ElementProps<'h1', 'color'> {
  /** Heading order (1-6), controls `font-size` style if `size` prop is not set @default 1 */
  order?: TitleOrder;

  /** Changes title size, if not set, then size is controlled by `order` prop */
  size?: TitleSize;

  /** Number of lines after which heading will be truncated */
  lineClamp?: number;

  /** Heading `text-wrap` CSS property @default 'wrap' */
  textWrap?: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable';
}

export type TitleFactory = Factory<{
  props: TitleProps;
  ref: HTMLHeadingElement;
  stylesNames: TitleStylesNames;
  vars: TitleCssVariables;
}>;

const defaultProps = {
  order: 1,
} satisfies Partial<TitleProps>;

const varsResolver = createVarsResolver<TitleFactory>((_, { order, size, lineClamp, textWrap }) => {
  const sizeVariables = getTitleSize(order || 1, size);
  return {
    root: {
      '--title-fw': sizeVariables.fontWeight,
      '--title-lh': sizeVariables.lineHeight,
      '--title-fz': sizeVariables.fontSize,
      '--title-line-clamp': typeof lineClamp === 'number' ? lineClamp.toString() : undefined,
      '--title-text-wrap': textWrap,
    },
  };
});

export const Title = factory<TitleFactory>((_props) => {
  const props = useProps('Title', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    order,
    vars,
    size,
    variant,
    lineClamp,
    textWrap,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<TitleFactory>({
    name: 'Title',
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
  });

  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }

  return (
    <Box
      {...getStyles('root')}
      component={`h${order}`}
      variant={variant}
      mod={[{ order, 'data-line-clamp': typeof lineClamp === 'number' }, mod]}
      size={size}
      {...others}
    />
  );
});

Title.classes = classes;
Title.varsResolver = varsResolver;
Title.displayName = '@mantine/core/Title';
