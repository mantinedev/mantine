import React from 'react';
import { IconHome2, IconChevronRight } from '@tabler/icons';
import { NavLink } from './NavLink';

export default { title: 'NavLink' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <NavLink
        label="Navigation link"
        description="Some description here"
        icon={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Navigation link"
        icon={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
    </div>
  );
}
