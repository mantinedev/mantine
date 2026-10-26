import { render, screen, userEvent, within } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { FlightRoutePicker } from './FlightRoutePicker';

type User = ReturnType<typeof userEvent.setup>;

function renderPicker() {
  const user = userEvent.setup();
  render(
    <>
      <Notifications />
      <FlightRoutePicker />
    </>
  );
  return { user };
}

const field = (name: 'From' | 'To') => screen.getByRole('combobox', { name });
const option = (name: RegExp) => screen.getByRole('option', { name });
const optionNames = () => screen.getAllByRole('option').map((item) => item.textContent);
const swapButton = () => screen.getByRole('button', { name: 'Swap departure and destination' });
// The clear button is aria-hidden inside the input, like in Select
const clearTo = () => screen.getByLabelText('Clear To');

async function search(user: User, name: 'From' | 'To', query: string) {
  await user.click(field(name));
  await user.clear(field(name));
  await user.type(field(name), query);
}

async function pick(user: User, name: 'From' | 'To', query: string, optionName: RegExp) {
  await search(user, name, query);
  await user.click(option(optionName));
}

afterEach(() => {
  notifications.clean();
});

describe('search', () => {
  it('finds São Paulo when typed without the accent', async () => {
    const { user } = renderPicker();
    await search(user, 'From', 'sao');
    expect(option(/^São Paulo, Brazil · All airports/)).toBeInTheDocument();
  });

  it('finds an airport by its name', async () => {
    const { user } = renderPicker();
    await search(user, 'From', 'heathrow');
    expect(optionNames()).toEqual([expect.stringContaining('LHR · London Heathrow')]);
  });

  it('finds an airport by its code ignoring case', async () => {
    const { user } = renderPicker();
    await search(user, 'From', 'jfk');
    expect(option(/JFK · John F. Kennedy International/)).toBeInTheDocument();
  });

  it('finds the airports of a country', async () => {
    const { user } = renderPicker();
    await search(user, 'From', 'japan');
    expect(optionNames()).toEqual([
      expect.stringContaining('Tokyo, Japan · All airports'),
      expect.stringContaining('HND · Tokyo Haneda'),
      expect.stringContaining('NRT · Tokyo Narita'),
    ]);
  });

  it('lists an exact code match first', async () => {
    const { user } = renderPicker();
    await search(user, 'From', 'lin');
    expect(optionNames()[0]).toContain('LIN · Milan Linate');
    expect(optionNames().length).toBeGreaterThan(1);
  });

  it('lists a city with several airports followed by each of its airports', async () => {
    const { user } = renderPicker();
    await search(user, 'From', 'london');
    expect(optionNames()).toEqual([
      expect.stringContaining('London, United Kingdom · All airports'),
      expect.stringContaining('LHR · London Heathrow'),
      expect.stringContaining('LGW · London Gatwick'),
      expect.stringContaining('STN · London Stansted'),
      expect.stringContaining('LTN · London Luton'),
      expect.stringContaining('LCY · London City'),
    ]);
  });

  it('says when nothing matches', async () => {
    const { user } = renderPicker();
    await search(user, 'From', 'atlantis');
    expect(screen.getByText('No airports match “atlantis”')).toBeInTheDocument();
  });
});

describe('selection', () => {
  it('shows the code and the name of a picked airport', async () => {
    const { user } = renderPicker();
    await pick(user, 'From', 'heathrow', /LHR · London Heathrow/);
    expect(field('From')).toHaveValue('LHR · London Heathrow');
  });

  it('shows a picked city as all of its airports', async () => {
    const { user } = renderPicker();
    await pick(user, 'From', 'london', /London, United Kingdom · All airports/);
    expect(field('From')).toHaveValue('London · All airports');
  });

  it('moves focus to To after picking From', async () => {
    const { user } = renderPicker();
    await pick(user, 'From', 'heathrow', /LHR · London Heathrow/);
    expect(field('To')).toHaveFocus();
  });

  it('restores the picked value when the field is left with unfinished text', async () => {
    const { user } = renderPicker();
    await pick(user, 'To', 'heathrow', /LHR · London Heathrow/);
    await user.type(field('To'), 'par');
    await user.click(document.body);
    expect(field('To')).toHaveValue('LHR · London Heathrow');
  });

  it('clears the value when the text is deleted', async () => {
    const { user } = renderPicker();
    await pick(user, 'To', 'heathrow', /LHR · London Heathrow/);
    await user.clear(field('To'));
    await user.click(document.body);
    expect(field('To')).toHaveValue('');
  });

  it('clears the value with the clear button', async () => {
    const { user } = renderPicker();
    await pick(user, 'To', 'heathrow', /LHR · London Heathrow/);
    await user.click(clearTo());
    expect(field('To')).toHaveValue('');
  });
});

