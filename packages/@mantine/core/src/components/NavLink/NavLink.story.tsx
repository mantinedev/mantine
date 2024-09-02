import { IconChevronRight, IconHome2 } from '@tabler/icons-react';
import { useCounter } from '@mantine/hooks';
import { Button } from '../Button';
import { NavLink } from './NavLink';

export default { title: 'NavLink' };

export function SingleButton() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <NavLink
        label="Navigation link"
        description="Some description here"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Navigation link"
        description="Some description here"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
    </div>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <NavLink
        label="Navigation link"
        description="Some description here"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Navigation link with label text overflow"
        description="And with description text overflow"
        noWrap
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Thislabelissolongthatitoverflowsitscontainernotnice"
        description="Thislabelissolongthatitoverflowsitscontainernotnice"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Navigation link"
        description="Some description here"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
      <NavLink
        label="Navigation link"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Navigation link"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
      <NavLink
        label="Navigation link"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        color="violet"
        variant="filled"
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
      <NavLink
        label="Navigation link"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
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
      <NavLink label="With nested links 1" leftSection={<IconHome2 size={16} stroke={1.5} />}>
        <NavLink label="Child link 1" leftSection={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Child link 2" leftSection={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Child link 3" leftSection={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Second layer" leftSection={<IconHome2 size={16} stroke={1.5} />}>
          <NavLink label="Child link 1" leftSection={<IconHome2 size={16} stroke={1.5} />} />
          <NavLink label="Child link 2" leftSection={<IconHome2 size={16} stroke={1.5} />} />
          <NavLink label="Child link 3" leftSection={<IconHome2 size={16} stroke={1.5} />} />
        </NavLink>
      </NavLink>
      <NavLink
        label="With nested links 2"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        disableRightSectionRotation
        childrenOffset={0}
      >
        <NavLink label="Child link 1" leftSection={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Child link 2" leftSection={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Child link 3" leftSection={<IconHome2 size={16} stroke={1.5} />} />
      </NavLink>
    </div>
  );
}

export function DynamicNestedItems() {
  const [count, { increment, decrement }] = useCounter(2);
  const nested = Array(count)
    .fill(0)
    .map((_, index) => (
      <NavLink
        key={index}
        label="Child link 1"
        leftSection={<IconHome2 size={16} stroke={1.5} key={index} />}
      />
    ));
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <NavLink label="With nested links" leftSection={<IconHome2 size={16} stroke={1.5} />}>
        {nested}
      </NavLink>
      <Button onClick={increment}>Add item</Button>
      <Button onClick={decrement}>Remove item item</Button>
    </div>
  );
}
