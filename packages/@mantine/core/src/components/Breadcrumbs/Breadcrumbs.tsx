import { Children, cloneElement } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSpacing,
  isElement,
  MantineSpacing,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Breadcrumbs.module.css';

export type BreadcrumbsStylesNames = 'root' | 'separator' | 'breadcrumb';
export type BreadcrumbsCssVariables = {
  root: '--bc-separator-margin';
};

export interface BreadcrumbsProps
  extends BoxProps, StylesApiProps<BreadcrumbsFactory>, ElementProps<'nav'> {
  /** Separator between children @default '/' */
  separator?: React.ReactNode;

  /** Controls spacing between separator and breadcrumb @default 'xs' */
  separatorMargin?: MantineSpacing;

  /** React nodes that should be separated with `separator`. Arrays are flattened, non-element children are wrapped with a `div`. */
  children: React.ReactNode;
}

export type BreadcrumbsFactory = Factory<{
  props: BreadcrumbsProps;
  ref: HTMLElement;
  stylesNames: BreadcrumbsStylesNames;
  vars: BreadcrumbsCssVariables;
}>;

const defaultProps = {
  separator: '/',
  'aria-label': 'Breadcrumbs',
} satisfies Partial<BreadcrumbsProps>;

const varsResolver = createVarsResolver<BreadcrumbsFactory>((_, { separatorMargin }) => ({
  root: {
    '--bc-separator-margin': getSpacing(separatorMargin),
  },
}));

export const Breadcrumbs = factory<BreadcrumbsFactory>((_props) => {
  const props = useProps('Breadcrumbs', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    separator,
    separatorMargin,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<BreadcrumbsFactory>({
    name: 'Breadcrumbs',
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

  const items = Children.toArray(children).reduce<React.ReactNode[]>((acc, child, index, array) => {
    const item = isElement(child) ? (
      cloneElement(child, {
        ...getStyles('breadcrumb', {
          className: (child.props as { className?: string })?.className,
        }),
        key: child.key ?? index,
      })
    ) : (
      <div {...getStyles('breadcrumb')} key={index}>
        {child}
      </div>
    );

    acc.push(item);

    if (index !== array.length - 1) {
      acc.push(
        <Box {...getStyles('separator')} aria-hidden key={`separator-${index}`}>
          {separator}
        </Box>
      );
    }

    return acc;
  }, []);

  return (
    <Box component="nav" {...getStyles('root')} {...others}>
      {items}
    </Box>
  );
});

Breadcrumbs.classes = classes;
Breadcrumbs.varsResolver = varsResolver;
Breadcrumbs.displayName = '@mantine/core/Breadcrumbs';

export namespace Breadcrumbs {
  export type Props = BreadcrumbsProps;
  export type StylesNames = BreadcrumbsStylesNames;
  export type CssVariables = BreadcrumbsCssVariables;
  export type Factory = BreadcrumbsFactory;
}
