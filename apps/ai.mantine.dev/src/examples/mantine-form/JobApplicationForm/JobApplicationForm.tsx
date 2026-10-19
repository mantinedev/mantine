import { useEffect, useRef, useState } from 'react';
import { Button, Group, Stepper } from '@mantine/core';
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
  STEP_LABELS,
  validationRules,
} from './values';

interface JobApplicationFormProps {
  onSubmit?: (values: JobApplicationValues) => void | Promise<void>;
}

export function JobApplicationForm({ onSubmit }: JobApplicationFormProps) {
  const [active, setActive] = useState(0);
  const [highestStep, setHighestStep] = useState(0);
  const addPositionRef = useRef<HTMLButtonElement>(null);
  const pendingFocusRef = useRef<string | null>(null);

  const form = useForm<JobApplicationValues>({
    name: 'job-application',
    initialValues: getInitialValues(),
    validateInputOnBlur: ['email', 'linkedinUrl', 'yearsOfExperience'],
    validate: validationRules,
  });

  const focusField = (path: string) => {
    if (path === 'positions') {
      addPositionRef.current?.focus();
      return;
    }
    const node = form.getInputNode(path);
    (node?.querySelector('input') ?? node)?.focus();
  };

  // The field of a step that was not rendered yet can only be focused after the step mounts
  useEffect(() => {
    if (pendingFocusRef.current) {
      focusField(pendingFocusRef.current);
      pendingFocusRef.current = null;
    }
  }, [active]);

  const showStep = (step: number) => {
    setActive(step);
    setHighestStep((current) => Math.max(current, step));
  };

  const validateCurrentStep = () => {
    const invalidFields = getStepFields(active, form.getValues()).filter(
      (path) => form.validateField(path).hasError
    );
    if (invalidFields.length > 0) {
      focusField(invalidFields[0]);
      return false;
    }
    return true;
  };

  const goToStep = (step: number) => {
    if (step > active && !validateCurrentStep()) {
      return;
    }
    showStep(step);
  };

  const handleSubmit = async (values: JobApplicationValues) => {
    await onSubmit?.(values);
    notifications.show({
      color: 'green',
      title: 'Application submitted',
      message: `Thank you, ${values.firstName}! We will be in touch soon.`,
    });
    form.reset();
    setActive(0);
    setHighestStep(0);
  };

  const handleErrors = (errors: FormErrors) => {
    const firstPath = Object.keys(errors)[0];
    pendingFocusRef.current = firstPath;
    setActive(getStepOfField(firstPath));
  };

  const handleFormSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    if (active === REVIEW_STEP) {
      form.onSubmit(handleSubmit, handleErrors)(event);
    } else {
      event.preventDefault();
      goToStep(active + 1);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} noValidate>
      <Stepper active={active} onStepClick={goToStep}>
        <Stepper.Step label={STEP_LABELS[0]} allowStepSelect={highestStep >= 0}>
          <PersonalStep form={form} />
        </Stepper.Step>
        <Stepper.Step label={STEP_LABELS[1]} allowStepSelect={highestStep >= 1}>
          <ExperienceStep form={form} addPositionRef={addPositionRef} />
        </Stepper.Step>
        <Stepper.Step label={STEP_LABELS[2]} allowStepSelect={highestStep >= 2}>
          <AvailabilityStep form={form} />
        </Stepper.Step>
        <Stepper.Step label={STEP_LABELS[3]} allowStepSelect={highestStep >= 3}>
          <ReviewStep form={form} onEditStep={showStep} />
        </Stepper.Step>
      </Stepper>

      <Group justify="space-between" mt="xl">
        {active > 0 ? (
          <Button variant="default" onClick={() => setActive(active - 1)}>
            Back
          </Button>
        ) : (
          <div />
        )}
        {/* preventDefault keeps focus in the input so its blur error does not shift the button */}
        <Button
          key={active === REVIEW_STEP ? 'submit' : 'next'}
          type="submit"
          loading={form.submitting}
          onMouseDown={(event) => event.preventDefault()}
        >
          {active === REVIEW_STEP ? 'Submit application' : 'Next'}
        </Button>
      </Group>
    </form>
  );
}
