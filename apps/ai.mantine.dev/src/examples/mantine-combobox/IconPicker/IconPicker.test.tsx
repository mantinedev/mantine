import { icons, type Icon } from '@tabler/icons-react';
import { render, screen, userEvent, waitFor, within } from '@test-utils';
import { buildIconSet, type IconValue } from './icon-data';
import { IconPicker } from './IconPicker';
import { ProjectIconSettings } from './ProjectIconSettings';

const COLUMNS = 8;
// The grid viewport is 7 rows tall (44px each)
const VIEWPORT_HEIGHT = 308;
const PAGE_ROWS = 7;
const { outline } = buildIconSet(icons as Record<string, Icon>);
const ROCKET: IconValue = { name: 'Rocket', style: 'outline' };

function renderPicker(props: { defaultValue?: IconValue | null } = {}) {
  const onChange = jest.fn();
  render(<IconPicker label="Project icon" onChange={onChange} {...props} />);
  return { onChange, trigger: screen.getByRole('textbox', { name: 'Project icon' }) };
}

type User = ReturnType<typeof userEvent.setup>;

async function openPicker(user: User) {
  await user.click(screen.getByRole('textbox', { name: 'Project icon' }));
  return screen.findByRole('combobox', { name: 'Search icons' });
}

function highlightedOption() {
  const search = screen.getByRole('combobox', { name: 'Search icons' });
  const id = search.getAttribute('aria-activedescendant');
  return id ? document.getElementById(id) : null;
}

function recentOptions() {
  return within(screen.getByRole('group', { name: 'Recent' })).getAllByRole('option');
}

/** Picks the icon whose name is the query, e.g. `rocket` */
async function pickBySearch(user: User, query: string) {
  const search = await openPicker(user);
  await user.type(search, query);
  await waitFor(() => {
    expect(highlightedOption()?.getAttribute('aria-label')?.toLowerCase()).toBe(query);
  });
  await user.keyboard('{Enter}');
}

// jsdom has no layout: give the grid viewport a size and room to scroll
beforeEach(() => {
  jest.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(VIEWPORT_HEIGHT);
  jest.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(360);
  jest.spyOn(Element.prototype, 'scrollHeight', 'get').mockReturnValue(1_000_000);
});

afterEach(() => {
  jest.restoreAllMocks();
  window.localStorage.clear();
});

describe('trigger', () => {
  it('shows a placeholder when no icon is selected', () => {
    const { trigger } = renderPicker();
    expect(trigger).toHaveValue('');
    expect(trigger).toHaveAttribute('placeholder', 'Pick an icon');
  });

  it('shows the name of the selected icon', () => {
    const { trigger } = renderPicker({ defaultValue: ROCKET });
    expect(trigger).toHaveValue('Rocket');
  });

  it('shows the name of a multi-word icon as words', () => {
    const { trigger } = renderPicker({ defaultValue: { name: 'ArrowBigLeft', style: 'filled' } });
    expect(trigger).toHaveValue('Arrow big left');
  });

  it('clears the selected icon with the clear button', async () => {
    const user = userEvent.setup();
    const { trigger, onChange } = renderPicker({ defaultValue: ROCKET });

    await user.click(screen.getByRole('button', { name: 'Clear icon' }));

    expect(onChange).toHaveBeenLastCalledWith(null);
    expect(trigger).toHaveValue('');
  });

  it('opens the dropdown with the keyboard', async () => {
    renderPicker();
    const user = userEvent.setup();

    await user.tab();
    await user.keyboard('{ArrowDown}');

    expect(await screen.findByRole('combobox', { name: 'Search icons' })).toBeInTheDocument();
  });
});

