# Why are my Carousel slides in vertical orientation?
You forgot to import carousel styles

## Carousel component looks broken

If your [Carousel](https://mantine.dev/x/carousel/) component renders slides in vertical orientation
or has incorrect controls/indicators positioning, you forgot to import carousel styles.
Follow the [@mantine/carousel](https://mantine.dev/x/carousel/#installation) installation
instructions to fix the issue. Import `@mantine/core` and `@mantine/carousel` styles at
the root of your application:

```tsx
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
```

## That's it! It works now!

Nice! 👍
