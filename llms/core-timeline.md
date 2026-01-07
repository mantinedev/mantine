# Timeline
Package: @mantine/core
Import: import { Timeline } from '@mantine/core';
Description: Display list of events in chronological order

## Usage

#### Example: usage

```tsx
import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
        <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
        <Text size="xs" mt={4}>2 hours ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
        <Text size="xs" mt={4}>52 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Pull request" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
        <Text size="xs" mt={4}>34 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
        <Text size="xs" mt={4}>12 minutes ago</Text>
      </Timeline.Item>
    </Timeline>
  );
}
```


## Line and bullet props

Control timeline appearance with the following props:

* `active` – index of current active element, all elements before this index will be highlighted with `color`
* `color` – color from theme that should be used to highlight active items, defaults to `theme.primaryColor`
* `lineWidth` – controls line width and bullet border
* `bulletSize` – bullet width, height and border-radius
* `align` – defines line and bullets position relative to content, also sets text-align

#### Example: configurator

```tsx
import { Timeline } from '@mantine/core';

function Demo() {
  return (
    <Timeline>
      {/* items */}
    </Timeline>
  );
}
```


## Bullet as React node

#### Example: bullet

```tsx
import { ThemeIcon, Text, Avatar, Timeline } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline bulletSize={24}>
      <Timeline.Item title="Default bullet">
        <Text c="dimmed" size="sm">
          Default bullet without anything
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="Avatar"
        bullet={
          <Avatar
            size={22}
            radius="xl"
            src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          />
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as avatar image
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Icon" bullet={<IconSun size={13} />}>
        <Text c="dimmed" size="sm">
          Timeline bullet as icon
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="ThemeIcon"
        bullet={
          <ThemeIcon
            size={22}
            variant="gradient"
            gradient={{ from: 'lime', to: 'cyan' }}
            radius="xl"
          >
            <IconVideo size={13} />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as ThemeIcon component
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
```


## Wrap Timeline.Item

`Timeline` component relies on `Timeline.Item` order. Wrapping `Timeline.Item` is not supported,
Instead you will need to use different approaches:

```tsx
import { Timeline } from '@mantine/core';

// This will not work, step children will not render
function WillNotWork() {
  return <Timeline.Item title="Nope">It will not work</Timeline.Item>;
}

// Create a separate component for children
function WillWork() {
  return <div>This will work as expected!</div>;
}

function Demo() {
  return (
    <Timeline active={1}>
      <Timeline.Item title="Regular item">First item</Timeline.Item>
      <WillNotWork />
      <Timeline.Item title="Works as expected">
        <WillWork />
      </Timeline.Item>
      <Timeline.Item title="Regular item">Third item</Timeline.Item>
    </Timeline>
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | number | - | Index of the active element |
| align | "left" | "right" | - | Position of content relative to the bullet |
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| bulletSize | string | number | - | Size of the bullet |
| children | React.ReactNode | - | <code>Timeline.Item</code> components |
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color to control active item colors |
| lineWidth | string | number | - | Control width of the line |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| reverseActive | boolean | - | If set, the active items direction is reversed without reversing items order |


#### Styles API

Timeline component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Timeline selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Timeline-root | Root element |
| item | .mantine-Timeline-item | Item root element |
| itemBody | .mantine-Timeline-itemBody | Item body, wraps title and content |
| itemTitle | .mantine-Timeline-itemTitle | Item title, controlled by title prop |
| itemContent | .mantine-Timeline-itemContent | Item content, controlled by children prop |
| itemBullet | .mantine-Timeline-itemBullet | Item bullet |

**Timeline CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --tl-bullet-size | Controls bullet `width` and `height` |
| root | --tl-color | Controls active bullet and line colors |
| root | --tl-icon-color | Controls icon color |
| root | --tl-line-width | Controls width of the line between bullets |
| root | --tl-radius | Controls bullet `border-radius` |