import { cloneElement } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { factory, Factory, getRefProp, getSingleElementChild, useProps } from '../../core';
import { useComboboxContext } from '../Combobox/Combobox.context';
import { useComboboxTargetProps } from '../Combobox/use-combobox-target-props/use-combobox-target-props';
import { Popover } from '../Popover';

export interface ComboboxPopoverTargetProps {
  children: React.ReactNode;

  /** Key of the prop that is used to access element ref @default 'ref' */
  refProp?: string;
}

const defaultProps = {
  refProp: 'ref',
} satisfies Partial<ComboboxPopoverTargetProps>;

export type ComboboxPopoverTargetFactory = Factory<{
  props: ComboboxPopoverTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

export const ComboboxPopoverTarget = factory<ComboboxPopoverTargetFactory>((props) => {
  const { children, refProp, ref, ...others } = useProps(
    'ComboboxPopoverTarget',
    defaultProps,
    props
  );

  const child = getSingleElementChild(children);
  if (!child) {
    throw new Error(
      'ComboboxPopover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = useComboboxContext();
  const targetRef = useMergedRef(ref, ctx.store.targetRef, getRefProp(child));

  const targetProps = useComboboxTargetProps({
    targetType: 'button',
    withAriaAttributes: true,
    withKeyboardNavigation: true,
    withExpandedAttribute: true,
    onKeyDown: (child.props as any).onKeyDown,
    autoComplete: 'off',
  });

  const clonedElement = cloneElement(child, {
    ...targetProps,
    ...others,
    [refProp!]: targetRef,
    onClick: (event: React.MouseEvent) => {
      ctx.store.toggleDropdown();
      (child.props as any).onClick?.(event);
    },
  } as any);

  return <Popover.Target refProp={refProp}>{clonedElement}</Popover.Target>;
});

ComboboxPopoverTarget.displayName = '@mantine/core/ComboboxPopoverTarget';
