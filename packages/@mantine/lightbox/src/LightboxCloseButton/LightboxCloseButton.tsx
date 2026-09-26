import {
  BoxProps,
  CloseButton,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useLightboxContext } from '../lightbox.context';
import classes from '../Lightbox.module.css';

export type LightboxCloseButtonStylesNames = 'closeButton';

export interface LightboxCloseButtonProps
  extends BoxProps, CompoundStylesApiProps<LightboxCloseButtonFactory>, ElementProps<'button'> {}

export type LightboxCloseButtonFactory = Factory<{
  props: LightboxCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: LightboxCloseButtonStylesNames;
  compound: true;
}>;

export const LightboxCloseButton = factory<LightboxCloseButtonFactory>((props) => {
  const { classNames, className, style, styles, vars, onClick, ...others } = useProps(
    'LightboxCloseButton',
    null,
    props
  );

  const ctx = useLightboxContext();

  return (
    <CloseButton
      {...ctx.getStyles('closeButton', { className, style, classNames, styles })}
      aria-label={ctx.labels.closeLabel}
      variant="subtle"
      size="lg"
      {...others}
      onClick={(event) => {
        onClick?.(event);
        ctx.onClose();
      }}
    />
  );
});

LightboxCloseButton.classes = classes;
LightboxCloseButton.displayName = '@mantine/lightbox/LightboxCloseButton';
