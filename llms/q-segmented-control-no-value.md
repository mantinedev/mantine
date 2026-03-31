# Can I use SegmentedControl with empty value?
SegmentedControl cannot be used without a value

## Can I use SegmentedControl with an initial empty value?

[SegmentedControl](https://mantine.dev/core/segmented-control/) cannot be used without a value.
It is based on [FloatingIndicator](https://mantine.dev/core/floating-indicator/) and requires a value to work properly.
If neither `value` nor `defaultValue` is provided, `SegmentedControl` will automatically set the first item as active.

## Can I deselect a value in SegmentedControl?

No, `SegmentedControl` is designed to always have a value.
This constraint is required for the component animations and floating indicator to work properly.

## What should I use instead if I need deselect functionality?

If you need to have a control that can be deselected, consider using [Radio](https://mantine.dev/core/radio/) or [Checkbox](https://mantine.dev/core/checkbox/) components.
Both `Radio` and `Checkbox` can be deselected by setting the `checked={false}` prop.

## I want a component that looks like SegmentedControl but can be deselected

You can build a custom component that works similar to `SegmentedControl`
with [FloatingIndicator](https://mantine.dev/core/floating-indicator/).
