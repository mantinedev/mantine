import {
  act,
  createEvent,
  fireEvent,
  render,
  screen,
  userEvent,
  waitFor,
  within,
} from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { ShiftRota } from './ShiftRota';

/* Wednesday: the rota shows the week of Monday Nov 2 – Sunday Nov 8, 2026 */
const TODAY = '2026-11-04';
const CELL_WIDTH = 100;

function renderRota() {
  render(
    <>
      <Notifications />
      <ShiftRota initialDate={TODAY} />
    </>
  );
}

function createDataTransfer() {
  const data = new Map<string, string>();
  return {
    get types() {
      return [...data.keys()];
    },
    setData: (type: string, value: string) => data.set(type, value),
    getData: (type: string) => data.get(type) ?? '',
    clearData: () => data.clear(),
    setDragImage: () => {},
    dropEffect: 'none',
    effectAllowed: 'all',
  };
}

/** jsdom has no layout: place the cells of a row side by side so a drop point maps to a cell */
function layOutCells(cells: HTMLElement[]) {
  cells.forEach((cell, index) => {
    const left = index * CELL_WIDTH;
    jest.spyOn(cell, 'getBoundingClientRect').mockReturnValue({
      left,
      right: left + CELL_WIDTH,
      width: CELL_WIDTH,
      x: left,
      top: 0,
      bottom: 64,
      height: 64,
      y: 0,
      toJSON: () => ({}),
    });
  });
}

function fireDragEvent(
  type: 'dragOver' | 'drop',
  target: HTMLElement,
  dataTransfer: ReturnType<typeof createDataTransfer>,
  clientX: number
) {
  const event = createEvent[type](target, { dataTransfer });
  Object.defineProperty(event, 'clientX', { value: clientX });
  fireEvent(target, event);
}

/** Week view: drop at `time` (HH:mm, half hours allowed) of `day` (0 = Monday) on the employee's row */
function dropOnWeekRow(source: HTMLElement, employee: string, day: number, time: string) {
  const slots = screen.getAllByRole('button', {
    name: new RegExp(`^Resource time slot ${employee} `),
  });
  layOutCells(slots);

  const [hours, minutes] = time.split(':').map(Number);
  const slot = slots[day * 24 + hours];
  const clientX = (day * 24 + hours) * CELL_WIDTH + (minutes === 30 ? CELL_WIDTH / 2 + 1 : 1);
  dragAndDrop(source, slot, clientX);
}

/** Month view: drop on the employee's cell of the given day of November 2026 */
function dropOnMonthCell(source: HTMLElement, employee: string, dayOfMonth: number) {
  const cells = screen.getAllByRole('button', {
    name: new RegExp(`^${employee} November \\d+, 2026$`),
  });
  layOutCells(cells);
  dragAndDrop(source, cells[dayOfMonth - 1], (dayOfMonth - 1) * CELL_WIDTH + 1);
}

function dragAndDrop(source: HTMLElement, target: HTMLElement, clientX: number) {
  const dataTransfer = createDataTransfer();
  fireEvent.dragStart(source, { dataTransfer });
  fireDragEvent('dragOver', target, dataTransfer, clientX);
  fireDragEvent('drop', target, dataTransfer, clientX);
  fireEvent.dragEnd(source, { dataTransfer });
}

const genericShiftItem = () => screen.getByLabelText('Shift, 8 h from the drop time');
const shift = (label: string) => screen.getByRole('button', { name: label });
const rowOf = (employee: string) => screen.getByText(employee).parentElement!;

async function switchToMonthView(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('tab', { name: /month/i }));
}

async function openShift(user: ReturnType<typeof userEvent.setup>, label: string) {
  await user.click(shift(label));
  return screen.getByRole('dialog');
}

afterEach(() => {
  act(() => notifications.clean());
});

describe('ShiftRota rows', () => {
  it('groups employees by team', () => {
    renderRota();
    expect(screen.getByText('Kitchen')).toBeInTheDocument();
    expect(screen.getByText('Bar')).toBeInTheDocument();
    expect(screen.getByText('Floor')).toBeInTheDocument();
  });

  it('shows the planned hours of the visible week next to the contract hours', () => {
    renderRota();
    expect(within(rowOf('Aisha Khan')).getByText('24 / 32 h')).toBeInTheDocument();
  });

  it('warns on the rows whose planned hours go over the contract', () => {
    renderRota();
    expect(screen.getAllByRole('img', { name: 'Over contract hours' })).toHaveLength(1);
    expect(
      within(rowOf('Luis Ortega')).getByRole('img', { name: 'Over contract hours' })
    ).toBeInTheDocument();
  });

  it('counts the hours of the week shown after navigating', async () => {
    const user = userEvent.setup();
    renderRota();
    await user.click(screen.getByRole('button', { name: 'Next week' }));
    expect(screen.getByText('Nov 9 – 15, 2026')).toBeInTheDocument();
    expect(within(rowOf('Aisha Khan')).getByText('0 / 32 h')).toBeInTheDocument();
  });

  it('shows vacation days on the employee row', () => {
    renderRota();
    expect(screen.getAllByText('Vacation').length).toBeGreaterThan(0);
  });
});

