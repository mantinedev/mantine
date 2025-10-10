import { cloneElement } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { factory, Factory, isElement, useProps } from '../../../core';
import { Popover } from '../../Popover';
import { useComboboxContext } from '../Combobox.context';
import { useComboboxTargetProps } from '../use-combobox-target-props/use-combobox-target-props';

export interface ComboboxTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that is used to access element ref */
  refProp?: string;

  /** If set, the component responds to keyboard events @default `true` */
  withKeyboardNavigation?: boolean;

  /** If set, the target has `aria-` attributes @default `true` */
  withAriaAttributes?: boolean;

  /** If set, the target has `aria-expanded` attribute @default `false` */
  withExpandedAttribute?: boolean;

  /** Determines which events is handled by the target element.
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
} satisfies Partial<ComboboxTargetProps>;

export type ComboboxTargetFactory = Factory<{
  props: ComboboxTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

export const ComboboxTarget = factory<ComboboxTargetFactory>((props) => {
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
    onKeyDown: (children.props as any).onKeyDown,
    autoComplete,
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
