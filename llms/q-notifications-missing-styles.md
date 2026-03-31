# Why are my notifications displayed at the wrong position?
Because you did not import styles

If your notifications have incorrect position on the screen and look like this:

<Image src={image.src} maw={800} />

It means that you did not import styles for the `@mantine/notifications` package as
described in the [installation](https://mantine.dev/x/notifications/#installation)
instructions.

Add the styles import to your application:

```bash
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
```
