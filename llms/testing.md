# Testing Guidelines

## General Principles

### Use Testing Library Best Practices

Always use `screen` queries and `userEvent` for interactions:

```tsx
import { render, screen, userEvent } from '@mantine-tests/core';

it('handles button click', async () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Click me</Button>);

  await userEvent.click(screen.getByRole('button', { name: 'Click me' }));
  expect(onClick).toHaveBeenCalled();
});
```

### Query Priority

1. **Accessible queries** (preferred):
   - `screen.getByRole()` - buttons, links, textboxes, etc.
   - `screen.getByLabelText()` - form fields with labels
   - `screen.getByText()` - non-interactive text content

2. **Fallback queries** (use sparingly):
   - `container.querySelector()` - only when testing implementation details (e.g., CSS classes)
   - Avoid `data-testid` unless absolutely necessary

### User Interactions

Use `userEvent` directly without setup:

```tsx
// ✅ Good
await userEvent.click(button);
await userEvent.type(input, 'text');

// ❌ Avoid
const user = userEvent.setup();
await user.click(button);
```

### Test Assertions

Write meaningful assertions that verify actual behavior:

```tsx
// ❌ Bad - just checks something rendered
expect(container.querySelector('.mantine-Button-root')).toBeInTheDocument();

// ✅ Good - verifies behavior
expect(screen.getByRole('button')).toBeDisabled();
expect(onClick).toHaveBeenCalledWith(expectedValue);
```

### Async Tests

Mark tests as `async` when using `userEvent` or testing async behavior:

```tsx
it('handles async action', async () => {
  render(<Component />);
  await userEvent.click(screen.getByRole('button'));
  expect(await screen.findByText('Success')).toBeInTheDocument();
});
```

## Code Style

### No Comments Rule

Do not add comments to test code. Tests should be self-explanatory through:
- Descriptive test names
- Clear variable names
- Logical test structure

```tsx
// ❌ Bad
it('test 1', () => {
  // Check that button is disabled when prop is true
  render(<Button disabled />);
  expect(screen.getByRole('button')).toBeDisabled();
});

// ✅ Good
it('disables button when disabled prop is true', () => {
  render(<Button disabled />);
  expect(screen.getByRole('button')).toBeDisabled();
});
```

### Test Structure

Organize tests with clear arrange-act-assert pattern:

```tsx
it('calls onChange when view is changed', async () => {
  const onChange = jest.fn();

  render(<ViewSelect value="day" onChange={onChange} />);

  await userEvent.click(screen.getByRole('button', { name: /week/i }));

  expect(onChange).toHaveBeenCalledWith('week');
});
```

## Component Testing

### Props Testing

Verify that props actually affect component behavior:

```tsx
it('applies custom className to control buttons', () => {
  render(
    <Header
      controlProps={{ className: 'custom' }}
      stylesApiProps={{ classNames: { control: 'custom-control' } }}
    />
  );

  expect(screen.getByLabelText('Previous')).toHaveClass('custom-control');
});
```

### Callback Testing

Test that callbacks are invoked with correct arguments:

```tsx
it('calls onDateChange with correct date when next button is clicked', async () => {
  const onDateChange = jest.fn();

  render(
    <DatePicker
      value="2024-01-15"
      onDateChange={onDateChange}
    />
  );

  await userEvent.click(screen.getByLabelText('Next'));

  expect(onDateChange).toHaveBeenCalledWith('2024-01-16');
});
```

### Conditional Rendering

Test both presence and absence of elements:

```tsx
it('renders month selector only when withMonths is true', () => {
  const { rerender } = render(<YearPicker withMonths />);
  expect(screen.getByLabelText(/select month/i)).toBeInTheDocument();

  rerender(<YearPicker withMonths={false} />);
  expect(screen.queryByLabelText(/select month/i)).not.toBeInTheDocument();
});
```

## Common Patterns

### Testing Custom Labels

```tsx
it('uses custom labels for navigation buttons', () => {
  render(
    <Header
      labels={{
        previous: 'Anterior',
        next: 'Siguiente',
        today: 'Hoy',
      }}
    />
  );

  expect(screen.getByLabelText('Anterior')).toBeInTheDocument();
  expect(screen.getByLabelText('Siguiente')).toBeInTheDocument();
  expect(screen.getByLabelText('Hoy')).toBeInTheDocument();
});
```

### Testing Disabled State

```tsx
it('disables controls when disabled prop is passed', () => {
  render(<Button disabled aria-label="Submit" />);
  expect(screen.getByLabelText('Submit')).toBeDisabled();
});
```

### Testing StylesAPI

```tsx
it('forwards stylesApiProps to child components', () => {
  render(
    <Component
      stylesApiProps={{ classNames: { button: 'custom-button' } }}
    />
  );

  expect(screen.getByRole('button')).toHaveClass('custom-button');
});
```
