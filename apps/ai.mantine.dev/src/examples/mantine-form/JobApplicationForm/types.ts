import type { UseFormReturnType } from '@mantine/form';

export type WorkMode = 'remote' | 'hybrid' | 'on-site';

export interface Position {
  id: string;
  company: string;
  title: string;
  years: [string | null, string | null];
}

export interface JobApplicationValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  linkedin: string;
  currentTitle: string;
  yearsOfExperience: number | string;
  positions: Position[];
  startDate: string | null;
  salary: number | string;
  workMode: WorkMode | '';
  notes: string;
}

export type JobApplication = Omit<JobApplicationValues, 'phoneDisplay'>;

export type JobApplicationFormType = UseFormReturnType<JobApplicationValues>;
