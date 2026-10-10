import { createFormActions } from '@mantine/form';

export interface DemoFormValues {
  name: string;
  email: string;
  age: number | string;
}

// Form name must match the `name` option passed to useForm
export const demoFormActions = createFormActions<DemoFormValues>('demo-form');
