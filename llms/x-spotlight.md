# Spotlight
Package: @mantine/spotlight
Import: import { Spotlight } from '@mantine/spotlight';
Description: Command center for your application

## Installation

```bash
yarn add @mantine/spotlight
```

```bash
npm install @mantine/spotlight
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import spotlight styles after core package styles
import '@mantine/spotlight/styles.css';
```

## Usage

`Spotlight` component can be used as a search or as a command center of your application.
It is used as a search on mantine.dev website, you can trigger it with `Ctrl + K` shortcut.
`Spotlight` is based on [Modal](https://mantine.dev/core/modal) component and supports most of its props.

#### Example: usage

```tsx
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconHome, IconDashboard, IconFileText, IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <IconHome size={24} stroke={1.5} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <IconDashboard size={24} stroke={1.5} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <IconFileText size={24} stroke={1.5} />,
  },
];

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```


## Actions

`@mantine/spotlight` package exports an object with actions that can be used to control the spotlight:

```tsx
import { spotlight } from '@mantine/spotlight';

spotlight.open(); // -> opens spotlight
spotlight.close(); // -> closes spotlight
spotlight.toggle(); // -> toggles spotlight opened state
```

These actions can be passed to event listeners or used anywhere in your application
(not limited to React components):

```tsx
import { Button } from '@mantine/core';
import { spotlight } from '@mantine/spotlight';

function Demo() {
  return <Button onClick={spotlight.open}>Open spotlight</Button>;
}
```

You can also import actions directly from the `@mantine/spotlight` package, if you prefer this syntax:

```tsx
import {
  closeSpotlight,
  openSpotlight,
  toggleSpotlight,
} from '@mantine/spotlight';

openSpotlight(); // same as spotlight.open()
closeSpotlight(); // same as spotlight.close()
toggleSpotlight(); // same as spotlight.toggle()
```

## Spotlight store

`spotlight` object documented above uses the default store, it works fine if you have only one spotlight
in your application. In case you need multiple spotlights, you need to create your own store for each of them:

```tsx
import { Button } from '@mantine/core';
import { createSpotlight, Spotlight } from '@mantine/spotlight';

// You can import `firstSpotlight` and `secondSpotlight` anywhere
// in your application and use `open`, `close` and `toggle` actions
// to control spotlight the same way as with default `spotlight` object
export const [firstStore, firstSpotlight] = createSpotlight();
export const [secondStore, secondSpotlight] = createSpotlight();

function Demo() {
  return (
    <>
      <Button onClick={firstSpotlight.open}>
        Open first spotlight
      </Button>
      <Button onClick={secondSpotlight.open}>
        Open second spotlight
      </Button>

      <Spotlight store={firstStore} actions={[]} />
      <Spotlight store={secondStore} actions={[]} />
    </>
  );
}
```

## Keyboard shortcuts

`Spotlight` uses [use-hotkeys](https://mantine.dev/hooks/use-hotkeys) hook to handle keyboard shortcuts.
By default, `Ctrl + K` and `Cmd + K` shortcuts are used to open spotlight, you can change them
with `shortcut` prop:

```tsx
import { Spotlight } from '@mantine/spotlight';

function SingleShortcut() {
  return <Spotlight shortcut="mod + J" actions={[]} />;
}

// Same as on mantine.dev
function MultipleShortcuts() {
  return (
    <Spotlight shortcut={['mod + K', 'mod + P', '/']} actions={[]} />
  );
}

// Disable shortcut
function NoShortcut() {
  return <Spotlight shortcut={null} actions={[]} />;
}
```

## Limit prop

Use `limit` prop to limit the maximum number of actions that can be displayed at a time.
Usually, 5–7 actions is a good number. `limit` prop is crucial for performance in case
you have a lot of actions, it will prevent the spotlight from rendering all of them at once.

The example below renders 3000 actions, but only 7 of them are displayed at a time:

#### Example: limit

```tsx
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = Array(3000)
  .fill(0)
  .map((_, index) => ({
    id: `action-${index}`,
    label: `Action ${index}`,
    description: `Action ${index} description`,
  }));

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        limit={7}
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```


## Scrollable actions list

By default, `Spotlight` actions list is not scrollable. If you have a lot of actions that
you need to display at a time, set `scrollable` and `maxHeight` props. Note that there are
caveats with both approaches:

* When the `scrollable` prop is not set, actions list height is not limited and the spotlight
  body will grow to fit all actions. This can result in a very long spotlight body that will
  overflow the viewport. To prevent this, use `limit` prop to define the maximum number of actions
  that can be displayed at a time. Usually, 5–7 actions is a good number.
* When the `scrollable` prop is set, actions list height will always equal to the value of `maxHeight` prop
  (it will not shrink if there are not enough actions to fill the space). When there are more
  actions than can fit into the list, it will become scrollable. Scrolling logic is handled
  by [ScrollArea](https://mantine.dev/core/scroll-area) component.

In other words, if you want the actions list to shrink, do not set `scrollable` prop and use `limit`
prop. If you want the actions list to always have a fixed height, set `scrollable` and `maxHeight` props.

#### Example: scrollable

```tsx
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: SpotlightActionData[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    id: `action-${index}`,
    label: `Action ${index}`,
    description: `Action ${index} description`,
  }));

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        scrollable
        maxHeight={350}
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```


## Actions groups

`Spotlight` supports actions groups, you can use them to group actions by category:

#### Example: groups

```tsx
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, SpotlightActionGroupData, spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

const actions: (SpotlightActionGroupData | SpotlightActionData)[] = [
  {
    group: 'Pages',
    actions: [
      { id: 'home', label: 'Home page', description: 'Where we present the product' },
      { id: 'careers', label: 'Careers page', description: 'Where we list open positions' },
      { id: 'about-us', label: 'About us page', description: 'Where we tell what we do' },
    ],
  },

  {
    group: 'Apps',
    actions: [
      { id: 'svg-compressor', label: 'SVG compressor', description: 'Compress SVG images' },
      { id: 'base64', label: 'Base 64 converter', description: 'Convert data to base 64 format' },
      { id: 'fake-data', label: 'Fake data generator', description: 'Lorem ipsum generator' },
    ],
  },
];

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```


## Compound components

If you need more control over spotlight rendering and logic, use compound components.
Available components:

* `Spotlight.Root` – root component, should be used as a wrapper for all other components, accepts all props to customize logic
* `Spotlight.Search` – search input
* `Spotlight.ActionsList` – list of actions, required to wrap all actions and actions groups
* `Spotlight.Action` – action button
* `Spotlight.ActionsGroup` - group of actions
* `Spotlight.Empty` – empty state (nothing found)

#### Example: compound

```tsx
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const data = ['Home', 'About us', 'Contacts', 'Blog', 'Careers', 'Terms of service'];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
    .filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()))
    .map((item) => <Spotlight.Action key={item} label={item} />);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
```


For example, with compound components pattern you can customize actions contents:

#### Example: customAction

```tsx
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Badge, Button, Center, Group, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const data = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    title: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    new: true,
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    title: 'Carol Miller',
    description: 'One of the richest people on Earth',
    new: false,
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    title: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    new: false,
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    title: 'Spongebob Squarepants',
    description: 'Not just a sponge',
    new: false,
  },
];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
  .filter((item) => item.title.toLowerCase().includes(query.toLowerCase().trim()))
  .map((item) => (
    <Spotlight.Action key={item.title} onClick={() => console.log(item)}>
      <Group wrap="nowrap" w="100%">
        {item.image && (
          <Center>
            <img src={item.image} alt={item.title} width={50} height={50} />
          </Center>
        )}

        <div style={{ flex: 1 }}>
          <Text>{item.title}</Text>

          {item.description && (
            <Text opacity={0.6} size="xs">
              {item.description}
            </Text>
          )}
        </div>

        {item.new && <Badge variant="default">new</Badge>}
      </Group>
    </Spotlight.Action>
  ));

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
```


## Fixed elements offset

`Spotlight` component uses [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
package to lock scroll. To properly size these `elements` add a `className` to them ([documentation](https://github.com/theKashey/react-remove-scroll#positionfixed-elements)):

```tsx
import { RemoveScroll } from '@mantine/core';

function Demo() {
  return (
    <>
      <div className={RemoveScroll.classNames.fullWidth}>
        width: 100%
      </div>
      <div className={RemoveScroll.classNames.zeroRight}>
        right: 0
      </div>
    </>
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| actions | SpotlightActions[] | required | Actions data, passed down to <code>Spotlight.Action</code> component |
| centered | boolean | - | If set, the modal is centered vertically |
| children | React.ReactNode | - | Modal content |
| clearQueryOnClose | boolean | - | Determines whether the search query should be cleared when the spotlight is closed |
| closeOnActionTrigger | boolean | - | Determines whether spotlight should be closed when one of the actions is triggered |
| closeOnClickOutside | boolean | - | If set, the modal/drawer is closed when user clicks on the overlay |
| closeOnEscape | boolean | - | If set, <code>onClose</code> is called when user presses the escape key |
| disabled | boolean | - | If set, spotlight will not be rendered |
| filter | SpotlightFilterFunction | - | Function to filter actions data based on search query, by default actions are filtered by title, description and keywords |
| forceOpened | boolean | - | Forces opened state, useful for tests |
| fullScreen | boolean | - | If set, the modal takes the entire screen |
| highlightQuery | boolean | - | Determines whether search query should be highlighted in action label |
| id | string | - | Id used to connect modal/drawer with body and title |
| keepMounted | boolean | - | If set modal/drawer is not unmounted from the DOM when hidden. <code>display: none</code> styles are applied instead. |
| limit | number | - | Maximum number of actions displayed at a time |
| lockScroll | boolean | - | If set, scroll is locked when <code>opened={true}</code> |
| maxHeight | MaxHeight<string | number> | - | Spotlight content max-height. Ignored unless <code>scrollable</code> prop is set. |
| nothingFound | React.ReactNode | - | Message displayed when none of the actions match given <code>filter</code> |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onQueryChange | (query: string) => void | - | Called when query changes |
| onSpotlightClose | () => void | - | Called when spotlight closes |
| onSpotlightOpen | () => void | - | Called when spotlight opens |
| overlayProps | ModalBaseOverlayProps | - | Props passed down to the <code>Overlay</code> component, use to configure opacity, <code>background-color</code>, styles and other properties |
| padding | MantineSpacing | - | Key of <code>theme.spacing</code> or any valid CSS value to set content, header and footer padding |
| portalProps | BasePortalProps | - | Props passed down to the Portal component when <code>withinPortal</code> is set |
| query | string | - | Controlled Spotlight search query |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code> |
| removeScrollProps | RemoveScrollProps | - | Props passed down to react-remove-scroll, can be used to customize scroll lock behavior |
| returnFocus | boolean | - | If set, focus is returned to the last active element when <code>onClose</code> is called |
| scrollAreaComponent | ScrollAreaComponent | - | Scroll area component |
| scrollAreaProps | Partial<ScrollAreaAutosizeProps> | - | Props passed down to the <code>ScrollArea</code> component |
| scrollable | boolean | - | Determines whether the actions list should be scrollable. If not set, <code>maxHeight</code> is ignored |
| searchProps | SpotlightSearchProps | - | Props passed down to the <code>Spotlight.Search</code> |
| shadow | MantineShadow | - | Key of <code>theme.shadows</code> or any valid CSS box-shadow value |
| shortcut | string | string[] | null | - | Keyboard shortcut or a list of shortcuts to trigger spotlight |
| size | number | MantineSize | (string & {}) | - | Controls width of the content area |
| stackId | string | - | Id of the modal in the <code>Modal.Stack</code> |
| store | SpotlightStore | - | Spotlight store, can be used to create multiple instances of spotlight |
| tagsToIgnore | string[] | - | A list of tags which when focused will be ignored by shortcut |
| title | React.ReactNode | - | Modal title |
| transitionProps | TransitionProps | - | Props added to the <code>Transition</code> component that used to animate overlay and body, use to configure duration and animation type, <code>{ duration: 200, transition: 'fade-down' }</code> by default |
| trapFocus | boolean | - | If set, focus is trapped within the modal/drawer |
| triggerOnContentEditable | boolean | - | Determines whether shortcut should trigger based in contentEditable |
| withOverlay | boolean | - | If set, the overlay is rendered |
| withinPortal | boolean | - | If set, the component is rendered inside <code>Portal</code> |
| xOffset | MarginLeft<string | number> | - | Left/right modal offset |
| yOffset | MarginTop<string | number> | - | Top/bottom modal offset |
| zIndex | string | number | - | <code>z-index</code> CSS property of the root element |


#### Styles API

Spotlight component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Spotlight selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Spotlight-root | Root element |
| inner | .mantine-Spotlight-inner | Element used to center modal, has fixed position, takes entire screen |
| content | .mantine-Spotlight-content | `Modal.Content` root element |
| header | .mantine-Spotlight-header | Contains title and close button |
| overlay | .mantine-Spotlight-overlay | Overlay displayed under the `Modal.Content` |
| title | .mantine-Spotlight-title | Modal title (h2 tag), displayed in the header |
| body | .mantine-Spotlight-body | Modal body, displayed after header |
| close | .mantine-Spotlight-close | Close button |
| search | .mantine-Spotlight-search | Search input (`Spotlight.Search`) |
| actionsList | .mantine-Spotlight-actionsList | Actions list (`Spotlight.ActionsList`) |
| empty | .mantine-Spotlight-empty | Empty state (`Spotlight.Empty`) |
| footer | .mantine-Spotlight-footer | Footer (`Spotlight.Footer`) |
| action | .mantine-Spotlight-action | Action (`Spotlight.Action`) |
| actionBody | .mantine-Spotlight-actionBody | Body of the action, contains label and description |
| actionLabel | .mantine-Spotlight-actionLabel | `Spotlight.Action` label |
| actionDescription | .mantine-Spotlight-actionDescription | `Spotlight.Action` description |
| actionSection | .mantine-Spotlight-actionSection | `Spotlight.Action` left and right sections |
| actionsGroup | .mantine-Spotlight-actionsGroup | `Spotlight.ActionsGroup` root element |

**Spotlight data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| action | data-selected | Action is selected with up/down keys | - |
| actionSection | data-position | - | Section position: left or right |
| actionSection | data-dimmed | - | - |