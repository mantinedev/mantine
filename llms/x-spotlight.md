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

The `Spotlight` component can be used as a search or as a command center for your application.
It is used as a search on the mantine.dev website; you can trigger it with the `Ctrl + K` shortcut.
`Spotlight` is based on the [Modal](https://mantine.dev/llms/core-modal.md) component and supports most of its props.

```tsx
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { HouseIcon, GaugeIcon, FileTextIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <HouseIcon size={24} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <GaugeIcon size={24} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <FileTextIcon size={24} />,
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
          leftSection: <MagnifyingGlassIcon size={20} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```


## Actions

The `@mantine/spotlight` package exports an object with actions that can be used to control the spotlight:

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

You can also import actions directly from the `@mantine/spotlight` package if you prefer this syntax:

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

The `spotlight` object documented above uses the default store; it works fine if you have only one spotlight
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

`Spotlight` uses the [use-hotkeys](https://mantine.dev/llms/hooks-use-hotkeys.md) hook to handle keyboard shortcuts.
By default, `Ctrl + K` and `Cmd + K` shortcuts are used to open spotlight; you can change them
with the `shortcut` prop:

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

Use the `limit` prop to limit the maximum number of actions that can be displayed at a time.
Usually, 5–7 actions is a good number. The `limit` prop is crucial for performance in case
you have a lot of actions; it will prevent the spotlight from rendering all of them at once.

The example below renders 3000 actions, but only 7 of them are displayed at a time:

```tsx
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

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
          leftSection: <MagnifyingGlassIcon size={20} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```


## Custom filter function

By default, `Spotlight` uses a simple filter that matches actions by `label`, `description`, and `keywords`.
You can customize the filtering logic by providing a custom `filter` function. The `filter` function
receives the search query and actions array, and should return filtered actions.

The custom `filter` function signature:

```tsx
type SpotlightFilterFunction = (
  query: string,
  actions: SpotlightActions[]
) => SpotlightActions[];
```

## Fuzzy search with fuse.js

You can implement fuzzy search using [fuse.js](https://fusejs.io/) library. This is useful if you want
to match actions even with typos or partial matches:

```tsx
import Fuse from 'fuse.js';
import { Button } from '@mantine/core';
import {
  Spotlight,
  SpotlightActionData,
  SpotlightFilterFunction,
  spotlight,
} from '@mantine/spotlight';
import { HouseIcon, GaugeIcon, FileTextIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <HouseIcon size={24} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <GaugeIcon size={24} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to learn more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <FileTextIcon size={24} />,
  },
  {
    id: 'settings',
    label: 'Settings',
    description: 'Manage application preferences and configurations',
    onClick: () => console.log('Settings'),
    leftSection: <HouseIcon size={24} />,
  },
];

const fuzzySearchFilter: SpotlightFilterFunction = (query, searchActions) => {
  if (!query.trim()) {
    return searchActions;
  }

  const flatActions = searchActions.reduce<any[]>((acc, item) => {
    if ('actions' in item) {
      return [...acc, ...item.actions.map((action) => ({ ...action, group: item.group }))];
    }
    return [...acc, item];
  }, []);

  const fuse = new Fuse(flatActions, {
    keys: ['label', 'description'],
    threshold: 0.3,
    minMatchCharLength: 1,
  });

  const results = fuse.search(query).map((result) => result.item);

  const groups: Record<string, any> = {};
  const result: any[] = [];

  results.forEach((action) => {
    if (action.group) {
      if (!groups[action.group]) {
        groups[action.group] = { pushed: false, data: { group: action.group, actions: [] } };
      }
      groups[action.group].data.actions.push(action);
      if (!groups[action.group].pushed) {
        groups[action.group].pushed = true;
        result.push(groups[action.group].data);
      }
    } else {
      result.push(action);
    }
  });

  return result;
};

function Demo() {
  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>
      <Spotlight
        actions={actions}
        filter={fuzzySearchFilter}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <MagnifyingGlassIcon size={20} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```


## Scrollable actions list

By default, the `Spotlight` actions list is not scrollable. If you have a lot of actions that
you need to display at a time, set the `scrollable` and `maxHeight` props. Note that there are
caveats with both approaches:

* When the `scrollable` prop is not set, the actions list height is not limited and the spotlight
  body will grow to fit all actions. This can result in a very long spotlight body that will
  overflow the viewport. To prevent this, use the `limit` prop to define the maximum number of actions
  that can be displayed at a time. Usually, 5–7 actions is a good number.
* When the `scrollable` prop is set, the actions list height will always equal the value of the `maxHeight` prop
  (it will not shrink if there are not enough actions to fill the space). When there are more
  actions than can fit into the list, it will become scrollable. Scrolling logic is handled
  by the [ScrollArea](https://mantine.dev/llms/core-scroll-area.md) component.

In other words, if you want the actions list to shrink, do not set the `scrollable` prop and use the `limit`
prop. If you want the actions list to always have a fixed height, set the `scrollable` and `maxHeight` props.

```tsx
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

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
          leftSection: <MagnifyingGlassIcon size={20} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```


## Actions groups

`Spotlight` supports action groups; you can use them to group actions by category:

```tsx
import { Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, SpotlightActionGroupData, spotlight } from '@mantine/spotlight';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

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
          leftSection: <MagnifyingGlassIcon size={20} />,
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

```tsx
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Button } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

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
        <Spotlight.Search placeholder="Search..." leftSection={<MagnifyingGlassIcon />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
```


For example, with the compound components pattern, you can customize action contents:

```tsx
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Badge, Button, Center, Group, Text } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

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
        <Spotlight.Search placeholder="Search..." leftSection={<MagnifyingGlassIcon />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
```


## Fixed elements offset

The `Spotlight` component uses the [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
package to lock scroll. To properly size these `elements`, add a `className` to them ([documentation](https://github.com/theKashey/react-remove-scroll#positionfixed-elements)):

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

**Spotlight props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| actions | SpotlightActions[] | required | Actions data, passed down to `Spotlight.Action` component |
| centered | boolean | - | If set, the modal is centered vertically |
| children | React.ReactNode | - | Modal content |
| clearQueryOnClose | boolean | - | Determines whether the search query should be cleared when the spotlight is closed |
| closeOnActionTrigger | boolean | - | Determines whether spotlight should be closed when one of the actions is triggered |
| closeOnClickOutside | boolean | - | If set, the modal/drawer is closed when user clicks on the overlay |
| closeOnEscape | boolean | - | If set, `onClose` is called when user presses the escape key |
| disabled | boolean | - | If set, spotlight will not be rendered |
| filter | SpotlightFilterFunction | - | Function to filter actions data based on search query, by default actions are filtered by title, description and keywords |
| forceOpened | boolean | - | Forces opened state, useful for tests |
| fullScreen | boolean | - | If set, the modal takes the entire screen |
| highlightQuery | boolean | - | Determines whether search query should be highlighted in action label |
| id | string | - | Id used to connect modal/drawer with body and title |
| keepMounted | boolean | - | If set modal/drawer is not unmounted from the DOM when hidden. `display: none` styles are applied instead. |
| limit | number | - | Maximum number of actions displayed at a time |
| lockScroll | boolean | - | If set, scroll is locked when `opened={true}` |
| maxHeight | MaxHeight<string \| number> | - | Spotlight content max-height. Ignored unless `scrollable` prop is set. |
| nothingFound | React.ReactNode | - | Message displayed when none of the actions match given `filter` |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onQueryChange | (query: string) => void | - | Called when query changes |
| onSpotlightClose | () => void | - | Called when spotlight closes |
| onSpotlightOpen | () => void | - | Called when spotlight opens |
| overlayProps | ModalBaseOverlayProps | - | Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties |
| padding | MantineSpacing | - | Key of `theme.spacing` or any valid CSS value to set content, header and footer padding |
| portalProps | BasePortalProps | - | Props passed down to the Portal component when `withinPortal` is set |
| query | string | - | Controlled Spotlight search query |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| removeScrollProps | RemoveScrollProps | - | Props passed down to react-remove-scroll, can be used to customize scroll lock behavior |
| returnFocus | boolean | - | If set, focus is returned to the last active element when `onClose` is called |
| scrollAreaComponent | ScrollAreaComponent | - | Scroll area component |
| scrollAreaProps | Partial<ScrollAreaAutosizeProps> | - | Props passed down to the `ScrollArea` component |
| scrollable | boolean | - | Determines whether the actions list should be scrollable. If not set, `maxHeight` is ignored |
| searchProps | SpotlightSearchProps | - | Props passed down to the `Spotlight.Search` |
| shadow | MantineShadow | - | Key of `theme.shadows` or any valid CSS box-shadow value |
| shortcut | string \| string[] \| null | - | Keyboard shortcut or a list of shortcuts to trigger spotlight |
| size | MantineSize \| number | - | Controls width of the content area |
| stackId | string | - | Id of the modal in the `Modal.Stack` |
| store | SpotlightStore | - | Spotlight store, can be used to create multiple instances of spotlight |
| tagsToIgnore | string[] | - | A list of tags which when focused will be ignored by shortcut |
| title | React.ReactNode | - | Modal title |
| transitionProps | TransitionProps | - | Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'fade-down' }` by default |
| trapFocus | boolean | - | If set, focus is trapped within the modal/drawer |
| triggerOnContentEditable | boolean | - | Determines whether shortcut should trigger based in contentEditable |
| withOverlay | boolean | - | If set, the overlay is rendered |
| withinPortal | boolean | - | If set, the component is rendered inside `Portal` |
| xOffset | MarginLeft<string \| number> | - | Left/right modal offset |
| yOffset | MarginTop<string \| number> | - | Top/bottom modal offset |
| zIndex | string \| number | - | `z-index` CSS property of the root element |

**Spotlight.Action props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Children override default action elements, if passed, label, description and sections are hidden |
| closeSpotlightOnTrigger | boolean | - | Determines whether the spotlight should be closed when action is triggered, overrides `closeOnActionTrigger` prop set on `Spotlight` |
| description | string | - | Action description, pass string to use in default filter |
| dimmedSections | boolean | - | Determines whether left and right sections should have dimmed styles |
| highlightColor | MantineColor | - | Key of `theme.colors` of any valid CSS color that will be used to highlight search query |
| highlightQuery | boolean | - | Determines whether search query should be highlighted in action label |
| keywords | string \| string[] | - | Keywords that are used for default filtering, not displayed anywhere, can be a string: "react,router,javascript" or an array: ['react', 'router', 'javascript'] |
| label | string | - | Action label, pass string to use in default filter |
| leftSection | React.ReactNode | - | Section displayed on the left side of the label, for example, icon |
| rightSection | React.ReactNode | - | Section displayed on the right side of the label, for example, hotkey |

**Spotlight.ActionsGroup props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | `Spotlight.Action` components |
| label | string | - | Group label |

**Spotlight.Root props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| centered | boolean | - | If set, the modal is centered vertically |
| children | React.ReactNode | - | Modal content |
| clearQueryOnClose | boolean | - | Determines whether the search query should be cleared when the spotlight is closed |
| closeOnActionTrigger | boolean | - | Determines whether spotlight should be closed when one of the actions is triggered |
| closeOnClickOutside | boolean | - | If set, the modal/drawer is closed when user clicks on the overlay |
| closeOnEscape | boolean | - | If set, `onClose` is called when user presses the escape key |
| disabled | boolean | - | If set, spotlight will not be rendered |
| forceOpened | boolean | - | Forces opened state, useful for tests |
| fullScreen | boolean | - | If set, the modal takes the entire screen |
| id | string | - | Id used to connect modal/drawer with body and title |
| keepMounted | boolean | - | If set modal/drawer is not unmounted from the DOM when hidden. `display: none` styles are applied instead. |
| lockScroll | boolean | - | If set, scroll is locked when `opened={true}` |
| maxHeight | MaxHeight<string \| number> | - | Spotlight content max-height. Ignored unless `scrollable` prop is set. |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onQueryChange | (query: string) => void | - | Called when query changes |
| onSpotlightClose | () => void | - | Called when spotlight closes |
| onSpotlightOpen | () => void | - | Called when spotlight opens |
| overlayProps | ModalBaseOverlayProps | - | Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties |
| padding | MantineSpacing | - | Key of `theme.spacing` or any valid CSS value to set content, header and footer padding |
| portalProps | BasePortalProps | - | Props passed down to the Portal component when `withinPortal` is set |
| query | string | - | Controlled Spotlight search query |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| removeScrollProps | RemoveScrollProps | - | Props passed down to react-remove-scroll, can be used to customize scroll lock behavior |
| returnFocus | boolean | - | If set, focus is returned to the last active element when `onClose` is called |
| scrollAreaComponent | ScrollAreaComponent | - | Scroll area component |
| scrollable | boolean | - | Determines whether the actions list should be scrollable. If not set, `maxHeight` is ignored |
| shadow | MantineShadow | - | Key of `theme.shadows` or any valid CSS box-shadow value |
| shortcut | string \| string[] \| null | - | Keyboard shortcut or a list of shortcuts to trigger spotlight |
| size | MantineSize \| number | - | Controls width of the content area |
| stackId | string | - | Id of the modal in the `Modal.Stack` |
| store | SpotlightStore | - | Spotlight store, can be used to create multiple instances of spotlight |
| tagsToIgnore | string[] | - | A list of tags which when focused will be ignored by shortcut |
| title | React.ReactNode | - | Modal title |
| transitionProps | TransitionProps | - | Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'fade-down' }` by default |
| trapFocus | boolean | - | If set, focus is trapped within the modal/drawer |
| triggerOnContentEditable | boolean | - | Determines whether shortcut should trigger based in contentEditable |
| withOverlay | boolean | - | If set, the overlay is rendered |
| withinPortal | boolean | - | If set, the component is rendered inside `Portal` |
| xOffset | MarginLeft<string \| number> | - | Left/right modal offset |
| yOffset | MarginTop<string \| number> | - | Top/bottom modal offset |
| zIndex | string \| number | - | `z-index` CSS property of the root element |

**Spotlight.Search props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| error | React.ReactNode | - | Determines whether the input should have error styles and `aria-invalid` attribute |
| id | string | - | Input element id |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| multiline | boolean | - | Adjusts padding and sizing calculations for multiline inputs (use with `component="textarea"`). Does not make the input multiline by itself. |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Sets `required` attribute on the `input` element |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| withAria | boolean | - | Determines whether `aria-` and other accessibility attributes should be added to the input. Only disable when implementing custom accessibility handling. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element of the `Input` component |


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
| actionSection | data-dimmed | `dimmedSections` prop is set on `Spotlight.Action` component | - |
