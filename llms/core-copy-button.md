# CopyButton
Package: @mantine/core
Import: import { CopyButton } from '@mantine/core';
Description: Copies given text to clipboard

## Usage

`CopyButton` is based on the [use-clipboard](https://mantine.dev/llms/hooks-use-clipboard.md) hook.
Its children is a function that receives an object with the following properties:

* `copied` – boolean value that indicates that a given value was recently copied to the clipboard, it resets after a given timeout (defaults to 500ms)
* `copy` – function that should be called to copy the given value to the clipboard

```tsx
import { CopyButton, Button } from '@mantine/core';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
```


## Security

Due to security reasons, the `CopyButton` component will not work in iframes and may not work with local files opened with the `file://` protocol
(the component will work fine with local websites that are using the `http://` protocol). You can learn more about `navigator.clipboard` [here](https://web.dev/async-clipboard/).

## Timeout

You can provide a custom `copied` reset `timeout`:

```tsx
import { ActionIcon, CopyButton, Tooltip } from '@mantine/core';
import { CopyIcon, CheckIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}
```


## Server components

CopyButton is not compatible with React Server Components as it uses useEffect and other client-side features. You can use it in client components only.


#### Props

**CopyButton props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | (payload: { copied: boolean; copy: () => void; }) => ReactNode | required | Children callback, provides current status and copy function as an argument |
| timeout | number | - | Copied status timeout in ms |
| value | string | required | Value that is copied to the clipboard when the button is clicked |