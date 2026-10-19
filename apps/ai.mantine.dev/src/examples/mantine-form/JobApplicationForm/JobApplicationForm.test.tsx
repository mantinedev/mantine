import { render, screen, userEvent, within } from '@test-utils';
import { Notifications } from '@mantine/notifications';
import { JobApplicationForm } from './JobApplicationForm';

type User = ReturnType<typeof userEvent.setup>;

function renderForm(onSubmit = vi.fn()) {
  const user = userEvent.setup();
  render(
    <>
      <Notifications />
      <JobApplicationForm onSubmit={onSubmit} />
    </>
  );
  return { user, onSubmit };
}

const next = (user: User) => user.click(screen.getByRole('button', { name: 'Next' }));

async function fillPersonal(user: User) {
  await user.type(screen.getByLabelText(/First name/), 'Jane');
  await user.type(screen.getByLabelText(/Last name/), 'Doe');
  await user.type(screen.getByLabelText(/Email/), 'jane@example.com');
}

// Pickers open their mobile drawer in jsdom, the value is applied with the Save button
async function pickYears(user: User, field: HTMLElement, start: string, end: string) {
  await user.click(field);
  const dialog = await screen.findByRole('dialog');
  await user.click(within(dialog).getByRole('button', { name: start }));
  await user.click(within(dialog).getByRole('button', { name: end }));
  await user.click(within(dialog).getByRole('button', { name: 'Save' }));
}

async function fillExperience(user: User) {
  await user.type(screen.getByLabelText(/Current title/), 'Frontend engineer');
  await user.type(screen.getByLabelText(/Years of experience/), '6');
  await user.type(screen.getByLabelText(/Company/), 'Acme');
  await user.type(screen.getByLabelText(/^Title/), 'Developer');
  await pickYears(user, screen.getByLabelText(/^Years(?! of)/), '2020', '2023');
}

async function pickStartDate(user: User, day: string) {
  await user.click(screen.getByLabelText(/Earliest start date/));
  const dialog = await screen.findByRole('dialog');
  await user.click(within(dialog).getByRole('button', { name: day }));
  await user.click(within(dialog).getByRole('button', { name: 'Save' }));
}

async function fillAvailability(user: User) {
  await pickStartDate(user, '2 November 2026');
  await user.type(screen.getByLabelText(/Expected salary/), '120000');
  await user.click(screen.getByLabelText('Hybrid'));
  await user.type(screen.getByLabelText(/Notes/), 'Available for a call any weekday');
}

