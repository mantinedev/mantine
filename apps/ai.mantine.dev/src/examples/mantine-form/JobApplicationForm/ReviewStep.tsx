import dayjs from 'dayjs';
import type { ReactNode } from 'react';
import { Anchor, Group, SimpleGrid, Stack, Surface, Text, Title } from '@mantine/core';
import type { JobApplicationFormType } from './types';
import { STEPS, WORK_MODE_LABELS } from './values';

interface ReviewStepProps {
  form: JobApplicationFormType;
  onEdit: (step: number) => void;
}

function display(value: ReactNode) {
  return value === '' || value === null || value === undefined ? '—' : value;
}

function ReviewItem({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div>
      <Text size="xs">{label}</Text>
      <Text size="sm" style={{ overflowWrap: 'anywhere', whiteSpace: 'pre-wrap' }}>
        {display(value)}
      </Text>
    </div>
  );
}

function ReviewSection({
  step,
  onEdit,
  children,
}: {
  step: number;
  onEdit: (step: number) => void;
  children: ReactNode;
}) {
  return (
    <Surface component="section" withBorder p="md" radius="md" aria-label={STEPS[step]}>
      <Group justify="space-between" mb="sm">
        <Title order={4}>{STEPS[step]}</Title>
        <Anchor
          component="button"
          type="button"
          size="sm"
          aria-label={`Edit ${STEPS[step].toLowerCase()}`}
          onClick={() => onEdit(step)}
        >
          Edit
        </Anchor>
      </Group>
      {children}
    </Surface>
  );
}

export function ReviewStep({ form, onEdit }: ReviewStepProps) {
  const values = form.getValues();

  return (
    <Stack>
      <ReviewSection step={0} onEdit={onEdit}>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <ReviewItem label="First name" value={values.firstName} />
          <ReviewItem label="Last name" value={values.lastName} />
          <ReviewItem label="Email" value={values.email} />
          <ReviewItem label="Phone" value={values.phone} />
          <ReviewItem label="LinkedIn URL" value={values.linkedinUrl} />
        </SimpleGrid>
      </ReviewSection>

      <ReviewSection step={1} onEdit={onEdit}>
        <Stack gap="sm">
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <ReviewItem label="Current title" value={values.currentTitle} />
            <ReviewItem label="Years of experience" value={values.yearsOfExperience} />
          </SimpleGrid>
          <ReviewItem
            label="Previous positions"
            value={values.positions
              .map(
                (position) =>
                  `${position.title} at ${position.company}, ${dayjs(position.years[0]).year()}–${dayjs(position.years[1]).year()}`
              )
              .join('\n')}
          />
        </Stack>
      </ReviewSection>

      <ReviewSection step={2} onEdit={onEdit}>
        <Stack gap="sm">
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <ReviewItem
              label="Earliest start date"
              value={values.startDate && dayjs(values.startDate).format('MMMM D, YYYY')}
            />
            <ReviewItem
              label="Expected salary"
              value={
                typeof values.expectedSalary === 'number'
                  ? `$${values.expectedSalary.toLocaleString('en-US')}`
                  : ''
              }
            />
            <ReviewItem
              label="Work arrangement"
              value={values.workMode && WORK_MODE_LABELS[values.workMode]}
            />
          </SimpleGrid>
          <ReviewItem label="Notes" value={values.notes} />
        </Stack>
      </ReviewSection>
    </Stack>
  );
}
