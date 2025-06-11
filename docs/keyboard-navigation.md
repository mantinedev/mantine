# DatePicker Keyboard Navigation

The DatePicker component now includes enhanced keyboard navigation features to improve accessibility and user experience.

## Keyboard Shortcuts

When the DatePicker is focused, you can use the following keyboard shortcuts:

- **Ctrl/Cmd + Arrow Up**: Navigate one year back
- **Ctrl/Cmd + Arrow Down**: Navigate one year forward
- **Ctrl/Cmd + Shift + Arrow Up**: Navigate one decade (10 years) back
- **Ctrl/Cmd + Shift + Arrow Down**: Navigate one decade (10 years) forward
- **Y key**: Open year selection view (when in month view)

## Usage

The keyboard navigation is enabled by default. You can disable it by setting the `enableKeyboardNavigation` prop to `false`:

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker 
      label="Date picker with keyboard navigation"
      enableKeyboardNavigation={true} // enabled by default
    />
  );
}
```

## Accessibility

The keyboard shortcuts follow common patterns used in desktop applications:
- Modifier keys (Ctrl/Cmd) are used for larger time jumps
- Shift modifier increases the jump size (year → decade)
- Single letter shortcuts (Y) provide quick access to different views

This feature is particularly useful for:
- Users who prefer keyboard navigation
- Quickly selecting dates far in the past (like birth dates)
- Improving overall accessibility of date selection