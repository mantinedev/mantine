import dayjs from 'dayjs';
import { formRootRule, hasLength, isEmail, isInRange, isNotEmpty } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import type { JobApplicationValues, Position, WorkArrangement } from './types';

export const STEP_LABELS = ['Personal', 'Experience', 'Availability', 'Review'] as const;
export const REVIEW_STEP = STEP_LABELS.length - 1;
export const NOTES_MAX_LENGTH = 500;

export const WORK_ARRANGEMENT_LABELS: Record<WorkArrangement, string> = {
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
    workArrangement: '',
    notes: '',
  };
}

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return (url.protocol === 'http:' || url.protocol === 'https:') && url.hostname.includes('.');
  } catch {
    return false;
  }
}

// Keys are in visual order: the first key of the errors object is the first invalid field
export const validationRules = {
  firstName: isNotEmpty('First name is required'),
  lastName: isNotEmpty('Last name is required'),
  email: isEmail('Enter a valid email'),
  linkedinUrl: (value: string) =>
    value.trim() === '' || isValidUrl(value.trim()) ? null : 'Enter a valid URL',
  currentTitle: isNotEmpty('Current title is required'),
  yearsOfExperience: isInRange({ min: 0, max: 50 }, 'Years of experience must be between 0 and 50'),
  positions: {
    [formRootRule]: (positions: Position[]) =>
      positions.length === 0 ? 'Add at least one position' : null,
    company: isNotEmpty('Company is required'),
    title: isNotEmpty('Title is required'),
    years: ([start, end]: Position['years']) => {
      if (!start || !end) {
        return 'Select start and end years';
      }
      return dayjs(end).year() < dayjs(start).year()
        ? 'End year cannot be before start year'
        : null;
    },
  },
  startDate: (value: string | null) => {
    if (!value) {
      return 'Earliest start date is required';
    }
    return dayjs(value).isBefore(dayjs(), 'day') ? 'Start date cannot be in the past' : null;
  },
  workArrangement: isNotEmpty('Select a work arrangement'),
  notes: hasLength(
    { max: NOTES_MAX_LENGTH },
    `Notes must be ${NOTES_MAX_LENGTH} characters or less`
  ),
};

const STEP_ROOT_FIELDS: string[][] = [
  ['firstName', 'lastName', 'email', 'linkedinUrl'],
  ['currentTitle', 'yearsOfExperience', 'positions'],
  ['startDate', 'workArrangement', 'notes'],
];

export function getStepFields(step: number, values: JobApplicationValues): string[] {
  const fields = STEP_ROOT_FIELDS[step] ?? [];
  if (!fields.includes('positions')) {
    return fields;
  }
  return [
    ...fields,
    ...values.positions.flatMap((_, index) => [
      `positions.${index}.company`,
      `positions.${index}.title`,
      `positions.${index}.years`,
    ]),
  ];
}

export function getStepOfField(path: string) {
  const root = path.split('.')[0];
  return Math.max(
    STEP_ROOT_FIELDS.findIndex((fields) => fields.includes(root)),
    0
  );
}
