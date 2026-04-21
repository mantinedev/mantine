# useEyeDropper
Package: @mantine/hooks
Import: import { UseEyeDropper } from '@mantine/hooks';

## Usage

The `use-eye-dropper` hook provides an interface to work with [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API).
Check [browser support](https://caniuse.com/mdn-api_eyedropper) to learn which browsers support the API.

```tsx
import { useState } from 'react';
import { ActionIcon, Group, ColorSwatch, Text } from '@mantine/core';
import { CrosshairIcon } from '@phosphor-icons/react';
import { useEyeDropper } from '@mantine/hooks';

function Demo() {
  const [color, setColor] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const { supported, open } = useEyeDropper();

  const pickColor = async () => {
    try {
      const { sRGBHex } = (await open())!;
      setColor(sRGBHex);
    } catch (e) {
      setError(e as Error);
    }
  };

  if (!supported) {
    return <Text ta="center">EyeDropper API is not supported in your browser</Text>;
  }

  return (
    <Group>
      <ActionIcon variant="default" onClick={pickColor} size="xl">
        <CrosshairIcon size={28} />
      </ActionIcon>
      {color ? (
        <Group gap="xs">
          <ColorSwatch color={color} />
          <Text>Picked color: {color}</Text>
        </Group>
      ) : (
        <Text>Click the button to pick color</Text>
      )}
      {error && <Text c="red">Error: {error?.message}</Text>}
    </Group>
  );
}
```


## Definition

```tsx
interface EyeDropperOpenOptions {
  signal?: AbortSignal;
}

interface EyeDropperOpenReturnType {
  sRGBHex: string;
}

interface UseEyeDropperReturnValue {
  supported: boolean;
  open: (options?: EyeDropperOpenOptions) => Promise<EyeDropperOpenReturnType | undefined>;
}

function useEyeDropper(): UseEyeDropperReturnValue;
```

## Exported types

`EyeDropperOpenOptions`, `EyeDropperOpenReturnType` and `UseEyeDropperReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type {
  EyeDropperOpenOptions,
  EyeDropperOpenReturnType,
  UseEyeDropperReturnValue,
} from '@mantine/hooks';
```
