# Mantine tests

@mantine/tests is a helper package that is used to contain commonly repeated tests logic. It is not published on npm.

## checkAccessibility

checkAccessibility test checks markup of given component with axe. It allows to find ~30% of accessibility issues. It takes an array of mounted enzyme wrappers as single argument.

```tsx
import { mount } from 'enzyme';
import { checkAccessibility } from '@mantine/tests';
import { Tabs, Tab } from '@mantine/core';

const content = [
  <Tab label="tab-1" key="tab-1">
    tab-1
  </Tab>,
  <Tab label="tab-2" key="tab-2">
    tab-2
  </Tab>,
  <Tab label="tab-3" key="tab-3">
    tab-3
  </Tab>,
];

describe('@mantine/core/Tabs', () => {
  checkAccessibility([mount(<Tabs>{content}</Tabs>), mount(<Tabs initialTab={2}>{content}</Tabs>)]);
});
```

## isHasComposableAttribute

Checks if root element of given component has data-mantine-composable attribute. This attribute is used to position elements with ElementsGroup component from @mantine/core package. isHasComposableAttribute accepts 2 arguments: component and required component props.

```tsx
import { isHasComposableAttribute } from '@mantine/tests';
import { Button } from '@mantine/core';

describe('@mantine/core/Button', () => {
  isHasComposableAttribute(Button, { children: 'test' });
});
```

## itRendersChildren

Checks if component renders React node at any position. itRendersChildren accepts 2 arguments: component and required component props.

```tsx
import { itRendersChildren } from '@mantine/tests';
import { Button } from '@mantine/core';

describe('@mantine/core/Button', () => {
  itRendersChildren(Button, { color: 'red' });
});
```

## itSupportsClassName

Checks if component sets given className on root element. itSupportsClassName accepts 2 arguments: component and required component props.

```tsx
import { itSupportsClassName } from '@mantine/tests';
import { Button } from '@mantine/core';

describe('@mantine/core/Button', () => {
  itSupportsClassName(Button, { color: 'red' });
});
```

## itSupportsOthers

Checks if component spreads ...others props on root element. itSupportsOthers accepts 2 arguments: component and required component props.

```tsx
import { itSupportsOthers } from '@mantine/tests';
import { Button } from '@mantine/core';

describe('@mantine/core/Button', () => {
  itSupportsOthers(Button, { children: 'test' });
});
```

## itSupportsStyle

Checks it component sets given styles object to style property of root element. itSupportsStyle accepts 2 arguments: component and required component props.

```tsx
import { itSupportsStyle } from '@mantine/tests';
import { Button } from '@mantine/core';

describe('@mantine/core/Button', () => {
  itSupportsStyle(Button, { children: 'test' });
});
```

## itSupportsRef

Checks if component produces ref on mount. itSupportsRef accepts 4 arguments:

- component
- required component props
- ref instance type
- ref prop key (optional, defaults to 'ref')

```tsx
import { itSupportsRef } from '@mantine/tests';
import { Button } from '@mantine/core';

describe('@mantine/core/Button', () => {
  itSupportsRef(Button, { children: 'test' }, HTMLButtonElement, 'elementRef');
});
```
