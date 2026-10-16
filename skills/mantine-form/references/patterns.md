# @mantine/form Patterns

Every pattern below matches a reviewed example at `https://mantine.dev/form/examples/<Id>`
(the Id is given under each heading). Open the example for the complete code.

## Table of Contents

- Validation
  - [Async validation with loading and success states](#async-validation-with-loading-and-success-states)
  - [Async schema](#async-schema)
  - [Focusing the first invalid field](#focusing-the-first-invalid-field)
  - [Error summary](#error-summary)
  - [Validation triggers per field type](#validation-triggers-per-field-type)
  - [Cross-field validation](#cross-field-validation)
  - [Server errors after submission](#server-errors-after-submission)
- Dependent fields
  - [Conditional fields](#conditional-fields)
  - [Conditional sections](#conditional-sections)
  - [Generated fields](#generated-fields)
  - [Dependent selects](#dependent-selects)
  - [Derived values and totals](#derived-values-and-totals)
  - [Copying one group of fields to another](#copying-one-group-of-fields-to-another)
  - [Select all checkbox](#select-all-checkbox)
  - [Changing a value while the user types](#changing-a-value-while-the-user-types)
- Lists
  - [List fields](#list-fields)
  - [List in a table](#list-in-a-table)
  - [Editable table with per-row reset](#editable-table-with-per-row-reset)
  - [Reordering with drag and drop](#reordering-with-drag-and-drop)
  - [Lists inside lists](#lists-inside-lists)
- Layout
  - [Multi-step form](#multi-step-form)
  - [Tabs with error counts](#tabs-with-error-counts)
  - [Accordion sections that open on errors](#accordion-sections-that-open-on-errors)
  - [Form in a modal](#form-in-a-modal)
- Dirty state and data
  - [Unsaved changes bar](#unsaved-changes-bar)
  - [Per-field dirty state](#per-field-dirty-state)
  - [Unsaved changes prompt](#unsaved-changes-prompt)
  - [Loading a record](#loading-a-record)
  - [Reusing one form for different records](#reusing-one-form-for-different-records)
  - [Autosave to local storage](#autosave-to-local-storage)
  - [Autosave to a server](#autosave-to-a-server)
  - [transformValues](#transformvalues)
  - [Several submit buttons](#several-submit-buttons)
- Architecture
  - [Splitting a form into components](#splitting-a-form-into-components)
  - [Form context](#form-context)
  - [Reusable fields across forms](#reusable-fields-across-forms)
  - [Controlling a form from outside](#controlling-a-form-from-outside)
- Custom inputs
  - [Custom inputs](#custom-inputs)
  - [Inputs with internal state](#inputs-with-internal-state)
  - [Rich text editor](#rich-text-editor)
  - [OTP code with PinInput](#otp-code-with-pininput)
  - [Standalone useField](#standalone-usefield)

---

## Async validation with loading and success states

Id: `UsernameAvailability`. Validate on change with a debounce, run the sync check first and call
the API only for well-formed values. Show one loader: `loading` on the input, the submit button
is `disabled` while validation runs and shows `loading` only for its own submit.

```tsx
const form = useForm<SignUpValues>({
  initialValues: {
    username: '',
    email: '',
  },
  validateInputOnChange: ['username'],
  validateDebounce: 400,
  resolveValidationError: (error) => (error instanceof Error ? error.message : 'Validation failed'),
  validate: {
    username: (value, _values, _path, signal) => {
      if (!USERNAME_PATTERN.test(value)) {
        return 'Use at least 3 lowercase letters, numbers or underscores';
      }
      return checkUsername(value, signal); // Promise<string | null>, rejects on abort
    },
    email: (value) => isEmail('Invalid email')(value) || checkEmail(value),
  },
});

const username = form.useWatchValue('username');
const usernameValidating = form.isValidating('username');
const usernameAvailable =
  USERNAME_PATTERN.test(username) && !usernameValidating && !form.errors.username;

<TextInput
  label="Username"
  loading={usernameValidating}
  success={usernameAvailable ? 'Username is available' : null}
  {...form.getInputProps('username')}
/>

<Button type="submit" disabled={form.validating} loading={form.submitting}>
  Create account
</Button>
```

- `form.isValidating(path)` is `true` during the debounce wait as well, so do not make the input
  `readOnly` while it is `true`: that blocks typing. Use `readOnly` only when the check is
  started by submit (`readOnly={field.isValidating}` in the `useField` example below).
- A newer check aborts the signal of the previous one, its result is ignored.

---

## Async schema

Id: `ZodAsyncSchema`. Async zod refinements work with `schemaResolver(schema)` (no
`{ sync: true }`). `abort: true` on the sync part skips the async refinement when the format is
already wrong. Reuse the sync part of the schema for the success state:

```tsx
const usernameSchema = z.string().min(3, { error: 'At least 3 characters', abort: true });

const schema = z.object({
  username: usernameSchema.refine(async (value) => !(await isUsernameTaken(value)), {
    error: 'Username is taken',
  }),
  password: z.string().min(8, { error: 'At least 8 characters' }),
});

const form = useForm<SignUpValues>({
  initialValues: {
    username: '',
    password: '',
  },
  validateInputOnChange: ['username'],
  validateDebounce: 400,
  validate: schemaResolver(schema),
});

const username = form.useWatchValue('username');
const usernameAvailable =
  usernameSchema.safeParse(username).success &&
  !form.isValidating('username') &&
  !form.errors.username;
```

---

## Focusing the first invalid field

Id: every example. Error keys follow the order of the rules object, so with rules in visual
order the first key is the first invalid field:

```tsx
const handleErrors = (errors: FormErrors) => {
  form.getInputNode(Object.keys(errors)[0])?.focus();
};

<form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
```

- `Radio.Group`, `Checkbox.Group` and other wrappers put `data-path` on the wrapper: focus
  `(node?.querySelector('input') ?? node)?.focus()`.
- A list root error (`'skills'`) has no input: focus the first item input or the "Add" button
  through a ref.
- Hidden fields (inactive tab, closed accordion, previous step) must be shown first, see
  [tabs](#tabs-with-error-counts) and [accordion](#accordion-sections-that-open-on-errors).
- Call the same function after `form.setErrors(serverErrors)`.

---

## Error summary

Id: `ValidateOnBlur`. A summary component takes the `form` object, not separate props, and is
rendered between the last field and the submit button. Each entry focuses its field:

```tsx
function ErrorSummary<Values>({
  form,
  labels,
}: {
  form: UseFormReturnType<Values>;
  labels: Record<string, string>;
}) {
  const entries = Object.entries(form.errors);

  if (entries.length === 0) {
    return null;
  }

  return (
    <Alert
      color="red"
      title={`Please fix ${entries.length} ${entries.length === 1 ? 'field' : 'fields'}`}
    >
      <List size="sm">
        {entries.map(([path, error]) => (
          <List.Item key={path}>
            <Anchor
              component="button"
              type="button"
              size="sm"
              onClick={() => form.getInputNode(path)?.focus()}
            >
              {labels[path] ?? path}
            </Anchor>
            : {error}
          </List.Item>
        ))}
      </List>
    </Alert>
  );
}
```

Show it after a failed submit (`setShowSummary(true)` in the error handler), not while the user
fills the form with on-blur validation.

---

## Validation triggers per field type

Id: `JobApplication`. Pick the trigger per field instead of one global setting:

```tsx
const form = useForm<ApplicationValues>({
  initialValues: {
    fullName: '',
    email: '',
    phone: '',
    salary: '',
    coverLetter: '',
  },
  // Phone is a multi-part input and cover letter is long text, both are validated on submit only
  validateInputOnBlur: ['email', 'salary'],
  validate: {
    fullName: isNotEmpty('Full name is required'),
    email: isEmail('Invalid email'),
    phone: (value) => (value.replace(/\D/g, '').length >= 7 ? null : 'Invalid phone number'),
    salary: isInRange({ min: 30_000, max: 300_000 }, 'Expected salary must be between $30,000 and $300,000'),
    coverLetter: hasLength({ min: 50 }, 'Cover letter must be at least 50 characters'),
  },
});

const coverLetter = form.useWatchValue('coverLetter');

<NumberInput
  label="Expected salary"
  placeholder="Annual salary in USD"
  prefix="$"
  thousandSeparator=","
  allowNegative={false}
  allowDecimal={false}
  max={1_000_000}
  {...form.getInputProps('salary')}
/>

<Textarea
  label="Cover letter"
  autosize
  minRows={4}
  maxRows={8}
  bottomSection={<Text size="xs">{coverLetter.length} characters, at least 50 required</Text>}
  {...form.getInputProps('coverLetter')}
/>

<Button type="submit" onMouseDown={(event) => event.preventDefault()}>Send application</Button>
```

- `NumberInput`: `allowNegative={false}` when negatives make no sense, `allowDecimal={false}` for
  integers, a sensible `max`, and a text placeholder (a number placeholder in the error color
  reads like an invalid value).
- `Textarea autosize` always gets `maxRows`.

---

## Cross-field validation

Id: `DateRange`, `TabsWithErrorCount`. A rule reads other fields from `values`. Rules run only
for the field being validated, so revalidate the dependent field when the other one changes, but
only while it shows an error:

```tsx
validate: {
  password: hasLength({ min: 8 }, 'Password must be at least 8 characters'),
  confirmPassword: matchesField('password', 'Passwords do not match'),
}

form.watch('password', () => {
  if (form.errors.confirmPassword) {
    form.validateField('confirmPassword');
  }
});
```

Dates inputs store strings (`'YYYY-MM-DD'`, `'YYYY-MM-DD HH:mm:ss'`) or `null`; compare them with
`Date.parse` or dayjs. Use `MaskedDateInput` from `@mantine/dates` for dates that users type
(birth date) and `DatePickerInput` for ranges.

---

## Server errors after submission

Id: `ServerErrors`. Keys are dot paths, list items work too (`'lines.2.quantity'`). A server field
error is cleared when the user changes that field. Put errors that do not belong to a field under
a key such as `root` and clear it yourself:

```tsx
const form = useForm<SignUpValues>({
  initialValues: {
    username: '',
    email: '',
  },
  validate: { ... },
  // root is not a field, so it is not cleared by clearInputErrorOnChange
  onValuesChange: () => form.clearFieldError('root'),
});

const handleSubmit = async (values: SignUpValues) => {
  const response = await signUp(values);
  if (!response.ok) {
    form.setErrors(response.errors); // { username: 'Taken' } or { root: 'Sign-ups are disabled' }
    handleErrors(response.errors);
  }
};

// Skip keys that have no input (root) when focusing
const handleErrors = (errors: FormErrors) => {
  const path = Object.keys(errors).find((key) => key !== 'root');
  path && form.getInputNode(path)?.focus();
};

{form.errors.root && <Alert color="red" title="Sign-up failed">{form.errors.root}</Alert>}
```

- If the request function throws instead of returning a result, wrap it in `try` / `catch`
  inside the handler. `form.submitting` resets either way, but an uncaught rejection is reported
  as an unhandled error.
- `clearFieldError` on a key without an error does nothing (no rerender), so calling it from
  `onValuesChange` on every change is cheap. `onValuesChange` also runs for list handlers.
- Server errors are not ordered like the rules object: focus the first key that has an input.

---

## Conditional fields

Id: `ConditionalValidation`. Read the toggle with `useWatchValue`. Hidden fields keep their
values (never erase user input when a checkbox is unchecked); clear only their errors. Make the
rules depend on the toggle with `when`:

```tsx
const form = useForm<OrderValues>({
  initialValues: {
    shipToDifferentAddress: false,
    street: '',
    city: '',
  },
  validate: {
    street: when((values) => values.shipToDifferentAddress, isNotEmpty('Street is required')),
    city: when((values) => values.shipToDifferentAddress, isNotEmpty('City is required')),
  },
});

const shipToDifferentAddress = form.useWatchValue('shipToDifferentAddress');

form.watch('shipToDifferentAddress', ({ value }) => {
  if (!value) {
    form.clearFieldError('street');
    form.clearFieldError('city');
  }
});

<div>
  <Checkbox
    label="Ship to a different address"
    {...form.getInputProps('shipToDifferentAddress', { type: 'checkbox' })}
  />

  <Collapse expanded={shipToDifferentAddress}>
    <Stack mt="md">
      <TextInput label="Street" {...form.getInputProps('street')} />
      <TextInput label="City" {...form.getInputProps('city')} />
    </Stack>
  </Collapse>
</div>;
```

Do not make `Collapse` a direct child of a `Stack` with `gap`: the gap jumps when it closes.
Group it with its toggle and give the content its own `mt`.

With a zod schema, add the issues in `superRefine` with the field path
(`ctx.addIssue({ code: 'custom', path: ['street'], message: 'Street is required' })`). Zod 4
skips the refinement while any field has a type error (`null` in a `z.string()` field), so make
nullable inputs `.nullable()` in the schema and require them in the refinement.

---

## Conditional sections

Id: `ConditionalSections`. Different groups of fields per mode, each group in its own component
and its own object in values. A small condition helper passed to `when` keeps rules readable:

```tsx
const isType = (type: AccountType) => (values: AccountValues) => values.accountType === type;

const form = useForm<AccountValues>({
  initialValues: {
    accountType: 'personal',
    personal: {
      firstName: '',
      birthDate: null,
    },
    company: {
      name: '',
      vatNumber: '',
    },
  },
  validate: {
    personal: {
      firstName: when(isType('personal'), isNotEmpty('First name is required')),
      birthDate: when(isType('personal'), isNotEmpty('Birth date is required')),
    },
    company: {
      name: when(isType('company'), isNotEmpty('Company name is required')),
      vatNumber: when(isType('company'), matches(/^[A-Z]{2}\d{8,12}$/, 'Invalid VAT number')),
    },
  },
});

const accountType = form.useWatchValue('accountType');

const personalFields = ['firstName', 'birthDate'] as const;
const companyFields = ['name', 'vatNumber'] as const;

form.watch('accountType', ({ value }) => {
  if (value === 'personal') {
    companyFields.forEach((field) => form.clearFieldError(`company.${field}`));
  } else {
    personalFields.forEach((field) => form.clearFieldError(`personal.${field}`));
  }
});

{
  accountType === 'personal' ? <PersonalFields form={form} /> : <CompanyFields form={form} />;
}
```

---

## Generated fields

Id: `GeneratedSlug`. Fill a field from another until the user edits it. `touchTrigger: 'focus'`
makes only focus mark a field touched, so `setFieldValue` does not:

```tsx
const form = useForm<PageValues>({
  touchTrigger: 'focus',
  initialValues: {
    name: '',
    slug: '',
  },
});

// forceUpdate: false updates only the input subscribed to the slug field,
// without rerendering the component that calls useForm
form.watch('name', ({ value }) => {
  if (!form.isTouched('slug')) {
    form.setFieldValue('slug', slugify(value), { forceUpdate: false });
  }
});

const slugProps = form.getInputProps('slug');

// Normalize a hand-edited value too
const handleSlugBlur = (event: React.FocusEvent<HTMLInputElement>) => {
  form.setFieldValue('slug', slugify(event.currentTarget.value), {
    forceUpdate: false,
  });
  slugProps.onBlur?.(event);
};

<TextInput label="Slug" {...slugProps} onBlur={handleSlugBlur} />;
```

---

## Dependent selects

Id: `DependentSelects`. Reset the child field in `watch`, load its options in an effect keyed by
the watched parent value:

```tsx
const country = form.useWatchValue('country');

form.watch('country', () => {
  form.setFieldValue('city', null);
});

useEffect(() => {
  if (!country) {
    setCityOptions([]);
    setLoading(false);
    return undefined;
  }

  let cancelled = false;
  setLoading(true);
  fetchCities(country).then((result) => {
    if (!cancelled) {
      setCityOptions(result);
      setLoading(false);
    }
  });

  return () => {
    cancelled = true;
  };
}, [country]);

<Select
  label="City"
  placeholder={country ? 'Pick a city' : 'Pick a country first'}
  data={cityOptions}
  disabled={!country || loading}
  loading={loading}
  {...form.getInputProps('city')}
/>;
```

---

## Derived values and totals

Id: `OrderTotal`, `InvoiceItems`. Subscribe to the inputs of the calculation with
`useWatchValue` and compute during render. Send the computed value with `transformValues`
instead of storing it in a field:

```tsx
const form = useForm<OrderValues, OrderPayload>({
  initialValues: {
    product: null,
    quantity: 1,
    discount: 0,
  },
  transformValues: (values) => ({
    ...values,
    total: calculateTotal(values),
  }),
});

const product = form.useWatchValue('product');
const quantity = form.useWatchValue('quantity');
const discount = form.useWatchValue('discount');
const total = calculateTotal({ product, quantity, discount });
```

For a total over a list, `form.useWatchValue('items')` rerenders on any change inside the list.
Call it in the component that renders the total (a table component), not in the form root.

---

## Copying one group of fields to another

Id: `SameAsBilling`. Copy the group when the checkbox is checked and keep it in sync while it
stays checked. `cascadeUpdates: true` notifies watchers of `shipping.city` when the whole
`shipping` object is set. `enhanceGetInputProps` disables the copied inputs:

```tsx
const form = useForm<CheckoutValues>({
  cascadeUpdates: true,
  initialValues: {
    billing: emptyAddress,
    shipping: emptyAddress,
    sameAsBilling: false,
  },
  validate: {
    billing: addressRules,
    shipping: {
      street: when((values) => !values.sameAsBilling, addressRules.street),
      city: when((values) => !values.sameAsBilling, addressRules.city),
    },
  },
  enhanceGetInputProps: ({ field, form }) =>
    field.startsWith('shipping.') && form.getValues().sameAsBilling ? { disabled: true } : {},
});

// enhanceGetInputProps reads sameAsBilling during render, subscribe to rerender on toggle
const sameAsBilling = form.useWatchValue('sameAsBilling');

form.watch('sameAsBilling', ({ value }) => {
  if (value) {
    form.setFieldValue('shipping', { ...form.getValues().billing });
  }
});

form.watch('billing', ({ value }) => {
  if (form.getValues().sameAsBilling) {
    form.setFieldValue('shipping', { ...value }, { forceUpdate: false });
  }
});
```

A reusable group component takes the form and the path, see [splitting a form](#splitting-a-form-into-components).

---

## Select all checkbox

Id: `SelectAll`. Store the selection as an array bound to `Checkbox.Group`, derive the parent
checkbox state from it:

```tsx
const selected = form.useWatchValue('permissions');
const allSelected = selected.length === permissions.length;

<Checkbox
  label="Permissions"
  checked={allSelected}
  indeterminate={selected.length > 0 && !allSelected}
  onChange={() => form.setFieldValue('permissions', allSelected ? [] : permissions.map((item) => item.value))}
/>

<Checkbox.Group {...form.getInputProps('permissions')}>
  <Stack gap="sm" mt="sm">
    {permissions.map((item) => <Checkbox key={item.value} value={item.value} label={item.label} ml={30} />)}
  </Stack>
</Checkbox.Group>
```

---

## Changing a value while the user types

To transform what the user types (uppercase, strip characters), override `onChange` and call the
original with the new value:

```tsx
const codeProps = form.getInputProps('warehouseCode');

<TextInput
  label="Warehouse code"
  {...codeProps}
  onChange={(event) => codeProps.onChange(event.currentTarget.value.toUpperCase())}
/>;
```

A replaced `onChange` no longer carries the field subscription: the form component rerenders on
changes of this field, like with a native input. That is fine for a few fields.

To set other fields when one changes, use `form.watch` instead of overriding `onChange`. For
list rows, one watcher on the list compares the rows:

```tsx
form.watch('lines', ({ value, previousValue }) => {
  value.forEach((line, index) => {
    if (line.productId !== previousValue[index]?.productId) {
      const product = catalogue.find((item) => item.id === line.productId);
      product && form.setFieldValue(`lines.${index}.unitPrice`, product.price);
    }
  });
});
```

---

## List fields

Id: `ListMinimum`. Store a stable id in every item (`randomId()` from `@mantine/hooks`) and use it
as the React key. Use `formRootRule` for rules about the list itself, render its error with
`Input.Error`, and label the list with `Input.Label`:

```tsx
const form = useForm<ProjectValues>({
  initialValues: {
    projectName: '',
    skills: [
      {
        id: randomId(),
        name: '',
      },
    ],
  },
  validateInputOnChange: [`skills.${FORM_INDEX}.name`],
  validate: {
    projectName: isNotEmpty('Project name is required'),
    skills: {
      [formRootRule]: (skills) => {
        if (skills.length === 0) {
          return 'Add at least one skill';
        }
        const names = skills.map((skill) => skill.name.trim().toLowerCase()).filter(Boolean);
        return new Set(names).size === names.length ? null : 'Skills must be unique';
      },
      name: isNotEmpty('Skill name is required'),
    },
  },
});

// Uniqueness depends on all names, revalidate the list while its error is shown
form.watch('skills', () => {
  if (form.errors.skills) {
    form.validateField('skills');
  }
});

const skills = form.getValues().skills.map((skill, index) => (
  <Group key={skill.id} align="flex-start" wrap="nowrap">
    <TextInput
      aria-label="Skill name"
      style={{ flex: 1 }}
      {...form.getInputProps(`skills.${index}.name`)}
    />
    <ActionIcon
      variant="default"
      size="input-sm"
      aria-label="Remove skill"
      onClick={() => form.removeListItem('skills', index)}
    >
      <IconTrash size={18} color="var(--mantine-color-red-6)" />
    </ActionIcon>
  </Group>
));

<Stack gap="xs">
  <Input.Label>Skills</Input.Label>
  {skills.length > 0 ? skills : <Text size="sm">No skills added</Text>}
  {form.errors.skills && <Input.Error>{form.errors.skills}</Input.Error>}
  <Group>
    <Button
      ref={addSkillRef}
      variant="default"
      onClick={() =>
        form.insertListItem('skills', {
          id: randomId(),
          name: '',
        })
      }
    >
      Add skill
    </Button>
  </Group>
</Stack>;
```

- List handlers rerender the form component, so `form.getValues().skills.map` is correct in the
  component that calls `useForm`. In a child component that renders the list, use
  `form.useWatchValue('skills')`.
- List handlers move field errors with their rows and clear the list error. Do not validate
  right after `insertListItem`: a new empty row must not show an error before the user typed.
- **Rules that depend on other items** get the item path as the third argument (`'employees.1.email'`):
  `const index = Number(path.split('.')[1])`.
- Array values (tags, multi-select) are plain fields: `TagsInput`, `MultiSelect`, `Chip.Group`
  with `getInputProps('tags')`. Give `TagsInput` for emails `splitChars={[',', ' ']}`.

**List methods:**

```tsx
form.insertListItem('employees', { id: randomId(), name: '' }); // append
form.insertListItem('employees', { id: randomId(), name: '' }, 0); // prepend
form.removeListItem('employees', index);
form.reorderListItem('employees', { from: 2, to: 0 });
form.replaceListItem('employees', index, { id: randomId(), name: 'New' });
```

---

## List in a table

Id: `InvoiceItems`. Put the table in its own component that takes the form. `layout="fixed"`
with explicit widths keeps columns stable while the user types; `Table.ScrollContainer` handles
narrow screens:

```tsx
function InvoiceItemsTable({ form }: { form: UseFormReturnType<{ items: InvoiceItem[] }> }) {
  const items = form.useWatchValue('items');

  const rows = items.map((item, index) => (
    <Table.Tr key={item.key}>
      <Table.Td>
        <TextInput aria-label="Description" {...form.getInputProps(`items.${index}.description`)} />
      </Table.Td>
      <Table.Td>
        <NumberInput
          aria-label="Quantity"
          min={1}
          max={1000}
          allowNegative={false}
          allowDecimal={false}
          {...form.getInputProps(`items.${index}.quantity`)}
        />
      </Table.Td>
      <Table.Td ta="right" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {formatMoney(getSubtotal(item))}
      </Table.Td>
      <Table.Td>{/* remove button */}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <Table.ScrollContainer minWidth={600}>
        <Table layout="fixed">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Description</Table.Th>
              <Table.Th w={110}>Qty</Table.Th>
              <Table.Th w={150} ta="right">
                Subtotal
              </Table.Th>
              <Table.Th w={56} />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      {form.errors.items && <Input.Error mt="xs">{form.errors.items}</Input.Error>}
    </div>
  );
}
```

`UseFormReturnType<{ items: InvoiceItem[] }>` accepts any form whose values contain `items`.

---

## Editable table with per-row reset

Id: `EditableTable`. A row component subscribes to the dirty state of its own row, so only that
row rerenders. `resetField` restores a whole subtree:

```tsx
function RowResetButton({ form, index }: { form: TableForm; index: number }) {
  const dirty = form.useDirty(`rows.${index}`);

  if (!dirty) {
    return null;
  }

  return (
    <ActionIcon
      variant="default"
      aria-label="Reset row"
      onClick={() => form.resetField(`rows.${index}`)}
    >
      <IconArrowBackUp size={16} />
    </ActionIcon>
  );
}

// Form root
const dirty = form.useDirty();

const handleSubmit = (values: TableValues) => {
  const changedRows = values.rows.filter((_, index) => form.isDirty(`rows.${index}`)).length;
  form.setInitialValues(values);
  form.resetDirty(values);
};

{
  dirty && (
    <Button variant="default" onClick={form.reset}>
      Reset all
    </Button>
  );
}
```

Use `<Table layout="fixed">` with explicit header widths so the column does not jump when the
button appears, and `Table.ScrollContainer minWidth maxHeight` with `stickyHeader` for long tables.

---

## Reordering with drag and drop

Id: `ReorderListItems`. With dnd-kit, use the stable item ids as sortable ids and call
`reorderListItem` on drop:

```tsx
const ids = form.useWatchValue('items').map((item) => item.key);

const handleDragEnd = ({ active, over }: DragEndEvent) => {
  if (over && active.id !== over.id) {
    form.reorderListItem('items', {
      from: ids.indexOf(String(active.id)),
      to: ids.indexOf(String(over.id)),
    });
  }
};

<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
  <SortableContext items={ids} strategy={verticalListSortingStrategy}>
    {ids.map((id, index) => (
      <SortableItem key={id} id={id} index={index} form={form} />
    ))}
  </SortableContext>
</DndContext>;
```

Inside `SortableItem`, bind the input with `form.getInputProps(\`items.${index}.title\`)`and give
the dragged row`zIndex: 1` so it paints above its neighbours.

---

## Lists inside lists

Id: `QuestionnaireBuilder`. Each level is a component that subscribes to its own list. Rules nest
the same way, with a `formRootRule` per level:

```tsx
validate: {
  questions: {
    [formRootRule]: isNotEmpty('Add at least one question'),
    text: isNotEmpty('Question text is required'),
    options: {
      [formRootRule]: (value) => (value.length < 2 ? 'Add at least 2 options' : null),
      label: isNotEmpty('Option label is required'),
    },
  },
}

function OptionsList({ form, questionIndex }: { form: QuestionnaireForm; questionIndex: number }) {
  const options = form.useWatchValue(`questions.${questionIndex}.options`);
  const listError = form.errors[`questions.${questionIndex}.options`];

  return (
    <Stack gap="xs" pl="xl">
      {options.map((option, optionIndex) => (
        <TextInput key={option.key} {...form.getInputProps(`questions.${questionIndex}.options.${optionIndex}.label`)} />
      ))}
      {listError && <Input.Error>{listError}</Input.Error>}
      <Button variant="default" onClick={() => form.insertListItem(`questions.${questionIndex}.options`, createOption())}>
        Add option
      </Button>
    </Stack>
  );
}
```

Indent the nested list by twice the parent gap (`pl="xl"`) so it reads as a different level.
Cards that contain inputs use `<Surface level={0} withBorder p="md">` (the default level has the
same background as inputs in dark mode).

---

## Multi-step form

Id: `StepperWizard`. One form for all steps. "Next" validates every field of the current step so
all its errors show at once:

```tsx
const STEP_FIELDS: (keyof WizardValues)[][] = [
  ['username', 'password'],
  ['name', 'email'],
];

const nextStep = () => {
  const invalidFields = STEP_FIELDS[active].filter((field) => form.validateField(field).hasError);
  if (invalidFields.length > 0) {
    form.getInputNode(invalidFields[0])?.focus();
  } else {
    setActive((current) => current + 1);
  }
};
```

With async rules `validateField` returns a promise: `await Promise.all(...)` first. Values of
unmounted steps are kept. Pass the form to each step component as a prop
(`form: WizardForm`); a summary step reads `form.getValues()`.

---

## Tabs with error counts

Id: `TabsWithErrorCount`. Map fields to tabs, count errors per tab from `form.errors`, and switch
to the first tab with an error before focusing:

```tsx
const TAB_FIELDS: Record<SettingsTab, string[]> = {
  profile: ['name', 'email'],
  security: ['password', 'confirmPassword'],
};

const countErrors = (errors: FormErrors, fields: string[]) =>
  fields.filter((field) => field in errors).length;

const handleErrors = (errors: FormErrors) => {
  const firstTab = TABS.find((tab) => countErrors(errors, TAB_FIELDS[tab.value]) > 0);
  if (firstTab) {
    flushSync(() => setActiveTab(firstTab.value)); // the panel must be visible before focus
    const firstField = TAB_FIELDS[firstTab.value].find((field) => field in errors);
    firstField && form.getInputNode(firstField)?.focus();
  }
};

<Tabs.Tab
  value="profile"
  rightSection={
    count > 0 && (
      <Badge color="red" size="xs" circle>
        {count}
      </Badge>
    )
  }
>
  Profile
</Tabs.Tab>;
```

---

## Accordion sections that open on errors

Id: `AccordionSections`. Control the accordion with `useAccordion` and expand every section that
contains an error (first path segment) in the error handler:

```tsx
const accordion = useAccordion({ multiple: true, defaultValue: ['personal'] });

// Subscribe to each section so completion indicators update while typing
form.useWatchValue('personal');
form.useWatchValue('company');

const handleErrors = (errors: FormErrors) => {
  const paths = Object.keys(errors);
  flushSync(() => paths.forEach((path) => accordion.expand(path.split('.')[0])));
  form.getInputNode(paths[0])?.focus();
};

<Accordion controller={accordion} variant="separated">
  <Accordion.Item value="personal">
    <Accordion.Control>
      <SectionControl label="Personal" valid={form.isValid('personal')} />
    </Accordion.Control>
    <Accordion.Panel>
      <PersonalSection form={form} />
    </Accordion.Panel>
  </Accordion.Item>
</Accordion>;
```

The panel animates open, so a `focus()` right after expanding can be lost; the example stores
the pending path and focuses it in `Accordion.Panel onTransitionEnd`.

---

## Form in a modal

Id: `FormInModal`. Reset the form whenever the modal closes, including after a successful submit,
and block closing while submitting:

```tsx
const handleSubmit = async (values: UserValues) => {
  await createUser(values);
  modal.close();
};

// onClose runs for every way the modal is closed, including a successful submit
const modal = useModal({
  title: 'Add user',
  onClose: form.reset,
  closeOnClickOutside: !form.submitting,
  closeOnEscape: !form.submitting,
  withCloseButton: !form.submitting,
  children: (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <UserForm form={form} onCancel={() => modal.close()} />
    </form>
  ),
});

<Button onClick={() => modal.open()}>Add user</Button>;
```

With `<Modal opened onClose>`, call `form.reset()` in the same `onClose`. Put `data-autofocus` on
the first input.

---

## Unsaved changes bar

Id: `SettingsSaveBar`. `form.useDirty()` opens an `ActionBar`; after saving, the saved values
become the new baseline:

```tsx
const dirty = form.useDirty();

const handleSubmit = async (values: SettingsValues) => {
  const settings = await saveSettings(values);
  // Saved values become the new baseline for dirty checks
  form.setInitialValues(settings);
  form.resetDirty(settings);
};

<form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
  {/* fields */}
  <ActionBar opened={dirty} withinPortal={false} withBorder shadow="md">
    <Text size="sm" fw="var(--mantine-font-weight-medium)" px="xs">
      You have unsaved changes
    </Text>
    <ActionBar.Divider />
    <ActionIcon
      variant="default"
      aria-label="Discard changes"
      onClick={form.reset}
      disabled={form.submitting}
    >
      ...
    </ActionIcon>
    <ActionIcon type="submit" aria-label="Save changes" loading={form.submitting}>
      ...
    </ActionIcon>
  </ActionBar>
</form>;
```

`withinPortal={false}` keeps the submit button inside the `<form>`.

---

## Per-field dirty state

Id: `DirtyFields`. A field component subscribes to its own dirty state and offers a reset:

```tsx
function DirtyField({
  form,
  field,
  label,
}: {
  form: ProfileForm;
  field: keyof ProfileValues;
  label: string;
}) {
  const dirty = form.useDirty(field);

  return (
    <TextInput
      label={label}
      mod={{ dirty }}
      rightSectionPointerEvents="all"
      rightSection={
        dirty && (
          <ActionIcon
            variant="subtle"
            color="gray"
            aria-label={`Reset ${label}`}
            onClick={() => form.resetField(field)}
          >
            <IconArrowBackUp size={16} />
          </ActionIcon>
        )
      }
      {...form.getInputProps(field)}
    />
  );
}
```

Style the dirty state with `[data-dirty]` in a CSS module.

---

## Unsaved changes prompt

Id: `UnsavedChangesPrompt`. Read `form.isDirty()` inside handlers (they run after the change):

```tsx
useEffect(() => {
  // The browser shows its own "Leave site?" dialog when preventDefault is called
  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    if (form.isDirty()) {
      event.preventDefault();
    }
  };
  window.addEventListener('beforeunload', handleBeforeUnload);
  return () => window.removeEventListener('beforeunload', handleBeforeUnload);
}, []);

const handleNavigate = () => (form.isDirty() ? openDiscardModal() : navigate('/dashboard'));
```

---

## Loading a record

Id: `EditRecord`. Call `form.initialize` when the data arrives: it sets values and initial values
at once, so the form is not dirty and `reset` returns to the loaded values. It works once. Keep
the inputs read-only until then:

```tsx
const form = useForm<UserRecord>({
  initialValues: {
    name: '',
    role: null,
  },
  // Inputs are read-only until the record is loaded with form.initialize
  enhanceGetInputProps: ({ form }) => ({ readOnly: !form.initialized }),
});

const dirty = form.useDirty();
const loading = !form.initialized;

useEffect(() => {
  fetchUser().then((user) => form.initialize(user));
}, []);

<TextInput label="Name" loading={loading} {...form.getInputProps('name')} />
<Button variant="default" onClick={form.reset} disabled={loading || !dirty}>Reset to loaded values</Button>
<Button type="submit" loading={form.submitting} disabled={loading}>Save</Button>
```

After a successful save, `form.setInitialValues(saved)` and `form.resetDirty(saved)`.

---

## Reusing one form for different records

`initialize` works once. For a form that stays mounted and is opened for different records (an
edit dialog over a table), set new initial values and reset:

```tsx
const openFor = (user: UserValues) => {
  form.setInitialValues(user);
  form.reset();
  setOpened(true);
};
```

`reset` replaces values and clears errors, touched and dirty state of the previous record.

---

## Autosave to local storage

Id: `AutosaveLocalStorage`. Save from `onValuesChange` through a debounced callback. Write with
`writeLocalStorageValue` (no rerender of the form), read the status in a separate component with
`useLocalStorage`:

```tsx
import {
  readLocalStorageValue,
  removeLocalStorageValue,
  useDebouncedCallback,
  useWindowEvent,
  writeLocalStorageValue,
} from '@mantine/hooks';

const saveDraft = useDebouncedCallback(
  (values: PostValues) =>
    writeLocalStorageValue<Draft>({
      key: STORAGE_KEY,
      value: { values, savedAt: new Date().toLocaleTimeString() },
    }),
  { delay: 1000, flushOnUnmount: true },
);

const form = useForm<PostValues>({
  initialValues,
  onValuesChange: saveDraft,
});

// Restore the draft once on mount, setValues schedules a save that is not needed
useEffect(() => {
  const stored = readLocalStorageValue<Draft | null>({
    key: STORAGE_KEY,
    defaultValue: null,
  });
  if (stored) {
    form.setValues(stored.values);
    saveDraft.cancel();
  }
}, []);

// Reloading or closing the tab does not unmount the form, flush the pending save
useWindowEvent('pagehide', () => saveDraft.flush());

const discardDraft = () => {
  // reset triggers onValuesChange, cancel the save it scheduled
  form.reset();
  saveDraft.cancel();
  removeLocalStorageValue({ key: STORAGE_KEY });
};

function DraftStatus() {
  const [draft] = useLocalStorage<Draft | null>({
    key: STORAGE_KEY,
    defaultValue: null,
  });
  return <Text size="sm">{draft ? `Draft saved at ${draft.savedAt}` : 'No draft saved'}</Text>;
}
```

---

## Autosave to a server

Id: `AutosaveServer`. Same debounce, then make the saved values the new baseline:

```tsx
const form = useForm<NoteValues>({
  initialValues,
  onValuesChange: (values) => save(values),
});

const dirty = form.useDirty();

const save = useDebouncedCallback(
  async (values: NoteValues) => {
    setStatus('saving');
    await saveNote(values);
    form.setInitialValues(values);
    form.resetDirty(values);
    setStatus('saved');
  },
  { delay: 800, flushOnUnmount: true },
);
```

---

## transformValues

Id: `SubmitWithTransform`, `TypedForm`. Keep values in the shape inputs need and build the API
payload in `transformValues`. Validation runs on the raw values:

```tsx
const form = useForm({
  initialValues: {
    date: null as string | null,
    capacity: '' as number | string,
    emails: [] as string[],
  },
  transformValues: (values) => ({
    ...values,
    date: values.date ? new Date(values.date).toISOString() : null,
    capacity: Number(values.capacity) || 0,
    emails: values.emails.map((email) => email.trim().toLowerCase()),
  }),
});

type EventPayload = TransformedValues<typeof form>;
const handleSubmit = (payload: EventPayload) => createEvent(payload);

// Preview without submitting
form.getTransformedValues();
```

With declared types: `useForm<ProfileValues, ProfilePayload>({ ... })` and
`type ProfileForm = UseFormReturnType<ProfileValues, ProfilePayload>`. Name types after the
domain (`ProfileValues`, `ProfilePayload`), not `Values` / `Payload`.

---

## Several submit buttons

For a second action that validates less ("Save draft"), validate the fields it needs and read the
values yourself instead of going through `form.onSubmit`:

```tsx
const handleSaveDraft = () => {
  const { hasError } = form.validateField('name');
  if (!hasError) {
    saveDraft(form.getTransformedValues());
  }
};

<Button variant="default" onClick={handleSaveDraft}>Save draft</Button>
<Button type="submit">Publish</Button>
```

---

## Splitting a form into components

Id: `TabsWithErrorCount`, `StepperWizard`, `ConditionalSections`. Keep the `useForm` call and the
submit logic in one component, put groups of fields in their own components that take the form
as a prop. Declare the form type once per feature:

```tsx
// types.ts
export interface SettingsValues {
  name: string;
  password: string;
}
export type SettingsForm = UseFormReturnType<SettingsValues>;

// ProfileTab.tsx
export function ProfileTab({ form }: { form: SettingsForm }) {
  return <TextInput label="Name" {...form.getInputProps('name')} />;
}
```

A group used under different paths takes the path, typed with `FormPath`:

```tsx
function AddressFields<Values>({ form, path }: { form: UseFormReturnType<Values>; path: FormPath<Values, Address> }) {
  return (
    <>
      <TextInput label="Street" {...form.getInputProps(`${path}.street`)} />
      <TextInput label="City" {...form.getInputProps(`${path}.city`)} />
    </>
  );
}

<AddressFields form={form} path="billing" />
<AddressFields form={form} path="shipping" />
```

A form with `transformValues` is not assignable to `UseFormReturnType<Values>`: type the prop
`UseFormReturnType<Values, any>` in a generic component that must accept such forms.

---

## Form context

Id: `FormContextSplit`, `ReusableFields`. For deep trees, share the form through context:

```tsx
// form-context.ts
export const [ProfileFormProvider, useProfileFormContext, useProfileForm] =
  createFormContext<ProfileValues>();

// fields.tsx — typed field components
export function TextField({
  name,
  ...props
}: { name: LooseKeys<ProfileValues> } & Omit<TextInputProps, 'name'>) {
  const form = useProfileFormContext();
  return <TextInput {...props} {...form.getInputProps(name)} />;
}

// ProfileForm.tsx
const form = useProfileForm({ initialValues, validate });

<ProfileFormProvider form={form}>
  <form onSubmit={form.onSubmit(handleSubmit)}>
    <TextField name="fullName" label="Full name" />
  </form>
</ProfileFormProvider>;
```

---

## Reusable fields across forms

Id: `ReusableFieldsAcrossForms`. A field component typed with `UseFieldReturnType` works with any
form through `form.getField(path)` and with a standalone `useField`. Export the rule next to it:

```tsx
export const emailRule = isEmail('Enter a valid email address');

export function EmailField({ field, label = 'Email', ...others }: { field: UseFieldReturnType<string> } & Omit<TextInputProps, 'value' | 'onChange' | 'error'>) {
  const inputProps = field.getInputProps();

  const handleBlur = () => {
    inputProps.onBlur?.();
    const normalized = field.getValue().trim().toLowerCase();
    if (normalized !== field.getValue()) {
      field.setValue(normalized);
    }
  };

  return <TextInput inputMode="email" autoComplete="email" label={label} {...others} {...inputProps} onBlur={handleBlur} />;
}

<EmailField field={signupForm.getField('email')} />
<EmailField field={checkoutForm.getField('contact.email')} />

const newsletterEmail = useField({ initialValue: '', validate: emailRule });
<EmailField field={newsletterEmail} />
```

Use `inputMode="email"`, not `type="email"`: the browser's own validation blocks `form.onSubmit`.
For checkboxes: `UseFieldReturnType<boolean, 'checkbox'>` and
`form.getField('terms', { type: 'checkbox' })`.

---

## Controlling a form from outside

Id: `FormActions`. A component outside the form tree controls it with `createFormActions`:

```tsx
// form-actions.ts
// Form name must match the `name` option passed to useForm
export const demoFormActions = createFormActions<DemoFormValues>('demo-form');

// DemoForm.tsx
const form = useForm<DemoFormValues>({
  // Required for createFormActions('demo-form') to reach this form
  name: 'demo-form',
  initialValues,
});
<form id="demo-form" onSubmit={form.onSubmit(handleSubmit)}>...</form>

// Toolbar.tsx, rendered anywhere on the page
<Button onClick={() => demoFormActions.setValues(demoValues)}>Fill demo data</Button>
<Button onClick={() => demoFormActions.reset()}>Clear</Button>
<Button type="submit" form="demo-form">Submit</Button>
```

To change every input at once (disable while saving), use `enhanceGetInputProps`:
`enhanceGetInputProps: ({ form }) => ({ disabled: form.submitting })`.

---

## Custom inputs

Id: `CustomInputSubscription`. A component works with `form.getInputProps` when it accepts
`value`, `onChange`, `error`, `onFocus` and `onBlur`; `onChange` can be called with a raw value.
Subscribe it to its field with `useFormField` from `@mantine/hooks`, then it rerenders alone and
the form component does not rerender on its changes:

```tsx
import { useFormField, useId } from '@mantine/hooks';

interface StarRatingProps {
  label?: string;
  value?: number;
  onChange?: (value: number) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  error?: React.ReactNode;
  'data-path'?: string;
}

function StarRating({
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  'data-path': dataPath,
}: StarRatingProps) {
  const id = useId();
  const field = useFormField<number>(onChange);
  const current = (field.subscribed ? field.value : value) ?? 0;

  return (
    <Input.Wrapper id={id} label={label} labelElement="div" error={error}>
      <Group role="group" aria-labelledby={`${id}-label`} gap={2}>
        {[1, 2, 3, 4, 5].map((star) => (
          <UnstyledButton
            key={star}
            type="button"
            aria-label={`${star} stars`}
            data-path={star === 1 ? dataPath : undefined}
            onClick={() => onChange?.(star)}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            <IconStar fill={star <= current ? 'currentColor' : 'none'} />
          </UnstyledButton>
        ))}
      </Group>
    </Input.Wrapper>
  );
}

<StarRating label="Rating" {...form.getInputProps('rating')} />;
```

- A component built on `useUncontrolled({ value, defaultValue, onChange })` is subscribed
  automatically, no `useFormField` call needed.
- Put `data-path` on the focusable element so `form.getInputNode(path)?.focus()` works.
- `onBlur` on a wrapper fires when focus moves between its parts. For an input made of several
  focusable parts, call `onBlur` only when `event.relatedTarget` is outside the component.
- A field can hold an object (`{ country, number }`); its error is at the field path.
- `required` adds the native attribute and the browser blocks submit before `form.onSubmit`
  runs. Use `withAsterisk` for the mark and validate in the form.

---

## Inputs with internal state

A component that keeps state the value cannot express (a partially typed date, separate month and
year parts, a masked input) must clear it when the form writes the value (`reset`,
`setFieldValue`). Use `onExternalWrite`; never call `onChange` from it:

```tsx
function ExpiryInput({ value, onChange }: { value?: string; onChange?: (value: string) => void }) {
  const [parts, setParts] = useState(() => splitExpiry(value));

  useFormField<string>(onChange, {
    subscribe: false, // renders from its own state
    onExternalWrite: (external) => setParts(splitExpiry(external)),
  });

  const handleChange = (next: { month: string; year: string }) => {
    setParts(next);
    onChange?.(next.month.length === 2 && next.year.length === 2 ? `${next.month}/${next.year}` : '');
  };

  return (...);
}
```

---

## Rich text editor

Id: `RichTextForm`. Subscribe the tiptap editor to the field and write external values into it;
validate with `isNotEmptyHTML`:

```tsx
function ContentEditor({ value, onChange, error, label, placeholder, 'data-path': dataPath }: ContentEditorProps) {
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  });

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit, Placeholder.configure({ placeholder })],
    content: value ?? '',
    editorProps: { attributes: dataPath ? { 'data-path': dataPath } : {} },
    onUpdate: ({ editor }) => onChangeRef.current?.(editor.getHTML()),
  });

  // The form does not rerender on every keystroke,
  // form.reset and form.setFieldValue write the new content into the editor
  useFormField<string>(onChange, {
    onExternalWrite: (content) => editor?.commands.setContent(content, { emitUpdate: false }),
  });

  return (
    <Input.Wrapper label={label} labelElement="div" error={error}>
      <RichTextEditor editor={editor}>...</RichTextEditor>
    </Input.Wrapper>
  );
}

validate: {
  content: isNotEmptyHTML('Article content is required'),
}
```

---

## OTP code with PinInput

Id: `OtpForm`. Feed `usePinInput` from `getInputProps`, submit when all digits are entered,
disable the inputs while verifying and refocus after they are enabled again:

```tsx
const codeProps = form.getInputProps('code', { withError: false });
const pinInput = usePinInput({
  length: 6,
  value: codeProps.value,
  onChange: codeProps.onChange,
});

const handleSubmit = async (values: OtpValues) => {
  if (await verifyCode(values.code)) {
    form.reset();
  } else {
    // Never keep a complete invalid code: any keystroke would resubmit it
    form.setFieldValue('code', '');
    form.setFieldError('code', 'Invalid code');
  }
};

form.watch('code', ({ value }) => {
  if (value.length === 6) {
    form.onSubmit(handleSubmit)();
  }
});

// A focus() call on a still disabled input is lost
useDidUpdate(() => {
  if (!form.submitting && form.errors.code) {
    pinInput.focus(0);
  }
}, [form.submitting]);

<Input.Wrapper
  label="Verification code"
  description={form.submitting ? 'Verifying code…' : 'Enter the code sent to your phone'}
  error={form.errors.code}
>
  <PinInput
    controller={pinInput}
    type="number"
    disabled={form.submitting}
    error={!!form.errors.code}
    onFocus={codeProps.onFocus}
    onBlur={codeProps.onBlur}
  />
</Input.Wrapper>;
```

---

## Standalone useField

Id: `SubscribeInput`. One input with its own validation, no `useForm`. Here the async check runs
on submit, so the input is `readOnly` while it runs and the button shows the loader:

```tsx
const field = useField({
  initialValue: '',
  validate: checkSubscription, // (email) => Promise<string | null>
});

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const email = field.getValue();
  const error = await field.validate();

  if (error) {
    inputRef.current?.focus();
  } else {
    field.reset();
    notifications.show({
      title: 'Subscribed',
      message: `${email} is now subscribed`,
    });
  }
};

<form onSubmit={handleSubmit}>
  <TextInput
    label="Email"
    readOnly={field.isValidating}
    ref={inputRef}
    {...field.getInputProps()}
  />
  <Button type="submit" loading={field.isValidating}>
    Subscribe
  </Button>
</form>;
```

`emailRegexp` from `@mantine/form` is the regexp behind `isEmail`, use it in your own checks.
