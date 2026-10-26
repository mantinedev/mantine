import { render, screen, userEvent, waitFor, within } from '@test-utils';
import { COLUMNS, GRID_HEIGHT, PAGE_ROWS } from './grid-model';
import { getIcons } from './icon-index';
import { IconPicker, type IconPickerProps } from './IconPicker';
import { IconPickerDemo } from './IconPickerDemo';

type User = ReturnType<typeof userEvent.setup>;

const outline = getIcons('outline');

function renderPicker(props: Partial<IconPickerProps> = {}) {
  const onChange = jest.fn();
  render(<IconPicker onChange={onChange} {...props} />);
  return { onChange };
}

const trigger = () => screen.getByRole('button', { name: 'Project icon' });
const searchInput = () => screen.getByRole('textbox', { name: 'Search icons' });
const optionNames = () =>
  screen.getAllByRole('option').map((option) => option.getAttribute('aria-label'));

/** Name of the highlighted cell, or the id when the cell is not rendered */
function highlighted() {
  const id = searchInput().getAttribute('aria-activedescendant');
  if (!id) {
    return null;
  }
  return document.getElementById(id)?.getAttribute('aria-label') ?? `not rendered: ${id}`;
}

async function open(user: User) {
  await user.click(trigger());
  await waitFor(() => expect(searchInput()).toHaveFocus());
}

async function search(user: User, query: string) {
  await user.type(searchInput(), query);
}

async function pickByName(user: User, name: string) {
  await open(user);
  await search(user, name);
  await user.click(screen.getAllByRole('option', { name })[0]);
}

beforeEach(() => {
  window.localStorage.clear();
  // jsdom has no layout: give the grid viewport its real height so the virtualizer renders rows,
  // and a scroll height so it can scroll
  jest.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(GRID_HEIGHT);
  jest.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(400);
  jest.spyOn(Element.prototype, 'clientHeight', 'get').mockReturnValue(GRID_HEIGHT);
  jest.spyOn(Element.prototype, 'scrollHeight', 'get').mockReturnValue(1_000_000);
});

afterEach(() => {
  jest.restoreAllMocks();
  window.localStorage.clear();
});

describe('trigger', () => {
  it('shows "Pick an icon" when no icon is selected', () => {
    renderPicker();
    expect(trigger()).toHaveTextContent('Pick an icon');
  });

  it('shows the name of the selected icon', () => {
    renderPicker({ defaultValue: { name: 'Rocket', style: 'outline' } });
    expect(trigger()).toHaveTextContent('Rocket');
  });

  it('clears the selected icon with the clear button', async () => {
    const user = userEvent.setup();
    const { onChange } = renderPicker({ defaultValue: { name: 'Rocket', style: 'outline' } });

    await user.click(screen.getByRole('button', { name: 'Clear icon' }));

    expect(onChange).toHaveBeenLastCalledWith(null);
    expect(trigger()).toHaveTextContent('Pick an icon');
  });
});

describe('search', () => {
  it('matches every word of the query against the words of the icon name', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);

    await search(user, 'arrow left');

    expect(optionNames()).toEqual(expect.arrayContaining(['ArrowLeft', 'ArrowBigLeft']));
    expect(optionNames()).not.toContain('ArrowRight');
  });

  it('ignores the case of the query', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);

    await search(user, 'ROCKET');

    expect(screen.getByRole('option', { name: 'Rocket' })).toBeInTheDocument();
  });

  it('lists names that start with the query first', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);

    await search(user, 'home');

    const names = optionNames() as string[];
    const firstOther = names.findIndex((name) => !name.toLowerCase().startsWith('home'));
    expect(names[0]).toBe('Home');
    expect(firstOther).toBeGreaterThan(0);
    expect(names.slice(firstOther).every((name) => !name.toLowerCase().startsWith('home'))).toBe(
      true
    );
  });

  it('shows "Nothing found" with the query when no icon matches', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);

    await search(user, 'qqzzx');

    expect(screen.getByText('Nothing found for "qqzzx"')).toBeInTheDocument();
  });
});

describe('icon style', () => {
  it('shows only icons that have a filled version in the filled set', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);
    await search(user, 'abacus');

    await user.click(screen.getByRole('radio', { name: 'Filled' }));

    expect(screen.getByText('Nothing found for "abacus"')).toBeInTheDocument();
  });

  it('picks the filled version from the filled set', async () => {
    const user = userEvent.setup();
    const { onChange } = renderPicker();
    await open(user);
    await user.click(screen.getByRole('radio', { name: 'Filled' }));
    await search(user, 'alarm');

    await user.click(screen.getByRole('option', { name: 'Alarm' }));

    expect(onChange).toHaveBeenLastCalledWith({ name: 'Alarm', style: 'filled' });
  });

  it('opens on the filled set when the selected icon is filled', async () => {
    const user = userEvent.setup();
    renderPicker({ defaultValue: { name: 'Alarm', style: 'filled' } });

    await open(user);

    expect(screen.getByRole('radio', { name: 'Filled' })).toBeChecked();
  });
});

