import { factory, useProps, useResolvedStylesApi, useStyles } from '@mantine/core';
import {
  ResourcesDayGrid,
  resourcesMonthViewDefaultProps,
  ResourcesMonthViewFactory,
  resourcesMonthViewVarsResolver,
} from '../ResourcesDayGrid/ResourcesDayGrid';
import classes from './ResourcesMonthView.module.css';

export type {
  ResourcesMonthViewCssVariables,
  ResourcesMonthViewFactory,
  ResourcesMonthViewProps,
  ResourcesMonthViewStylesNames,
} from '../ResourcesDayGrid/ResourcesDayGrid';

export const ResourcesMonthView = factory<ResourcesMonthViewFactory>((_props) => {
  const props = useProps('ResourcesMonthView', resourcesMonthViewDefaultProps, _props);
  const getStyles = useStyles<ResourcesMonthViewFactory>({
    name: props.__staticSelector,
    classes,
    props,
    className: props.className,
    style: props.style,
    classNames: props.classNames,
    styles: props.styles,
    unstyled: props.unstyled,
    attributes: props.attributes,
    vars: props.vars,
    varsResolver: resourcesMonthViewVarsResolver,
    rootSelector: 'resourcesMonthView',
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<ResourcesMonthViewFactory>({
    classNames: props.classNames,
    styles: props.styles,
    props,
  });
  return (
    <ResourcesDayGrid
      {...props}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      __getStyles={getStyles}
    />
  );
});

ResourcesMonthView.displayName = '@mantine/schedule/ResourcesMonthView';
ResourcesMonthView.classes = classes;
ResourcesMonthView.varsResolver = resourcesMonthViewVarsResolver;
