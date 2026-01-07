# NavLink
Package: @mantine/core
Import: import { NavLink } from '@mantine/core';
Description: Navigation link

## Usage

#### Example: usage

```tsx
import { Badge, NavLink } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="With icon"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
      />
      <NavLink
        href="#required-for-focus"
        label="With right section"
        leftSection={<IconGauge size={16} stroke={1.5} />}
        rightSection={
          <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
        }
      />
      <NavLink
        href="#required-for-focus"
        label="Disabled"
        leftSection={<IconCircleOff size={16} stroke={1.5} />}
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
        leftSection={<IconActivity size={16} stroke={1.5} />}
        rightSection={
          <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
        }
        variant="subtle"
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active light"
        leftSection={<IconActivity size={16} stroke={1.5} />}
        rightSection={
          <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
        }
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active filled"
        leftSection={<IconActivity size={16} stroke={1.5} />}
        rightSection={
          <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
        }
        variant="filled"
        active
      />
    </>
  );
}
```


## Active

Set `active` prop to add active styles to `NavLink`.

Note that if you're using a React Router `NavLink` inside `renderRoot`, the active styles will be based on the
[`aria-current` attribute that's set by React Router](https://reactrouter.com/en/main/components/nav-link#aria-current)
so you won't need to explicitly set the `active` prop.

You can customize active styles with `color` and `variant` props:

#### Example: active

```tsx
import { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
  {
    icon: IconFingerprint,
    label: 'Security',
    rightSection: <IconChevronRight size={16} stroke={1.5} />,
  },
  { icon: IconActivity, label: 'Activity' },
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
      leftSection={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
      
    />
  ));

  return <Box w={220}>{items}</Box>;
}
```


<AutoContrast component="NavLink" />

## autoContrast

NavLink supports autoContrast prop and [theme.autoContrast](https://mantine.dev/theming/theme-object/#autocontrast). If autoContrast is set either on NavLink or on theme, content color will be adjusted to have sufficient contrast with the value specified in color prop.

Note that autoContrast feature works only if you use color prop to change background color. autoContrast works only with filled variant.

#### Example: autoContrast

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

To create nested links put `NavLink` as children of another `NavLink`:

#### Example: nested

```tsx
import { NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="First parent link"
        leftSection={<IconGauge size={16} stroke={1.5} />}
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
        leftSection={<IconFingerprint size={16} stroke={1.5} />}
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


<Polymorphic defaultElement="a" changeToElement="button" component="NavLink" withNext />

## Polymorphic component

NavLink is a polymorphic component – its default root element is a, but it can be changed to any other element or component with component prop:

```tsx
import { NavLink } from '@mantine/core';

function Demo() {
  return <NavLink component="button" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { NavLink } from '@mantine/core';

function Demo() {
  return <NavLink component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, NavLinkProps does not extend React.ComponentPropsWithoutRef<'a'> although a is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

<GetElementRef component="NavLink" refType="a" />

## Get element ref

```tsx
import { useRef } from 'react';
import { NavLink } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLAnchorElement>(null);
  return <NavLink ref={ref} />;
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | boolean | - | Determines whether the link should have active styles |
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| children | React.ReactNode | - | Child <code>NavLink</code> components |
| childrenOffset | MantineSpacing | - | Key of <code>theme.spacing</code> or any valid CSS value to set collapsed links <code>padding-left</code> |
| color | MantineColor | - | Key of <code>theme.colors</code> of any valid CSS color to control active styles |
| defaultOpened | boolean | - | Uncontrolled nested items collapse initial state |
| description | React.ReactNode | - | Link description, displayed below the label |
| disableRightSectionRotation | boolean | - | If set, right section will not be rotated when collapse is opened |
| disabled | boolean | - | If set, disabled styles will be added to the root element |
| label | React.ReactNode | - | Main link label |
| leftSection | React.ReactNode | - | Section displayed on the left side of the label |
| noWrap | boolean | - | If set, label and description do not wrap to the next line |
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
| root | data-active | - | - |