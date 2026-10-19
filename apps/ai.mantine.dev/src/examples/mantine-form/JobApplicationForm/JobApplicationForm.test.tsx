import { render, screen, userEvent, waitFor, within } from '@test-utils';
import { Notifications } from '@mantine/notifications';
import { JobApplicationForm } from './JobApplicationForm';
import type { JobApplicationValues } from './types';

type User = ReturnType<typeof userEvent.setup>;

function renderForm(onSubmit?: (values: JobApplicationValues) => void) {
  const user = userEvent.setup();
  render(
    <>
      <Notifications />
      <JobApplicationForm onSubmit={onSubmit} />
    </>
  );
  return user;
}

const clickNext = (user: User) => user.click(screen.getByRole('button', { name: 'Next' }));
const clickBack = (user: User) => user.click(screen.getByRole('button', { name: 'Back' }));
const stepButton = (label: string) => screen.getByRole('button', { name: new RegExp(label) });

// jsdom matches no media query, so pickers open in a drawer and apply the value on Save
async function pickYears(user: User, start: string, end: string, positionIndex = 0) {
  await user.click(screen.getAllByRole('button', { name: /Start and end year/ })[positionIndex]);
  await user.click(screen.getByRole('button', { name: start }));
  await user.click(screen.getByRole('button', { name: end }));
  await user.click(screen.getByRole('button', { name: 'Save' }));
}

async function pickStartDate(user: User, dayLabel: string) {
  await user.click(screen.getByRole('button', { name: /Earliest start date/ }));
  await user.click(screen.getByRole('button', { name: dayLabel }));
  await user.click(screen.getByRole('button', { name: 'Save' }));
}

async function fillPersonal(user: User) {
  await user.type(screen.getByRole('textbox', { name: /First name/ }), 'Jane');
  await user.type(screen.getByRole('textbox', { name: /Last name/ }), 'Doe');
  await user.type(screen.getByRole('textbox', { name: /Email/ }), 'jane@example.com');
}

async function fillExperience(user: User) {
  await user.type(screen.getByRole('textbox', { name: /Current title/ }), 'Senior engineer');
  await user.type(screen.getByRole('textbox', { name: /Years of experience/ }), '8');
  await user.type(screen.getByRole('textbox', { name: /Company/ }), 'Acme');
  await user.type(screen.getByRole('textbox', { name: /^Title/ }), 'Engineer');
  await pickYears(user, '2020', '2024');
}

async function fillAvailability(user: User) {
  await pickStartDate(user, '2 November 2026');
  await user.click(screen.getByRole('radio', { name: 'Hybrid' }));
}

async function goToReview(user: User) {
  await fillPersonal(user);
  await clickNext(user);
  await fillExperience(user);
  await clickNext(user);
  await fillAvailability(user);
  await clickNext(user);
}

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(new Date(2026, 9, 19, 12));
});

afterEach(() => {
  vi.useRealTimers();
});