describe('dropdown', () => {
  it('focuses the search field when opened', async () => {
    renderPicker();
    const search = await openPicker(userEvent.setup());
    await waitFor(() => expect(search).toHaveFocus());
  });

  it('finds icons by the words of their names', async () => {
    renderPicker();
    const user = userEvent.setup();

    await user.type(await openPicker(user), 'arrow left');

    const grid = screen.getByRole('listbox', { name: 'Icons' });
    expect(within(grid).getByRole('option', { name: 'Arrow left' })).toBeInTheDocument();
    expect(within(grid).getByRole('option', { name: 'Arrow big left' })).toBeInTheDocument();
  });

  it('lists names that start with the query first', async () => {
    renderPicker();
    const user = userEvent.setup();

    await user.type(await openPicker(user), 'Arrow Left');

    const options = within(screen.getByRole('listbox', { name: 'Icons' })).getAllByRole('option');
    expect(options[0]).toHaveAccessibleName('Arrow left');
  });

  it('shows only icons that have a filled version in the filled set', async () => {
    renderPicker();
    const user = userEvent.setup();
    const search = await openPicker(user);

    await user.click(screen.getByRole('radio', { name: 'Filled' }));
    await user.type(search, 'arrow left');

    const grid = screen.getByRole('listbox', { name: 'Icons' });
    expect(within(grid).getByRole('option', { name: 'Arrow big left' })).toBeInTheDocument();
    expect(within(grid).queryByRole('option', { name: 'Arrow left' })).not.toBeInTheDocument();
  });

  it('returns focus to the search field after switching the style', async () => {
    renderPicker();
    const user = userEvent.setup();
    const search = await openPicker(user);

    await user.click(screen.getByRole('radio', { name: 'Filled' }));

    expect(search).toHaveFocus();
  });

  it('shows the query when nothing is found', async () => {
    renderPicker();
    const user = userEvent.setup();

    await user.type(await openPicker(user), 'qwertyzz');

    expect(screen.getByText('Nothing found for "qwertyzz"')).toBeInTheDocument();
  });

  it('renders only the visible rows of the grid', async () => {
    renderPicker();
    await openPicker(userEvent.setup());

    const options = within(screen.getByRole('listbox', { name: 'Icons' })).getAllByRole('option');
    expect(options.length).toBeGreaterThan(0);
    expect(options.length).toBeLessThan(COLUMNS * 20);
  });

  it('shows the name of the hovered icon', async () => {
    renderPicker();
    const user = userEvent.setup();

    await user.type(await openPicker(user), 'rocket');
    await user.hover(screen.getByRole('option', { name: 'Rocket off' }));

    expect(screen.getByText('Rocket off')).toBeInTheDocument();
  });

  it('shows the name of the highlighted icon', async () => {
    renderPicker();
    const user = userEvent.setup();

    await user.type(await openPicker(user), 'rocket');
    await user.keyboard('{ArrowRight}');

    expect(screen.getByText('Rocket off')).toBeInTheDocument();
  });
});

describe('recent icons', () => {
  it('shows the last picked icons above the grid, most recent first', async () => {
    renderPicker();
    const user = userEvent.setup();

    await pickBySearch(user, 'rocket');
    await pickBySearch(user, 'anchor');
    // Opening scrolls to the selected icon, Home scrolls back to the top
    await openPicker(user);
    await user.keyboard('{Home}');

    await screen.findByRole('group', { name: 'Recent' });
    const labels = recentOptions().map((option) => option.getAttribute('aria-label'));
    expect(labels).toEqual(['Anchor', 'Rocket']);
  });

  it('keeps at most 8 recent icons', async () => {
    const picked = outline.slice(1, 10).map((entry) => ({ name: entry.name, style: 'outline' }));
    window.localStorage.setItem('icon-picker-recent', JSON.stringify(picked));
    renderPicker();
    const user = userEvent.setup();

    await pickBySearch(user, outline[0].label.toLowerCase());
    await openPicker(user);

    expect(recentOptions()).toHaveLength(8);
  });

  it('hides the recent icons while searching', async () => {
    renderPicker();
    const user = userEvent.setup();

    await pickBySearch(user, 'rocket');
    await user.type(await openPicker(user), 'anchor');

    expect(screen.queryByRole('group', { name: 'Recent' })).not.toBeInTheDocument();
  });

  it('starts keyboard navigation in the recent row', async () => {
    renderPicker();
    const user = userEvent.setup();

    await pickBySearch(user, 'rocket');
    await openPicker(user);
    await user.keyboard('{Home}');

    expect(highlightedOption()).toBe(recentOptions()[0]);
  });
});

