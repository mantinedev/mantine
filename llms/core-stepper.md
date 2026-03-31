# Stepper
Package: @mantine/core
Import: import { Stepper } from '@mantine/core';
Description: Display content divided into a steps sequence

## Usage

```tsx
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
```


## Allow step select

To disable step selection, set the `allowStepSelect` prop on the `Stepper.Step` component.
It can be used to prevent the user from reaching the next steps while letting them go back and forth between steps they've already reached before:

```tsx
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step
          label="First step"
          description="Create an account"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step
          label="Second step"
          description="Verify email"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          Step 3 content: Get full access
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={() => handleStepChange(active - 1)}>
          Back
        </Button>
        <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
      </Group>
    </>
  );
}
```


## Disable next steps selection

Another way to disable the selection of upcoming steps is to use the `allowNextStepsSelect` directly on the `Stepper` component.
This is useful when you don't need to control the behavior specifically for each step.

```tsx
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
```


## Color, radius and size

```tsx
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper color="blue" radius="xl" size="md" active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
```


Component size is controlled by two props: `size` and `iconSize`.
The `size` prop controls icon size, label and description font size.
`iconSize` allows you to overwrite the icon size separately from other size values:

```tsx
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper iconSize={42} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
```


## With custom icons

You can replace the step icon by setting the `icon` prop on the `Stepper.Step` component.
To change the completed check icon, set `completedIcon` on the `Stepper` component.
You can use any React node as an icon: component, string, number:

```tsx
import { useState } from 'react';
import { UserCheckIcon, EnvelopeOpenIcon, ShieldCheckIcon, CheckCircleIcon } from '@phosphor-icons/react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      completedIcon={<CheckCircleIcon size={18} />}
    >
      <Stepper.Step
        icon={<UserCheckIcon size={18} />}
        label="Step 1"
        description="Create an account"
      />
      <Stepper.Step
        icon={<EnvelopeOpenIcon size={18} />}
        label="Step 2"
        description="Verify email"
      />
      <Stepper.Step
        icon={<ShieldCheckIcon size={18} />}
        label="Step 3"
        description="Get full access"
      />
    </Stepper>
  );
}
```


You can use `Stepper` with icons only. Note that in this case, you will have to
set `aria-label` or `title` on the `Stepper.Step` component to make it accessible:

```tsx
import { useState } from 'react';
import { Stepper } from '@mantine/core';
import { UserCheckIcon, EnvelopeOpenIcon, ShieldCheckIcon } from '@phosphor-icons/react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<UserCheckIcon size={18} />} />
      <Stepper.Step icon={<EnvelopeOpenIcon size={18} />} />
      <Stepper.Step icon={<ShieldCheckIcon size={18} />} />
    </Stepper>
  );
}
```


You can also change the completed icon for each step, for example, to indicate an error state:

```tsx
import { Stepper } from '@mantine/core';
import { XCircleIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Stepper active={2}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<XCircleIcon size={20} />}
      />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
```


## Vertical orientation

```tsx
import { useState } from 'react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} orientation="vertical">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
```


## Icon position

To change the step icon and body arrangement, set `iconPosition="right"`:

```tsx
import { useState } from 'react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} iconPosition="right">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
```


## Get step ref

You can get refs of the step button and stepper root element (div):

```tsx
import { useRef } from 'react';
import { Stepper } from '@mantine/core';

function MyStepper() {
  const firstStep = useRef<HTMLButtonElement>(null);
  const stepper = useRef<HTMLDivElement>(null);

  return (
    <Stepper ref={stepper} active={0}>
      <Stepper.Step label="First step" ref={firstStep} />
      <Stepper.Step label="Second step" />
    </Stepper>
  );
}
```

## Wrap Stepper.Step

`Stepper` component relies on `Stepper.Step` order. Wrapping `Stepper.Step` is not supported.
Instead, you will need to use different approaches:

```tsx
import { Stepper } from '@mantine/core';

// This will not work, step children will not render
function WillNotWork() {
  return (
    <Stepper.Step label="Nope" description="It will not work">
      This part will not render
    </Stepper.Step>
  );
}

// Create a separate component for children
function WillWork() {
  return <div>This will work as expected!</div>;
}

function Demo() {
  return (
    <Stepper active={1}>
      <Stepper.Step label="Regular step">First step</Stepper.Step>
      {/* Wrapped Stepper.Step will not render children, do not do that */}
      <WillNotWork />
      <Stepper.Step label="Step with custom content">
        <WillWork />
      </Stepper.Step>
      <Stepper.Step label="Regular step">Third step</Stepper.Step>
    </Stepper>
  );
}
```

## Accessibility

`<Stepper.Step />` components render a button element; set `aria-label` or `title` props
to make the component visible for screen readers in case you do not specify `label` or `description`:

```tsx
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper active={0}>
      {/* Not ok, no label for screen reader */}
      <Stepper.Step />

      {/* Ok, label and description */}
      <Stepper.Step label="Step 1" description="Create an account" />

      {/* Ok, aria-label */}
      <Stepper.Step aria-label="Create an account" />
    </Stepper>
  );
}
```

