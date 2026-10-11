import { UseFormReturnType } from '@mantine/form';
import { randomId } from '@mantine/hooks';

export interface Option {
  key: string;
  label: string;
}

export interface Question {
  key: string;
  text: string;
  options: Option[];
}

export interface QuestionnaireValues {
  title: string;
  questions: Question[];
}

export function createOption(label = ''): Option {
  return {
    key: randomId(),
    label,
  };
}

export function createQuestion(): Question {
  return {
    key: randomId(),
    text: '',
    options: [createOption(), createOption()],
  };
}

export type QuestionnaireForm = UseFormReturnType<QuestionnaireValues>;
