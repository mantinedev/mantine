import React from 'react';
import { UnstyledButton } from '../../Button/UnstyledButton/UnstyledButton';
import { AccordionItemProps } from '../AccordionItem/AccordionItem';

interface AccordionControlProps extends AccordionItemProps {
  opened: boolean;
  onToggle(): void;
}

export function AccordionControl({
  opened,
  onToggle,
  label,
  children,
  ...others
}: AccordionControlProps) {
  return (
    <div {...others}>
      <UnstyledButton onClick={onToggle}>{label}</UnstyledButton>
      {opened && <div>{children}</div>}
    </div>
  );
}

AccordionControl.displayName = '@mantine/core/AccordionControl';
