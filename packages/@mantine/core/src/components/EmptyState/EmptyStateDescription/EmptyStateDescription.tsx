import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useEmptyStateContext } from '../EmptyState.context';
import classes from '../EmptyState.module.css';

export type EmptyStateDescriptionStylesNames = 'description';

export interface EmptyStateDescriptionProps
  extends BoxProps, CompoundStylesApiProps<EmptyStateDescriptionFactory>, ElementProps<'p'> {
  /** Description content */
  children?: React.ReactNode;
}

export type EmptyStateDescriptionFactory = Factory<{
  props: EmptyStateDescriptionProps;
  ref: HTMLParagraphElement;
  stylesNames: EmptyStateDescriptionStylesNames;
  compound: true;
}>;

export const EmptyStateDescription = factory<EmptyStateDescriptionFactory>((_props) => {
  const props = useProps('EmptyStateDescription', null, _props);
  const { classNames, className, style, styles, vars, children, mod, ...others } = props;

  const ctx = useEmptyStateContext();

  return (
    <Box
      component="p"
      mod={mod}
      {...ctx.getStyles('description', { className, style, classNames, styles })}
      {...others}
    >
      {children}
    </Box>
  );
});

EmptyStateDescription.classes = classes;
EmptyStateDescription.displayName = '@mantine/core/EmptyStateDescription';
