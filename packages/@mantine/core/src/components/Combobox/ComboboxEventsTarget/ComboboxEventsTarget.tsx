import { cloneElement } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { factory, Factory, getRefProp, getSingleElementChild, useProps } from '../../../core';
import { useComboboxContext } from '../Combobox.context';
import { useComboboxTargetProps } from '../use-combobox-target-props/use-combobox-target-props';

export interface ComboboxEventsTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop is used to access element ref */
  refProp?: string;

  /** If set, the component responds to the keyboard events @default `true` */
  withKeyboardNavigation?: boolean;

  /** If set, the target has `aria-` attributes @default `true` */
  withAriaAttributes?: boolean;

  /** If set, the target has `aria-expanded` attribute @default `false` */
  withExpandedAttribute?: boolean;

  /** Determines which events should be handled by the target element.
   * `button` target type handles `Space` and `Enter` keys to toggle dropdown opened state.
   * @default `input`
   * */
  targetType?: 'button' | 'input';

  /** Input autocomplete attribute */
  autoComplete?: string;
}

const defaultProps = {
  refProp: 'ref',
  targetType: 'input',
  withKeyboardNavigation: true,
  withAriaAttributes: true,
  withExpandedAttribute: false,
  autoComplete: 'off',
} satisfies Partial<ComboboxEventsTargetProps>;

export type ComboboxEventsTargetFactory = Factory<{
  props: ComboboxEventsTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

export const ComboboxEventsTarget = factory<ComboboxEventsTargetFactory>((props) => {
  const {
    children,
    refProp,
    withKeyboardNavigation,
    withAriaAttributes,
    withExpandedAttribute,
    targetType,
    autoComplete,
    ref,
    ...others
  } = useProps('ComboboxEventsTarget', defaultProps, props);

  const child = getSingleElementChild(children);
  if (!child) {
    throw new Error(
      'Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = useComboboxContext();
  const targetProps = useComboboxTargetProps({
    targetType,
    withAriaAttributes,
    withKeyboardNavigation,
    withExpandedAttribute,
    onKeyDown: (child.props as any).onKeyDown,
    autoComplete,
  });

  return cloneElement(child, {
    ...targetProps,
    ...others,
    [refProp]: useMergedRef(ref, ctx.store.targetRef, getRefProp(child)),
  });
});

ComboboxEventsTarget.displayName = '@mantine/core/ComboboxEventsTarget';
