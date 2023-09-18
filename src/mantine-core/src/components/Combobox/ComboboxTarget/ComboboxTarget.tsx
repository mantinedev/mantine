import React, { cloneElement } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { Popover } from '../../Popover';
import { isElement, useProps, factory, Factory } from '../../../core';
import { useComboboxContext } from '../Combobox.context';
import { useComboboxTargetProps } from '../use-combobox-target-props/use-combobox-target-props';

export interface ComboboxTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to access element ref */
  refProp?: string;

  /** Determines whether component should respond to keyboard events, `true` by default */
  withKeyboardNavigation?: boolean;

  /** Determines whether the target should have `aria-` attributes, `true` by default */
  withAriaAttributes?: boolean;

  /** Determines whether the target should have `aria-expanded` attribute, `false` by default */
  withExpandedAttribute?: boolean;

  /** Determines which events should be handled by the target element.
   * `button` target type handles `Space` and `Enter` keys to toggle dropdown opened state.
   * `input` by default.
   * */
  targetType?: 'button' | 'input';
}

const defaultProps: Partial<ComboboxTargetProps> = {
  refProp: 'ref',
  targetType: 'input',
  withKeyboardNavigation: true,
  withAriaAttributes: true,
  withExpandedAttribute: false,
};

export type ComboboxTargetFactory = Factory<{
  props: ComboboxTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

export const ComboboxTarget = factory<ComboboxTargetFactory>((props, ref) => {
  const {
    children,
    refProp,
    withKeyboardNavigation,
    withAriaAttributes,
    withExpandedAttribute,
    targetType,
    ...others
  } = useProps('ComboboxTarget', defaultProps, props);

  if (!isElement(children)) {
    throw new Error(
      'Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = useComboboxContext();

  const targetProps = useComboboxTargetProps({
    targetType,
    withAriaAttributes,
    withKeyboardNavigation,
    withExpandedAttribute,
    onKeyDown: children.props.onKeyDown,
  });

  const clonedElement = cloneElement(children, {
    ...targetProps,
    ...others,
  });

  return (
    <Popover.Target ref={useMergedRef(ref, ctx.store.targetRef)}>{clonedElement}</Popover.Target>
  );
});

ComboboxTarget.displayName = '@mantine/core/ComboboxTarget';
