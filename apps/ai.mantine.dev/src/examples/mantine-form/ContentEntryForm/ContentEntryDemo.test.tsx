import { render, screen, userEvent } from '@test-utils';
import { ContentEntryDemo } from './ContentEntryDemo';

function renderDemo() {
  const user = userEvent.setup();
  render(<ContentEntryDemo />);
  return { user };
}

describe('model switcher', () => {
  it('starts with the blog post fields', () => {
    renderDemo();
    expect(screen.getByRole('radio', { name: 'Blog post' })).toBeChecked();
    expect(screen.getByRole('textbox', { name: 'Title' })).toBeInTheDocument();
  });

  it('shows the landing page hero fields and defaults after switching', async () => {
    const { user } = renderDemo();
    await user.click(screen.getByRole('radio', { name: 'Landing page hero' }));
    expect(screen.queryByRole('textbox', { name: 'Title' })).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Headline' })).toHaveValue('Build faster');
    expect(screen.getByRole('combobox', { name: 'Theme' })).toHaveValue('Dark');
  });

  it('starts a new entry when the model changes', async () => {
    const { user } = renderDemo();
    await user.type(screen.getByRole('textbox', { name: 'Content key' }), 'hello-world');
    await user.click(screen.getByRole('radio', { name: 'Landing page hero' }));
    expect(screen.getByRole('textbox', { name: 'Content key' })).toHaveValue('');
  });
});
