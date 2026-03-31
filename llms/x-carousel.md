# Carousel
Package: @mantine/carousel
Import: import { Carousel } from '@mantine/carousel';
Description: Embla based carousel component

## Installation

```bash
yarn add embla-carousel@^8.5.2 embla-carousel-react@^8.5.2 @mantine/carousel
```

```bash
npm install embla-carousel@^8.5.2 embla-carousel-react@^8.5.2 @mantine/carousel
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import carousel styles after core package styles
import '@mantine/carousel/styles.css';
```

## Do not forget to import styles

Have you followed the installation instructions above but something is not working
(Carousel slides are rendered vertically, no controls or indicators)?
You've fallen into the trap of not importing carousel styles!
To fix the issue, import carousel styles at the root of your application:

```tsx
import '@mantine/carousel/styles.css';
```

## Documentation demos

The demos presented on this page use blue background color for demonstration purposes. To simplify
demo code, background color and other demo-only styles are not included in the demo code.
When you copy and paste demo code to your project, it will not have blue background color.

## Usage

`@mantine/carousel` package is based on [embla carousel](https://www.embla-carousel.com/):

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```


## Options

```tsx
import { Carousel } from '@mantine/carousel';


function Demo() {
  return (
    <Carousel
      slideSize="70%"
      height={200}
       orientation="horizontal" slideGap="md" controlsOffset="sm" controlSize={26} withControls={true} withIndicators={false}
    >
      {/* ...slides */}
    </Carousel>
  );
}
```


## Embla options

You can pass configuration options directly to embla carousel with the `emblaOptions` prop.
You can find embla options description in the [embla options reference](https://www.embla-carousel.com/api/options/).

Example of passing `loop`, `dragFree` and `align` options:

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      slideSize="70%"
      height={200}
      emblaOptions={{
        loop: true,
        dragFree: false,
        align: 'center'
      }}
    >
      {/* ...slides */}
    </Carousel>
  );
}
```


## Size and gap

Set `slideSize` and `slideGap` on the `Carousel` component to control the size and gap of every slide:

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      emblaOptions={{ loop: true, align: 'start', slidesToScroll: 3 }}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```


## Responsive styles

`slideSize` and `slideGap` props work the same way as [style props](https://mantine.dev/llms/styles-style-props.md),
you can pass an object with values for different breakpoints:

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      emblaOptions={{ loop: true, align: 'start' }}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```


## Container queries

To use [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
instead of media queries, set `type="container"`. With container queries, slide size and gap
will be adjusted based on the container width, not the viewport width.

Note that when using container queries, `slideSize` and `slideGap` props cannot
reference `theme.breakpoints` values in keys. You are required to use exact px or em values.

To see how the slide size and gap changes, resize the root element of the demo
with the resize handle located at the bottom right corner of the demo:

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // It is not required in real projects
    <div
      style={{
        resize: 'horizontal',
        overflow: 'hidden',
        maxWidth: '100%',
        minWidth: 250,
        padding: 10,
      }}
    >
      <Carousel
        withIndicators
        height={200}
        type="container"
        slideSize={{ base: '100%', '300px': '50%', '500px': '33.333333%' }}
        slideGap={{ base: 0, '300px': 'md', '500px': 'lg' }}
        emblaOptions={{ loop: true, align: 'start' }}
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </div>
  );
}
```


## Drag free

`dragFree` will disable slide snap points – users will be able to stop dragging at any position:

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      emblaOptions={{ dragFree: true, align: 'start' }}
      slideGap="md"
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```


## Vertical orientation

A carousel with `orientation="vertical"` requires the `height` prop to be set:

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel orientation="vertical" height={200} withIndicators>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```


## Controls icons

You can replace default next/previous controls icons with any React nodes:

```tsx
import { Carousel } from '@mantine/carousel';
import { ArrowRightIcon, ArrowLeftIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Carousel
      height={180}
      nextControlIcon={<ArrowRightIcon size={16} />}
      previousControlIcon={<ArrowLeftIcon size={16} />}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```


## 100% height

Set `height="100%"` to make the Carousel take 100% height of the container. Note that in this case:

* the container element must have `display: flex` styles
* the carousel root element must have `flex: 1` styles
* the container element must have fixed height

```tsx
import { Carousel } from '@mantine/carousel';

export function PercentageHeight() {
  return (
    <div style={{ height: 400, display: 'flex' }}>
      <Carousel withIndicators height="100%" flex={1}>
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
      </Carousel>
    </div>
  );
}
```

## Get embla instance

You can get the [embla instance](https://www.embla-carousel.com/api/methods/) with the `getEmblaApi` prop.
You will be able to enhance the carousel with additional logic after that using embla api methods:

```tsx
import { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { Carousel } from '@mantine/carousel';
import { Progress } from '@mantine/core';

function Demo() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) {
      return;
    }
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        emblaOptions={{ dragFree: true }}
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Slides count={12} />
      </Carousel>
      <Progress value={scrollProgress} maw={320} size="sm" mt="xl" mx="auto" />
    </>
  );
}
```


## Indicator styles

```tsx
// Demo.tsx
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel withIndicators height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

// Demo.module.css
.indicator {
  width: 12px;
  height: 4px;
  transition: width 250ms ease;

  &[data-active] {
    width: 40px;
  }
}
```


## Hide inactive controls

```tsx
// Demo.tsx
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