describe('grid', () => {
  it('renders only the visible rows', async () => {
    const user = userEvent.setup();
    renderPicker();

    await open(user);

    expect(outline.length).toBeGreaterThan(4000);
    expect(screen.getAllByRole('option').length).toBeLessThan(20 * COLUMNS);
  });

  it('shows the name of the hovered icon', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);
    await search(user, 'rocket');

    await user.hover(screen.getByRole('option', { name: 'RocketOff' }));

    expect(screen.getByRole('status')).toHaveTextContent('RocketOff');
  });

  it('shows the name of the highlighted icon', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);

    await user.keyboard('{ArrowRight}');

    expect(screen.getByRole('status')).toHaveTextContent(outline[1].name);
  });
});

describe('recent icons', () => {
  it('shows the last picked icons in a Recent row', async () => {
    const user = userEvent.setup();
    renderPicker();
    await pickByName(user, 'Rocket');
    await pickByName(user, 'Anchor');
    await open(user);

    await user.keyboard('{Home}');

    await waitFor(() => expect(screen.getByText('Recent')).toBeInTheDocument());
    expect(optionNames().slice(0, 2)).toEqual(['Anchor', 'Rocket']);
  });

  it('keeps only the last 8 picked icons', async () => {
    const user = userEvent.setup();
    renderPicker();
    const picked = ['Rocket', 'Anchor', 'Bell', 'Book', 'Bolt', 'Camera', 'Cloud', 'Heart', 'Star'];
    for (const name of picked) {
      await pickByName(user, name);
    }
    await open(user);

    await user.keyboard('{Home}');

    await waitFor(() => expect(screen.getByText('Recent')).toBeInTheDocument());
    const recentRow = optionNames().slice(0, COLUMNS);
    expect(recentRow).toEqual([...picked].reverse().slice(0, 8));
    expect(optionNames()[COLUMNS]).toBe(outline[0].name);
  });

  it('hides the Recent row while searching', async () => {
    const user = userEvent.setup();
    renderPicker();
    await pickByName(user, 'Rocket');
    await open(user);

    await search(user, 'bell');

    expect(screen.queryByText('Recent')).not.toBeInTheDocument();
  });
});

describe('keyboard', () => {
  it('keeps focus in the search field while arrows move the highlight', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);

    await user.keyboard('{ArrowDown}{ArrowRight}');

    expect(searchInput()).toHaveFocus();
    expect(highlighted()).toBe(outline[COLUMNS + 1].name);
  });

  it('moves by one cell with the left and right arrows', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);

    await user.keyboard('{ArrowRight}{ArrowRight}{ArrowLeft}');

    expect(highlighted()).toBe(outline[1].name);
  });

  it('moves by one row and keeps the column with the up and down arrows', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);

    await user.keyboard('{ArrowRight}{ArrowRight}{ArrowDown}{ArrowDown}{ArrowUp}');

    expect(highlighted()).toBe(outline[COLUMNS + 2].name);
  });

  it('scrolls the grid to keep the highlighted icon visible', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);

    for (let row = 0; row < 12; row += 1) {
      await user.keyboard('{ArrowDown}');
    }

    await waitFor(() => expect(highlighted()).toBe(outline[12 * COLUMNS].name));
  });

  it('jumps to the last and first icon with End and Home', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);

    await user.keyboard('{End}');
    await waitFor(() => expect(highlighted()).toBe(outline[outline.length - 1].name));

    await user.keyboard('{Home}');
    await waitFor(() => expect(highlighted()).toBe(outline[0].name));
  });

  it('moves by one visible page with Page Down and Page Up', async () => {
    const user = userEvent.setup();
    renderPicker();
    await open(user);

    await user.keyboard('{ArrowRight}{PageDown}{PageDown}');
    await waitFor(() => expect(highlighted()).toBe(outline[2 * PAGE_ROWS * COLUMNS + 1].name));

    await user.keyboard('{PageUp}');
    await waitFor(() => expect(highlighted()).toBe(outline[PAGE_ROWS * COLUMNS + 1].name));
  });

  it('picks the highlighted icon with Enter and closes the dropdown', async () => {
    const user = userEvent.setup();
    const { onChange } = renderPicker();
    await open(user);
    await search(user, 'rocket');

    await user.keyboard('{Enter}');

    expect(onChange).toHaveBeenLastCalledWith({ name: 'Rocket', style: 'outline' });
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
  });

  it('closes with Escape without changing the value', async () => {
    const user = userEvent.setup();
    const { onChange } = renderPicker({ defaultValue: { name: 'Rocket', style: 'outline' } });
    await open(user);
    await user.keyboard('{ArrowRight}');

    await user.keyboard('{Escape}');

    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    expect(onChange).not.toHaveBeenCalled();
    expect(trigger()).toHaveTextContent('Rocket');
  });

  it('highlights the selected icon and scrolls to it when the dropdown opens', async () => {
    const user = userEvent.setup();
    renderPicker({ defaultValue: { name: 'Rocket', style: 'outline' } });

    await open(user);

    await waitFor(() => expect(highlighted()).toBe('Rocket'));
    expect(screen.getByRole('option', { name: 'Rocket' })).toHaveAttribute('aria-selected', 'true');
  });
});

describe('value', () => {
  it('shows the value as JSON under the picker', async () => {
    const user = userEvent.setup();
    render(<IconPickerDemo />);

    await pickByName(user, 'Rocket');

    const json = screen.getByLabelText('Value');
    expect(JSON.parse(json.textContent ?? '')).toEqual({ name: 'Rocket', style: 'outline' });
  });

  it('shows null when no icon is selected', () => {
    render(<IconPickerDemo />);
    expect(within(screen.getByLabelText('Value')).getByText('null')).toBeInTheDocument();
  });
});