describe('ShiftRota panel', () => {
  it('holds one generic shift in the week view', () => {
    renderRota();
    const panel = screen.getByRole('complementary', { name: 'Drag onto the rota' });
    expect(within(panel).getByLabelText('Shift, 8 h from the drop time')).toBeInTheDocument();
    expect(within(panel).queryByText('Morning')).not.toBeInTheDocument();
  });

  it('lists the three templates in the month view', async () => {
    const user = userEvent.setup();
    renderRota();
    await switchToMonthView(user);
    const panel = screen.getByRole('complementary', { name: 'Drag onto the rota' });
    expect(within(panel).getByLabelText('Morning, 06:00–14:00')).toBeInTheDocument();
    expect(within(panel).getByLabelText('Evening, 14:00–22:00')).toBeInTheDocument();
    expect(within(panel).getByLabelText('Night, 22:00–06:00')).toBeInTheDocument();
  });
});

describe('ShiftRota drag and drop', () => {
  it('creates an 8-hour shift at the drop time when the generic shift is dropped on a row', () => {
    renderRota();
    dropOnWeekRow(genericShiftItem(), 'Sofia Rossi', 2, '10:30');
    expect(shift('Sofia Rossi, Shift, Wed Nov 4 10:30–18:30')).toBeInTheDocument();
  });

  it('adds a dropped shift to the planned hours', () => {
    renderRota();
    dropOnWeekRow(genericShiftItem(), 'Sofia Rossi', 2, '10:30');
    expect(within(rowOf('Sofia Rossi')).getByText('40 / 40 h')).toBeInTheDocument();
  });

  it('rejects a drop on a vacation day and says why', async () => {
    renderRota();
    dropOnWeekRow(genericShiftItem(), 'Aisha Khan', 3, '10:00');
    expect(await screen.findByText('Aisha Khan is on vacation on Thu, Nov 5')).toBeInTheDocument();
    expect(within(rowOf('Aisha Khan')).getByText('24 / 32 h')).toBeInTheDocument();
  });

  it('rejects a drop that overlaps another shift of the employee', async () => {
    renderRota();
    dropOnWeekRow(genericShiftItem(), 'Marta Silva', 1, '08:00');
    expect(
      await screen.findByText('Marta Silva already works Tue 06:00–14:00')
    ).toBeInTheDocument();
  });

  it('rejects a drop that leaves less than 11 hours of rest', async () => {
    renderRota();
    dropOnWeekRow(genericShiftItem(), 'Marta Silva', 1, '18:00');
    expect(
      await screen.findByText('Marta Silva needs 11 h of rest after Tue 06:00–14:00, only 4 h')
    ).toBeInTheDocument();
  });

  it('moves a shift to another day', () => {
    renderRota();
    dropOnWeekRow(shift('Marta Silva, Morning, Mon Nov 2 06:00–14:00'), 'Marta Silva', 6, '06:00');
    expect(shift('Marta Silva, Morning, Sun Nov 8 06:00–14:00')).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Marta Silva, Morning, Mon Nov 2 06:00–14:00' })
    ).not.toBeInTheDocument();
  });

  it('moves a shift to another employee', () => {
    renderRota();
    dropOnWeekRow(shift('Marta Silva, Morning, Mon Nov 2 06:00–14:00'), 'Yuki Tanaka', 0, '06:00');
    expect(shift('Yuki Tanaka, Morning, Mon Nov 2 06:00–14:00')).toBeInTheDocument();
  });

  it('rejects moving a shift where the employee would not get 11 hours of rest', async () => {
    renderRota();
    dropOnWeekRow(shift('Marta Silva, Morning, Mon Nov 2 06:00–14:00'), 'Tom Becker', 0, '06:00');
    expect(
      await screen.findByText('Tom Becker needs 11 h of rest before Mon 14:00–22:00, only 0 h')
    ).toBeInTheDocument();
    expect(shift('Marta Silva, Morning, Mon Nov 2 06:00–14:00')).toBeInTheDocument();
  });

  it('creates a shift of the template dropped on a day in the month view', async () => {
    const user = userEvent.setup();
    renderRota();
    await switchToMonthView(user);
    dropOnMonthCell(screen.getByLabelText('Morning, 06:00–14:00'), 'Sofia Rossi', 4);
    expect(shift('Sofia Rossi, Morning, Wed Nov 4 06:00–14:00')).toBeInTheDocument();
  });

  it('rejects a night template that runs into a vacation day in the month view', async () => {
    const user = userEvent.setup();
    renderRota();
    await switchToMonthView(user);
    dropOnMonthCell(screen.getByLabelText('Night, 22:00–06:00'), 'Yuki Tanaka', 3);
    expect(await screen.findByText('Yuki Tanaka is on vacation on Wed, Nov 4')).toBeInTheDocument();
  });
});

