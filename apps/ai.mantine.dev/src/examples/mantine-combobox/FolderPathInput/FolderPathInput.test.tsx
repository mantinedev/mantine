import { render, screen, userEvent, within } from '@test-utils';
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
  return screen.getByRole('combobox', { name: 'Save to' });
}

async function typePath(user: User, input: HTMLElement, path: string) {
  await user.clear(input);
  if (path !== '') {
    await user.type(input, path);
  }
}

const optionNames = () => screen.getAllByRole('option').map((option) => option.textContent);

const option = (name: string) => screen.getByRole('option', { name: new RegExp(`^${name}\\b`) });

function highlightedOption(input: HTMLElement) {
  const id = input.getAttribute('aria-activedescendant');
  return id ? document.getElementById(id) : null;
}

afterEach(() => {
  notifications.clean();
});

describe('FolderPathInput', () => {
  it('starts with the last saved location', () => {
    expect(renderInput()).toHaveValue('documents/drafts');
  });

  it('lists the workspace folders when the input is empty', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, '');

    expect(screen.getByText('Workspace')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(6);
  });

  it('shows the folder being listed in the dropdown header', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/web/');

    expect(screen.getByText('projects / web')).toBeInTheDocument();
    expect(optionNames()).toEqual([
      expect.stringMatching(/^forms/),
      expect.stringMatching(/^components/),
      expect.stringMatching(/^design-system/),
      expect.stringMatching(/^website_copy/),
    ]);
  });

  it('lists folders that start with the segment before folders that contain it', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 's');

    expect(optionNames()).toEqual([
      expect.stringMatching(/^shared/),
      expect.stringMatching(/^documents/),
      expect.stringMatching(/^personal/),
      expect.stringMatching(/^projects/),
      expect.stringMatching(/^templates/),
    ]);
  });

  it('completes the highlighted folder with Tab and lists its subfolders', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'proj');
    await user.keyboard('{Tab}');

    expect(input).toHaveValue('projects/');
    expect(input).toHaveFocus();
    expect(screen.getByText('projects')).toBeInTheDocument();
    expect(option('web')).toBeInTheDocument();
  });

  it('completes the highlighted folder with Enter', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/mo');
    await user.keyboard('{Enter}');

    expect(input).toHaveValue('projects/mobile/');
  });

  it('completes the highlighted folder with ArrowRight when the caret is at the end', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'sha');
    await user.keyboard('{ArrowRight}');

    expect(input).toHaveValue('shared/');
  });

  it('moves the caret with ArrowRight when it is not at the end', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'sha');
    await user.keyboard('{ArrowLeft}{ArrowRight}');

    expect(input).toHaveValue('sha');
  });

  it('completes a folder picked with the mouse and keeps the dropdown open', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, '');
    await user.click(option('archive'));

    expect(input).toHaveValue('archive/');
    expect(option('2024')).toBeInTheDocument();
  });

  it('highlights the first subfolder after a folder is completed', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/');
    await user.keyboard('{Tab}');

    expect(input).toHaveValue('projects/web/');
    expect(highlightedOption(input)).toBe(option('forms'));
  });

  it('completes several levels with repeated Tab presses', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'proj');
    await user.keyboard('{Tab}{Tab}{Tab}');

    expect(input).toHaveValue('projects/web/forms/');
  });

  it('moves into a folder when / is typed after its exact name', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'shared/');

    expect(screen.getByText('shared')).toBeInTheDocument();
    expect(option('marketing')).toBeInTheDocument();
  });

  it('removes the whole last segment with Backspace right after a /', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/web/');
    await user.keyboard('{Backspace}');

    expect(input).toHaveValue('projects/');
    expect(option('web')).toBeInTheDocument();
  });

  it('removes one character with Backspace inside a segment', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/we');
    await user.keyboard('{Backspace}');

    expect(input).toHaveValue('projects/w');
  });

  it('shows the document count of each folder', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/');

    expect(within(option('web')).getByText('10 docs')).toBeInTheDocument();
  });

  it('shows the go inside hint only on folders with subfolders', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/web/');

    expect(
      within(option('forms')).getByRole('img', { name: 'Has subfolders' })
    ).toBeInTheDocument();
    expect(
      within(option('components')).queryByRole('img', { name: 'Has subfolders' })
    ).not.toBeInTheDocument();
  });

  it('offers only a create option when the segment matches no folder', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/web/blog');

    expect(screen.getAllByRole('option')).toHaveLength(1);
    expect(
      screen.getByRole('option', { name: 'Create folder “blog” in projects / web' })
    ).toBeInTheDocument();
  });

  it('enters a created folder', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/web/blog');
    await user.keyboard('{Enter}');

    expect(input).toHaveValue('projects/web/blog/');
    expect(screen.getByText('projects / web / blog')).toBeInTheDocument();
  });

  it('lists a created folder among its siblings marked as new', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/web/blog');
    await user.keyboard('{Enter}{Backspace}');

    expect(within(option('blog')).getByText('New')).toBeInTheDocument();
  });

  it('shows an error for a folder name with forbidden characters', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/web*');

    expect(
      screen.getByText('Folder names can contain only letters, numbers, spaces, - and _')
    ).toBeInTheDocument();
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('shows an error on blur when the path does not exist', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/blog');

    expect(screen.queryByText('Folder “projects / blog” does not exist')).not.toBeInTheDocument();
    await user.click(document.body);
    expect(screen.getByText('Folder “projects / blog” does not exist')).toBeInTheDocument();
  });

  it('disables Save while the path does not exist', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/blog');

    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
  });

  it('enables Save for an existing path', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/web/forms');

    expect(screen.getByRole('button', { name: 'Save' })).toBeEnabled();
  });

  it('shows a notification with the saved path', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/web/forms/');
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(await screen.findByText('Saved to projects / web / forms')).toBeInTheDocument();
  });

  it('displays the saved path and the created folders as JSON', async () => {
    const user = userEvent.setup();
    const input = renderInput();
    await typePath(user, input, 'projects/web/blog');
    await user.keyboard('{Enter}');
    await user.click(screen.getByRole('button', { name: 'Save' }));

    const json = screen.getByText(/"path"/).textContent ?? '';
    expect(JSON.parse(json)).toEqual({
      path: 'projects/web/blog',
      createdFolders: ['projects/web/blog'],
    });
  });
});
