import { render, screen, userEvent, waitFor, within } from '@test-utils';
import { Notifications } from '@mantine/notifications';
import { JobApplicationForm } from './JobApplicationForm';

type User = ReturnType<typeof userEvent.setup>;

function renderForm(onSubmit = vi.fn()) {
  render(
    <>
      <Notifications />
      <JobApplicationForm onSubmit={onSubmit} />
    </>
  );
  return { onSubmit, user: userEvent.setup() };
}

const next = (user: User) => user.click(screen.getByRole('button', { name: 'Next' }));
const back = (user: User) => user.click(screen.getByRole('button', { name: 'Back' }));

async function fillPersonal(user: User) {
  await user.type(screen.getByRole('textbox', { name: /First name/ }), 'Jane');
  await user.type(screen.getByRole('textbox', { name: /Last name/ }), 'Doe');
  await user.type(screen.getByRole('textbox', { name: /Email/ }), 'jane@example.com');
}

// Picker inputs open a drawer in jsdom, the value is applied with its Save button
async function pickYears(user: User, index: number, start: string, end: string) {
  const position = screen.getByText(`Position ${index + 1}`).closest('div')!.parentElement!;
  await user.click(within(position).getByRole('button', { name: /Years/ }));
  await user.click(await screen.findByRole('button', { name: start }));
  await user.click(screen.getByRole('button', { name: end }));
  await user.click(screen.getByRole('button', { name: 'Save' }));
}

async function fillExperience(user: User) {
  await user.type(screen.getByRole('textbox', { name: /Current title/ }), 'Engineer');
  await user.type(screen.getByRole('textbox', { name: /Years of experience/ }), '7');
  await user.type(screen.getByRole('textbox', { name: /Company/ }), 'Acme');
  await user.type(screen.getByRole('textbox', { name: /^Title/ }), 'Developer');
  await pickYears(user, 0, '2021', '2024');
}

async function pickStartDate(user: User, day: string) {
  await user.click(screen.getByRole('button', { name: /Earliest start date/ }));
  await user.click(await screen.findByRole('button', { name: day }));
  await user.click(screen.getByRole('button', { name: 'Save' }));
}

async function fillAvailability(user: User) {
  await pickStartDate(user, '1 November 2026');
  await user.type(screen.getByRole('textbox', { name: /Expected salary/ }), '120000');
  await user.click(screen.getByRole('radio', { name: 'Hybrid' }));
  await user.type(screen.getByRole('textbox', { name: /Notes/ }), 'Available for calls');
}

function stepButton(label: string) {
  return screen.getByText(label, { selector: '.mantine-Stepper-stepLabel' }).closest('button')!;
}

