import { type ClassNames, factory, Factory, type Styles, useProps } from '../../../core';
import { CloseButton, type CloseButtonProps } from '../../CloseButton';
import { useActionBarContext } from '../ActionBar.context';
import classes from '../ActionBar.module.css';

export type ActionBarCloseButtonStylesNames = 'closeButton';

export interface ActionBarCloseButtonProps extends Omit<
  CloseButtonProps,
  'classNames' | 'styles' | 'vars'
> {
  /** Classes for the `closeButton` selector of the parent `ActionBar` */
  classNames?: ClassNames<ActionBarCloseButtonFactory>;

  /** Styles for the `closeButton` selector of the parent `ActionBar` */
  styles?: Styles<ActionBarCloseButtonFactory>;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type ActionBarCloseButtonFactory = Factory<{
  props: ActionBarCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: ActionBarCloseButtonStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ActionBarCloseButtonProps> = {};

export const ActionBarCloseButton = factory<ActionBarCloseButtonFactory>((_props) => {
  const props = useProps('ActionBarCloseButton', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, onClick, ...others } = props;
  const ctx = useActionBarContext();

  return (
    <CloseButton
      {...ctx.getStyles('closeButton', { className, style, classNames, styles })}
      unstyled={unstyled ?? ctx.unstyled}
      {...others}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        ctx.onClose?.();
      }}
    />
  );
});

ActionBarCloseButton.classes = classes;
ActionBarCloseButton.displayName = '@mantine/core/ActionBarCloseButton';
