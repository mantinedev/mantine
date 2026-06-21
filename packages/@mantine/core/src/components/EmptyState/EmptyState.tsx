import { Children, Fragment, isValidElement } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  MantineColor,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { EmptyStateProvider } from './EmptyState.context';
import {
  EmptyStateActions,
  EmptyStateActionsFactory,
  EmptyStateActionsProps,
  EmptyStateActionsStylesNames,
} from './EmptyStateActions/EmptyStateActions';
import {
  EmptyStateDescription,
  EmptyStateDescriptionFactory,
  EmptyStateDescriptionProps,
  EmptyStateDescriptionStylesNames,
} from './EmptyStateDescription/EmptyStateDescription';
import {
  EmptyStateIndicator,
  EmptyStateIndicatorFactory,
  EmptyStateIndicatorProps,
  EmptyStateIndicatorStylesNames,
} from './EmptyStateIndicator/EmptyStateIndicator';
import {
  EmptyStateTitle,
  EmptyStateTitleFactory,
  EmptyStateTitleProps,
  EmptyStateTitleStylesNames,
} from './EmptyStateTitle/EmptyStateTitle';
import classes from './EmptyState.module.css';

export type EmptyStateStylesNames =
  | 'root'
  | 'body'
  | EmptyStateIndicatorStylesNames
  | EmptyStateTitleStylesNames
  | EmptyStateDescriptionStylesNames
  | EmptyStateActionsStylesNames;

export type EmptyStateVariant = 'filled' | 'light';

export type EmptyStateCssVariables = {
  root:
    | '--empty-state-indicator-size'
    | '--empty-state-gap'
    | '--empty-state-title-fz'
    | '--empty-state-description-fz'
    | '--empty-state-indicator-bg'
    | '--empty-state-indicator-color';
};

export interface EmptyStateProps
  extends BoxProps, StylesApiProps<EmptyStateFactory>, ElementProps<'div', 'title'> {
  /** Controls indicator size, gap between elements and font sizes of title and description @default 'md' */
  size?: MantineSize;

  /** Content alignment. `center` stacks the content in a centered column, `left`/`right` place the indicator on the side with the content next to it @default 'center' */
  align?: 'left' | 'center' | 'right';

  /** Controls the indicator appearance. `filled` and `light` display a colored circular background behind the icon. If not set, the icon is displayed with dimmed color */
  variant?: EmptyStateVariant;

  /** Key of `theme.colors` or any valid CSS color, used by `filled` and `light` variants @default theme.primaryColor */
  color?: MantineColor;

  /** Title content, rendered inside `EmptyState.Title` */
  title?: React.ReactNode;

  /** Description content, rendered inside `EmptyState.Description` */
  description?: React.ReactNode;

  /** Icon or illustration, rendered inside `EmptyState.Indicator` */
  icon?: React.ReactNode;

  /** If set, a neutral circular background is displayed behind the indicator. Setting `variant` always displays a colored background regardless of this prop @default false */
  withIndicatorBackground?: boolean;

  /** `EmptyState` compound components, rendered after the shorthand props content */
  children?: React.ReactNode;
}

export type EmptyStateFactory = Factory<{
  props: EmptyStateProps;
  ref: HTMLDivElement;
  stylesNames: EmptyStateStylesNames;
  vars: EmptyStateCssVariables;
  variant: EmptyStateVariant;
  staticComponents: {
    Indicator: typeof EmptyStateIndicator;
    Title: typeof EmptyStateTitle;
    Description: typeof EmptyStateDescription;
    Actions: typeof EmptyStateActions;
  };
}>;

const defaultProps = {
  size: 'md',
  align: 'center',
} satisfies Partial<EmptyStateProps>;