describe('JobApplicationForm', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date(2026, 9, 19, 12));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('validates only the personal step and focuses the first invalid field', async () => {
    const { user } = renderForm();
    await next(user);

    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByText('Last name is required')).toBeInTheDocument();
    expect(screen.getByText('Enter a valid email')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /First name/ })).toHaveFocus();
    expect(screen.queryByText('Current title is required')).not.toBeInTheDocument();
    expect(screen.queryByRole('textbox', { name: /Current title/ })).not.toBeInTheDocument();
  });

  it('focuses the first invalid field after earlier fields are fixed', async () => {
    const { user } = renderForm();
    await user.type(screen.getByRole('textbox', { name: /First name/ }), 'Jane');
    await user.type(screen.getByRole('textbox', { name: /Last name/ }), 'Doe');
    await next(user);

    expect(screen.getByRole('textbox', { name: /Email/ })).toHaveFocus();
  });

  it('validates LinkedIn URL only when it is filled', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    const linkedin = screen.getByRole('textbox', { name: /LinkedIn/ });

    await user.type(linkedin, 'linkedin.com/in/jane');
    await next(user);
    expect(screen.getByText(/Enter a valid URL/)).toBeInTheDocument();
    expect(linkedin).toHaveFocus();

    await user.clear(linkedin);
    await next(user);
    expect(screen.getByRole('textbox', { name: /Current title/ })).toBeInTheDocument();
  });

  it('accepts a valid LinkedIn URL', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await user.type(
      screen.getByRole('textbox', { name: /LinkedIn/ }),
      'https://linkedin.com/in/jane'
    );
    await next(user);
    expect(screen.getByRole('textbox', { name: /Current title/ })).toBeInTheDocument();
  });

  it('validates experience fields and position years', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await next(user);

    expect(screen.getByText('Current title is required')).toBeInTheDocument();
    expect(screen.getByText('Enter a number between 0 and 50')).toBeInTheDocument();
    expect(screen.getByText('Company is required')).toBeInTheDocument();
    expect(screen.getByText('Title is required')).toBeInTheDocument();
    expect(screen.getByText('Select the start and end year')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Current title/ })).toHaveFocus();
  });

  it('clamps years of experience to 50', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    const years = screen.getByRole('textbox', { name: /Years of experience/ });
    await user.type(years, '75');
    expect(years).toHaveValue('7');
  });

  it('adds and removes positions and requires at least one', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);

    await user.click(screen.getByRole('button', { name: 'Add position' }));
    expect(screen.getByText('Position 2')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox', { name: /Company/ })).toHaveLength(2);

    await user.click(screen.getByRole('button', { name: 'Remove position 2' }));
    await user.click(screen.getByRole('button', { name: 'Remove position 1' }));
    expect(screen.getByText('No positions added')).toBeInTheDocument();

    await user.type(screen.getByRole('textbox', { name: /Current title/ }), 'Engineer');
    await user.type(screen.getByRole('textbox', { name: /Years of experience/ }), '3');
    await next(user);
    expect(screen.getByText('Add at least one previous position')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add position' })).toHaveFocus();
  });

  it('keeps a removed row error from moving to another row', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await user.click(screen.getByRole('button', { name: 'Add position' }));
    await user.type(screen.getAllByRole('textbox', { name: /Company/ })[1], 'Acme');
    await next(user);
    expect(screen.getAllByText('Company is required')).toHaveLength(1);

    await user.click(screen.getByRole('button', { name: 'Remove position 1' }));
    expect(screen.queryByText('Company is required')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Company/ })).toHaveValue('Acme');
  });

  it('keeps data when going back', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await fillExperience(user);
    await next(user);
    await back(user);

    expect(screen.getByRole('textbox', { name: /Current title/ })).toHaveValue('Engineer');
    expect(screen.getByRole('textbox', { name: /Company/ })).toHaveValue('Acme');
    expect(screen.getByRole('button', { name: /Years/ })).toHaveTextContent('2021 – 2024');

    await back(user);
    expect(screen.getByRole('textbox', { name: /First name/ })).toHaveValue('Jane');
    expect(screen.getByRole('textbox', { name: /Email/ })).toHaveValue('jane@example.com');
  });

  it('allows clicking completed steps only', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await user.click(stepButton('Experience'));
    expect(screen.getByRole('textbox', { name: /First name/ })).toBeInTheDocument();

    await next(user);
    await user.click(stepButton('Availability'));
    expect(screen.getByRole('textbox', { name: /Current title/ })).toBeInTheDocument();

    await user.click(stepButton('Personal'));
    expect(screen.getByRole('textbox', { name: /First name/ })).toHaveValue('Jane');

    // A step reached earlier stays reachable, the current step is validated first
    await user.clear(screen.getByRole('textbox', { name: /First name/ }));
    await user.click(stepButton('Experience'));
    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /First name/ })).toHaveFocus();

    await user.type(screen.getByRole('textbox', { name: /First name/ }), 'Janet');
    await user.click(stepButton('Experience'));
    expect(screen.getByRole('textbox', { name: /Current title/ })).toBeInTheDocument();
  });

  it('validates availability and does not allow past start dates', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await fillExperience(user);
    await next(user);
    await next(user);

    expect(screen.getByText('Pick your earliest start date')).toBeInTheDocument();
    expect(screen.getByText('Choose a work arrangement')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Earliest start date/ })).toHaveFocus();

    await user.click(screen.getByRole('button', { name: /Earliest start date/ }));
    expect(await screen.findByRole('button', { name: '18 October 2026' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '19 October 2026' })).toBeEnabled();
    await user.click(screen.getByRole('button', { name: '19 October 2026' }));
    await user.click(screen.getByRole('button', { name: 'Save' }));

    await next(user);
    expect(screen.queryByText('Pick your earliest start date')).not.toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Remote' })).toHaveFocus();
  });

  it('shows a notes character counter limited to 500', async () => {
    const { user } = renderForm();
    await fillPersonal(user);
    await next(user);
    await fillExperience(user);
    await next(user);

    expect(screen.getByText('0/500')).toBeInTheDocument();
    const notes = screen.getByRole('textbox', { name: /Notes/ });
    await user.type(notes, 'Hello');
    expect(screen.getByText('5/500')).toBeInTheDocument();
    expect(notes).toHaveAttribute('maxlength', '500');

    await user.click(notes);
    await user.paste('a'.repeat(600));
    expect(screen.getByText('500/500')).toBeInTheDocument();
  });

  it('shows a summary, jumps to a step with Edit and submits the application', async () => {
    const { user, onSubmit } = renderForm();
    expect(screen.queryByRole('button', { name: 'Submit application' })).not.toBeInTheDocument();

    await fillPersonal(user);
    await user.type(screen.getByRole('textbox', { name: /Phone/ }), '2025550123');
    await next(user);
    await fillExperience(user);
    await next(user);
    await fillAvailability(user);
    await next(user);

    const personal = screen.getByRole('region', { name: 'Personal' });
    expect(within(personal).getByText('Jane Doe')).toBeInTheDocument();
    expect(within(personal).getByText('jane@example.com')).toBeInTheDocument();
    expect(within(personal).getByText('+1 (202) 555-0123')).toBeInTheDocument();

    const experience = screen.getByRole('region', { name: 'Experience' });
    expect(within(experience).getByText('Engineer')).toBeInTheDocument();
    expect(within(experience).getByText('Developer at Acme, 2021–2024')).toBeInTheDocument();

    const availability = screen.getByRole('region', { name: 'Availability' });
    expect(within(availability).getByText('November 1, 2026')).toBeInTheDocument();
    expect(within(availability).getByText('$120,000')).toBeInTheDocument();
    expect(within(availability).getByText('Hybrid')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Edit Experience' }));
    const title = screen.getByRole('textbox', { name: /Current title/ });
    await user.clear(title);
    await user.type(title, 'Senior engineer');
    await user.click(stepButton('Review'));
    expect(screen.getByText('Senior engineer')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Submit application' }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
    expect(onSubmit).toHaveBeenCalledWith({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      phone: '+12025550123',
      linkedin: '',
      currentTitle: 'Senior engineer',
      yearsOfExperience: 7,
      positions: [
        {
          id: expect.any(String),
          company: 'Acme',
          title: 'Developer',
          years: ['2021-01-01', '2024-01-01'],
        },
      ],
      startDate: '2026-11-01',
      salary: 120000,
      workArrangement: 'hybrid',
      notes: 'Available for calls',
    });

    expect(await screen.findByText('Application submitted')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /First name/ })).toHaveValue('');
    await user.click(stepButton('Experience'));
    expect(screen.getByRole('textbox', { name: /First name/ })).toBeInTheDocument();
  });
});
