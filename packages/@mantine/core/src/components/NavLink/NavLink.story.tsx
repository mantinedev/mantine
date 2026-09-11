import {
  CaretRightIcon,
  ChatCircleIcon,
  FolderIcon,
  GaugeIcon,
  GearIcon,
  HouseIcon,
  UsersIcon,
} from '@phosphor-icons/react';
import { useCounter } from '@mantine/hooks';
import { Button } from '../Button';
import { Text } from '../Text';
import { NavLink, NavLinkProps } from './NavLink';

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
      <Button onClick={decrement}>Remove item</Button>
    </div>
  );
}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const iconSizes = { xs: 14, sm: 16, md: 18, lg: 20, xl: 22 };

function Sidebar(props: Partial<NavLinkProps>) {
  const icon = iconSizes[(props.size as keyof typeof iconSizes) || 'sm'] || 16;
  return (
    <>
      <NavLink
        label="Dashboard"
        leftSection={<GaugeIcon size={icon} />}
        rightSection={
          <Text size="xs" opacity={0.6}>
            12
          </Text>
        }
        {...props}
      />
      <NavLink label="Projects" leftSection={<FolderIcon size={icon} />} defaultOpened {...props}>
        <NavLink label="Website" active {...props} />
        <NavLink label="Mobile app" {...props} />
        <NavLink label="Design system" defaultOpened {...props}>
          <NavLink label="Tokens" {...props} />
          <NavLink label="Components" {...props} />
        </NavLink>
      </NavLink>
      <NavLink label="Team" leftSection={<UsersIcon size={icon} />} {...props}>
        <NavLink label="Members" {...props} />
      </NavLink>
      <NavLink
        label="Messages"
        description="3 unread"
        leftSection={<ChatCircleIcon size={icon} />}
        {...props}
      />
      <NavLink label="Settings" leftSection={<GearIcon size={icon} />} disabled {...props} />
    </>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40, alignItems: 'flex-start' }}>
      {sizes.map((size) => (
        <div key={size} style={{ width: 200 + sizes.indexOf(size) * 30 }}>
          <Sidebar size={size} />
        </div>
      ))}
    </div>
  );
}

export function RailVariant() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40, alignItems: 'flex-start' }}>
      <div style={{ width: 240 }}>
        <Sidebar variant="rail" withGuideline />
      </div>
      <div style={{ width: 240 }}>
        <Sidebar variant="rail" color="red" />
      </div>
      <div style={{ width: 240 }}>
        <NavLink label="Dashboard" leftSection={<GaugeIcon size={16} />} variant="rail" />
        <NavLink
          label="Projects"
          description="Active with description"
          leftSection={<FolderIcon size={16} />}
          variant="rail"
          active
        />
        <NavLink label="Team" leftSection={<UsersIcon size={16} />} variant="rail" />
      </div>
    </div>
  );
}

export function WithGuideline() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40, alignItems: 'flex-start' }}>
      <div style={{ width: 240 }}>
        <Sidebar withGuideline />
      </div>
      <div style={{ width: 240 }}>
        <Sidebar withGuideline radius={0} />
      </div>
      <div style={{ width: 240 }}>
        <Sidebar withGuideline childrenOffset="lg" />
      </div>
    </div>
  );
}
