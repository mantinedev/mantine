# Avatar
Package: @mantine/core
Import: import { Avatar } from '@mantine/core';
Description: Display user profile image, initials or fallback icon

## Usage

#### Example: usage

```tsx
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <IconStar size={20} />
      </Avatar>
    </>
  );
}
```


## Initials

To display initials instead of the default placeholder, set `name` prop
to the name of the person, for example, `name="John Doe"`. If the name
is set, you can use `color="initials"` to generate color based on the name:

#### Example: initials

```tsx
import { Avatar, Group } from '@mantine/core';

${namesCode}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
```


## Allowed initials colors

By default, all colors from the default theme are allowed for initials, you can restrict them
by providing `allowedInitialsColors` prop with an array of colors. Note that the default colors
array does not include custom colors defined in the theme, you need to provide them manually
if needed.

#### Example: allowedColors

```tsx
import { Avatar, Group } from '@mantine/core';

${namesCode}

function Demo() {
  const avatars = names.map((name) => (
    <Avatar key={name} name={name} color="initials" allowedInitialsColors={['blue', 'red']} />
  ));
  return <Group>{avatars}</Group>;
}
```


## Placeholder

If the image cannot be loaded or not provided, `Avatar` will display a placeholder instead. By default,
placeholder is an icon, but it can be changed to any React node:

#### Example: placeholders

```tsx
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <IconStar size={20} />
      </Avatar>
    </>
  );
}
```


## Variants

#### Example: configurator

```tsx
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar />;
}
```


## Avatar.Group

`Avatar.Group` component combines multiple avatars into a stack:

#### Example: group

```tsx
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar.Group>
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>
  );
}
```


Note that you must not wrap child `Avatar` components with any additional elements,
but you can use wrap `Avatar` with components that do not render any HTML elements
in the current tree, for example [Tooltip](https://mantine.dev/core/tooltip).

```tsx
import { Avatar } from '@mantine/core';

// Will not work correctly
function Demo() {
  return (
    <Avatar.Group spacing="sm">
      <div>
        <Avatar src="image.png" radius="xl" />
      </div>
      <Avatar src="image.png" radius="xl" />
      <Avatar src="image.png" radius="xl" />
      <Avatar radius="xl">+5</Avatar>
    </Avatar.Group>
  );
}
```

Example of usage with [Tooltip](https://mantine.dev/core/tooltip/):

#### Example: groupTooltip

```tsx
import { Avatar, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}
```


<Polymorphic defaultElement="div" changeToElement="button" component="Avatar" withNext />

## Polymorphic component

Avatar is a polymorphic component – its default root element is div, but it can be changed to any other element or component with component prop:

```tsx
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar component="button" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, AvatarProps does not extend React.ComponentPropsWithoutRef<'div'> although div is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

Example using `Avatar` as a link:

#### Example: link

```tsx
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar
      component="a"
      href="https://github.com/rtivital"
      target="_blank"
      src="avatar.png"
      alt="it's me"
    />
  );
}
```


## Accessibility

Avatar renders `<img />` HTML element. Set `alt` prop to describe image,
it is also used as `title` attribute for avatar placeholder when the image cannot be loaded.

```tsx
import { Avatar } from '@mantine/core';

function NotOk() {
  // ❌ No alt for image
  return <Avatar src="./image.png" />;
}

function Ok() {
  // ✅ alt is set
  return <Avatar src="./image.png" alt="Rob Johnson" />;
}

function Ehh() {
  // ✅ title is not required, but still recommended
  return <Avatar>RJ</Avatar>;
}

function OkPlaceholder() {
  // ✅ title is set on placeholder
  return <Avatar alt="Rob Johnson">RJ</Avatar>;
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowedInitialsColors | DefaultMantineColor[] | - | A list of colors that is used for autogenerated initials. By default, all default Mantine colors can be used except gray and dark. |
| alt | string | - | Image <code>alt</code> attribute, also used as <code>title</code> attribute for placeholder |
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| children | React.ReactNode | - | Avatar placeholder, displayed when <code>src={null}</code> or when the image cannot be loaded |
| color | DefaultMantineColor | "initials" | - | Key of <code>theme.colors</code> or any valid CSS color |
| gradient | MantineGradient | - | Gradient configuration for <code>variant="gradient"</code> |
| imageProps | React.ComponentPropsWithoutRef<"img"> | - | Attributes passed down to <code>img</code> element |
| name | string | - | Name of the user. When <code>src</code> is not set, used to display initials and to generate color when <code>color="initials"</code> is set. |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius |
| size | number | MantineSize | (string & {}) | - | Width and height of the avatar, numbers are converted to rem |
| src | string | null | - | Image url, if the image cannot be loaded or <code>src={null}</code>, then placeholder is displayed instead |


#### Styles API

Avatar component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Avatar selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Avatar-root | Root element |
| image | .mantine-Avatar-image | `img` element |
| placeholder | .mantine-Avatar-placeholder | Avatar placeholder, displayed when the image cannot be loaded |

**Avatar CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --avatar-bd | Controls placeholder `border` |
| root | --avatar-bg | Controls placeholder `background` |
| root | --avatar-color | Controls placeholder text `color` |
| root | --avatar-size | Controls `width`, `min-width` and `height` |
| root | --avatar-radius | Controls `border-radius` |

**Avatar.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| group | .mantine-AvatarGroup-group | Root element |

**Avatar.Group CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| group | --ag-spacing | Controls negative spacing between avatars |