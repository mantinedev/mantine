import React, { cloneElement } from 'react';
import { isElement } from '@mantine/utils';
import { useFocusTrap, useMergedRef } from '@mantine/hooks';

export interface FocusTrapProps {
  /** Element at which focus should be trapped, should support ref prop */
  children: any;

  /** Determines whether focus should be trapped within child element */
  active?: boolean;
}

export function FocusTrap({ children, active }: FocusTrapProps): React.ReactElement {
  const focusTrapRef = useFocusTrap(active);
  const ref = useMergedRef(focusTrapRef, children?.ref);

  if (!isElement(children)) {
    return children;
  }

  return cloneElement(children, { ref });
}
