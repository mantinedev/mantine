import { useMergedRef } from '@mantine/hooks';
import { ElementProps, factory, Factory, useProps } from '../../../core';
import { Input, InputProps, InputStylesNames } from '../../Input/Input';
import { useComboboxContext } from '../Combobox.context';
import { useComboboxTargetProps } from '../use-combobox-target-props/use-combobox-target-props';
import classes from '../Combobox.module.css';

export type ComboboxSearchStylesNames = InputStylesNames;

export interface ComboboxSearchProps extends InputProps, ElementProps<'input', 'size'> {
  /**
   * if set, the search input has `aria-` attribute
   *
   * @default `true`
   */
  withAriaAttributes?: boolean;

  /**
   * if set, the search input handles keyboard navigation
   *
   * @default `true`
   */
  withKeyboardNavigation?: boolean;
}

export type ComboboxSearchFactory = Factory<{
  props: ComboboxSearchProps;
  ref: HTMLInputElement;
  stylesNames: ComboboxSearchStylesNames;
}>;

const defaultProps = {
  withAriaAttributes: true,
  withKeyboardNavigation: true,
} satisfies Partial<ComboboxSearchProps>;

export const ComboboxSearch = factory<ComboboxSearchFactory>((_props, ref) => {
  const props = useProps('ComboboxSearch', defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    withAriaAttributes,
    onKeyDown,
    withKeyboardNavigation,
    size,
    ...others
  } = props;

  const ctx = useComboboxContext();
  const _styles = ctx.getStyles('search');

  const targetProps = useComboboxTargetProps({
    targetType: 'input',
    withAriaAttributes,
    withKeyboardNavigation,
    withExpandedAttribute: false,
    onKeyDown,
    autoComplete: 'off',
  });

  return (
    <Input
      ref={useMergedRef(ref, ctx.store.searchRef)}
      classNames={[{ input: _styles.className }, classNames] as any}
      styles={[{ input: _styles.style }, styles] as any}
      size={size || ctx.size}
      {...targetProps}
      {...others}
      __staticSelector="Combobox"
    />
  );
});

ComboboxSearch.classes = classes;
ComboboxSearch.displayName = '@mantine/core/ComboboxSearch';
