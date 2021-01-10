import React from 'react';

interface TagPickerProps {
  query: string;
  hovered: number;
  dropdownOpened: boolean;
}

export default function TagPicker({ query, hovered, dropdownOpened }: TagPickerProps) {
  return <div>Tag picker</div>;
}
