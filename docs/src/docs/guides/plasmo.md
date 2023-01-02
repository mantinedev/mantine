---
group: 'guides'
title: Usage with Plasmo
slug: /guides/plasmo/
search: 'Get started with plasmo'
---

import { NextSteps } from '../../components/NextSteps/NextSteps.tsx';
import { PackagesInstallation } from '../../components/PackagesInstallation/PackagesInstallation.tsx';

# Usage with plasmo

## Generate new web extension

Init new extension:

```bash
pnpm create plasmo
```

<PackagesInstallation />

Change `popup.tsx` file:

```tsx
import { MantineProvider, Text } from '@mantine/core';

export default function Popup() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}

```

All set! Start development server:

```bash
pnpm run dev
```

## CSUI with custom Emotion Cache

Follow [custom emotion cache guide](/theming/emotion-cache/#server-side-rendering-with-custom-cache)
to setup a custom emotion cache to use in your CSUI. See contents.tsx in with-emotion: https://github.com/PlasmoHQ/examples/blob/main/with-emotion/content.tsx 

// TODO: Add more code here to explain CSUI for mantine?

## Next steps

<NextSteps />
