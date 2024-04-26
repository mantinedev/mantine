import { factory, Factory, isElement, useProps } from '../../../core';
import { Popover } from '../../Popover';
import { useComboboxContext } from '../Combobox.context';

export interface ComboboxDropdownTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to access element ref */
  refProp?: string;
}

const defaultProps: Partial<ComboboxDropdownTargetProps> = {
  refProp: 'ref',
};

export type ComboboxDropdownTargetFactory = Factory<{
  props: ComboboxDropdownTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

export const ComboboxDropdownTarget = factory<ComboboxDropdownTargetFactory>((props, ref) => {
  const { children, refProp } = useProps('ComboboxDropdownTarget', defaultProps, props);
  useComboboxContext();

  if (!isElement(children)) {
    throw new Error(
      'Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  return (
    <Popover.Target ref={ref} refProp={refProp}>
      {children}
    </Popover.Target>
  );
});

ComboboxDropdownTarget.displayName = '@mantine/core/ComboboxDropdownTarget';
