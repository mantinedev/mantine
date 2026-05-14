import { CaretRightIcon, HouseIcon } from '@phosphor-icons/react';
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
        leftSection={<HouseIcon size={16} />}
        rightSection={<CaretRightIcon size={16} />}
      />
      <NavLink
        label="Navigation link"
        description="Some description here"
        leftSection={<HouseIcon size={16} />}
        rightSection={<CaretRightIcon size={16} />}
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
        leftSection={<HouseIcon size={16} />}
        rightSection={<CaretRightIcon size={16} />}
      />
      <NavLink
        label="Navigation link with label text overflow"
        description="And with description text overflow"
        noWrap
        leftSection={<HouseIcon size={16} />}
        rightSection={<CaretRightIcon size={16} />}
      />
      <NavLink
        label="Thislabelissolongthatitoverflowsitscontainernotnice"
        description="Thislabelissolongthatitoverflowsitscontainernotnice"
        leftSection={<HouseIcon size={16} />}
        rightSection={<CaretRightIcon size={16} />}
      />
      <NavLink
        label="Navigation link"
        description="Some description here"
        leftSection={<HouseIcon size={16} />}
        rightSection={<CaretRightIcon size={16} />}
        active
      />
      <NavLink
        label="Navigation link"
        leftSection={<HouseIcon size={16} />}
        rightSection={<CaretRightIcon size={16} />}
      />
      <NavLink
        label="Navigation link"
        leftSection={<HouseIcon size={16} />}
        rightSection={<CaretRightIcon size={16} />}
        active
      />
      <NavLink
        label="Navigation link"
        leftSection={<HouseIcon size={16} />}
        color="violet"
        variant="filled"
        rightSection={<CaretRightIcon size={16} />}
        active
      />
      <NavLink
        label="Navigation link"
        leftSection={<HouseIcon size={16} />}
        color="violet"
        variant="subtle"
        rightSection={<CaretRightIcon size={16} />}
        active
      />
    </div>
  );
}

export function WithNestedItems() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <NavLink
        label="With nested links 1"
        leftSection={<HouseIcon size={16} />}
        bg="red"
        rightSection={null}
      >
        <NavLink label="Child link 1" leftSection={<HouseIcon size={16} />} />
        <NavLink label="Child link 2" leftSection={<HouseIcon size={16} />} />
        <NavLink label="Child link 3" leftSection={<HouseIcon size={16} />} />
        <NavLink label="Second layer" leftSection={<HouseIcon size={16} />}>
          <NavLink label="Child link 1" leftSection={<HouseIcon size={16} />} />
          <NavLink label="Child link 2" leftSection={<HouseIcon size={16} />} />
          <NavLink label="Child link 3" leftSection={<HouseIcon size={16} />} />
        </NavLink>
      </NavLink>
      <NavLink
        label="With nested links 2"
        leftSection={<HouseIcon size={16} />}
        disableRightSectionRotation
        childrenOffset={0}
      >
        <NavLink label="Child link 1" leftSection={<HouseIcon size={16} />} />
        <NavLink label="Child link 2" leftSection={<HouseIcon size={16} />} />
        <NavLink label="Child link 3" leftSection={<HouseIcon size={16} />} />
      </NavLink>
    </div>
  );
}

export function DynamicNestedItems() {
  const [count, { increment, decrement }] = useCounter(2);
  const nested = Array(count)
    .fill(0)
    .map((_, index) => (
      <NavLink key={index} label="Child link 1" leftSection={<HouseIcon size={16} key={index} />} />
    ));
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <NavLink label="With nested links" leftSection={<HouseIcon size={16} />}>
        {nested}
      </NavLink>
      <Button onClick={increment}>Add item</Button>
      <Button onClick={decrement}>Remove item item</Button>
    </div>
  );
}
