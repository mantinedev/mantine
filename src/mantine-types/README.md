# Mantine types

This package is not published to npm. It includes types that are used in other packages.

## Tuple

Tuple type is used in @mantine/theme package to generate types for color values.

```tsx
import { Tuple } from '@mantine/types';

type tupleOf3 = Tuple<string, 4>; // -> [string, string, string, string]
```

## DeepPartial

DeepPartial is used in @mantine/theme package to generate deep partial of MantineTheme type which is then used to override theme in MantineProvider and use-mantine-theme hook.

```tsx
import { MantineTheme } from '@mantine/theme';
import { DeepPartial } from '@mantine/types';

// all properties in PartialTheme type are optional
type PartialTheme = DeepPartial<MantineTheme>;
```

## ComponentPassThrough

ComponentPassThrough is used to generate types for components which require changing root element. It is used in @mantine/core and other packages that export components.

```tsx
interface Props {
  color: string;
}

function Pass<T extends React.ElementType = 'div'>({
  component: Element,
  color,
  ...others
}: ComponentPassThrough<T, TextProps>) {
  return <Element color={color} {...others} />;
}
```
