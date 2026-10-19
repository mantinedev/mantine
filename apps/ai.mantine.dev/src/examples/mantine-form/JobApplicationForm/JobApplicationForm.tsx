import { useRef, useState, type SubmitEvent } from 'react';
import { flushSync } from 'react-dom';
import { Button, Group, Stack, Stepper } from '@mantine/core';
import { useForm, type FormErrors } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { AvailabilityStep } from './AvailabilityStep';
import { ExperienceStep } from './ExperienceStep';
import { PersonalStep } from './PersonalStep';
import { ReviewStep } from './ReviewStep';
import type { JobApplicationValues } from './types';
import {
  getInitialValues,
  getStepFields,
  getStepOfField,
  REVIEW_STEP,
  STEPS,
  validationRules,
} from './values';

interface JobApplicationFormProps {
  onSubmit?: (values: JobApplicationValues) => void | Promise<void>;
}

export function JobApplicationForm({ onSubmit }: JobApplicationFormProps) {
  const [active, setActive] = useState(0);
  const [reached, setReached] = useState(0);
  const addPositionRef = useRef<HTMLButtonElement>(null);

  const form = useForm<JobApplicationValues>({
    initialValues: getInitialValues(),
    validateInputOnBlur: ['email', 'linkedinUrl', 'yearsOfExperience', 'expectedSalary'],
    validate: validationRules,
  });

  const focusField = (path: string) => {
    // The list root error has no input of its own
    if (path === 'positions') {
      addPositionRef.current?.focus();
      return;
    }
    // Radio.Group puts data-path on its wrapper, not on an input
    const node = form.getInputNode(path);
    (node?.querySelector('input') ?? node)?.focus();
  };

  const validateStep = (step: number) => {
    const invalidFields = getStepFields(step, form.getValues()).filter(
      (path) => form.validateField(path).hasError
    );

    if (invalidFields.length > 0) {
      focusField(invalidFields[0]);
      return false;
    }

    return true;
  };

  const showStep = (step: number) => {
    setActive(step);
    setReached((current) => Math.max(current, step));
  };

  const goToStep = (step: number) => {
    if (step < active || (step > active && validateStep(active))) {
      showStep(step);
    }
  };

  const handleSubmit = async (values: JobApplicationValues) => {
    await onSubmit?.(values);
    notifications.show({
      color: 'teal',
      title: 'Application submitted',
      message: `Thank you, ${values.firstName}! We will get back to you soon.`,
    });
    form.reset();
    setActive(0);
    setReached(0);
  };

  const handleErrors = (errors: FormErrors) => {
    const firstPath = Object.keys(errors)[0];
    // The invalid field must be mounted before it can be focused
    flushSync(() => setActive(getStepOfField(firstPath)));
    focusField(firstPath);
  };

  const handleFormSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    // Enter in a text input submits the form, on earlier steps it moves to the next step instead
    if (active !== REVIEW_STEP) {
      event.preventDefault();
      goToStep(active + 1);
      return;
    }
    form.onSubmit(handleSubmit, handleErrors)(event);
  };

  return (
    <form onSubmit={handleFormSubmit} noValidate>
      <Stack gap="xl">
        <Stepper active={active} onStepClick={goToStep}>
          {STEPS.map((label, index) => (
            <Stepper.Step
              key={label}
              label={label}
              allowStepSelect={index !== active && index <= reached}
            />
          ))}
        </Stepper>

        {active === 0 && <PersonalStep form={form} />}
        {active === 1 && <ExperienceStep form={form} addPositionRef={addPositionRef} />}
        {active === 2 && <AvailabilityStep form={form} />}
        {active === REVIEW_STEP && <ReviewStep form={form} onEdit={setActive} />}

        <Group justify="flex-end">
          {active > 0 && (
            <Button variant="default" onClick={() => setActive(active - 1)}>
              Back
            </Button>
          )}
          {active === REVIEW_STEP ? (
            <Button type="submit" loading={form.submitting}>
              Submit application
            </Button>
          ) : (
            // preventDefault keeps focus in the input so its blur error does not shift the button
            <Button
              onClick={() => goToStep(active + 1)}
              onMouseDown={(event) => event.preventDefault()}
            >
              Next
            </Button>
          )}
        </Group>
      </Stack>
    </form>
  );
}
