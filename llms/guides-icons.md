# Icons

# Icon libraries with Mantine

You can use any icon library with Mantine components. The most popular options are:

* [Phosphor icons](https://phosphoricons.com/)
* [Tabler icons](https://tabler-icons.io/)
* [Feather icons](https://feathericons.com/)
* [Radix icons](https://icons.radix-ui.com/)
* [react-icons](https://react-icons.github.io/react-icons/)
* [Font Awesome](https://fontawesome.com/v5/docs/web/use-with/react)

## Phosphor icons

[Phosphor icons](https://phosphoricons.com/) are used in Mantine demos, documentation,
and some `@mantine/` packages depend on them. If you don't know which icon library
to use, we recommend [Phosphor icons](https://phosphoricons.com/).

## Icon size

Most icon libraries support a `size` prop (or similar `width` and `height` props) that allows you to change the
icon width and height. Usually, it's a number in pixels.

```tsx
import { AtomIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <AtomIcon
      size={80}
      color="var(--mantine-color-blue-filled)"
    />
  );
}
```


> **rem units in size prop**
>
> The icon `size` prop is usually converted to `width` and `height` props under the hood.
> If you set `size={16}` it will be converted to `width="16"` and `height="16"` attributes
> on the svg element.
>
> You can use rem units in the `size` prop: `size="1rem"` will be converted to `width="1rem"` and `height="1rem"`,
> but it's not recommended as it's prohibited by the SVG standard – some browsers (Firefox) will show a warning in the console.

## Custom icons

We recommend using icons as React components. In this case, you'll be able to use
`currentColor` in the `fill` and `stroke` props. This will change the icon color based on the context
it's used in.

```tsx
// AddressBookIcon.tsx
interface AddressBookIconProps extends React.ComponentProps<'svg'> {
  size?: number | string;
}

export function AddressBookIcon({ size, style, ...others }: AddressBookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M20 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zM10 16h6" />
      <path d="M11 11a2 2 0 104 0 2 2 0 10-4 0M4 8h3M4 12h3M4 16h3" />
    </svg>
  );
}

// Demo.tsx
import { Button } from '@mantine/core';
import { AddressBookIcon } from './AddressBookIcon';

function Demo() {
  return <Button leftSection={<AddressBookIcon size={18} />}>Demo</Button>;
}
```

