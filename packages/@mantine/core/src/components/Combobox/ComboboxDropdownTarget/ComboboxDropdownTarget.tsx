import { factory, Factory, isElement, useProps } from '../../../core';
import { Popover } from '../../Popover';
import { useComboboxContext } from '../Combobox.context';

export interface ComboboxDropdownTargetProps {
  ref?: React.RefObject<HTMLElement>;

  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to access element ref */
  refProp?: string;
}

const defaultProps = {
  refProp: 'ref',
} satisfies Partial<ComboboxDropdownTargetProps>;

export type ComboboxDropdownTargetFactory = Factory<{
  props: ComboboxDropdownTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

export const ComboboxDropdownTarget = factory<ComboboxDropdownTargetFactory>((props) => {
  const { children, refProp, ref } = useProps('ComboboxDropdownTarget', defaultProps, props);

  // Context not used, just to throw error if used outside of Combobox
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