describe('keyboard', () => {
  it('keeps focus in the search field while the arrows move the highlight', async () => {
    renderPicker();
    const user = userEvent.setup();
    const search = await openPicker(user);

    await user.keyboard('{ArrowDown}{ArrowRight}');

    expect(search).toHaveFocus();
  });

  it('highlights the first icon when opened without a value', async () => {
    renderPicker();
    await openPicker(userEvent.setup());

    await waitFor(() => expect(highlightedOption()).toHaveAccessibleName(outline[0].label));
  });

  it('moves the highlight by one cell with the left and right arrows', async () => {
    renderPicker();
    const user = userEvent.setup();
    await openPicker(user);

    await user.keyboard('{ArrowRight}{ArrowRight}{ArrowLeft}');

    expect(highlightedOption()).toHaveAccessibleName(outline[1].label);
  });

  it('moves by one row and keeps the column with the up and down arrows', async () => {
    renderPicker();
    const user = userEvent.setup();
    await openPicker(user);

    await user.keyboard('{ArrowRight}{ArrowRight}{ArrowDown}{ArrowDown}');
    expect(highlightedOption()).toHaveAccessibleName(outline[2 * COLUMNS + 2].label);

    await user.keyboard('{ArrowUp}');
    expect(highlightedOption()).toHaveAccessibleName(outline[COLUMNS + 2].label);
  });

  it('moves by one visible page with Page Down and Page Up', async () => {
    renderPicker();
    const user = userEvent.setup();
    await openPicker(user);

    await user.keyboard('{ArrowRight}{PageDown}');
    expect(highlightedOption()).toHaveAccessibleName(outline[PAGE_ROWS * COLUMNS + 1].label);

    await user.keyboard('{PageUp}');
    expect(highlightedOption()).toHaveAccessibleName(outline[1].label);
  });

  it('jumps to the last icon with End and scrolls it into view', async () => {
    renderPicker();
    const user = userEvent.setup();
    await openPicker(user);

    await user.keyboard('{End}');

    const last = outline[outline.length - 1];
    await waitFor(() => expect(highlightedOption()).toHaveAccessibleName(last.label));
  });

  it('jumps to the first icon with Home', async () => {
    renderPicker();
    const user = userEvent.setup();
    await openPicker(user);

    await user.keyboard('{ArrowDown}{ArrowDown}{Home}');

    expect(highlightedOption()).toHaveAccessibleName(outline[0].label);
  });

  it('picks the highlighted icon with Enter', async () => {
    const { onChange } = renderPicker();
    const user = userEvent.setup();

    await user.type(await openPicker(user), 'rocket');
    await user.keyboard('{ArrowRight}{Enter}');

    expect(onChange).toHaveBeenLastCalledWith({ name: 'RocketOff', style: 'outline' });
  });

  it('closes the dropdown after a pick', async () => {
    renderPicker();
    const user = userEvent.setup();

    await pickBySearch(user, 'rocket');

    expect(screen.queryByRole('combobox', { name: 'Search icons' })).not.toBeInTheDocument();
  });

  it('closes the dropdown with Escape without changing the value', async () => {
    const { onChange, trigger } = renderPicker({ defaultValue: ROCKET });
    const user = userEvent.setup();

    await user.type(await openPicker(user), 'anchor');
    await user.keyboard('{Escape}');

    expect(screen.queryByRole('combobox', { name: 'Search icons' })).not.toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
    expect(trigger).toHaveValue('Rocket');
  });

  it('highlights the selected icon when opened', async () => {
    const last = outline[outline.length - 1];
    renderPicker({ defaultValue: { name: last.name, style: 'outline' } });

    await openPicker(userEvent.setup());

    await waitFor(() => expect(highlightedOption()).toHaveAccessibleName(last.label));
  });

  it('switches to the style of the selected icon when opened', async () => {
    renderPicker({ defaultValue: { name: 'ArrowBigLeft', style: 'filled' } });

    await openPicker(userEvent.setup());

    expect(screen.getByRole('radio', { name: 'Filled' })).toBeChecked();
  });
});

describe('project icon setting', () => {
  it('shows null as the value when no icon is selected', () => {
    render(<ProjectIconSettings />);
    expect(screen.getByLabelText('Project icon value')).toHaveTextContent('null');
  });

  it('shows the picked icon with its style as JSON', async () => {
    render(<ProjectIconSettings />);
    const user = userEvent.setup();

    const search = await openPicker(user);
    await user.click(screen.getByRole('radio', { name: 'Filled' }));
    await user.type(search, 'arrow big left');
    await user.keyboard('{Enter}');

    expect(JSON.parse(screen.getByLabelText('Project icon value').textContent!)).toEqual({
      name: 'ArrowBigLeft',
      style: 'filled',
    });
  });
});
