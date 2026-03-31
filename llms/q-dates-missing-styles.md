# Why do my dates components look broken?
Because you did not import styles

If your dates components look like this:

<Image src={image.src} maw={400} />

It means that you did not import styles for the `@mantine/dates` package as
described in the [installation](https://mantine.dev/dates/getting-started/#installation)
instructions.

Add the styles import to your application:

```bash
import '@mantine/dates/styles.css';
```
