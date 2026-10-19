import dayjs from 'dayjs';
import type { ReactNode } from 'react';
import { Anchor, Group, Stack, Surface, Text, Title } from '@mantine/core';
import { WORK_ARRANGEMENTS } from '../constants';
import type { JobApplicationFormType, Position } from '../types';

interface ReviewStepProps {
  form: JobApplicationFormType;
  onEdit: (step: number) => void;
}

const EMPTY = '—';

function formatYears([start, end]: Position['years']) {
  const startYear = start ? dayjs(start).year() : EMPTY;
  const endYear = end ? dayjs(end).year() : EMPTY;
  return startYear === endYear ? `${startYear}` : `${startYear}–${endYear}`;
}

function ReviewRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Group align="flex-start" wrap="nowrap">
      <Text size="sm" fw={500} w={180} style={{ flexShrink: 0 }}>
        {label}
      </Text>
      <Text size="sm" component="div">
        {children === '' || children === null || children === undefined || children === false
          ? EMPTY
          : children}
      </Text>
    </Group>
  );
}

function ReviewSection({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: ReactNode;
}) {
  return (
    <Surface withBorder radius="md" p="lg" component="section" aria-label={title}>
      <Group justify="space-between" mb="sm">
        <Title order={4}>{title}</Title>
        <Anchor
          component="button"
          type="button"
          size="sm"
          onClick={onEdit}
          aria-label={`Edit ${title}`}
        >
          Edit
        </Anchor>
      </Group>
      <Stack gap="xs">{children}</Stack>
    </Surface>
  );
}

export function ReviewStep({ form, onEdit }: ReviewStepProps) {
  const values = form.getValues();
  const workArrangement = WORK_ARRANGEMENTS.find(
    (option) => option.value === values.workArrangement
  );

  return (
    <Stack gap="md" mt="xl">
      <ReviewSection title="Personal" onEdit={() => onEdit(0)}>
        <ReviewRow label="Name">{`${values.firstName} ${values.lastName}`.trim()}</ReviewRow>
        <ReviewRow label="Email">{values.email}</ReviewRow>
        <ReviewRow label="Phone">{values.phone && values.phoneDisplay}</ReviewRow>
        <ReviewRow label="LinkedIn">{values.linkedin}</ReviewRow>
      </ReviewSection>

      <ReviewSection title="Experience" onEdit={() => onEdit(1)}>
        <ReviewRow label="Current title">{values.currentTitle}</ReviewRow>
        <ReviewRow label="Years of experience">{values.yearsOfExperience}</ReviewRow>
        <ReviewRow label="Previous positions">
          <Stack gap={4}>
            {values.positions.map((position) => (
              <div key={position.id}>
                {position.title} at {position.company}, {formatYears(position.years)}
              </div>
            ))}
          </Stack>
        </ReviewRow>
      </ReviewSection>

      <ReviewSection title="Availability" onEdit={() => onEdit(2)}>
        <ReviewRow label="Earliest start date">
          {values.startDate && dayjs(values.startDate).format('MMMM D, YYYY')}
        </ReviewRow>
        <ReviewRow label="Expected salary">
          {typeof values.salary === 'number' && `$${values.salary.toLocaleString('en-US')}`}
        </ReviewRow>
        <ReviewRow label="Work arrangement">{workArrangement?.label}</ReviewRow>
        <ReviewRow label="Notes">
          {values.notes && <span style={{ whiteSpace: 'pre-wrap' }}>{values.notes}</span>}
        </ReviewRow>
      </ReviewSection>
    </Stack>
  );
}
