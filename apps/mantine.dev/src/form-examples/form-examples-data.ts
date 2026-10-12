import type { ExampleItem, ExamplesGroup } from '@/components/ExamplesShell';
import { FORM_EXAMPLES_COMPONENTS } from './examples';

export interface FormExample extends ExampleItem {
  id: keyof typeof FORM_EXAMPLES_COMPONENTS;
  type:
    | 'basic'
    | 'validation'
    | 'dependent'
    | 'lists'
    | 'layout'
    | 'data'
    | 'uncontrolled'
    | 'architecture'
    | 'inputs';

  /** use-form APIs used in the example, used in search */
  features: string[];

  /** Removes the max-width limit of the preview, for examples with tables and multi-column layouts */
  fullWidth?: boolean;
}

export const FORM_EXAMPLES_GROUPS: ExamplesGroup[] = [
  { type: 'basic', label: 'Basic forms' },
  { type: 'validation', label: 'Validation' },
  { type: 'dependent', label: 'Dependent fields' },
  { type: 'lists', label: 'Lists and nested data' },
  { type: 'layout', label: 'Multi-step and layout' },
  { type: 'data', label: 'Loading and submission' },
  { type: 'uncontrolled', label: 'Uncontrolled mode' },
  { type: 'architecture', label: 'Context and composition' },
  { type: 'inputs', label: 'Input integrations' },
];

