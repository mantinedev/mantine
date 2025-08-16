import { useId } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useComboboxContext } from '../Combobox.context';
import classes from '../Combobox.module.css';

export type ComboboxGroupStylesNames = 'group' | 'groupLabel';

export interface ComboboxGroupProps
  extends BoxProps,
    CompoundStylesApiProps<ComboboxGroupFactory>,
    ElementProps<'div'> {
  /** Group label */
  label?: React.ReactNode;
}

export type ComboboxGroupFactory = Factory<{
  props: ComboboxGroupProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxGroupStylesNames;
  compound: true;
}>;

export const ComboboxGroup = factory<ComboboxGroupFactory>((props, ref) => {
  const { classNames, className, style, styles, vars, children, label, id, ...others } = useProps(
    'ComboboxGroup',
    null,
    props
  );

  const ctx = useComboboxContext();
  const _id = useId(id);

  return (
    <Box
      ref={ref}
      role="group"
      aria-labelledby={label ? _id : undefined}
      {...ctx.getStyles('group', { className, classNames, style, styles })}
      {...others}
    >
      {label && (
        <div id={_id} {...ctx.getStyles('groupLabel', { classNames, styles })}>
          {label}
        </div>
      )}
      {children}
    </Box>
  );
});

ComboboxGroup.classes = classes;
ComboboxGroup.displayName = '@mantine/core/ComboboxGroup';
