import { render, screen, userEvent, within } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { ClinicAppointments } from './ClinicAppointments';
import type { Appointment } from './types';

// Thursday. Dr. Keller works 09:00–17:00 with lunch 13:00–14:00
const NOW = new Date(2026, 9, 29, 8, 0);

const APPOINTMENTS: Appointment[] = [
  {
    id: 'a1',
    doctorId: 'keller',
    patientId: 'p01',
    type: 'consultation',
    start: '2026-10-29 10:00:00',
    end: '2026-10-29 10:30:00',
    note: '',
  },
  {
    id: 'a2',
    doctorId: 'keller',
    patientId: 'p02',
    type: 'follow-up',
    start: '2026-10-29 11:00:00',
    end: '2026-10-29 11:15:00',
    note: '',
  },
  {
    id: 'a3',
    doctorId: 'liu',
    patientId: 'p03',
    type: 'procedure',
    start: '2026-10-29 12:00:00',
    end: '2026-10-29 13:00:00',
    note: '',
  },
];

function renderCalendar() {
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  render(
    <>
      <Notifications />
      <ClinicAppointments initialAppointments={APPOINTMENTS} />
    </>
  );
  return { user };
}

type User = ReturnType<typeof userEvent.setup>;

const slot = (dateTime: string) =>
  screen.getByRole('button', { name: new RegExp(`^Time slot ${dateTime}`) });

const json = (doctor = 'Dr. Anna Keller') =>
  screen.getByLabelText(`Appointments of ${doctor} as JSON`);

async function openSlot(user: User, dateTime: string) {
  await user.click(slot(dateTime));
  return screen.getByRole('dialog');
}

async function pickPatient(user: User, search: string, name: RegExp) {
  await user.type(screen.getByRole('combobox', { name: 'Patient' }), search);
  await user.click(screen.getByRole('option', { name }));
}

beforeEach(() => {
  jest.useFakeTimers({ now: NOW, advanceTimers: true });
});

afterEach(() => {
  notifications.clean();
  jest.useRealTimers();
});