describe('ShiftRota shift form', () => {
  it('opens the form of the clicked shift', async () => {
    const user = userEvent.setup();
    renderRota();
    const dialog = await openShift(user, 'Marta Silva, Morning, Mon Nov 2 06:00–14:00');
    expect(within(dialog).getByText('Edit shift')).toBeInTheDocument();
    expect(within(dialog).getByText('Marta Silva · Kitchen')).toBeInTheDocument();
  });

  it('sets start and end from the chosen template', async () => {
    const user = userEvent.setup();
    renderRota();
    const dialog = await openShift(user, 'Marta Silva, Morning, Fri Nov 6 06:00–14:00');
    await user.click(within(dialog).getByRole('combobox', { name: 'Template' }));
    await user.click(screen.getByRole('option', { name: 'Evening · 14:00–22:00' }));
    await user.click(within(dialog).getByRole('button', { name: 'Save' }));

    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(shift('Marta Silva, Evening, Fri Nov 6 14:00–22:00')).toBeInTheDocument();
  });

  it('keeps the form open and names the rule a change breaks', async () => {
    const user = userEvent.setup();
    renderRota();
    const dialog = await openShift(user, 'Marta Silva, Morning, Mon Nov 2 06:00–14:00');
    await user.click(within(dialog).getByRole('combobox', { name: 'Template' }));
    await user.click(screen.getByRole('option', { name: 'Evening · 14:00–22:00' }));
    await user.click(within(dialog).getByRole('button', { name: 'Save' }));

    expect(
      within(dialog).getByText('Marta Silva needs 11 h of rest before Tue 06:00–14:00, only 8 h')
    ).toBeInTheDocument();
  });

  it('deletes the shift', async () => {
    const user = userEvent.setup();
    renderRota();
    const dialog = await openShift(user, 'Marta Silva, Morning, Mon Nov 2 06:00–14:00');
    await user.click(within(dialog).getByRole('button', { name: 'Delete' }));

    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(
      screen.queryByRole('button', { name: 'Marta Silva, Morning, Mon Nov 2 06:00–14:00' })
    ).not.toBeInTheDocument();
    expect(within(rowOf('Marta Silva')).getByText('32 / 40 h')).toBeInTheDocument();
  });

  it('saves a note with the shift', async () => {
    const user = userEvent.setup();
    renderRota();
    const dialog = await openShift(user, 'Marta Silva, Morning, Mon Nov 2 06:00–14:00');
    await user.type(within(dialog).getByRole('textbox', { name: 'Note' }), 'Opens the café');
    await user.click(within(dialog).getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());

    await user.click(screen.getByRole('button', { name: 'Publish rota' }));
    const rota = JSON.parse(screen.getByLabelText('Published rota').textContent!);
    expect(rota[0].shifts[0]).toEqual({
      title: 'Morning',
      start: '2026-11-02 06:00:00',
      end: '2026-11-02 14:00:00',
      note: 'Opens the café',
    });
  });
});

describe('ShiftRota publishing', () => {
  it('shows a notification when the rota is published', async () => {
    const user = userEvent.setup();
    renderRota();
    await user.click(screen.getByRole('button', { name: 'Publish rota' }));
    expect(await screen.findByText('Rota published')).toBeInTheDocument();
    expect(screen.getByText('42 shifts · Nov 2 – 8, 2026')).toBeInTheDocument();
  });

  it('shows the shifts of the visible week grouped by employee as JSON', async () => {
    const user = userEvent.setup();
    renderRota();
    await user.click(screen.getByRole('button', { name: 'Publish rota' }));

    const rota = JSON.parse(screen.getByLabelText('Published rota').textContent!);
    expect(rota).toHaveLength(12);
    expect(rota[0]).toMatchObject({ employee: 'Marta Silva', team: 'kitchen' });
    expect(rota[0].shifts).toHaveLength(5);
  });

  it('publishes only the shifts of the week shown', async () => {
    const user = userEvent.setup();
    renderRota();
    await user.click(screen.getByRole('button', { name: 'Next week' }));
    await user.click(screen.getByRole('button', { name: 'Publish rota' }));

    expect(JSON.parse(screen.getByLabelText('Published rota').textContent!)).toEqual([]);
  });
});
