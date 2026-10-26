import { useState } from 'react';
import { Chip, Select, Textarea, TextInput } from '@mantine/core';
import { AGE_GROUPS, LEVELS } from './data';
import { StepHead } from './StepHead';
import classes from './Booking.module.css';

export interface DetailsValues {
  name: string;
  email: string;
  age: string;
  level: string;
  wish: string;
}

export const DETAILS_FORM_ID = 'pl-details';

interface DetailsProps {
  values: DetailsValues;
  onChange: (values: DetailsValues) => void;
  onValidSubmit: (name: string, email: string) => void;
}

export function Details({ values, onChange, onValidSubmit }: DetailsProps) {
  const [errors, setErrors] = useState({ name: false, email: false });

  const set = <K extends keyof DetailsValues>(key: K, value: DetailsValues[K]) =>
    onChange({ ...values, [key]: value });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = values.name.trim();
    const email = values.email.trim();
    const nameError = name.length < 2;
    const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setErrors({ name: nameError, email: emailError });
    const form = event.currentTarget;
    if (nameError || emailError) {
      form.querySelector<HTMLInputElement>(nameError ? '#pl-name' : '#pl-email')?.focus();
      return;
    }
    onValidSubmit(name, email);
  };

  return (
    <form id={DETAILS_FORM_ID} noValidate onSubmit={handleSubmit}>
      <StepHead number={4} title="About the student" />
      <div className={classes.formGrid}>
        <TextInput
          id="pl-name"
          label="Student’s name"
          placeholder="Lotte de Vries"
          autoComplete="name"
          value={values.name}
          onChange={(event) => set('name', event.currentTarget.value)}
          error={errors.name ? 'Enter the student’s name' : undefined}
        />
        <TextInput
          id="pl-email"
          type="email"
          label="Email for the confirmation"
          placeholder="you@example.nl"
          autoComplete="email"
          value={values.email}
          onChange={(event) => set('email', event.currentTarget.value)}
          error={errors.email ? 'Enter an email like name@example.nl' : undefined}
        />
        <Select
          label="Age group"
          data={AGE_GROUPS}
          value={values.age}
          onChange={(value) => value && set('age', value)}
        />
        <fieldset className={classes.fieldset}>
          <legend className={classes.legend}>Playing so far</legend>
          <Chip.Group value={values.level} onChange={(value) => set('level', value)}>
            <div className={classes.radios}>
              {LEVELS.map((level) => (
                <Chip key={level} value={level}>
                  {level}
                </Chip>
              ))}
            </div>
          </Chip.Group>
        </fieldset>
        <Textarea
          className={classes.full}
          classNames={{ input: classes.wish }}
          label="What would you like to play?"
          placeholder="A piece, a style, a song you can hum. Anything helps."
          rows={3}
          resize="vertical"
          value={values.wish}
          onChange={(event) => set('wish', event.currentTarget.value)}
        />
      </div>
    </form>
  );
}
