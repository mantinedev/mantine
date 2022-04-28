import React, { cloneElement } from 'react';
import { isElement } from '@mantine/utils';
import { useFocusTrap, useMergedRef } from '@mantine/hooks';

export interface FocusTrapProps {
  /** Element at which focus should be trapped, should support ref prop */
  children: any;

  /** Determines whether focus should be trapped within child element */
  active?: boolean;

  /** Prop that should be used to access component ref */
  refProp?: string;
}

export function FocusTrap({
  children,
  active = true,
  refProp = 'ref',
}: FocusTrapProps): React.ReactElement {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef(focusTrapRef, children?.ref);

  if (!isElement(children)) {
    return children;
  }

  return cloneElement(children, { [refProp]: ref });
}

FocusTrap.displayName = '@mantine/core/FocusTrap';
