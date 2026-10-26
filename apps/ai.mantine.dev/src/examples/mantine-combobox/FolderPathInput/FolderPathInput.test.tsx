import { render, screen, userEvent } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { FolderPathInput } from './FolderPathInput';

type User = ReturnType<typeof userEvent.setup>;

function renderInput() {
  render(
    <>
      <Notifications />
      <FolderPathInput />
    </>
  );
}

function pathInput() {
  return screen.getByRole('combobox', { name: 'Save to' });
}

/** Folder names in the dropdown, in display order */
function optionNames() {
  return screen
    .getAllByRole('option')
    .map((option) => (option.getAttribute('aria-label') ?? '').split(',')[0]);
}

async function typePath(user: User, path: string) {
  await user.clear(pathInput());
  if (path !== '') {
    await user.type(pathInput(), path);
  }
}

function savedLocation() {
  return JSON.parse(screen.getByLabelText('Saved location').textContent ?? '');
}

afterEach(() => {
  notifications.clean();
});

describe('completion', () => {
  it('lists the subfolders of the folder the path points to', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/');
    expect(optionNames()).toEqual(['web', 'website', 'mobile', 'api']);
  });

  it('lists top-level folders when the input is empty', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, '');
    expect(optionNames()).toEqual([
      'documents',
      'projects',
      'design',
      'team',
      'finance',
      'personal',
    ]);
  });

  it('lists names that start with the typed segment before names that contain it', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'documents/a');
    expect(optionNames()).toEqual(['archive', 'drafts', 'templates']);
  });

  it('shows the listed folder in the dropdown header', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/');
    expect(screen.getByText('projects / web')).toBeInTheDocument();
  });

  it('completes the highlighted folder with Tab and lists its subfolders', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/we');
    await user.keyboard('{Tab}');
    expect(pathInput()).toHaveValue('projects/web/');
    expect(optionNames()).toEqual(['forms', 'components', 'landing-pages']);
  });

  it('keeps focus in the input after completing with Tab', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/we');
    await user.keyboard('{Tab}');
    expect(pathInput()).toHaveFocus();
  });

  it('completes the highlighted folder with Enter', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/mob');
    await user.keyboard('{Enter}');
    expect(pathInput()).toHaveValue('projects/mobile/');
  });

  it('completes a folder picked with the arrow keys', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/we');
    await user.keyboard('{ArrowDown}{Enter}');
    expect(pathInput()).toHaveValue('projects/website/');
  });

  it('completes the highlighted folder with ArrowRight when the caret is at the end', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'design/br');
    await user.keyboard('{ArrowRight}');
    expect(pathInput()).toHaveValue('design/brand/');
  });

  it('moves the caret with ArrowRight when it is not at the end', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'design/br');
    await user.keyboard('{ArrowLeft}{ArrowRight}');
    expect(pathInput()).toHaveValue('design/br');
  });

  it('moves into a folder when / is typed after its exact name', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'team/meetings/');
    expect(optionNames()).toEqual(['weekly', 'retrospectives']);
  });

  it('uses the folder name as written in the tree when / is typed after it in another case', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'Team/');
    expect(pathInput()).toHaveValue('team/');
  });

  it('ignores / typed after another /', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'team//');
    expect(pathInput()).toHaveValue('team/');
  });

  it('removes the last segment with Backspace right after /', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/');
    await user.keyboard('{Backspace}');
    expect(pathInput()).toHaveValue('projects/');
    expect(optionNames()).toEqual(['web', 'website', 'mobile', 'api']);
  });

  it('removes one character with Backspace inside a segment', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web');
    await user.keyboard('{Backspace}');
    expect(pathInput()).toHaveValue('projects/we');
  });
});

describe('options', () => {
  it('shows the document count of each folder', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/');
    expect(screen.getByRole('option', { name: /^components,/ })).toHaveTextContent('21 documents');
  });

  it('marks folders that have subfolders', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/');
    expect(
      screen.getByRole('option', { name: 'forms, 14 documents, has subfolders' })
    ).toBeInTheDocument();
  });

  it('shows no subfolder hint on folders without subfolders', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/');
    expect(screen.getByRole('option', { name: 'components, 21 documents' })).toBeInTheDocument();
  });
});

describe('creating folders', () => {
  it('offers only a create option when the segment matches no folder', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/drafts v2');
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveTextContent('Create folder “drafts v2” in projects / web');
  });

  it('enters the created folder', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/drafts v2');
    await user.click(screen.getByRole('option', { name: /Create folder/ }));
    expect(pathInput()).toHaveValue('projects/web/drafts v2/');
  });

  it('lists the created folder as new next to the existing ones', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/drafts v2');
    await user.click(screen.getByRole('option', { name: /Create folder/ }));
    await typePath(user, 'projects/web/');
    expect(screen.getByRole('option', { name: 'drafts v2, 0 documents, new' })).toBeInTheDocument();
  });

  it('accepts the created folder as a valid path', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/drafts v2');
    await user.click(screen.getByRole('option', { name: /Create folder/ }));
    expect(screen.getByRole('button', { name: 'Save' })).toBeEnabled();
  });

  it('allows creating a folder inside a created folder', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/drafts v2');
    await user.click(screen.getByRole('option', { name: /Create folder/ }));
    await user.type(pathInput(), 'images');
    expect(screen.getByRole('option')).toHaveTextContent(
      'Create folder “images” in projects / web / drafts v2'
    );
  });

  it('does not highlight the create option, so Tab leaves the field', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/drafts v2');
    await user.keyboard('{Tab}');
    expect(pathInput()).toHaveValue('projects/web/drafts v2');
    expect(pathInput()).not.toHaveFocus();
  });

  it('shows an error for folder names with other characters', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web.v2');
    expect(
      screen.getByText('Folder names may contain only letters, numbers, spaces, - and _')
    ).toBeInTheDocument();
  });

  it('does not offer to create a folder with an invalid name', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web.v2');
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });
});

describe('value', () => {
  it('starts with the last saved location', () => {
    renderInput();
    expect(pathInput()).toHaveValue('documents/drafts');
  });

  it('shows an error on blur when the path does not exist', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/nope');
    await user.click(document.body);
    expect(screen.getByText('Folder “nope” does not exist in projects')).toBeInTheDocument();
  });

  it('shows no error while the path is being typed', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/nope');
    expect(pathInput()).not.toHaveAttribute('aria-invalid', 'true');
  });

  it('disables Save while the path does not exist', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/nope');
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
  });

  it('accepts a path that ends with /', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/');
    expect(screen.getByRole('button', { name: 'Save' })).toBeEnabled();
  });

  it('shows a notification with the saved location', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/forms');
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(await screen.findByText('Saved to projects / web / forms')).toBeInTheDocument();
  });

  it('shows the saved path under the input', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/forms/');
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(savedLocation()).toEqual({ path: 'projects/web/forms', createdFolders: [] });
  });

  it('lists the folders created in this session with the saved path', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'projects/web/drafts v2');
    await user.click(screen.getByRole('option', { name: /Create folder/ }));
    await typePath(user, 'personal/ideas');
    await user.click(screen.getByRole('option', { name: /Create folder/ }));
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(savedLocation()).toEqual({
      path: 'personal/ideas',
      createdFolders: ['projects/web/drafts v2', 'personal/ideas'],
    });
  });

  it('saves with Enter when no folder is highlighted', async () => {
    const user = userEvent.setup();
    renderInput();
    await typePath(user, 'documents/drafts/');
    await user.keyboard('{Enter}');
    expect(savedLocation()).toEqual({ path: 'documents/drafts', createdFolders: [] });
  });
});
