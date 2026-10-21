import { render, screen, userEvent, within } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { ContentEntryPage } from './ContentEntryPage';
import type { EntryPayload } from './types';

function renderPage() {
  const user = userEvent.setup();
  const onSubmit = vi.fn<(entry: EntryPayload) => void>();
  render(
    <>
      <Notifications />
      <ContentEntryPage onSubmit={onSubmit} />
    </>
  );
  return { user, onSubmit };
}

const switchTo = (user: ReturnType<typeof userEvent.setup>, name: string) =>
  user.click(screen.getByRole('radio', { name }));

afterEach(() => {
  notifications.clean();
});

describe('model switcher', () => {
  it('starts with the blog post model', () => {
    renderPage();
    expect(screen.getByRole('radio', { name: 'Blog post' })).toBeChecked();
    expect(screen.getByRole('textbox', { name: 'Title' })).toBeInTheDocument();
  });

  it('replaces the fields with the fields of the selected model', async () => {
    const { user } = renderPage();
    await switchTo(user, 'Landing page hero');
    expect(screen.queryByRole('textbox', { name: 'Title' })).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Headline' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Call to action page' })).toBeInTheDocument();
  });

  it('fills the defaults of the selected model', async () => {
    const { user } = renderPage();
    await switchTo(user, 'Landing page hero');
    expect(screen.getByRole('textbox', { name: 'Headline' })).toHaveValue(
      'Build faster with our platform'
    );
    expect(screen.getByRole('combobox', { name: 'Content alignment' })).toHaveValue('Center');
    expect(screen.getByRole('checkbox', { name: 'Show call to action' })).toBeChecked();
  });

  it('drops the errors of the previous model', async () => {
    const { user } = renderPage();
    await user.click(screen.getByRole('button', { name: 'Create entry' }));
    await switchTo(user, 'Landing page hero');
    expect(screen.queryByText('Content key is required')).not.toBeInTheDocument();
  });

  it('submits the entry with the selected model key', async () => {
    const { user, onSubmit } = renderPage();
    await switchTo(user, 'Landing page hero');
    await user.type(screen.getByRole('textbox', { name: 'Content key' }), 'spring-hero');
    await user.upload(
      screen.getByLabelText('Upload Background image'),
      new File(['image'], 'hero.jpg', { type: 'image/jpeg' })
    );
    await user.click(screen.getByRole('textbox', { name: 'Call to action page' }));
    await user.click(within(screen.getByRole('dialog')).getByRole('radio', { name: /^pricing / }));
    await user.click(
      within(screen.getByRole('dialog')).getByRole('button', { name: 'Select entry' })
    );
    await user.click(screen.getByRole('button', { name: 'Create entry' }));

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        key: 'spring-hero',
        model: 'landing_hero',
        values: expect.objectContaining({
          headline: 'Build faster with our platform',
          cta_target: 'pricing',
          products: [],
          animation: { type: 'fade', duration: 400 },
        }),
      })
    );
  });
});
