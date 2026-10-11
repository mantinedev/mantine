import { UseFormReturnType } from '@mantine/form';

export interface TaskItem {
  key: string;
  title: string;
}

export interface TasksValues {
  items: TaskItem[];
}

export type TasksForm = UseFormReturnType<TasksValues>;