describe('suggestions', () => {
  it('shows popular destinations when an empty field is focused', async () => {
    const { user } = renderPicker();
    await user.click(field('From'));
    const popular = screen.getByRole('group', { name: 'Popular destinations' });
    expect(
      within(popular).getByRole('option', { name: /London, United Kingdom/ })
    ).toBeInTheDocument();
  });

  it('shows no recent picks before anything was picked', async () => {
    const { user } = renderPicker();
    await user.click(field('From'));
    expect(screen.queryByRole('group', { name: 'Recent' })).not.toBeInTheDocument();
  });

  it('shows recent picks from both fields, latest first', async () => {
    const { user } = renderPicker();
    await pick(user, 'From', 'heathrow', /LHR · London Heathrow/);
    await pick(user, 'To', 'jfk', /JFK · John F. Kennedy/);
    await user.click(clearTo());
    await user.click(field('To'));

    const recent = screen.getByRole('group', { name: 'Recent' });
    expect(
      within(recent)
        .getAllByRole('option')
        .map((item) => item.textContent)
    ).toEqual([expect.stringContaining('JFK'), expect.stringContaining('LHR')]);
  });

  it('keeps the last five picks', async () => {
    const { user } = renderPicker();
    for (const code of ['LHR', 'CDG', 'FRA', 'AMS', 'MAD', 'FCO']) {
      await pick(user, 'To', code, new RegExp(`^${code} · `));
    }
    await user.click(clearTo());
    await user.click(field('To'));

    const recent = screen.getByRole('group', { name: 'Recent' });
    expect(
      within(recent)
        .getAllByRole('option')
        .map((item) => item.textContent?.slice(0, 3))
    ).toEqual(['FCO', 'MAD', 'AMS', 'FRA', 'CDG']);
  });
});

describe('same place on both sides', () => {
  it('disables the departure airport in To with the reason', async () => {
    const { user } = renderPicker();
    await pick(user, 'From', 'heathrow', /LHR · London Heathrow/);
    await user.type(field('To'), 'heathrow');
    const heathrow = option(/LHR · London Heathrow/);
    expect(heathrow).toHaveAttribute('aria-disabled', 'true');
    expect(heathrow).toHaveTextContent('Selected as departure');
  });

  it('disables the airports of a city picked on the other side', async () => {
    const { user } = renderPicker();
    await pick(user, 'To', 'london', /London, United Kingdom · All airports/);
    await search(user, 'From', 'gatwick');
    const gatwick = option(/LGW · London Gatwick/);
    expect(gatwick).toHaveAttribute('aria-disabled', 'true');
    expect(gatwick).toHaveTextContent('Selected as destination');
  });

  it('disables the city of an airport picked on the other side', async () => {
    const { user } = renderPicker();
    await pick(user, 'From', 'jfk', /JFK · John F. Kennedy/);
    await user.type(field('To'), 'new york');
    expect(option(/New York, United States · All airports/)).toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });

  it('leaves other airports of the city available', async () => {
    const { user } = renderPicker();
    await pick(user, 'From', 'jfk', /JFK · John F. Kennedy/);
    await user.type(field('To'), 'new york');
    expect(option(/LGA · LaGuardia/)).not.toHaveAttribute('aria-disabled');
  });

  it('does not pick a disabled option', async () => {
    const { user } = renderPicker();
    await pick(user, 'From', 'heathrow', /LHR · London Heathrow/);
    await user.type(field('To'), 'heathrow');
    await user.click(option(/LHR · London Heathrow/));
    await user.click(document.body);
    expect(field('To')).toHaveValue('');
  });
});

describe('swap', () => {
  it('is disabled while both fields are empty', () => {
    renderPicker();
    expect(swapButton()).toBeDisabled();
  });

  it('is enabled when one field has a value', async () => {
    const { user } = renderPicker();
    await pick(user, 'To', 'heathrow', /LHR · London Heathrow/);
    expect(swapButton()).toBeEnabled();
  });

  it('exchanges the two values', async () => {
    const { user } = renderPicker();
    await pick(user, 'From', 'heathrow', /LHR · London Heathrow/);
    await pick(user, 'To', 'new york', /New York, United States · All airports/);
    await user.click(swapButton());
    expect(field('From')).toHaveValue('New York · All airports');
    expect(field('To')).toHaveValue('LHR · London Heathrow');
  });
});

describe('submit', () => {
  it('requires both fields', async () => {
    const { user } = renderPicker();
    await user.click(screen.getByRole('button', { name: 'Search flights' }));
    expect(screen.getByText('Choose where the trip starts')).toBeInTheDocument();
    expect(screen.getByText('Choose where the trip goes')).toBeInTheDocument();
  });

  it('focuses the first empty field', async () => {
    const { user } = renderPicker();
    await pick(user, 'From', 'heathrow', /LHR · London Heathrow/);
    await user.click(screen.getByRole('button', { name: 'Search flights' }));
    expect(field('To')).toHaveFocus();
  });

  it('shows a notification with the route', async () => {
    const { user } = renderPicker();
    await pick(user, 'From', 'heathrow', /LHR · London Heathrow/);
    await pick(user, 'To', 'new york', /New York, United States · All airports/);
    await user.click(screen.getByRole('button', { name: 'Search flights' }));
    expect(await screen.findByText('Searching flights')).toBeInTheDocument();
    expect(screen.getByText('LHR → New York (all airports)')).toBeInTheDocument();
  });

  it('displays the search with the airport codes of each side', async () => {
    const { user } = renderPicker();
    await pick(user, 'From', 'heathrow', /LHR · London Heathrow/);
    await pick(user, 'To', 'new york', /New York, United States · All airports/);
    await user.click(screen.getByRole('button', { name: 'Search flights' }));
    expect(JSON.parse(screen.getByLabelText('Flight search').textContent!)).toEqual({
      from: ['LHR'],
      to: ['JFK', 'LGA', 'EWR'],
    });
  });
});
