# DefaultProps

# Default props

You can define default props for every Mantine component by setting `theme.components`.
These props will be used by default by all components of your application unless they are overridden by component props:

#### Example: defaultProps

```tsx
import { MantineProvider, Button, Group, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button>Default button</Button>
        <Button color="red" variant="filled">
          Button with props
        </Button>
      </Group>
    </MantineProvider>
  );
}
```


## Default props with MantineThemeProvider

You can also use `MantineThemeProvider` to define default props
for a part of your application:

```tsx
import {
  Button,
  createTheme,
  MantineThemeProvider,
} from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'outline',
      },
    }),
  },
});

function Demo() {
  return (
    <>
      <MantineThemeProvider theme={theme}>
        {/* Part of the app with theme */}
      </MantineThemeProvider>

      {/* Another part without theme */}
    </>
  );
}
```

## Default props for compound components

Some components like [Menu](https://mantine.dev/core/menu/) and [Tabs](https://mantine.dev/core/tabs/) have associated compound components:
`Menu.Item`, `Tabs.List`, etc.. You can add default props to these components by omitting the dot from component name:

```tsx
import {
  createTheme,
  MantineProvider,
  Menu,
  Tabs,
} from '@mantine/core';

const theme = createTheme({
  components: {
    MenuItem: Menu.Item.extend({
      defaultProps: { color: 'red' },
    }),

    TabsList: Tabs.List.extend({
      defaultProps: {
        justify: 'center',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## useProps hook

You can use `useProps` hook to add default props support to any custom component.
`useProps` accepts three arguments:

* component name (string) – it is used to connect component with theme
* `defaultProps` – default props on component level – these props are used when default props are not defined on theme
* `props` – props passed to component

#### Example: usePropsHook

```tsx
import { useProps, MantineThemeProvider, createTheme } from '@mantine/core';

interface CustomComponentProps {
  color?: string;
  children?: React.ReactNode;
}

const defaultProps = {
  color: 'red',
} satisfies Partial<CustomComponentProps>;

function CustomComponent(props: CustomComponentProps) {
  const { color, children } = useProps('CustomComponent', defaultProps, props);
  return <div style={{ color }}>{children}</div>;
}

const theme = createTheme({
  components: {
    CustomComponent: {
      defaultProps: {
        color: 'green',
      },
    },
  },
});

function Demo() {
  return (
    <div>
      <CustomComponent>Default color</CustomComponent>

      <MantineThemeProvider theme={theme}>
        <CustomComponent>Provider color</CustomComponent>
        <CustomComponent color="blue">Prop color</CustomComponent>
      </MantineThemeProvider>
    </div>
  );
}
```


## withProps function

All Mantine components have `withProps` static function that can be used to
add default props to the component:

```tsx
import { IMaskInput } from 'react-imask';
import { Button, InputBase } from '@mantine/core';

const LinkButton = Button.withProps({
  component: 'a',
  target: '_blank',
  rel: 'noreferrer',
  variant: 'subtle',
});

const PhoneInput = InputBase.withProps({
  mask: '+7 (000) 000-0000',
  component: IMaskInput,
  label: 'Your phone number',
  placeholder: 'Your phone number',
});

function Demo() {
  return (
    <>
      {/* You can pass additional props to components created with `withProps` */}
      <LinkButton href="https://mantine.dev">
        Mantine website
      </LinkButton>

      {/* Component props override default props defined in `withProps` */}
      <PhoneInput placeholder="Personal phone" />
    </>
  );
}
```
