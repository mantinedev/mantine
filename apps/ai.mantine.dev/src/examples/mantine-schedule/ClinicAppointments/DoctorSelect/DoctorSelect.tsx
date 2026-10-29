import { IconStethoscope } from '@tabler/icons-react';
import { Select, SelectProps, Text } from '@mantine/core';
import { DOCTORS, DOCTORS_BY_ID } from '../data';
import classes from './DoctorSelect.module.css';

const DOCTOR_OPTIONS = DOCTORS.map((doctor) => ({ value: doctor.id, label: doctor.name }));

const renderOption: SelectProps['renderOption'] = ({ option }) => (
  <div>
    <Text size="sm">{option.label}</Text>
    <Text size="xs">{DOCTORS_BY_ID[option.value].specialty}</Text>
  </div>
);

interface DoctorSelectProps {
  value: string;
  onChange: (doctorId: string) => void;
}

export function DoctorSelect({ value, onChange }: DoctorSelectProps) {
  return (
    <Select
      aria-label="Doctor"
      placeholder="Doctor"
      className={classes.root}
      data={DOCTOR_OPTIONS}
      value={value}
      onChange={(next) => next && onChange(next)}
      allowDeselect={false}
      leftSection={<IconStethoscope size={16} />}
      renderOption={renderOption}
      comboboxProps={{ position: 'bottom-end', width: 260 }}
    />
  );
}