describe('JobApplicationForm', () => {
  it('renders a stepper with four steps and starts on the personal step', () => {
    renderForm();

    for (const label of ['Personal', 'Experience', 'Availability', 'Review']) {
      expect(stepButton(label)).toBeInTheDocument();
    }
    expect(screen.getByRole('textbox', { name: /First name/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Back' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Submit application' })).not.toBeInTheDocument();
  });

  describe('personal step', () => {
    it('shows required errors on Next and focuses the first invalid field', async () => {
      const user = renderForm();
      await clickNext(user);

      expect(screen.getByText('First name is required')).toBeInTheDocument();
      expect(screen.getByText('Last name is required')).toBeInTheDocument();
      expect(screen.getByText('Enter a valid email')).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: /First name/ })).toHaveFocus();
      expect(screen.queryByRole('textbox', { name: /Current title/ })).not.toBeInTheDocument();
    });

    it('focuses the email field when it is the first invalid field', async () => {
      const user = renderForm();
      await user.type(screen.getByRole('textbox', { name: /First name/ }), 'Jane');
      await user.type(screen.getByRole('textbox', { name: /Last name/ }), 'Doe');
      await user.type(screen.getByRole('textbox', { name: /Email/ }), 'jane@');
      await clickNext(user);

      expect(screen.getByText('Enter a valid email')).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: /Email/ })).toHaveFocus();
    });

    it('validates the LinkedIn URL only when it is filled', async () => {
      const user = renderForm();
      const linkedin = screen.getByRole('textbox', { name: /LinkedIn URL/ });

      await user.type(linkedin, 'not a url');
      await user.tab();
      expect(screen.getByText('Enter a valid URL')).toBeInTheDocument();

      await user.clear(linkedin);
      await user.type(linkedin, 'https://www.linkedin.com/in/jane');
      await user.tab();
      expect(screen.queryByText('Enter a valid URL')).not.toBeInTheDocument();

      await user.clear(linkedin);
      await fillPersonal(user);
      await clickNext(user);
      expect(screen.getByRole('textbox', { name: /Current title/ })).toBeInTheDocument();
    });

    it('clears the email error once the value is fixed', async () => {
      const user = renderForm();
      const email = screen.getByRole('textbox', { name: /Email/ });

      await user.type(email, 'jane');
      await user.tab();
      expect(screen.getByText('Enter a valid email')).toBeInTheDocument();

      await user.type(email, '@example.com');
      await user.tab();
      expect(screen.queryByText('Enter a valid email')).not.toBeInTheDocument();
    });
  });

  describe('experience step', () => {
    it('validates only the current step: no errors are shown on the next step', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await clickNext(user);

      expect(screen.getByRole('textbox', { name: /Current title/ })).toBeInTheDocument();
      expect(screen.queryByText('Current title is required')).not.toBeInTheDocument();
      expect(screen.queryByText('Company is required')).not.toBeInTheDocument();
    });

    it('shows errors for the title, years and positions and focuses the current title', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await clickNext(user);
      await clickNext(user);

      expect(screen.getByText('Current title is required')).toBeInTheDocument();
      expect(screen.getByText('Years of experience must be between 0 and 50')).toBeInTheDocument();
      expect(screen.getByText('Company is required')).toBeInTheDocument();
      expect(screen.getByText('Title is required')).toBeInTheDocument();
      expect(screen.getByText('Select start and end years')).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: /Current title/ })).toHaveFocus();
    });

    it('keeps years of experience between 0 and 50', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await clickNext(user);

      const years = screen.getByRole('textbox', { name: /Years of experience/ });
      await user.type(years, '60');
      await user.tab();
      expect(years).toHaveValue('50');

      await user.clear(years);
      await user.type(years, '-3');
      expect(years).toHaveValue('3');

      await user.clear(years);
      await user.type(years, '0');
      await user.tab();
      expect(
        screen.queryByText('Years of experience must be between 0 and 50')
      ).not.toBeInTheDocument();
    });

    it('adds and removes positions', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await clickNext(user);

      expect(screen.getAllByRole('group', { name: /Position \d/ })).toHaveLength(1);

      await user.click(screen.getByRole('button', { name: 'Add position' }));
      await user.click(screen.getByRole('button', { name: 'Add position' }));
      expect(screen.getAllByRole('group', { name: /Position \d/ })).toHaveLength(3);

      const second = screen.getByRole('group', { name: 'Position 2' });
      await user.type(within(second).getByRole('textbox', { name: /Company/ }), 'Globex');

      await user.click(screen.getByRole('button', { name: 'Remove position 1' }));
      expect(screen.getAllByRole('group', { name: /Position \d/ })).toHaveLength(2);
      expect(
        within(screen.getByRole('group', { name: 'Position 1' })).getByRole('textbox', {
          name: /Company/,
        })
      ).toHaveValue('Globex');
    });

    it('requires at least one position and focuses the Add position button', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await clickNext(user);

      await user.type(screen.getByRole('textbox', { name: /Current title/ }), 'Engineer');
      await user.type(screen.getByRole('textbox', { name: /Years of experience/ }), '3');
      await user.click(screen.getByRole('button', { name: 'Remove position 1' }));
      expect(screen.getByText('No positions added')).toBeInTheDocument();

      await clickNext(user);
      expect(screen.getByText('Add at least one position')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Add position' })).toHaveFocus();

      await user.click(screen.getByRole('button', { name: 'Add position' }));
      expect(screen.queryByText('Add at least one position')).not.toBeInTheDocument();
    });

    it('accepts a position that starts and ends in the same year', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await clickNext(user);

      await user.type(screen.getByRole('textbox', { name: /Current title/ }), 'Engineer');
      await user.type(screen.getByRole('textbox', { name: /Years of experience/ }), '1');
      await user.type(screen.getByRole('textbox', { name: /Company/ }), 'Acme');
      await user.type(screen.getByRole('textbox', { name: /^Title/ }), 'Intern');
      await pickYears(user, '2025', '2025');
      await clickNext(user);

      expect(screen.getByRole('button', { name: /Earliest start date/ })).toBeInTheDocument();
    });
  });

  describe('availability step', () => {
    it('requires a start date and work arrangement and focuses the date picker', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await clickNext(user);
      await fillExperience(user);
      await clickNext(user);
      await clickNext(user);

      expect(screen.getByText('Earliest start date is required')).toBeInTheDocument();
      expect(screen.getByText('Select a work arrangement')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Earliest start date/ })).toHaveFocus();
    });

    it('focuses the first radio when only the work arrangement is missing', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await clickNext(user);
      await fillExperience(user);
      await clickNext(user);
      await pickStartDate(user, '19 October 2026');
      await clickNext(user);

      expect(screen.queryByText('Earliest start date is required')).not.toBeInTheDocument();
      expect(screen.getByRole('radio', { name: 'Remote' })).toHaveFocus();
    });

    it('does not allow picking a date before today', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await clickNext(user);
      await fillExperience(user);
      await clickNext(user);

      await user.click(screen.getByRole('button', { name: /Earliest start date/ }));
      expect(screen.getByRole('button', { name: '18 October 2026' })).toBeDisabled();
      expect(screen.getByRole('button', { name: '19 October 2026' })).toBeEnabled();
    });

    it('counts notes characters and limits them to 500', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await clickNext(user);
      await fillExperience(user);
      await clickNext(user);

      const notes = screen.getByRole('textbox', { name: 'Notes' });
      expect(screen.getByText('0/500 characters')).toBeInTheDocument();

      await user.type(notes, 'Hello');
      expect(screen.getByText('5/500 characters')).toBeInTheDocument();

      await user.clear(notes);
      await user.click(notes);
      await user.paste('a'.repeat(520));
      expect(notes).toHaveValue('a'.repeat(500));
      expect(screen.getByText('500/500 characters')).toBeInTheDocument();
    });
  });

  describe('navigation', () => {
    it('keeps values when going back and forward', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await user.type(
        screen.getByRole('textbox', { name: /LinkedIn URL/ }),
        'https://linkedin.com/in/jane'
      );
      await clickNext(user);
      await fillExperience(user);
      await clickNext(user);
      await user.type(screen.getByRole('textbox', { name: 'Notes' }), 'Available soon');

      await clickBack(user);
      expect(screen.getByRole('textbox', { name: /Current title/ })).toHaveValue('Senior engineer');
      expect(screen.getByRole('textbox', { name: /Years of experience/ })).toHaveValue('8');
      expect(screen.getByRole('textbox', { name: /Company/ })).toHaveValue('Acme');
      expect(screen.getByRole('button', { name: /Start and end year/ })).toHaveTextContent(
        '2020 – 2024'
      );

      await clickBack(user);
      expect(screen.getByRole('textbox', { name: /First name/ })).toHaveValue('Jane');
      expect(screen.getByRole('textbox', { name: /Email/ })).toHaveValue('jane@example.com');
      expect(screen.getByRole('textbox', { name: /LinkedIn URL/ })).toHaveValue(
        'https://linkedin.com/in/jane'
      );

      await clickNext(user);
      await clickNext(user);
      expect(screen.getByRole('textbox', { name: 'Notes' })).toHaveValue('Available soon');
    });

    it('allows clicking only steps that were already reached', async () => {
      const user = renderForm();

      await user.click(stepButton('Availability'));
      expect(screen.getByRole('textbox', { name: /First name/ })).toBeInTheDocument();

      await fillPersonal(user);
      await clickNext(user);
      await fillExperience(user);
      await clickNext(user);

      await user.click(stepButton('Personal'));
      expect(screen.getByRole('textbox', { name: /First name/ })).toHaveValue('Jane');

      await user.click(stepButton('Availability'));
      expect(screen.getByRole('button', { name: /Earliest start date/ })).toBeInTheDocument();

      await user.click(stepButton('Review'));
      expect(screen.getByRole('button', { name: /Earliest start date/ })).toBeInTheDocument();
    });

    it('validates the current step before jumping ahead in the stepper', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await clickNext(user);
      await fillExperience(user);
      await clickNext(user);

      await user.click(stepButton('Personal'));
      await user.clear(screen.getByRole('textbox', { name: /Last name/ }));
      await user.click(stepButton('Availability'));

      expect(screen.getByText('Last name is required')).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: /Last name/ })).toHaveFocus();
    });
  });

  describe('review step', () => {
    it('shows a summary of all values grouped by step', async () => {
      const user = renderForm();
      await fillPersonal(user);
      await clickNext(user);
      await fillExperience(user);
      await clickNext(user);
      await fillAvailability(user);
      await user.type(screen.getByRole('textbox', { name: /Expected salary/ }), '120000');
      await user.type(screen.getByRole('textbox', { name: 'Notes' }), 'Looking forward');
      await clickNext(user);

      const personal = screen.getByRole('region', { name: 'Personal details' });
      expect(within(personal).getByText('Jane Doe')).toBeInTheDocument();
      expect(within(personal).getByText('jane@example.com')).toBeInTheDocument();
      expect(within(personal).getAllByText('Not provided')).toHaveLength(2);

      const experience = screen.getByRole('region', { name: 'Experience' });
      expect(within(experience).getByText('Senior engineer')).toBeInTheDocument();
      expect(within(experience).getByText('8')).toBeInTheDocument();
      expect(within(experience).getByText('Engineer at Acme, 2020–2024')).toBeInTheDocument();

      const availability = screen.getByRole('region', { name: 'Availability' });
      expect(within(availability).getByText('November 2, 2026')).toBeInTheDocument();
      expect(within(availability).getByText('$120,000')).toBeInTheDocument();
      expect(within(availability).getByText('Hybrid')).toBeInTheDocument();
      expect(within(availability).getByText('Looking forward')).toBeInTheDocument();

      expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Submit application' })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument();
    });

    it('jumps to a step with the Edit link and comes back to review', async () => {
      const user = renderForm();
      await goToReview(user);

      await user.click(screen.getByRole('button', { name: 'Edit experience' }));
      const title = screen.getByRole('textbox', { name: /Current title/ });
      expect(title).toHaveValue('Senior engineer');

      await user.clear(title);
      await user.type(title, 'Staff engineer');
      await user.click(stepButton('Review'));
      expect(screen.getByText('Staff engineer')).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Edit personal details' }));
      expect(screen.getByRole('textbox', { name: /First name/ })).toHaveValue('Jane');

      await user.click(stepButton('Review'));
      await user.click(screen.getByRole('button', { name: 'Edit availability' }));
      expect(screen.getByRole('radio', { name: 'Hybrid' })).toBeChecked();
    });
  });

  describe('submission', () => {
    it('submits the values, shows a success notification and resets the form', async () => {
      const onSubmit = vi.fn();
      const user = renderForm(onSubmit);
      await goToReview(user);

      await user.click(screen.getByRole('button', { name: 'Submit application' }));

      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane@example.com',
          phone: '',
          linkedinUrl: '',
          currentTitle: 'Senior engineer',
          yearsOfExperience: 8,
          positions: [
            expect.objectContaining({
              company: 'Acme',
              title: 'Engineer',
              years: ['2020-01-01', '2024-01-01'],
            }),
          ],
          startDate: '2026-11-02',
          expectedSalary: '',
          workArrangement: 'hybrid',
          notes: '',
        })
      );

      expect(await screen.findByText('Application submitted')).toBeInTheDocument();

      await waitFor(() =>
        expect(screen.getByRole('textbox', { name: /First name/ })).toHaveValue('')
      );
      expect(screen.getByRole('textbox', { name: /Email/ })).toHaveValue('');

      await user.click(stepButton('Experience'));
      expect(screen.queryByRole('textbox', { name: /Current title/ })).not.toBeInTheDocument();

      await fillPersonal(user);
      await clickNext(user);
      expect(screen.getByRole('textbox', { name: /Current title/ })).toHaveValue('');
      expect(screen.getAllByRole('group', { name: /Position \d/ })).toHaveLength(1);
    });
  });
});
