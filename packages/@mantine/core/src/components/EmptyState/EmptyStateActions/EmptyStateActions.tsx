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

export type EmptyStateActionsStylesNames = 'actions';

export interface EmptyStateActionsProps
  extends BoxProps, CompoundStylesApiProps<EmptyStateActionsFactory>, ElementProps<'div'> {
  /** Action buttons or controls */
  children?: React.ReactNode;
}

export type EmptyStateActionsFactory = Factory<{
  props: EmptyStateActionsProps;
  ref: HTMLDivElement;
  stylesNames: EmptyStateActionsStylesNames;
  compound: true;
}>;

export const EmptyStateActions = factory<EmptyStateActionsFactory>((_props) => {
  const props = useProps('EmptyStateActions', null, _props);
  const { classNames, className, style, styles, vars, children, mod, ...others } = props;

  const ctx = useEmptyStateContext();

  return (
    <Box
      mod={mod}
      {...ctx.getStyles('actions', { className, style, classNames, styles })}
      {...others}
    >
      {children}
    </Box>
  );
});

EmptyStateActions.classes = classes;
EmptyStateActions.displayName = '@mantine/core/EmptyStateActions';