export const FORM_EXAMPLES_DATA: FormExample[] = [
  {
    id: 'LoginForm',
    name: 'Login form',
    description: 'Email and password with validators and submitting state',
    type: 'basic',
    features: ['isEmail', 'hasLength', 'onSubmit', 'submitting'],
  },
  {
    id: 'RegistrationForm',
    name: 'Registration form',
    description: 'Password requirements shown in a popover while typing',
    type: 'basic',
    features: ['matchesField', 'useWatchValue', 'getInputProps'],
  },
  {
    id: 'ContactForm',
    name: 'Contact form',
    description: 'Textarea with character counter, Ctrl + Enter submits the form',
    type: 'basic',
    features: ['useWatchValue', 'onSubmit'],
  },
  {
    id: 'FiltersForm',
    name: 'Filters form',
    description: 'Filters applied on every change without a submit button',
    type: 'basic',
    features: ['onValuesChange', 'useDirty', 'reset'],
    fullWidth: true,
  },
  {
    id: 'SubscribeInput',
    name: 'Subscribe input',
    description: 'Single email field with async validation built with use-field',
    type: 'basic',
    features: ['useField', 'async validation'],
  },
  {
    id: 'OtpForm',
    name: 'OTP form',
    description: 'PinInput verification code, submitted when all digits are entered',
    type: 'basic',
    features: ['watch', 'PinInput'],
  },
  {
    id: 'UsernameAvailability',
    name: 'Username availability',
    description: 'Async validation with debounce and a loading indicator',
    type: 'validation',
    features: ['async validation', 'validateDebounce', 'isValidating', 'resolveValidationError'],
  },
  {
    id: 'ValidateOnBlur',
    name: 'Validate on blur',
    description: 'Fields validated on blur, error summary and focus on the first invalid field',
    type: 'validation',
    features: ['validateInputOnBlur', 'onSubmit', 'getInputNode'],
  },
  {
    id: 'DateRange',
    name: 'Date range',
    description: 'Cross-field validation of start and end dates',
    type: 'validation',
    features: ['validateField', 'watch', 'useWatchValue', 'DatePickerInput'],
  },
  {
    id: 'ZodSchema',
    name: 'Zod schema',
    description: 'Schema validation with nested object and array errors',
    type: 'validation',
    features: ['schemaResolver', 'zod', 'nested errors'],
  },
  {
    id: 'ZodAsyncSchema',
    name: 'Zod async validation',
    description: 'Schema with async refinements checked against the backend',
    type: 'validation',
    features: ['schemaResolver', 'zod', 'async validation', 'validateDebounce'],
  },
  {
    id: 'ServerErrors',
    name: 'Server errors',
    description: 'Field and form-level errors returned from the backend',
    type: 'validation',
    features: ['setErrors', 'clearFieldError', 'submitting'],
  },
  {
    id: 'ConditionalValidation',
    name: 'Conditional validation',
    description: 'Fields rendered and validated only when a checkbox is checked',
    type: 'validation',
    features: ['validate', 'useWatchValue', 'Collapse'],
  },
  {
    id: 'ListMinimum',
    name: 'List validation',
    description: 'List must have at least one item, item rules with FORM_INDEX',
    type: 'validation',
    features: ['formRootRule', 'FORM_INDEX', 'insertListItem'],
  },
  {
    id: 'JobApplication',
    name: 'Job application',
    description: 'Single-value inputs validated on blur, phone and cover letter on submit',
    type: 'validation',
    features: ['validateInputOnBlur', 'isInRange', 'matches', 'PhoneInput', 'NumberInput'],
  },
  {
    id: 'GeneratedSlug',
    name: 'Generated slug',
    description: 'Slug generated from name until the user edits it',
    fullDescription:
      'The slug is generated from the name until the user focuses the slug input. The form component does not rerender while typing: the slug input is updated with forceUpdate: false.',
    type: 'dependent',
    features: ['watch', 'touchTrigger', 'forceUpdate', 'isTouched', 'setFieldValue'],
  },
  {
    id: 'DependentSelects',
    name: 'Dependent selects',
    description: 'City options depend on the selected country',
    type: 'dependent',
    features: ['watch', 'useWatchValue', 'setFieldValue', 'Select'],
  },
  {
    id: 'OrderTotal',
    name: 'Order total',
    description: 'Total calculated from quantity, price and discount',
    type: 'dependent',
    features: ['useWatchValue', 'transformValues', 'NumberInput'],
  },
  {
    id: 'SameAsBilling',
    name: 'Same as billing',
    description: 'Shipping address copied from billing address with a checkbox',
    type: 'dependent',
    features: ['setFieldValue', 'enhanceGetInputProps', 'nested objects', 'useWatchValue'],
  },
  {
    id: 'UnitConverter',
    name: 'Unit converter',
    description: 'Two inputs that update each other',
    type: 'dependent',
    features: ['watch', 'forceUpdate', 'setFieldValue'],
  },
  {
    id: 'ConditionalSections',
    name: 'Conditional sections',
    description: 'Different fields for personal and company accounts',
    type: 'dependent',
    features: ['useWatchValue', 'clearFieldError', 'Radio'],
  },
  {
    id: 'SelectAll',
    name: 'Select all checkbox',
    description: 'Select all checkbox with indeterminate state for a checkbox group',
    type: 'dependent',
    features: ['useWatchValue', 'setFieldValue', 'Checkbox.Group'],
  },
  {
    id: 'InvoiceItems',
    name: 'Invoice items',
    description: 'Line items with add, remove and calculated totals',
    type: 'lists',
    features: ['insertListItem', 'removeListItem', 'useWatchValue', 'randomId'],
    fullWidth: true,
  },
  {
    id: 'ReorderListItems',
    name: 'Reorder list items',
    description: 'Drag and drop reordering with dnd-kit',
    type: 'lists',
    features: ['reorderListItem', 'insertListItem', 'removeListItem', 'dnd-kit'],
  },
  {
    id: 'NestedAddresses',
    name: 'Nested addresses',
    description: 'List of address objects with a primary address',
    type: 'lists',
    features: ['replaceListItem', 'insertListItem', 'removeListItem', 'nested arrays'],
  },
  {
    id: 'EditableTable',
    name: 'Editable table',
    description: 'Table with an input in every cell, only edited cell rerenders',
    type: 'lists',
    features: ['resetField', 'getInputProps', 'Table'],
    fullWidth: true,
  },
  {
    id: 'QuestionnaireBuilder',
    name: 'Questionnaire builder',
    description: 'Questions with their own options lists, two nesting levels',
    type: 'lists',
    features: ['insertListItem', 'removeListItem', 'formRootRule'],
  },
  {
    id: 'TagsAndKeywords',
    name: 'Tags and keywords',
    description: 'Array values with TagsInput and Chip.Group',
    type: 'lists',
    features: ['TagsInput', 'Chip.Group', 'array values'],
  },
  {
    id: 'StepperWizard',
    name: 'Stepper wizard',
    description: 'Form split across steps, each step validates its own fields',
    type: 'layout',
    features: ['validate', 'Stepper'],
  },
  {
    id: 'FormInModal',
    name: 'Form in modal',
    description: 'Form opened in a modal, reset when the modal is closed',
    type: 'layout',
    features: ['reset', 'submitting', 'Modal'],
  },
  {
    id: 'TabsWithErrorCount',
    name: 'Tabs with error count',
    description: 'Fields split across tabs, each tab shows its number of errors',
    type: 'layout',
    features: ['errors', 'onSubmit', 'Tabs'],
  },
  {
    id: 'SettingsSaveBar',
    name: 'Settings save bar',
    description: 'Unsaved changes bar driven by dirty state',
    type: 'layout',
    features: ['useDirty', 'setInitialValues', 'resetDirty', 'reset'],
  },
  {
    id: 'AccordionSections',
    name: 'Accordion sections',
    description: 'Long form in accordion sections with completion indicators',
    type: 'layout',
    features: ['isValid', 'useWatchValue', 'Accordion'],
  },
  {
    id: 'EditRecord',
    name: 'Edit record',
    description: 'Record loaded from the backend, inputs read-only until loaded',
    type: 'data',
    features: ['initialize', 'initialized', 'enhanceGetInputProps'],
  },
  {
    id: 'AutosaveLocalStorage',
    name: 'Autosave to local storage',
    description: 'Draft saved a second after the last change and restored on mount',
    type: 'data',
    features: ['onValuesChange', 'setValues', 'useLocalStorage', 'useDebouncedCallback'],
  },
  {
    id: 'AutosaveServer',
    name: 'Autosave to server',
    description: 'Debounced save with saving indicator',
    type: 'data',
    features: ['onValuesChange', 'useDebouncedCallback', 'setInitialValues'],
  },
  {
    id: 'UnsavedChangesPrompt',
    name: 'Unsaved changes prompt',
    description: 'Confirmation before leaving the page with unsaved changes',
    type: 'data',
    features: ['useDirty', 'isDirty', 'beforeunload'],
  },
  {
    id: 'FileUpload',
    name: 'File upload',
    description: 'Files from Dropzone with size validation and upload progress',
    type: 'data',
    features: ['Dropzone', 'submitting', 'validate'],
  },
  {
    id: 'SubmitWithTransform',
    name: 'Submit with transform',
    description: 'Values transformed into an API payload before submit',
    type: 'data',
    features: ['transformValues', 'getTransformedValues', 'TransformedValues'],
  },
  {
    id: 'RenderCount',
    name: 'Render count',
    description: 'Controlled and uncontrolled modes compared with render counters',
    type: 'uncontrolled',
    features: ['mode', 'useWatchValue'],
  },
  {
    id: 'LargeForm',
    name: 'Large form',
    description: '200 fields in uncontrolled mode',
    type: 'uncontrolled',
    features: ['validate', 'getInputProps', 'performance'],
  },
  {
    id: 'CustomInputSubscription',
    name: 'Custom input subscription',
    description: 'Custom input subscribed to its field with useFormField',
    type: 'uncontrolled',
    features: ['useFormField', 'custom inputs', 'getInputProps'],
  },
  {
    id: 'FormContextSplit',
    name: 'Form context',
    description: 'Fields in separate components connected with form context',
    type: 'architecture',
    features: ['createFormContext', 'useFormContext'],
  },
  {
    id: 'ReusableFields',
    name: 'Reusable fields',
    description: 'Typed field components that read the form from context',
    type: 'architecture',
    features: ['createFormContext', 'LooseKeys', 'TypeScript'],
  },
  {
    id: 'FormActions',
    name: 'Form actions',
    description: 'Form updated from a component outside the form tree',
    type: 'architecture',
    features: ['createFormActions', 'name'],
  },
  {
    id: 'TypedForm',
    name: 'Typed form',
    description: 'Explicit generics and form object passed as a prop',
    type: 'architecture',
    features: ['UseFormReturnType', 'TransformedValues', 'TypeScript'],
  },
  {
    id: 'RichTextForm',
    name: 'Rich text form',
    description: 'Tiptap editor bound to a form field',
    type: 'inputs',
    features: ['isNotEmptyHTML', 'RichTextEditor', 'useFormField'],
  },
];
