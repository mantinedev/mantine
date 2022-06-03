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
        label="Navigation link with label text overflow"
        description="And with description text overflow"
        noWrap
        icon={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Thislabelissolongthatitoverflowsitscontainernotnice"
        description="Thislabelissolongthatitoverflowsitscontainernotnice"
        icon={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Navigation link"
        description="Some description here"
        icon={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
      <NavLink
        label="Navigation link"
        icon={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Navigation link"
        icon={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
      <NavLink
        label="Navigation link"
        icon={<IconHome2 size={16} stroke={1.5} />}
        color="violet"
        variant="filled"
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
      <NavLink
        label="Navigation link"
        icon={<IconHome2 size={16} stroke={1.5} />}
        color="violet"
        variant="subtle"
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
    </div>
  );
}
