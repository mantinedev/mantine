import { useEffect, useRef, useState, type SubmitEvent } from 'react';
import { Button, Container, Group, Stack, Stepper, Title } from '@mantine/core';
import { useForm, type FormErrors } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { AvailabilityStep } from './AvailabilityStep';
import { ExperienceStep } from './ExperienceStep';
import { PersonalStep } from './PersonalStep';
import { ReviewStep } from './ReviewStep';
import { StepErrorSummary } from './StepErrorSummary';
import type { JobApplication, JobApplicationValues } from './types';
import { getStepPaths, INITIAL_VALUES, REVIEW_STEP, RULES, STEPS } from './validation';

interface JobApplicationFormProps {
  onSubmit?: (application: JobApplication) => void | Promise<void>;
}

export function JobApplicationForm({ onSubmit }: JobApplicationFormProps) {
  const [active, setActive] = useState(0);
  const [furthest, setFurthest] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const addPositionRef = useRef<HTMLButtonElement>(null);
  const pendingFocus = useRef<string | null>(null);

  const form = useForm<JobApplicationValues>({
    name: 'job-application',
    initialValues: INITIAL_VALUES,
    validateInputOnBlur: ['email', 'linkedin'],
    validate: RULES,
  });

  const focusField = (path: string) => {
    if (path === 'positions') {
      addPositionRef.current?.focus();
      return;
    }
    // Radio.Group and picker inputs put data-path on a wrapper, focus the control inside it
    const node = form.getInputNode(path);
    const control = node?.matches('input, textarea, button')
      ? node
      : node?.querySelector<HTMLElement>('input, textarea, button');
    (control ?? node)?.focus();
  };

  // Fields of a step are mounted only after the step renders
  useEffect(() => {
    if (pendingFocus.current) {
      focusField(pendingFocus.current);
      pendingFocus.current = null;
    }
  });

  const showStepWithError = (step: number, path: string) => {
    setShowSummary(true);
    if (step === active) {
      focusField(path);
    } else {
      pendingFocus.current = path;
      setActive(step);
    }
  };

  // Every field of the step is validated so that all of its errors show at once
  const validateStep = (step: number) => {
    const invalidPaths = getStepPaths(step, form.getValues()).filter(
      (path) => form.validateField(path).hasError
    );
    return invalidPaths[0] ?? null;
  };

  const goTo = (target: number) => {
    for (let step = active; step < target; step += 1) {
      const invalidPath = validateStep(step);
      if (invalidPath) {
        showStepWithError(step, invalidPath);
        return;
      }
    }
    setShowSummary(false);
    setActive(target);
    setFurthest((current) => Math.max(current, target));
  };

  const handleSubmit = async ({
    phoneDisplay: _phoneDisplay,
    ...application
  }: JobApplicationValues) => {
    await onSubmit?.(application);
    notifications.show({
      title: 'Application submitted',
      message: `${application.firstName} ${application.lastName} · ${application.currentTitle}`,
    });
    form.reset();
    setShowSummary(false);
    setActive(0);
    setFurthest(0);
  };

  const handleErrors = (errors: FormErrors) => {
    const values = form.getValues();
    for (let step = 0; step < REVIEW_STEP; step += 1) {
      const invalidPath = getStepPaths(step, values).find((path) => errors[path]);
      if (invalidPath) {
        showStepWithError(step, invalidPath);
        return;
      }
    }
  };

  const submit = form.onSubmit(handleSubmit, handleErrors);

  // Enter in a field of an earlier step moves to the next step instead of submitting
  const handleFormSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    if (active === REVIEW_STEP) {
      submit(event);
    } else {
      event.preventDefault();
      goTo(active + 1);
    }
  };

  const stepErrors = showSummary
    ? getStepPaths(active, form.getValues())
        .filter((path) => form.errors[path])
        .map((path) => ({ path, message: form.errors[path] }))
    : [];

  const stepContent = [
    <PersonalStep key="personal" form={form} />,
    <ExperienceStep key="experience" form={form} addPositionRef={addPositionRef} />,
    <AvailabilityStep key="availability" form={form} />,
    <ReviewStep key="review" form={form} onEdit={goTo} />,
  ];

  return (
    <Container size="sm" py="xl">
      <Title order={2} c="var(--mantine-color-bright)" mb="xl">
        Job application
      </Title>
      <form onSubmit={handleFormSubmit} noValidate>
        <Stepper active={active} onStepClick={goTo}>
          {STEPS.map((label, index) => (
            <Stepper.Step
              key={label}
              label={label}
              allowStepSelect={index <= furthest && index !== active}
            >
              <Stack mt="xl">
                <StepErrorSummary errors={stepErrors} onSelect={focusField} />
                {stepContent[index]}
              </Stack>
            </Stepper.Step>
          ))}
        </Stepper>

        <Group justify={active > 0 ? 'space-between' : 'flex-end'} mt="xl">
          {active > 0 && (
            <Button variant="default" onClick={() => goTo(active - 1)}>
              Back
            </Button>
          )}
          <Button
            type="submit"
            loading={form.submitting}
            // Keeps focus in the field until the click completes, so its blur error does not shift the button
            onMouseDown={(event) => event.preventDefault()}
          >
            {active === REVIEW_STEP ? 'Submit application' : 'Next'}
          </Button>
        </Group>
      </form>
    </Container>
  );
}
