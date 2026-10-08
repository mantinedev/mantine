import { Frontmatter } from '@/types';

export const MDX_FORM_DATA: Record<string, Frontmatter> = {
  FormPackage: {
    title: 'Get started',
    slug: '/form/package',
    hideInSearch: true,
    hideHeader: true,
  },

  useForm: {
    title: 'use-form',
    package: '@mantine/form',
    slug: '/form/use-form',
    description: 'use-form hook options and returned form object',
    source: '@mantine/form/src',
    license: 'MIT',
    docs: 'form/use-form.mdx',
    searchTags: 'form state, form hook, form management, mantine form, form library',
  },

  formUncontrolled: {
    title: 'Form modes',
    package: '@mantine/form',
    slug: '/form/uncontrolled',
    description: 'Controlled and uncontrolled modes, what rerenders and how to read values',
    docs: 'form/uncontrolled.mdx',
    searchTags: 'uncontrolled mode, controlled mode, rerenders, performance',
  },

  formGetInputProps: {
    title: 'getInputProps',
    package: '@mantine/form',
    slug: '/form/get-input-props',
    description: 'Connect Mantine, native and custom inputs to form fields',
    docs: 'form/get-input-props.mdx',
    searchTags: 'inputs, custom input, enhanceGetInputProps, radio',
  },

  formValues: {
    title: 'Form values',
    package: '@mantine/form',
    slug: '/form/values',
    description: 'Set initial values, load data, update and reset values',
    docs: 'form/values.mdx',
    searchTags: 'initialValues, initialize, setValues, setFieldValue, reset',
  },

  formWatch: {
    title: 'Watching values',
    package: '@mantine/form',
    slug: '/form/watch',
    description: 'Subscribe to form value changes with onValuesChange, watch and useWatchValue',
    docs: 'form/watch.mdx',
    searchTags: 'onValuesChange, watch, useWatchValue, conditional fields, subscribe',
  },

  formSubmission: {
    title: 'Form submission',
    package: '@mantine/form',
    slug: '/form/submission',
    description: 'Handle submit, transform values, async submission and server errors',
    docs: 'form/submission.mdx',
    searchTags:
      'onSubmit, submitting, transformValues, getTransformedValues, onSubmitPreventDefault',
  },

  formNested: {
    title: 'Nested fields and lists',
    package: '@mantine/form',
    slug: '/form/nested',
    description: 'Manage nested objects and arrays with use-form hook',
    docs: 'form/nested.mdx',
    searchTags: 'nested fields, arrays, lists, insertListItem, removeListItem, reorderListItem',
  },

  formStatus: {
    title: 'Form status',
    package: '@mantine/form',
    slug: '/form/status',
    description: 'Touched and dirty state of fields and form',
    docs: 'form/status.mdx',
    searchTags: 'touched, dirty, isDirty, isTouched, useDirty, useTouched',
  },

  formValidation: {
    title: 'Form validation',
    package: '@mantine/form',
    slug: '/form/validation',
    description: 'Validate fields with use-form hook',
    docs: 'form/validation.mdx',
    searchTags: 'validate, validateField, isValid, async validation, validateInputOnChange',
  },

  formSchemaValidation: {
    title: 'Schema validation',
    package: '@mantine/form',
    slug: '/form/schema-validation',
    description:
      'use-form validation with zod, valibot, arktype and other Standard Schema libraries',
    docs: 'form/schema-validation.mdx',
    searchTags: 'zod, valibot, arktype, standard schema, schemaResolver',
  },

  formValidators: {
    title: 'Validators',
    package: '@mantine/form',
    slug: '/form/validators',
    description: 'Premade validation functions',
    docs: 'form/validators.mdx',
    searchTags: 'isNotEmpty, isEmail, matches, isInRange, hasLength, matchesField',
  },

  formErrors: {
    title: 'Form errors',
    package: '@mantine/form',
    slug: '/form/errors',
    description: 'Read, set and clear form errors',
    docs: 'form/errors.mdx',
    searchTags: 'errors, setErrors, setFieldError, clearErrors, FormErrors',
  },

  createFormContext: {
    title: 'Form context',
    package: '@mantine/form',
    slug: '/form/create-form-context',
    description: 'Share the form object with nested components with createFormContext',
    docs: 'form/create-form-context.mdx',
    searchTags: 'createFormContext, FormProvider, useFormContext',
  },

  formActions: {
    title: 'Form actions',
    package: '@mantine/form',
    slug: '/form/actions',
    description: 'Change form state from anywhere in the application',
    docs: 'form/actions.mdx',
    searchTags: 'createFormActions, form name',
  },

  formTypescript: {
    title: 'TypeScript',
    package: '@mantine/form',
    slug: '/form/typescript',
    description: 'Form values types, generics, UseFormReturnType and TransformedValues',
    docs: 'form/typescript.mdx',
    searchTags: 'types, UseFormReturnType, TransformedValues, FormErrors, generics',
  },

  useField: {
    title: 'use-field',
    package: '@mantine/form',
    slug: '/form/use-field',
    description: 'use-field hook – manage single field state',
    docs: 'form/use-field.mdx',
  },

  formRecipes: {
    title: 'Recipes',
    package: '@mantine/form',
    slug: '/form/recipes',
    description: 'use-form examples',
    docs: 'form/recipes.mdx',
  },

  formAllInputs: {
    title: 'use-form with all inputs',
    package: '@mantine/form',
    slug: '/form/all-inputs',
    description: 'use-form usage with all Mantine inputs',
    docs: 'form/all-inputs.mdx',
  },
};
