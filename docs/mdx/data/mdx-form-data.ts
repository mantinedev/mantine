import { Frontmatter } from '@/types';

export const MDX_FORM_DATA: Record<string, Frontmatter> = {
  useForm: {
    title: 'use-form',
    package: '@mantine/form',
    slug: '/form/use-form',
    description: 'Manage form state',
    source: 'mantine-form/src',
    license: 'MIT',
    docs: 'form/use-form.mdx',
  },

  createFormContext: {
    title: 'Form context',
    package: '@mantine/form',
    slug: '/form/create-form-context',
    description: 'Add context support to use-form with createFormContext',
    docs: 'form/use-form.mdx',
  },

  formErrors: {
    title: 'Form errors',
    package: '@mantine/form',
    slug: '/form/errors',
    description: 'Manipulate form errors with use-form hook',
    docs: 'form/errors.mdx',
  },

  formNested: {
    title: 'Nested fields',
    package: '@mantine/form',
    slug: '/form/nested',
    description: 'Manage nested arrays and object state with use-form hook',
    docs: 'form/nested.mdx',
  },

  formRecipes: {
    title: 'Recipes',
    package: '@mantine/form',
    slug: '/form/recipes',
    description: 'use-form examples',
    docs: 'form/recipes.mdx',
  },

  formStatus: {
    title: 'Touched & dirty',
    package: '@mantine/form',
    slug: '/form/status',
    description: 'Get fields and form touched and dirty status',
    docs: 'form/status.mdx',
  },

  formValidation: {
    title: 'Form validation',
    package: '@mantine/form',
    slug: '/form/validation',
    description: 'Validate fields with use-form hook',
    docs: 'form/validation.mdx',
  },

  formValidators: {
    title: 'Form validators',
    package: '@mantine/form',
    slug: '/form/validators',
    description: 'Premade validation functions',
    docs: 'form/validators.mdx',
  },

  formValues: {
    title: 'Form values',
    package: '@mantine/form',
    slug: '/form/values',
    description: 'Manipulate form values with use-form',
    docs: 'form/values.mdx',
  },
};
