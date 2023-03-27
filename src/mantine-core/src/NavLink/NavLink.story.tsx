import React from 'react';
import { IconHome2, IconChevronRight } from '@tabler/icons-react';
import { useCounter } from '@mantine/hooks';
import { Button } from '../Button';
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

export function WithNestedItems() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <NavLink label="With nested links 1" icon={<IconHome2 size={16} stroke={1.5} />}>
        <NavLink label="Child link 1" icon={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Child link 2" icon={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Child link 3" icon={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Second layer" icon={<IconHome2 size={16} stroke={1.5} />}>
          <NavLink label="Child link 1" icon={<IconHome2 size={16} stroke={1.5} />} />
          <NavLink label="Child link 2" icon={<IconHome2 size={16} stroke={1.5} />} />
          <NavLink label="Child link 3" icon={<IconHome2 size={16} stroke={1.5} />} />
        </NavLink>
      </NavLink>
      <NavLink
        label="With nested links 2"
        icon={<IconHome2 size={16} stroke={1.5} />}
        disableRightSectionRotation
        childrenOffset={0}
      >
        <NavLink label="Child link 1" icon={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Child link 2" icon={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Child link 3" icon={<IconHome2 size={16} stroke={1.5} />} />
      </NavLink>
    </div>
  );
}

export function DynamicNestedItems() {
  const [count, { increment, decrement }] = useCounter(2);
  const nested = Array(count)
    .fill(0)
    .map((_, index) => (
      <NavLink label="Child link 1" icon={<IconHome2 size={16} stroke={1.5} key={index} />} />
    ));
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <NavLink label="With nested links" icon={<IconHome2 size={16} stroke={1.5} />}>
        {nested}
      </NavLink>
      <Button onClick={increment}>Add item</Button>
      <Button onClick={decrement}>Remove item item</Button>
    </div>
  );
}
