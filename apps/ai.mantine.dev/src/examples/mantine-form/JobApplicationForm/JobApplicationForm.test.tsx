import { act, render, screen, userEvent, within } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { JobApplicationForm } from './JobApplicationForm';

type User = ReturnType<typeof userEvent.setup>;

function renderForm(onSubmit = jest.fn()) {
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  render(
    <>
      <Notifications />
      <JobApplicationForm onSubmit={onSubmit} />
    </>
  );
  return { user, onSubmit };
}

// The required asterisk is part of the label text, the accessible name leaves it out
const field = (name: string) => screen.getByRole('textbox', { name });
// The country dropdown of the phone input repositions itself in a promise after the step rerenders
// with errors or its button gets focus; settling it inside act keeps the update out of the next step
const settle = () => act(async () => {});

async function next(user: User) {
  await user.click(screen.getByRole('button', { name: 'Next' }));
  await settle();
}

async function blur(user: User) {
  await user.tab();
  await settle();
}

const back = (user: User) => user.click(screen.getByRole('button', { name: 'Back' }));
const stepButton = (label: string) =>
  screen.getByRole('button', { name: new RegExp(`^\\d? ?${label}$`) });

async function fillPersonal(user: User) {
  await user.type(field('First name'), 'Ada');
  await user.type(field('Last name'), 'Lovelace');
  await user.type(field('Email'), 'ada@example.com');
}

async function pickYears(user: User, start: string, end: string) {
  await user.click(screen.getByRole('button', { name: 'Years' }));
  await user.click(await screen.findByRole('button', { name: start }));
  await user.click(screen.getByRole('button', { name: end }));
  await user.click(screen.getByRole('button', { name: 'Save' }));
}

async function fillExperience(user: User) {
  await user.type(field('Current title'), 'Analyst');
  await user.type(field('Years of experience'), '7');
  await user.type(field('Company'), 'Analytical Engines');
  await user.type(field('Title'), 'Programmer');
  await pickYears(user, '2021', '2024');
}

async function pickStartDate(user: User, day: string) {
  await user.click(screen.getByRole('button', { name: 'Earliest start date' }));
  await user.click(await screen.findByRole('button', { name: day }));
  await user.click(screen.getByRole('button', { name: 'Save' }));
}

async function fillAvailability(user: User) {
  await pickStartDate(user, '20 October 2026');
  await user.type(field('Expected salary'), '120000');
  await user.click(screen.getByRole('radio', { name: 'Hybrid' }));
  await user.type(field('Notes'), 'Prefers mornings');
}

async function goToReview(user: User) {
  await fillPersonal(user);
  await next(user);
  await fillExperience(user);
  await next(user);
  await fillAvailability(user);
  await next(user);
}

beforeEach(() => {
  jest.useFakeTimers({ now: new Date(2026, 9, 17, 12), advanceTimers: true });
});

afterEach(() => {
  notifications.clean();
  jest.useRealTimers();
});

describe('personal step', () => {
  it('starts on the Personal step without Back and Submit buttons', () => {
    renderForm();
    expect(field('First name')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Back' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Submit application' })).not.toBeInTheDocument();
  });

  it('shows the required errors of the step when Next is pressed', async () => {
    const { user } = renderForm();
    await next(user);
    expect(screen.getAllByText('Enter your first name')).not.toHaveLength(0);
    expect(screen.getAllByText('Enter your last name')).not.toHaveLength(0);
    expect(screen.getAllByText('Enter a valid email')).not.toHaveLength(0);
  });

  it('focuses the first invalid field when Next is pressed', async () => {
    const { user } = renderForm();
    await user.type(field('First name'), 'Ada');
    await next(user);
    expect(field('Last name')).toHaveFocus();
  });

  it('rejects an invalid email on blur', async () => {
    const { user } = renderForm();
    await user.type(field('Email'), 'ada@');
    await blur(user);
    expect(screen.getByText('Enter a valid email')).toBeInTheDocument();
  });

  it('rejects an invalid LinkedIn URL on blur', async () => {
    const { user } = renderForm();
    await user.type(field('LinkedIn'), 'linkedin');
    await blur(user);
    expect(
      screen.getByText('Enter a valid URL, for example https://linkedin.com/in/you')
    ).toBeInTheDocument();
  });

  it('moves to Experience with phone and LinkedIn left empty', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    expect(field('Current title')).toBeInTheDocument();
  });

  it('removes the error when the value is fixed', async () => {
    const { user } = renderForm();
    await user.type(field('Email'), 'ada@');
    await blur(user);
    await user.type(field('Email'), 'example.com');
    await blur(user);
    expect(screen.queryByText('Enter a valid email')).not.toBeInTheDocument();
  });

  it('lists the errors of the step in a summary whose links focus the field', async () => {
    const { user } = renderForm();
    await next(user);
    const summary = screen.getByRole('alert');
    await user.click(within(summary).getByRole('button', { name: 'Enter a valid email' }));
    expect(field('Email')).toHaveFocus();
  });

  it('hides the summary when the step has no errors left', async () => {
    const { user } = renderForm();
    await user.type(field('First name'), 'Ada');
    await user.type(field('Email'), 'ada@example.com');
    await next(user);
    await user.type(field('Last name'), 'Lovelace');
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});

