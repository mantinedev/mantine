import dayjs from 'dayjs';
import { Anchor, Group, SimpleGrid, Stack, Surface, Text, Title } from '@mantine/core';
import type { JobApplicationFormType, Position } from './types';
import { WORK_ARRANGEMENT_LABELS } from './values';

interface SummarySectionProps {
  title: string;
  onEdit: () => void;
  items: { label: string; value: React.ReactNode }[];
}

function SummarySection({ title, onEdit, items }: SummarySectionProps) {
  return (
    <Surface withBorder p="md" component="section" aria-label={title}>
      <Group justify="space-between" mb="sm">
        <Title order={4}>{title}</Title>
        <Anchor
          component="button"
          type="button"
          size="sm"
          onClick={onEdit}
          aria-label={`Edit ${title.toLowerCase()}`}
        >
          Edit
        </Anchor>
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
        {items.map((item) => (
          <div key={item.label}>
            <Text size="xs">{item.label}</Text>
            <Text style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{item.value}</Text>
          </div>
        ))}
      </SimpleGrid>
    </Surface>
  );
}

const NOT_PROVIDED = 'Not provided';

function formatYears([start, end]: Position['years']) {
  const startYear = start ? dayjs(start).year() : '?';
  const endYear = end ? dayjs(end).year() : '?';
  return startYear === endYear ? `${startYear}` : `${startYear}–${endYear}`;
}

interface ReviewStepProps {
  form: JobApplicationFormType;
  onEditStep: (step: number) => void;
}

export function ReviewStep({ form, onEditStep }: ReviewStepProps) {
  const values = form.getValues();

  return (
    <Stack>
      <SummarySection
        title="Personal details"
        onEdit={() => onEditStep(0)}
        items={[
          { label: 'Name', value: `${values.firstName} ${values.lastName}` },
          { label: 'Email', value: values.email },
          { label: 'Phone', value: values.phone || NOT_PROVIDED },
          { label: 'LinkedIn URL', value: values.linkedinUrl || NOT_PROVIDED },
        ]}
      />
      <SummarySection
        title="Experience"
        onEdit={() => onEditStep(1)}
        items={[
          { label: 'Current title', value: values.currentTitle },
          { label: 'Years of experience', value: values.yearsOfExperience },
          ...values.positions.map((position, index) => ({
            label: `Position ${index + 1}`,
            value: `${position.title} at ${position.company}, ${formatYears(position.years)}`,
          })),
        ]}
      />
      <SummarySection
        title="Availability"
        onEdit={() => onEditStep(2)}
        items={[
          {
            label: 'Earliest start date',
            value: values.startDate ? dayjs(values.startDate).format('MMMM D, YYYY') : NOT_PROVIDED,
          },
          {
            label: 'Expected salary',
            value:
              values.expectedSalary === ''
                ? NOT_PROVIDED
                : `$${Number(values.expectedSalary).toLocaleString('en-US')}`,
          },
          {
            label: 'Work arrangement',
            value: values.workArrangement
              ? WORK_ARRANGEMENT_LABELS[values.workArrangement]
              : NOT_PROVIDED,
          },
          { label: 'Notes', value: values.notes || NOT_PROVIDED },
        ]}
      />
    </Stack>
  );
}
