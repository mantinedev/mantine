import dayjs from 'dayjs';
import {
  formRootRule,
  hasLength,
  isEmail,
  isInRange,
  isNotEmpty,
  isUrl,
  type FormRulesRecord,
} from '@mantine/form';
import { randomId } from '@mantine/hooks';
import type { JobApplicationValues, Position, WorkMode } from './types';

export const NOTES_LIMIT = 500;

export const WORK_MODES: { value: WorkMode; label: string }[] = [
  { value: 'remote', label: 'Remote' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'on-site', label: 'On-site' },
];

export const STEPS = ['Personal', 'Experience', 'Availability', 'Review'] as const;
export const REVIEW_STEP = STEPS.length - 1;

export function createPosition(): Position {
  return { id: randomId(), company: '', title: '', years: [null, null] };
}

export const INITIAL_VALUES: JobApplicationValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  phoneDisplay: '',
  linkedin: '',
  currentTitle: '',
  yearsOfExperience: '',
  positions: [createPosition()],
  startDate: null,
  salary: '',
  workMode: '',
  notes: '',
};

const positionNumber = (path: string) => Number(path.split('.')[1]) + 1;

// Keys are in visual order: the first key of the errors object is the first invalid field
export const RULES: FormRulesRecord<JobApplicationValues> = {
  firstName: isNotEmpty('Enter your first name'),
  lastName: isNotEmpty('Enter your last name'),
  email: isEmail('Enter a valid email'),
  linkedin: (value) =>
    value.trim() === ''
      ? null
      : isUrl('Enter a valid URL, for example https://linkedin.com/in/you')(value),
  currentTitle: isNotEmpty('Enter your current title'),
  yearsOfExperience: isInRange({ min: 0, max: 50 }, 'Enter years of experience between 0 and 50'),
  positions: {
    [formRootRule]: (positions) => (positions.length === 0 ? 'Add at least one position' : null),
    company: (value, _values, path) =>
      value.trim() === '' ? `Enter the company of position ${positionNumber(path)}` : null,
    title: (value, _values, path) =>
      value.trim() === '' ? `Enter the title of position ${positionNumber(path)}` : null,
    years: ([start, end], _values, path) => {
      if (!start || !end) {
        return `Pick the start and end years of position ${positionNumber(path)}`;
      }
      return dayjs(end).year() < dayjs(start).year()
        ? `End year of position ${positionNumber(path)} cannot be before the start year`
        : null;
    },
  },
  startDate: (value) => {
    if (!value) {
      return 'Pick the earliest start date';
    }
    return dayjs(value).isBefore(dayjs(), 'day') ? 'Start date cannot be in the past' : null;
  },
  workMode: isNotEmpty('Choose a work arrangement'),
  notes: hasLength({ max: NOTES_LIMIT }, `Notes must be ${NOTES_LIMIT} characters or fewer`),
};

const STEP_PATHS: ((values: JobApplicationValues) => string[])[] = [
  () => ['firstName', 'lastName', 'email', 'phone', 'linkedin'],
  (values) => [
    'currentTitle',
    'yearsOfExperience',
    'positions',
    ...values.positions.flatMap((_, index) => [
      `positions.${index}.company`,
      `positions.${index}.title`,
      `positions.${index}.years`,
    ]),
  ],
  () => ['startDate', 'salary', 'workMode', 'notes'],
  () => [],
];

export function getStepPaths(step: number, values: JobApplicationValues) {
  return STEP_PATHS[step](values);
}