describe('experience step', () => {
  async function openExperience(user: User) {
    await fillPersonal(user);
    await next(user);
  }

  it('shows no errors before Next is pressed', async () => {
    const { user } = renderForm();
    await openExperience(user);
    expect(screen.queryByText('Enter your current title')).not.toBeInTheDocument();
  });

  it('focuses the current title when it is missing', async () => {
    const { user } = renderForm();
    await openExperience(user);
    await next(user);
    expect(field('Current title')).toHaveFocus();
  });

  it('requires years of experience', async () => {
    const { user } = renderForm();
    await openExperience(user);
    await next(user);
    expect(screen.getAllByText('Enter years of experience between 0 and 50')).not.toHaveLength(0);
  });

  it('does not accept years of experience above 50', async () => {
    const { user } = renderForm();
    await openExperience(user);
    await user.type(field('Years of experience'), '75');
    expect(field('Years of experience')).toHaveValue('7');
  });

  it('requires the company, title and years of each position', async () => {
    const { user } = renderForm();
    await openExperience(user);
    await next(user);
    expect(screen.getAllByText('Enter the company of position 1')).not.toHaveLength(0);
    expect(screen.getAllByText('Enter the title of position 1')).not.toHaveLength(0);
    expect(screen.getAllByText('Pick the start and end years of position 1')).not.toHaveLength(0);
  });

  it('adds a position without errors', async () => {
    const { user } = renderForm();
    await openExperience(user);
    await user.click(screen.getByRole('button', { name: 'Add position' }));
    expect(screen.getByText('Position 2')).toBeInTheDocument();
    expect(screen.queryByText('Enter the company of position 2')).not.toBeInTheDocument();
  });

  it('removes a position', async () => {
    const { user } = renderForm();
    await openExperience(user);
    await user.click(screen.getByRole('button', { name: 'Remove position 1' }));
    expect(screen.queryByText('Position 1')).not.toBeInTheDocument();
    expect(screen.getByText('No positions added')).toBeInTheDocument();
  });

  it('requires at least one position and focuses Add position', async () => {
    const { user } = renderForm();
    await openExperience(user);
    await user.type(field('Current title'), 'Analyst');
    await user.type(field('Years of experience'), '7');
    await user.click(screen.getByRole('button', { name: 'Remove position 1' }));
    await next(user);
    expect(screen.getAllByText('Add at least one position')).not.toHaveLength(0);
    expect(screen.getByRole('button', { name: 'Add position' })).toHaveFocus();
  });
});

describe('availability step', () => {
  async function openAvailability(user: User) {
    await fillPersonal(user);
    await next(user);
    await fillExperience(user);
    await next(user);
  }

  it('requires the earliest start date', async () => {
    const { user } = renderForm();
    await openAvailability(user);
    await next(user);
    expect(screen.getAllByText('Pick the earliest start date')).not.toHaveLength(0);
  });

  it('does not allow a start date in the past', async () => {
    const { user } = renderForm();
    await openAvailability(user);
    await user.click(screen.getByRole('button', { name: 'Earliest start date' }));
    expect(await screen.findByRole('button', { name: '16 October 2026' })).toBeDisabled();
  });

  it('requires a work arrangement and focuses its first option', async () => {
    const { user } = renderForm();
    await openAvailability(user);
    await pickStartDate(user, '20 October 2026');
    await next(user);
    expect(screen.getAllByText('Choose a work arrangement')).not.toHaveLength(0);
    expect(screen.getByRole('radio', { name: 'Remote' })).toHaveFocus();
  });

  it('counts the characters of the notes', async () => {
    const { user } = renderForm();
    await openAvailability(user);
    await user.type(field('Notes'), 'Hello');
    expect(screen.getByText('5/500')).toBeInTheDocument();
  });

  it('limits the notes to 500 characters', async () => {
    const { user } = renderForm();
    await openAvailability(user);
    await user.click(field('Notes'));
    await user.paste('a'.repeat(520));
    expect(field('Notes')).toHaveValue('a'.repeat(500));
  });
});

