import React from 'react';

export interface MenuTriggerProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;
}

export function MenuTrigger({ children, refProp = 'ref' }: MenuTriggerProps) {
  return <>{children}</>;
}

MenuTrigger.displayName = '@mantine/core/MenuTrigger';
