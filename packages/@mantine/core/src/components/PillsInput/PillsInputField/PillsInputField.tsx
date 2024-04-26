import { useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import { useInputWrapperContext } from '../../Input';
import { usePillsInputContext } from '../PillsInput.context';
import classes from '../PillsInput.module.css';

export type PillsInputFieldStylesNames = 'field';

export interface PillsInputFieldProps
  extends BoxProps,
    StylesApiProps<PillsInputFieldFactory>,
    ElementProps<'input', 'type'> {
  /** Controls input styles when focused. If `auto` the input is hidden when not focused. If `visible` the input will always remain visible. `'visible'` by default  */
  type?: 'auto' | 'visible' | 'hidden';

  /** If set, cursor is changed to pointer */
  pointer?: boolean;
}

export type PillsInputFieldFactory = Factory<{
  props: PillsInputFieldProps;
  ref: HTMLInputElement;
  stylesNames: PillsInputFieldStylesNames;
}>;

const defaultProps: Partial<PillsInputFieldProps> = {
  type: 'visible',
};

export const PillsInputField = factory<PillsInputFieldFactory>((_props, ref) => {
  const props = useProps('PillsInputField', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    type,
    disabled,
    id,
    pointer,
    mod,
    ...others
  } = props;
  const ctx = usePillsInputContext();
  const inputWrapperCtx = useInputWrapperContext();

  const getStyles = useStyles<PillsInputFieldFactory>({
    name: 'PillsInputField',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: 'field',
  });

  const _disabled = disabled || ctx?.disabled;

  return (
    <Box
      component="input"
      ref={useMergedRef(ref, ctx?.fieldRef)}
      data-type={type}
      disabled={_disabled}
      mod={[{ disabled: _disabled, pointer }, mod]}
      {...getStyles('field')}
      {...others}
      id={inputWrapperCtx?.inputId || id}
      aria-invalid={ctx?.hasError}
      aria-describedby={inputWrapperCtx?.describedBy}
      type="text"
      onMouseDown={(event) => !pointer && event.stopPropagation()}
    />
  );
});

PillsInputField.classes = classes;
PillsInputField.displayName = '@mantine/core/PillsInputField';
