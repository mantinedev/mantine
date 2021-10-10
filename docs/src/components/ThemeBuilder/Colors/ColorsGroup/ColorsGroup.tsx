/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface ColorsGroupProps {
  name: string;
  onNameChange(name: string): void;
  colors: string[];
  onRootColorChange(hexValue: string): void;
  onColorChange(valueIndex: number, hexValue: string): void;
  onRemove(): void;
}

export function ColorsGroup({
  name,
  onNameChange,
  colors,
  onRootColorChange,
  onColorChange,
  onRemove,
}: ColorsGroupProps) {
  return <div>ColorsGroup</div>;
}