function flattenChildren(children: React.ReactNode): React.ReactNode[] {
  const flat: React.ReactNode[] = [];

  const collect = (nodes: React.ReactNode) => {
    Children.forEach(nodes, (child) => {
      if (isValidElement(child) && child.type === Fragment) {
        collect((child.props as { children?: React.ReactNode }).children);
      } else {
        flat.push(child);
      }
    });
  };

  collect(children);
  return Children.toArray(flat);
}

const varsResolver = createVarsResolver<EmptyStateFactory>((theme, { size, variant, color }) => {
  const colors = variant
    ? theme.variantColorResolver({ color: color || theme.primaryColor, theme, variant })
    : null;

  return {
    root: {
      '--empty-state-indicator-size': getSize(size, 'empty-state-indicator-size'),
      '--empty-state-gap': getSize(size, 'empty-state-gap'),
      '--empty-state-title-fz': getSize(size, 'empty-state-title-fz'),
      '--empty-state-description-fz': getSize(size, 'empty-state-description-fz'),
      '--empty-state-indicator-bg': colors ? colors.background : undefined,
      '--empty-state-indicator-color': colors ? colors.color : undefined,
    },
  };
});

export const EmptyState = factory<EmptyStateFactory>((_props) => {
  const props = useProps('EmptyState', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    align,
    variant,
    color,
    title,
    description,
    icon,
    withIndicatorBackground,
    children,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<EmptyStateFactory>({
    name: 'EmptyState',
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

  const bodyChildren: React.ReactNode[] = [];
  let childrenIndicator: React.ReactNode = null;

  flattenChildren(children).forEach((child) => {
    if (
      isValidElement(child) &&
      (child.type === EmptyStateIndicator ||
        (child.type as any)?.displayName === '@mantine/core/EmptyStateIndicator')
    ) {
      childrenIndicator = child;
    } else {
      bodyChildren.push(child);
    }
  });

  const indicator = icon ? <EmptyStateIndicator>{icon}</EmptyStateIndicator> : childrenIndicator;
  const hasBody = title != null || description != null || bodyChildren.length > 0;

  return (
    <EmptyStateProvider
      value={{ getStyles, withIndicatorBackground: withIndicatorBackground || !!variant }}
    >
      <Box {...getStyles('root', { variant })} variant={variant} mod={[{ align }, mod]} {...others}>
        {indicator}
        {hasBody && (
          <div {...getStyles('body')}>
            {title && <EmptyStateTitle>{title}</EmptyStateTitle>}
            {description && <EmptyStateDescription>{description}</EmptyStateDescription>}
            {bodyChildren}
          </div>
        )}
      </Box>
    </EmptyStateProvider>
  );
});

EmptyState.classes = classes;
EmptyState.varsResolver = varsResolver;
EmptyState.displayName = '@mantine/core/EmptyState';
EmptyState.Indicator = EmptyStateIndicator;
EmptyState.Title = EmptyStateTitle;
EmptyState.Description = EmptyStateDescription;
EmptyState.Actions = EmptyStateActions;

export namespace EmptyState {
  export type Props = EmptyStateProps;
  export type StylesNames = EmptyStateStylesNames;
  export type CssVariables = EmptyStateCssVariables;
  export type Variant = EmptyStateVariant;
  export type Factory = EmptyStateFactory;

  export namespace Indicator {
    export type Props = EmptyStateIndicatorProps;
    export type StylesNames = EmptyStateIndicatorStylesNames;
    export type Factory = EmptyStateIndicatorFactory;
  }

  export namespace Title {
    export type Props = EmptyStateTitleProps;
    export type StylesNames = EmptyStateTitleStylesNames;
    export type Factory = EmptyStateTitleFactory;
  }

  export namespace Description {
    export type Props = EmptyStateDescriptionProps;
    export type StylesNames = EmptyStateDescriptionStylesNames;
    export type Factory = EmptyStateDescriptionFactory;
  }

  export namespace Actions {
    export type Props = EmptyStateActionsProps;
    export type StylesNames = EmptyStateActionsStylesNames;
    export type Factory = EmptyStateActionsFactory;
  }
}
