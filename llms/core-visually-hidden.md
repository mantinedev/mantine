# VisuallyHidden
Package: @mantine/core
Import: import { VisuallyHidden } from '@mantine/core';
Description: Hide element visually but keep it accessible for screen readers

## Usage

`VisuallyHidden` is a utility component that hides content visually but leaves it available to screen readers.

For example, it can be used with [ActionIcon](https://mantine.dev/llms/core-action-icon.md) component:

```tsx
import { HeartIcon } from '@phosphor-icons/react';
import { ActionIcon, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <ActionIcon>
      <HeartIcon />
      <VisuallyHidden>Like post</VisuallyHidden>
    </ActionIcon>
  );
}
```


#### Props

**VisuallyHidden props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|