describe('JobApplicationForm', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date(2026, 9, 18, 12));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('validates only the personal step on Next and focuses the first invalid field', async () => {
    const { user } = renderForm();
    await next(user);

    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByText('Last name is required')).toBeInTheDocument();
    expect(screen.getByText('Enter a valid email')).toBeInTheDocument();
    expect(screen.getByLabelText(/First name/)).toHaveFocus();
    expect(screen.queryByLabelText(/Current title/)).not.toBeInTheDocument();
  });

  it('focuses the email field when only the email is invalid', async () => {
    const { user } = renderForm();
    await user.type(screen.getByLabelText(/First name/), 'Jane');
    await user.type(screen.getByLabelText(/Last name/), 'Doe');
    await user.type(screen.getByLabelText(/Email/), 'jane@');
    await next(user);

    expect(screen.getByText('Enter a valid email')).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toHaveFocus();
  });

  it('accepts an empty LinkedIn URL and rejects an invalid one', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await user.type(screen.getByLabelText(/LinkedIn URL/), 'linkedin');
    await next(user);

    expect(screen.getByText(/Enter a valid URL/)).toBeInTheDocument();
    expect(screen.getByLabelText(/LinkedIn URL/)).toHaveFocus();

    await user.clear(screen.getByLabelText(/LinkedIn URL/));
    await next(user);

    expect(screen.getByLabelText(/Current title/)).toBeInTheDocument();
  });

  it('validates the experience step and the positions list', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await next(user);

    expect(screen.getByText('Current title is required')).toBeInTheDocument();
    expect(screen.getByText('Years of experience must be between 0 and 50')).toBeInTheDocument();
    expect(screen.getByText('Company is required')).toBeInTheDocument();
    expect(screen.getByText('Title is required')).toBeInTheDocument();
    expect(screen.getByText('Select start and end year')).toBeInTheDocument();
    expect(screen.getByLabelText(/Current title/)).toHaveFocus();

    await user.type(screen.getByLabelText(/Current title/), 'Engineer');
    await user.type(screen.getByLabelText(/Years of experience/), '51');
    await next(user);

    expect(screen.getByLabelText(/Years of experience/)).toHaveFocus();
  });

  it('requires at least one position and focuses the Add position button', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await user.type(screen.getByLabelText(/Current title/), 'Engineer');
    await user.type(screen.getByLabelText(/Years of experience/), '3');
    await user.click(screen.getByRole('button', { name: 'Remove position 1' }));

    expect(screen.getByText('No positions added')).toBeInTheDocument();

    await next(user);

    expect(screen.getByText('Add at least one position')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add position' })).toHaveFocus();

    await user.click(screen.getByRole('button', { name: 'Add position' }));

    expect(screen.queryByText('Add at least one position')).not.toBeInTheDocument();
    expect(screen.getByText('Position 1')).toBeInTheDocument();
  });

  it('adds and removes positions', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);

    await user.type(screen.getByLabelText(/Company/), 'Acme');
    await user.click(screen.getByRole('button', { name: 'Add position' }));
    await user.click(screen.getByRole('button', { name: 'Add position' }));

    expect(screen.getAllByLabelText(/Company/)).toHaveLength(3);

    await user.type(screen.getAllByLabelText(/Company/)[2], 'Globex');
    await user.click(screen.getByRole('button', { name: 'Remove position 2' }));

    const companies = screen.getAllByLabelText(/Company/);
    expect(companies).toHaveLength(2);
    expect(companies[0]).toHaveValue('Acme');
    expect(companies[1]).toHaveValue('Globex');
  });

  it('keeps values when going back', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await user.type(screen.getByLabelText(/Current title/), 'Engineer');
    await user.click(screen.getByRole('button', { name: 'Back' }));

    expect(screen.getByLabelText(/First name/)).toHaveValue('Jane');
    expect(screen.getByLabelText(/Email/)).toHaveValue('jane@example.com');

    await next(user);

    expect(screen.getByLabelText(/Current title/)).toHaveValue('Engineer');
  });

  it('allows clicking only steps that were already reached', async () => {
    const { user } = renderForm();
    const experienceStep = () => screen.getByRole('button', { name: /Experience/ });

    await user.click(experienceStep());
    expect(screen.getByLabelText(/First name/)).toBeInTheDocument();

    await fillPersonal(user);
    await next(user);
    await user.click(screen.getByRole('button', { name: /Personal/ }));

    expect(screen.getByLabelText(/First name/)).toHaveValue('Jane');

    await user.click(experienceStep());

    expect(screen.getByLabelText(/Current title/)).toBeInTheDocument();
  });

  it('validates the current step before jumping forward from the stepper', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await user.click(screen.getByRole('button', { name: 'Back' }));
    await user.clear(screen.getByLabelText(/First name/));
    await user.click(screen.getByRole('button', { name: /Experience/ }));

    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByLabelText(/First name/)).toHaveFocus();
  });

  it('validates the availability step', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await fillExperience(user);
    await next(user);
    await next(user);

    expect(screen.getByText('Select your earliest start date')).toBeInTheDocument();
    expect(screen.getByText('Select a work arrangement')).toBeInTheDocument();
    expect(screen.getByLabelText(/Earliest start date/)).toHaveFocus();

    await pickStartDate(user, '20 October 2026');
    await next(user);

    expect(screen.getByLabelText('Remote')).toHaveFocus();
  });

  it('does not allow picking a start date in the past', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await fillExperience(user);
    await next(user);
    await user.click(screen.getByLabelText(/Earliest start date/));
    const dialog = await screen.findByRole('dialog');

    expect(within(dialog).getByRole('button', { name: '17 October 2026' })).toBeDisabled();
    expect(within(dialog).getByRole('button', { name: '18 October 2026' })).toBeEnabled();
  });

  it('shows a notes character counter and limits notes to 500 characters', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await fillExperience(user);
    await next(user);

    expect(screen.getByText('0 / 500')).toBeInTheDocument();

    await user.type(screen.getByLabelText(/Notes/), 'Hello');

    expect(screen.getByText('5 / 500')).toBeInTheDocument();
    expect(screen.getByLabelText(/Notes/)).toHaveAttribute('maxlength', '500');
  });

  it('shows the submit button only on the review step', async () => {
    const { user } = renderForm();

    expect(screen.queryByRole('button', { name: 'Submit application' })).not.toBeInTheDocument();

    await fillPersonal(user);
    await next(user);
    await fillExperience(user);
    await next(user);

    expect(screen.queryByRole('button', { name: 'Submit application' })).not.toBeInTheDocument();

    await fillAvailability(user);
    await next(user);

    expect(screen.getByRole('button', { name: 'Submit application' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument();
  });

  it('summarizes values on the review step and jumps to a step with Edit', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await fillExperience(user);
    await next(user);
    await fillAvailability(user);
    await next(user);

    const personal = screen.getByRole('region', { name: 'Personal' });
    expect(within(personal).getByText('Jane')).toBeInTheDocument();
    expect(within(personal).getByText('jane@example.com')).toBeInTheDocument();

    const experience = screen.getByRole('region', { name: 'Experience' });
    expect(within(experience).getByText('Frontend engineer')).toBeInTheDocument();
    expect(within(experience).getByText('Developer at Acme, 2020–2023')).toBeInTheDocument();

    const availability = screen.getByRole('region', { name: 'Availability' });
    expect(within(availability).getByText('November 2, 2026')).toBeInTheDocument();
    expect(within(availability).getByText('$120,000')).toBeInTheDocument();
    expect(within(availability).getByText('Hybrid')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Edit experience' }));

    expect(screen.getByLabelText(/Current title/)).toHaveValue('Frontend engineer');

    await user.clear(screen.getByLabelText(/Current title/));
    await user.type(screen.getByLabelText(/Current title/), 'Staff engineer');
    await user.click(screen.getByRole('button', { name: /Review/ }));

    expect(screen.getByText('Staff engineer')).toBeInTheDocument();
  });

  it('submits the application, shows a notification and resets the form', async () => {
    const { user, onSubmit } = renderForm();
    await fillPersonal(user);
    await next(user);
    await fillExperience(user);
    await next(user);
    await fillAvailability(user);
    await next(user);
    await user.click(screen.getByRole('button', { name: 'Submit application' }));

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        currentTitle: 'Frontend engineer',
        yearsOfExperience: 6,
        positions: [
          expect.objectContaining({
            company: 'Acme',
            title: 'Developer',
            years: ['2020-01-01', '2023-01-01'],
          }),
        ],
        startDate: '2026-11-02',
        expectedSalary: 120000,
        workMode: 'hybrid',
        notes: 'Available for a call any weekday',
      })
    );
    expect(await screen.findByText('Application submitted')).toBeInTheDocument();
    expect(screen.getByLabelText(/First name/)).toHaveValue('');
    expect(screen.getByLabelText(/Email/)).toHaveValue('');
    expect(screen.queryByRole('button', { name: 'Submit application' })).not.toBeInTheDocument();
  });
});
