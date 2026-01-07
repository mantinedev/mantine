# Tiptap3Migration

# Migration guide Tiptap 2 → Tiptap 3

This guide will help you update [TipTap](https://tiptap.dev/docs) from version 2 to version 3.

## shouldRerenderOnTransaction

Set `shouldRerenderOnTransaction: true` in `useEditor`. It is required to have active control
highlight.

```tsx
const editor = useEditor({
  shouldRerenderOnTransaction: true,
  // ... other options
});
```

## immediatelyRender

Set `immediatelyRender: false` if you use Next.js or other framework with server-side rendering.
It is required to prevent hydration mismatches.

```tsx
const editor = useEditor({
  immediatelyRender: false,
  // ... other options
});
```

## StarterKit changes

`StarterKit` now includes underline and link extensions out of the box:

* You no longer need to add underline extension manually
* You must disable the default link extension to use extension provided by Mantine

```tsx
// With tiptap 2.x – ❌ no longer works with tiptap 3.x
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import { Link } from '@mantine/tiptap';

const editor = useEditor({
  extensions: [StarterKit, Underline, Link],
});

// With tiptap 3x – ✅ new usage example
import StarterKit from '@tiptap/starter-kit';
import { Link } from '@mantine/tiptap';

const editor = useEditor({
  // Remove underline and link extensions
  extensions: [StarterKit.configure({ link: false }), Link],
});
```

## Import paths

Change import paths for floating and bubble menu components:

```tsx
// With tiptap 2.x – ❌ no longer works with tiptap 3.x
import { BubbleMenu, FloatingMenu } from '@tiptap/react';

// With tiptap 3.x – ✅ new usage example
import { BubbleMenu, FloatingMenu } from '@tiptap/react/menus';
```
