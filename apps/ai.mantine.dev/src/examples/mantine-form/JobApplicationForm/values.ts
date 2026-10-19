import dayjs from 'dayjs';
import {
  formRootRule,
  hasLength,
  isEmail,
  isInRange,
  isNotEmpty,
  isUrl,
  when,
  type FormRulesRecord,
} from '@mantine/form';
import { randomId } from '@mantine/hooks';
import type { JobApplicationValues, Position, WorkMode } from './types';

export const NOTES_MAX_LENGTH = 500;

export const STEPS = ['Personal', 'Experience', 'Availability', 'Review'] as const;

export const REVIEW_STEP = STEPS.length - 1;

export const WORK_MODE_LABELS: Record<WorkMode, string> = {
  remote: 'Remote',
  hybrid: 'Hybrid',
  'on-site': 'On-site',
};

export function createPosition(): Position {
  return { id: randomId(), company: '', title: '', years: [null, null] };
}

export function getInitialValues(): JobApplicationValues {
  return {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    currentTitle: '',
    yearsOfExperience: '',
    positions: [createPosition()],
    startDate: null,
    expectedSalary: '',
    workMode: '',
    notes: '',
  };
}

export const validationRules: FormRulesRecord<JobApplicationValues> = {
  firstName: isNotEmpty('First name is required'),
  lastName: isNotEmpty('Last name is required'),
  email: isEmail('Enter a valid email'),
  linkedinUrl: when(
    (values) => values.linkedinUrl.trim() !== '',
    isUrl('Enter a valid URL, for example https://www.linkedin.com/in/your-name')
  ),
  currentTitle: isNotEmpty('Current title is required'),
  yearsOfExperience: isInRange({ min: 0, max: 50 }, 'Years of experience must be between 0 and 50'),
  positions: {
    [formRootRule]: isNotEmpty('Add at least one position'),
    company: isNotEmpty('Company is required'),
    title: isNotEmpty('Title is required'),
    years: ([start, end]) => {
      if (!start || !end) {
        return 'Select start and end year';
      }
      return dayjs(end).isBefore(start, 'year') ? 'End year cannot be before start year' : null;
    },
  },
  startDate: (value) => {
    if (!value) {
      return 'Select your earliest start date';
    }
    return dayjs(value).isBefore(dayjs(), 'day') ? 'Start date cannot be in the past' : null;
  },
  workMode: isNotEmpty('Select a work arrangement'),
  notes: hasLength(
    { max: NOTES_MAX_LENGTH },
    `Notes must be ${NOTES_MAX_LENGTH} characters or less`
  ),
};

// Paths in visual order, so the first invalid one is the field to focus
export function getStepFields(step: number, values: JobApplicationValues): string[] {
  switch (step) {
    case 0:
      return ['firstName', 'lastName', 'email', 'phone', 'linkedinUrl'];
    case 1:
      return [
        'currentTitle',
        'yearsOfExperience',
        ...values.positions.flatMap((_, index) => [
          `positions.${index}.company`,
          `positions.${index}.title`,
          `positions.${index}.years`,
        ]),
        'positions',
      ];
    case 2:
      return ['startDate', 'expectedSalary', 'workMode', 'notes'];
    default:
      return [];
  }
}

const FIELD_STEPS: Record<keyof JobApplicationValues, number> = {
  firstName: 0,
  lastName: 0,
  email: 0,
  phone: 0,
  linkedinUrl: 0,
  currentTitle: 1,
  yearsOfExperience: 1,
  positions: 1,
  startDate: 2,
  expectedSalary: 2,
  workMode: 2,
  notes: 2,
};

export function getStepOfField(path: string) {
  return FIELD_STEPS[path.split('.')[0] as keyof JobApplicationValues] ?? 0;
}