describe('calendar', () => {
  it('shows the patient name and the appointment type on each appointment', () => {
    renderCalendar();
    expect(screen.getByText('Olivia Bennett')).toBeInTheDocument();
    expect(screen.getByText('Consultation · 10:00–10:30')).toBeInTheDocument();
  });

  it('shows only the appointments of the selected doctor', () => {
    renderCalendar();
    expect(screen.queryByText('Emma Thompson')).not.toBeInTheDocument();
  });

  it('switches to another doctor with the selector in the header', async () => {
    const { user } = renderCalendar();
    await user.click(screen.getByRole('combobox', { name: 'Doctor' }));
    await user.click(screen.getByRole('option', { name: /Dr. Marcus Liu/ }));

    expect(screen.getByText('Emma Thompson')).toBeInTheDocument();
    expect(screen.queryByText('Olivia Bennett')).not.toBeInTheDocument();
  });

  it('shows the selected doctor appointments as JSON', async () => {
    const { user } = renderCalendar();
    expect(json()).toHaveTextContent('"patient": "Olivia Bennett"');

    await user.click(screen.getByRole('combobox', { name: 'Doctor' }));
    await user.click(screen.getByRole('option', { name: /Dr. Marcus Liu/ }));
    expect(json('Dr. Marcus Liu')).toHaveTextContent('"patient": "Emma Thompson"');
  });

  it('moves to the next week', async () => {
    const { user } = renderCalendar();
    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('Nov 2 – Nov 8, 2026')).toBeInTheDocument();
  });

  it('opens nothing when the lunch break is clicked', async () => {
    const { user } = renderCalendar();
    await user.click(slot('2026-10-29 13:15'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

describe('booking', () => {
  it('opens the booking form when an available slot is clicked', async () => {
    const { user } = renderCalendar();
    const dialog = await openSlot(user, '2026-10-29 14:00');
    expect(within(dialog).getByRole('heading', { name: 'New appointment' })).toBeInTheDocument();
  });

  it('shows the end time that follows from the type and the clicked slot', async () => {
    const { user } = renderCalendar();
    await openSlot(user, '2026-10-29 14:00');
    await user.click(screen.getByRole('radio', { name: 'Procedure · 60 min' }));
    expect(screen.getByText('Ends at 15:00 · 60 min')).toBeInTheDocument();
  });

  it('finds patients by phone number', async () => {
    const { user } = renderCalendar();
    await openSlot(user, '2026-10-29 14:00');
    await user.type(screen.getByRole('combobox', { name: 'Patient' }), '208-33');

    expect(screen.getAllByRole('option')).toHaveLength(1);
    expect(screen.getByRole('option', { name: /Liam Carter/ })).toBeInTheDocument();
  });

  it('requires a patient and an appointment type', async () => {
    const { user } = renderCalendar();
    await openSlot(user, '2026-10-29 14:00');
    await user.click(screen.getByRole('button', { name: 'Book appointment' }));

    expect(screen.getByText('Pick a patient')).toBeInTheDocument();
    expect(screen.getByText('Pick an appointment type')).toBeInTheDocument();
  });

  it('rejects an appointment that would end after working hours', async () => {
    const { user } = renderCalendar();
    await openSlot(user, '2026-10-29 16:30');
    await pickPatient(user, 'Emma', /Emma Thompson/);
    await user.click(screen.getByRole('radio', { name: 'Procedure · 60 min' }));
    await user.click(screen.getByRole('button', { name: 'Book appointment' }));

    expect(
      screen.getByText('It would end at 17:30, after working hours end at 17:00')
    ).toBeInTheDocument();
  });

  it('rejects an appointment that would run into the next appointment', async () => {
    const { user } = renderCalendar();
    await openSlot(user, '2026-10-29 10:45');
    await pickPatient(user, 'Emma', /Emma Thompson/);
    await user.click(screen.getByRole('radio', { name: 'Consultation · 30 min' }));
    await user.click(screen.getByRole('button', { name: 'Book appointment' }));

    expect(
      screen.getByText('It would end at 11:15, after the next appointment starts at 11:00')
    ).toBeInTheDocument();
  });

  it('books the appointment and shows it in the calendar and the JSON', async () => {
    const { user } = renderCalendar();
    await openSlot(user, '2026-10-29 14:00');
    await pickPatient(user, 'Emma', /Emma Thompson/);
    await user.click(screen.getByRole('radio', { name: 'Procedure · 60 min' }));
    await user.click(screen.getByRole('button', { name: 'Book appointment' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByText('Procedure · 14:00–15:00')).toBeInTheDocument();
    expect(json()).toHaveTextContent(
      '"start": "2026-10-29 14:00:00", "end": "2026-10-29 15:00:00"'
    );
  });

  it('confirms the booking with a notification', async () => {
    const { user } = renderCalendar();
    await openSlot(user, '2026-10-29 14:00');
    await pickPatient(user, 'Emma', /Emma Thompson/);
    await user.click(screen.getByRole('radio', { name: 'Follow-up · 15 min' }));
    await user.click(screen.getByRole('button', { name: 'Book appointment' }));

    expect(await screen.findByText('Appointment booked')).toBeInTheDocument();
    expect(screen.getByText('Emma Thompson · Thu, Oct 29, 14:00')).toBeInTheDocument();
  });
});

describe('editing', () => {
  it('opens the appointment in the form when it is clicked', async () => {
    const { user } = renderCalendar();
    await user.click(screen.getByText('Olivia Bennett'));

    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('heading', { name: 'Edit appointment' })).toBeInTheDocument();
    expect(within(dialog).getByRole('combobox', { name: 'Patient' })).toHaveValue('Olivia Bennett');
    expect(within(dialog).getByRole('radio', { name: 'Consultation · 30 min' })).toBeChecked();
  });

  it('saves changes to the appointment', async () => {
    const { user } = renderCalendar();
    await user.click(screen.getByText('Olivia Bennett'));
    await user.type(screen.getByRole('textbox', { name: 'Note' }), 'Bring blood test results');
    await user.click(screen.getByRole('button', { name: 'Save changes' }));

    expect(await screen.findByText('Appointment updated')).toBeInTheDocument();
    expect(json()).toHaveTextContent('"note": "Bring blood test results"');
  });

  it('cancels the appointment', async () => {
    const { user } = renderCalendar();
    await user.click(screen.getByText('Olivia Bennett'));
    await user.click(screen.getByRole('button', { name: 'Cancel appointment' }));

    expect(await screen.findByText('Appointment cancelled')).toBeInTheDocument();
    expect(json()).not.toHaveTextContent('Olivia Bennett');
  });
});

describe('small screens', () => {
  beforeEach(() => {
    jest.spyOn(window, 'matchMedia').mockImplementation(
      (query: string) =>
        ({
          matches: query.includes('max-width'),
          media: query,
          onchange: null,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        }) as unknown as MediaQueryList
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('shows a month with the appointments of the selected day', async () => {
    renderCalendar();
    expect(await screen.findByText('Olivia Bennett · Consultation')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /^Time slot/ })).not.toBeInTheDocument();
  });
});