## Keyboard Navigation

Stepper supports full keyboard navigation:

* **Tab / Shift+Tab** - Move focus between clickable steps
* **Space / Enter** - Activate the focused step
* Each step is a button element with proper ARIA attributes

Inactive steps that are not clickable are skipped during Tab navigation. The tabIndex is automatically managed based on whether a step is clickable or not.


#### Props

**Stepper props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | number | required | Index of the active step |
| allowNextStepsSelect | boolean | - | When true, users can click and jump to any step. When false, users can only navigate to completed steps |
| autoContrast | boolean | - | When true, automatically adjusts the icon color in completed steps to ensure sufficient contrast against the step background color |
| children | React.ReactNode | required | `Stepper.Step` components |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color, controls colors of active and progress steps |
| completedIcon | ReactNode \| StepFragmentComponent | - | Step icon displayed when step is completed |
| contentPadding | MantineSpacing | - | Key of `theme.spacing` or any valid CSS value to set `padding-top` of the content |
| icon | ReactNode \| StepFragmentComponent | - | Step icon |
| iconPosition | "left" \| "right" | - | Icon position relative to the step body |
| iconSize | string \| number | - | Controls size of the step icon, by default icon size is inferred from `size` prop |
| keepMounted | boolean | - | If set, all step content is kept mounted. React 19 `Activity` is used to preserve state while content is hidden. |
| onStepClick | (stepIndex: number) => void | - | Called when a clickable step is clicked with its 0-based index. Not called for the currently active step. |
| orientation | "horizontal" \| "vertical" | - | Stepper orientation |
| progressIcon | ReactNode \| StepFragmentComponent | - | Step icon displayed when step is in progress |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set steps border-radius |
| size | MantineSize | - | Controls size of various Stepper elements |
| wrap | boolean | - | Determines whether steps should wrap to the next line if no space is available |

**Stepper.Step props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowStepClick | boolean | - | Set to false to disable clicks on step |
| allowStepSelect | boolean | - | Should step selection be allowed |
| color | MantineColor | - | Key of `theme.colors`, by default controlled by Stepper component |
| completedIcon | ReactNode \| StepFragmentComponent | - | Step icon displayed when step is completed |
| description | ReactNode \| StepFragmentComponent | - | Step description |
| icon | ReactNode \| StepFragmentComponent | - | Step icon, defaults to `step index + 1` when rendered within Stepper |
| iconPosition | "left" \| "right" | - | Icon position relative to step body, controlled by Stepper component |
| iconSize | string \| number | - | Icon wrapper size |
| label | ReactNode \| StepFragmentComponent | - | Step label, render after icon |
| loading | boolean | - | Indicates loading state of the step |
| orientation | "horizontal" \| "vertical" | - | Component orientation |
| progressIcon | ReactNode \| StepFragmentComponent | - | Step icon displayed when step is in progress |
| state | "stepInactive" \| "stepProgress" \| "stepCompleted" | - | Step state, automatically set by Stepper component based on active prop. stepInactive: not reached, stepProgress: current, stepCompleted: passed |
| step | number | - | 0-based step index, automatically set by Stepper component |
| withIcon | boolean | - | When false, hides the step icon. Useful for creating compact steppers with only labels |


#### Styles API

Stepper component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Stepper selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Stepper-root | Root element |
| steps | .mantine-Stepper-steps | Steps controls wrapper |
| separator | .mantine-Stepper-separator | Separator line between step controls |
| verticalSeparator | .mantine-Stepper-verticalSeparator | Vertical separator line between step controls |
| content | .mantine-Stepper-content | Current step content wrapper |
| stepWrapper | .mantine-Stepper-stepWrapper | Wrapper for the step icon and separator |
| step | .mantine-Stepper-step | Step control button |
| stepIcon | .mantine-Stepper-stepIcon | Step icon wrapper |
| stepCompletedIcon | .mantine-Stepper-stepCompletedIcon | Completed step icon, rendered within stepIcon |
| stepIconContent | .mantine-Stepper-stepIconContent | Step icon content wrapper for non-completed steps, rendered within stepIcon |
| stepBody | .mantine-Stepper-stepBody | Contains stepLabel and stepDescription |
| stepLabel | .mantine-Stepper-stepLabel | Step label |
| stepDescription | .mantine-Stepper-stepDescription | Step description |
| stepLoader | .mantine-Stepper-stepLoader | Step loader |

**Stepper CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --stepper-color | Controls color of the active step and separator |
| root | --stepper-icon-color | Controls `color` of the step icon |
| root | --stepper-icon-size | Controls `width` and `height` of the icons |
| root | --stepper-content-padding | Controls `padding-top` of the content |
| root | --stepper-radius | Controls `border-radius` of the step icon |
| root | --stepper-fz | Controls `font-size` of various elements |
| root | --stepper-spacing | Controls various spacings |

**Stepper data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| stepIcon | data-progress | Step is current | - |
| stepIcon | data-completed | Step is completed | - |
