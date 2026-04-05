import { factory, Factory, useProps } from '../../../core';
import { CloseButton, type CloseButtonProps } from '../../CloseButton';
import { useActionBarContext } from '../ActionBar.context';
import classes from '../ActionBar.module.css';

export type ActionBarCloseButtonStylesNames = 'closeButton';

export interface ActionBarCloseButtonProps extends CloseButtonProps {
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
  const { className, style, onClick, ...others } = props;
  const ctx = useActionBarContext();

  return (
    <CloseButton
      {...ctx.getStyles('closeButton', { className, style })}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        ctx.onClose?.();
        onClick?.(event);
      }}
      {...others}
    />
  );
});

ActionBarCloseButton.classes = classes;
ActionBarCloseButton.displayName = '@mantine/core/ActionBarCloseButton';
