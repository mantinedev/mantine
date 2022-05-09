import React, { useEffect, useRef } from 'react';
import { Box } from '../../Box';
import { Divider } from '../../Divider';
import { getComboboxData } from '../get-combobox-data/get-combobox-data';
import { ComboboxItem } from '../types';

interface ComboboxItemsProps {
  data: ComboboxItem[];
  hovered: number;
}

function Item({ label }) {
  return <Box data-combobox-item>{label}</Box>;
}

export function ComboboxItems({ data, hovered }: ComboboxItemsProps) {
  const items = getComboboxData(data);
  const rootRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (hovered !== -1) {
      console.log(rootRef.current.querySelectorAll('[data-combobox-item]')[hovered]);
    }
  }, [hovered]);

  const groups = items.grouped.map((group) => {
    const groupItems = group.items.map((item) => <Item key={item.value} {...item} />);
    return (
      <div key={group.label}>
        <Divider label={group.label} />
        {groupItems}
      </div>
    );
  });

  const ungroupedItems = items.ungrouped.map((item) => <Item key={item.value} {...item} />);

  return (
    <div ref={rootRef}>
      {groups}
      {ungroupedItems}
    </div>
  );
}
