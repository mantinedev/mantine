import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import { Button, Group, Stepper } from '@mantine/core';
import {
  formRootRule,
  hasLength,
  isEmail,
  isInRange,
  isNotEmpty,
  isUrl,
  useForm,
  when,
  type FormErrors,
} from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { getInitialValues, getStepPaths, NOTES_MAX_LENGTH, REVIEW_STEP, STEPS } from './constants';
import { AvailabilityStep } from './steps/AvailabilityStep';
import { ExperienceStep } from './steps/ExperienceStep';
import { PersonalStep } from './steps/PersonalStep';
import { ReviewStep } from './steps/ReviewStep';
import type { JobApplication, JobApplicationValues } from './types';

interface JobApplicationFormProps {
  onSubmit?: (application: JobApplication) => void | Promise<void>;
}

export function JobApplicationForm({ onSubmit }: JobApplicationFormProps) {
  const [active, setActive] = useState(0);
  const [highestStep, setHighestStep] = useState(0);
  const [pathToFocus, setPathToFocus] = useState<string | null>(null);
  const addPositionRef = useRef<HTMLButtonElement>(null);

  const form = useForm<JobApplicationValues>({
    name: 'job-application',
    initialValues: getInitialValues(),
    validateInputOnBlur: ['email', 'linkedin', 'yearsOfExperience'],
    validate: {
      firstName: isNotEmpty('First name is required'),
      lastName: isNotEmpty('Last name is required'),
      email: isEmail('Enter a valid email'),
      linkedin: when(
        (values) => values.linkedin.trim() !== '',
        isUrl('Enter a valid URL, for example https://linkedin.com/in/you')
      ),
      currentTitle: isNotEmpty('Current title is required'),
      yearsOfExperience: isInRange({ min: 0, max: 50 }, 'Enter a number between 0 and 50'),
      positions: {
        [formRootRule]: (positions) =>
          positions.length === 0 ? 'Add at least one previous position' : null,
        company: isNotEmpty('Company is required'),
        title: isNotEmpty('Title is required'),
        years: ([start, end]) => {
          if (!start || !end) {
            return 'Select the start and end year';
          }
          return dayjs(end).isBefore(start, 'year') ? 'End year cannot be before start year' : null;
        },
      },
      startDate: (value) => {
        if (!value) {
          return 'Pick your earliest start date';
        }
        return dayjs(value).isBefore(dayjs(), 'day') ? 'Start date cannot be in the past' : null;
      },
      workArrangement: isNotEmpty('Choose a work arrangement'),
      notes: hasLength(
        { max: NOTES_MAX_LENGTH },
        `Notes must be ${NOTES_MAX_LENGTH} characters or fewer`
      ),
    },
  });

  // The field to focus may belong to a step that is not rendered yet
  useEffect(() => {
    if (pathToFocus === null) {
      return;
    }
    if (pathToFocus === 'positions') {
      addPositionRef.current?.focus();
    } else {
      const node = form.getInputNode(pathToFocus);
      // Radio.Group puts data-path on its wrapper
      (node?.querySelector('input') ?? node)?.focus();
    }
    setPathToFocus(null);
  }, [pathToFocus, form]);

  const validateStep = (step: number) => {
    const paths = getStepPaths(step, form.getValues());
    const invalidPaths = paths.filter((path) => form.validateField(path).hasError);
    if (invalidPaths.length > 0) {
      setPathToFocus(invalidPaths[0]);
      return false;
    }
    return true;
  };

  const goToStep = (step: number) => {
    if (step > active && !validateStep(active)) {
      return;
    }
    setActive(step);
    setHighestStep((current) => Math.max(current, step));
  };

  const handleSubmit = async (values: JobApplicationValues) => {
    const { phoneDisplay: _phoneDisplay, ...application } = values;
    await onSubmit?.(application);
    notifications.show({
      color: 'teal',
      title: 'Application submitted',
      message: `Thank you, ${values.firstName}! We will be in touch soon.`,
    });
    form.reset();
    setActive(0);
    setHighestStep(0);
  };

  const handleErrors = (errors: FormErrors) => {
    const values = form.getValues();
    for (let step = 0; step < REVIEW_STEP; step += 1) {
      const invalidPath = getStepPaths(step, values).find((path) => errors[path]);
      if (invalidPath) {
        setActive(step);
        setPathToFocus(invalidPath);
        return;
      }
    }
  };

  // Enter on any step submits the form: steps before the review only move to the next step
  const handleFormSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    if (active === REVIEW_STEP) {
      form.onSubmit(handleSubmit, handleErrors)(event);
    } else {
      event.preventDefault();
      goToStep(active + 1);
    }
  };

  const canSelectStep = (step: number) => step !== active && step <= highestStep;

  return (
    <form onSubmit={handleFormSubmit} noValidate>
      <Stepper active={active} onStepClick={goToStep}>
        <Stepper.Step label={STEPS[0]} allowStepSelect={canSelectStep(0)}>
          <PersonalStep form={form} />
        </Stepper.Step>
        <Stepper.Step label={STEPS[1]} allowStepSelect={canSelectStep(1)}>
          <ExperienceStep form={form} addPositionRef={addPositionRef} />
        </Stepper.Step>
        <Stepper.Step label={STEPS[2]} allowStepSelect={canSelectStep(2)}>
          <AvailabilityStep form={form} />
        </Stepper.Step>
        <Stepper.Step label={STEPS[3]} allowStepSelect={canSelectStep(3)}>
          <ReviewStep form={form} onEdit={setActive} />
        </Stepper.Step>
      </Stepper>

      <Group justify={active > 0 ? 'space-between' : 'flex-end'} mt="xl">
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
          <Button type="submit" onMouseDown={(event) => event.preventDefault()}>
            Next
          </Button>
        )}
      </Group>
    </form>
  );
}