describe('navigation', () => {
  it('keeps the values of a step after Back', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await user.type(field('Current title'), 'Analyst');
    await back(user);
    await next(user);
    expect(field('Current title')).toHaveValue('Analyst');
  });

  it('keeps the values of the previous step after Back', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await back(user);
    expect(field('Email')).toHaveValue('ada@example.com');
  });

  it('does not open a step that was not reached from the stepper', async () => {
    const { user } = renderForm();
    await user.click(stepButton('Availability'));
    expect(field('First name')).toBeInTheDocument();
  });

  it('opens a completed step from the stepper', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await user.click(stepButton('Personal'));
    expect(field('First name')).toHaveValue('Ada');
  });

  it('returns to a reached step from the stepper after going back', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await back(user);
    await user.click(stepButton('Experience'));
    expect(field('Current title')).toBeInTheDocument();
  });

  it('stops at an invalid step when jumping forward from the stepper', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await back(user);
    await user.clear(field('First name'));
    await user.click(stepButton('Experience'));
    expect(field('First name')).toHaveFocus();
  });
});

describe('review step', () => {
  it('shows the values grouped by step', async () => {
    const { user } = renderForm();
    await goToReview(user);
    const personal = screen.getByRole('region', { name: 'Personal' });
    const experience = screen.getByRole('region', { name: 'Experience' });
    const availability = screen.getByRole('region', { name: 'Availability' });
    expect(within(personal).getByText('ada@example.com')).toBeInTheDocument();
    expect(
      within(experience).getByText('Programmer at Analytical Engines, 2021 – 2024')
    ).toBeInTheDocument();
    expect(within(availability).getByText('October 20, 2026')).toBeInTheDocument();
    expect(within(availability).getByText('$120,000')).toBeInTheDocument();
    expect(within(availability).getByText('Hybrid')).toBeInTheDocument();
  });

  it('marks optional values that were left empty', async () => {
    const { user } = renderForm();
    await goToReview(user);
    expect(
      within(screen.getByRole('region', { name: 'Personal' })).getAllByText('Not provided')
    ).toHaveLength(2);
  });

  it('jumps to the step of a group with its Edit link', async () => {
    const { user } = renderForm();
    await goToReview(user);
    await user.click(screen.getByRole('button', { name: 'Edit Experience' }));
    expect(field('Current title')).toHaveValue('Analyst');
  });

  it('shows the submit button only on the review step', async () => {
    const { user } = renderForm();
    await goToReview(user);
    expect(screen.getByRole('button', { name: 'Submit application' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument();
  });
});

describe('submit', () => {
  it('submits the application values', async () => {
    const { user, onSubmit } = renderForm();
    await goToReview(user);
    await user.click(screen.getByRole('button', { name: 'Submit application' }));
    expect(onSubmit).toHaveBeenCalledWith({
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      phone: '',
      linkedin: '',
      currentTitle: 'Analyst',
      yearsOfExperience: 7,
      positions: [
        {
          id: expect.any(String),
          company: 'Analytical Engines',
          title: 'Programmer',
          years: ['2021-01-01', '2024-01-01'],
        },
      ],
      startDate: '2026-10-20',
      salary: 120000,
      workMode: 'hybrid',
      notes: 'Prefers mornings',
    });
  });

  it('shows a success notification', async () => {
    const { user } = renderForm();
    await goToReview(user);
    await user.click(screen.getByRole('button', { name: 'Submit application' }));
    expect(await screen.findByText('Application submitted')).toBeInTheDocument();
  });

  it('resets the form and returns to the Personal step', async () => {
    const { user } = renderForm();
    await goToReview(user);
    await user.click(screen.getByRole('button', { name: 'Submit application' }));
    expect(await screen.findByRole('textbox', { name: 'First name' })).toHaveValue('');
  });
});
