# NavLink
Package: @mantine/core
Import: import { NavLink } from '@mantine/core';
Description: Navigation link

## Usage

```tsx
import { Badge, NavLink } from '@mantine/core';
import { HouseIcon, GaugeIcon, CaretRightIcon, HeartbeatIcon, ProhibitIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="With icon"
        leftSection={<HouseIcon size={16} />}
      />
      <NavLink
        href="#required-for-focus"
        label="With right section"
        leftSection={<GaugeIcon size={16} />}
        rightSection={
          <CaretRightIcon size={12} className="mantine-rotate-rtl" />
        }
      />
      <NavLink
        href="#required-for-focus"
        label="Disabled"
        leftSection={<ProhibitIcon size={16} />}
        disabled
      />
      <NavLink
        href="#required-for-focus"
        label="With description"
        description="Additional information"
        leftSection={
          <Badge size="xs" color="red" circle>
            3
          </Badge>
        }
      />
      <NavLink
        href="#required-for-focus"
        label="Active subtle"
        leftSection={<HeartbeatIcon size={16} />}
        rightSection={
          <CaretRightIcon size={12} className="mantine-rotate-rtl" />
        }
        variant="subtle"
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active light"
        leftSection={<HeartbeatIcon size={16} />}
        rightSection={
          <CaretRightIcon size={12} className="mantine-rotate-rtl" />
        }
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active filled"
        leftSection={<HeartbeatIcon size={16} />}
        rightSection={
          <CaretRightIcon size={12} className="mantine-rotate-rtl" />
        }
        variant="filled"
        active
      />
    </>
  );
}
```


## Active

Set the `active` prop to add active styles to `NavLink`.

Note that if you're using a React Router `NavLink` inside `renderRoot`, the active styles will be based on the
[`aria-current` attribute that's set by React Router](https://reactrouter.com/en/main/components/nav-link#aria-current),
so you won't need to explicitly set the `active` prop.

You can customize active styles with the `color` and `variant` props:

```tsx
import { useState } from 'react';
import { GaugeIcon, FingerprintIcon, HeartbeatIcon, CaretRightIcon } from '@phosphor-icons/react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: GaugeIcon, label: 'Dashboard', description: 'Item with description' },
  {
    icon: FingerprintIcon,
    label: 'Security',
    rightSection: <CaretRightIcon size={16} />,
  },
  { icon: HeartbeatIcon, label: 'Activity' },
];

function Demo() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      href="#required-for-focus"
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      leftSection={<item.icon size={16} />}
      onClick={() => setActive(index)}
       color="blue" variant="light"
    />
  ));

  return <Box w={220}>{items}</Box>;
}
```


```tsx
import { NavLink } from '@mantine/core';

function Demo() {
  return (
    <>
      <NavLink color="lime.4" variant="filled" active label="Default" />
      <NavLink color="lime.4" variant="filled" active autoContrast label="Auto contrast" />
    </>
  );
}
```


## Nested NavLinks

To create nested links, put `NavLink` as children of another `NavLink`:

```tsx
import { NavLink } from '@mantine/core';
import { GaugeIcon, FingerprintIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="First parent link"
        leftSection={<GaugeIcon size={16} />}
        childrenOffset={28}
      >
        <NavLink href="#required-for-focus" label="First child link" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
      </NavLink>

      <NavLink
        href="#required-for-focus"
        label="Second parent link"
        leftSection={<FingerprintIcon size={16} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" href="#required-for-focus" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink>
    </>
  );
}
```



#### Props

**NavLink props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | boolean | - | Determines whether the link should have active styles |
| autoContrast | boolean | - | If set, adjusts text color based on background color for `filled` variant |
| children | React.ReactNode | - | Child `NavLink` components |
| childrenOffset | MantineSpacing | - | Controls indentation of nested NavLink components, key of `theme.spacing` or any valid CSS value |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color to control active styles |
| defaultOpened | boolean | - | Uncontrolled nested items collapse initial state |
| description | React.ReactNode | - | Link description, displayed below the label |
| disableRightSectionRotation | boolean | - | If set, right section will not be rotated when collapse is opened |
| disabled | boolean | - | If set, disabled styles will be added to the root element |
| keepMounted | boolean | - | If set to `false`, child `NavLinks` are unmounted when collapsed |
| label | React.ReactNode | - | Main link label |
| leftSection | React.ReactNode | - | Section displayed on the left side of the label |
| noWrap | boolean | - | If set, label and description are truncated with ellipsis instead of wrapping |
| onChange | (opened: boolean) => void | - | Called when open state changes |
| onClick | MouseEventHandler<HTMLElement> | - | Called when the root element is clicked |
| onKeyDown | KeyboardEventHandler<HTMLElement> | - | Called on keydown of the root element |
| opened | boolean | - | Controlled nested items collapse state |
| rightSection | React.ReactNode | - | Section displayed on the right side of the label |


#### Styles API

NavLink component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**NavLink selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-NavLink-root | Root element |
| body | .mantine-NavLink-body | Contains label and description |
| section | .mantine-NavLink-section | Left and right sections |
| label | .mantine-NavLink-label | NavLink label |
| description | .mantine-NavLink-description | Dimmed description displayed below the label |
| children | .mantine-NavLink-children | Wrapper around nested links |
| chevron | .mantine-NavLink-chevron | Default chevron icon |
| collapse | .mantine-NavLink-collapse | Nested links Collapse container |

**NavLink CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --nl-bg | Controls link `background-color` |
| root | --nl-color | Controls link `color` |
| root | --nl-hover | Controls link `background-color` when hovered |

**NavLink data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-active | `active` prop is set | - |
