import { cloneElement } from 'react';
import { useFocusTrap, useMergedRef } from '@mantine/hooks';
import { isElement } from '../../core';
import { VisuallyHidden } from '../VisuallyHidden';

export interface FocusTrapProps {
  /** Element to trap focus at, must support ref prop */
  children: any;

  /** If set to `false`, disables focus trap */
  active?: boolean;

  /** Prop that is used to access element ref @default `'ref'` */
  refProp?: string;

  /** Ref to combine with the focus trap ref */
  innerRef?: React.Ref<any>;
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

export function FocusTrapInitialFocus(props: React.ComponentProps<'span'>) {
  return <VisuallyHidden tabIndex={-1} data-autofocus {...props} />;
}

FocusTrap.displayName = '@mantine/core/FocusTrap';
FocusTrapInitialFocus.displayName = '@mantine/core/FocusTrapInitialFocus';
FocusTrap.InitialFocus = FocusTrapInitialFocus;
