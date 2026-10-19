import type { LooseKeys } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import type { JobApplicationValues, Position, WorkArrangement } from './types';

export const STEPS = ['Personal', 'Experience', 'Availability', 'Review'] as const;

export const REVIEW_STEP = STEPS.length - 1;

export const NOTES_MAX_LENGTH = 500;

export const WORK_ARRANGEMENTS: { value: WorkArrangement; label: string }[] = [
  { value: 'remote', label: 'Remote' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'on-site', label: 'On-site' },
];

export function createPosition(): Position {
  return { id: randomId(), company: '', title: '', years: [null, null] };
}

export function getInitialValues(): JobApplicationValues {
  return {
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
    workArrangement: '',
    notes: '',
  };
}

// Paths in the order they appear on screen, so the first invalid one is the first to focus
export function getStepPaths(
  step: number,
  values: JobApplicationValues
): LooseKeys<JobApplicationValues>[] {
  switch (step) {
    case 0:
      return ['firstName', 'lastName', 'email', 'phone', 'linkedin'];
    case 1:
      return [
        'currentTitle',
        'yearsOfExperience',
        'positions',
        ...values.positions.flatMap((_, index) => [
          `positions.${index}.company`,
          `positions.${index}.title`,
          `positions.${index}.years`,
        ]),
      ];
    case 2:
      return ['startDate', 'salary', 'workArrangement', 'notes'];
    default:
      return [];
  }
}
