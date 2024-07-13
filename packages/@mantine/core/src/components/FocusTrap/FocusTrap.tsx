import { cloneElement } from 'react';
import { useFocusTrap, useMergedRef } from '@mantine/hooks';
import { isElement } from '../../core';
import { VisuallyHidden } from '../VisuallyHidden';

export interface FocusTrapProps {
  /** Element at which focus should be trapped, should support ref prop */
  children: any;

  /** Determines whether focus should be trapped within child element */
  active?: boolean;

  /** Prop that should be used to access component ref */
  refProp?: string;

  /** Assigns element `ref` */
  innerRef?: React.ForwardedRef<any>;
}

export function FocusTrap({
  children,
  active = true,
  refProp = 'ref',
  innerRef,
}: FocusTrapProps): React.ReactElement {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef(focusTrapRef, innerRef);

  if (!isElement(children)) {
    return children;
  }

  return cloneElement(children, { [refProp]: ref });
}

export function FocusTrapInitialFocus(props: React.ComponentPropsWithoutRef<'span'>) {
  return <VisuallyHidden tabIndex={-1} data-autofocus {...props} />;
}

FocusTrap.displayName = '@mantine/core/FocusTrap';
FocusTrapInitialFocus.displayName = '@mantine/core/FocusTrapInitialFocus';
FocusTrap.InitialFocus = FocusTrapInitialFocus;
