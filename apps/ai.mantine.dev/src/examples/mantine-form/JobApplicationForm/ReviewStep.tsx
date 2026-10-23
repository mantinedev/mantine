import dayjs from 'dayjs';
import { Stack, Text } from '@mantine/core';
import { ReviewSection } from './ReviewSection/ReviewSection';
import type { JobApplicationFormType, Position } from './types';
import { WORK_MODES } from './validation';

const NOT_PROVIDED = 'Not provided';

interface ReviewStepProps {
  form: JobApplicationFormType;
  onEdit: (step: number) => void;
}

const orNotProvided = (value: string) => (value.trim() === '' ? NOT_PROVIDED : value);

const formatYears = ([start, end]: Position['years']) =>
  `${start ? dayjs(start).year() : '?'} – ${end ? dayjs(end).year() : '?'}`;

export function ReviewStep({ form, onEdit }: ReviewStepProps) {
  const values = form.getValues();

  return (
    <Stack>
      <ReviewSection
        title="Personal"
        onEdit={() => onEdit(0)}
        items={[
          { label: 'First name', value: values.firstName },
          { label: 'Last name', value: values.lastName },
          { label: 'Email', value: values.email },
          { label: 'Phone', value: values.phone ? values.phoneDisplay : NOT_PROVIDED },
          { label: 'LinkedIn', value: orNotProvided(values.linkedin) },
        ]}
      />
      <ReviewSection
        title="Experience"
        onEdit={() => onEdit(1)}
        items={[
          { label: 'Current title', value: values.currentTitle },
          { label: 'Years of experience', value: String(values.yearsOfExperience) },
          {
            label: 'Previous positions',
            value: values.positions.map((position) => (
              <Text key={position.id} size="sm">
                {position.title} at {position.company}, {formatYears(position.years)}
              </Text>
            )),
          },
        ]}
      />
      <ReviewSection
        title="Availability"
        onEdit={() => onEdit(2)}
        items={[
          {
            label: 'Earliest start date',
            value: values.startDate ? dayjs(values.startDate).format('MMMM D, YYYY') : NOT_PROVIDED,
          },
          {
            label: 'Expected salary',
            value:
              typeof values.salary === 'number'
                ? `$${values.salary.toLocaleString('en-US')}`
                : NOT_PROVIDED,
          },
          {
            label: 'Work arrangement',
            value: WORK_MODES.find((mode) => mode.value === values.workMode)?.label ?? NOT_PROVIDED,
          },
          { label: 'Notes', value: orNotProvided(values.notes) },
        ]}
      />
    </Stack>
  );
}