// Demo.module.css
.control {
  &[data-inactive] {
    opacity: 0;
    cursor: default;
  }
}
```


## Show controls on hover

```tsx
// Demo.tsx
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

// Demo.module.css
.controls {
  transition: opacity 150ms ease;
  opacity: 0;
}

.root {
  &:hover {
    .controls {
      opacity: 1;
    }
  }
}
```


## Example: Images carousel

```tsx
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel withIndicators height={200}>
      {slides}
    </Carousel>
  );
}
```


## Example: Cards carousel

```tsx
// Demo.tsx
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

function Demo() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }}
      emblaOptions={{ align: 'start', slidesToScroll: mobile ? 1 : 2 }}
    >
      {slides}
    </Carousel>
  );
}

// Demo.module.css
.card {
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
}

.title {
  font-weight: 900;
  color: var(--mantine-color-white);
  line-height: 1.2;
  font-size: 32px;
  margin-top: var(--mantine-spacing-xs);
  cursor: default;
}

.category {
  color: var(--mantine-color-white);
  opacity: 0.7;
  font-weight: 700;
  text-transform: uppercase;
  cursor: default;
}
```


## Accessibility

Set `aria-label` or `aria-labelledby` on the `Carousel` component to make it accessible for screen readers:

```tsx
import { Carousel } from '@mantine/carousel';

export function AccessibleCarousel() {
  return (
    <Carousel aria-label="Gallery of nature pictures">
      <Carousel.Slide>...</Carousel.Slide>
      <Carousel.Slide>...</Carousel.Slide>
      <Carousel.Slide>...</Carousel.Slide>
    </Carousel>
  );
}
```

Set `aria-label` for next/previous controls with `nextControlProps` and `previousControlProps` props:

```tsx
import { Carousel } from '@mantine/carousel';

export function AccessibleControlsCarousel() {
  return (
    <Carousel
      aria-label="Gallery of nature pictures"
      nextControlProps={{ 'aria-label': 'Next slide' }}
      previousControlProps={{ 'aria-label': 'Previous slide' }}
    >
      <Carousel.Slide>...</Carousel.Slide>
      <Carousel.Slide>...</Carousel.Slide>
      <Carousel.Slide>...</Carousel.Slide>
    </Carousel>
  );
}
```


#### Props

**Carousel props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | `Carousel.Slide` components |
| controlSize | React.CSSProperties["width"] | - | Controls size of the next and previous controls |
| controlsOffset | MantineSpacing | - | Controls position of the next and previous controls, key of `theme.spacing` or any valid CSS value |
| emblaOptions | Partial<OptionsType> | - | Options passed down to embla carousel |
| getEmblaApi | (embla: EmblaCarouselType) => void | - | Get embla API as ref |
| getIndicatorProps | (index: number) => ElementProps<"button"> & DataAttributes | - | Function to get props for indicator button |
| height | Height<string \| number> | - | Slides container `height`, required for vertical orientation |
| includeGapInSize | boolean | - | Determines whether gap between slides should be treated as part of the slide size |
| initialSlide | number | - | Index of initial slide |
| nextControlIcon | React.ReactNode | - | Icon of the next control |
| nextControlProps | React.ComponentProps<"button"> | - | Props passed down to next control |
| onNextSlide | () => void | - | Called when next slide is shown |
| onPreviousSlide | () => void | - | Called when previous slider is shown |
| onSlideChange | (index: number) => void | - | Called with slide index when slide changes |
| orientation | "horizontal" \| "vertical" | - | Carousel orientation |
| plugins | CreatePluginType<LoosePluginType, {}>[] | - | A list of embla plugins |
| previousControlIcon | React.ReactNode | - | Icon of the previous control |
| previousControlProps | React.ComponentProps<"button"> | - | Props passed down to previous control |
| slideGap | StyleProp<MantineSpacing> | - | Key of theme.spacing or number to set gap between slides |
| slideSize | StyleProp<string \| number> | - | Controls slide width based on viewport width |
| type | "media" \| "container" | - | Determines type of queries used for responsive styles |
| withControls | boolean | - | Determines whether next/previous controls should be displayed |
| withIndicators | boolean | - | Determines whether indicators should be displayed |
| withKeyboardEvents | boolean | - | Determines whether arrow key should switch slides |


#### Styles API

Carousel component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Carousel selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Carousel-root | Root element |
| slide | .mantine-Carousel-slide | `Carousel.Slide` root element |
| container | .mantine-Carousel-container | Slides container |
| viewport | .mantine-Carousel-viewport | Main element, contains slides container and all controls |
| controls | .mantine-Carousel-controls | Next/previous controls container |
| control | .mantine-Carousel-control | Next/previous control |
| indicators | .mantine-Carousel-indicators | Indicators container |
| indicator | .mantine-Carousel-indicator | Indicator button |

**Carousel CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --carousel-control-size | Controls `width` and `height` of the next/previous buttons |
| root | --carousel-controls-offset | Controls offsets of the next/previous buttons |
| root | --carousel-height | Controls height of the carousel |

**Carousel data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-orientation | - | Value of `orientation` prop |
| root | data-include-gap-in-size | `includeGapInSize` prop is set | - |
| control | data-inactive | No previous/next slides are available | - |
| indicator | data-active | Associated slide is active | - |
