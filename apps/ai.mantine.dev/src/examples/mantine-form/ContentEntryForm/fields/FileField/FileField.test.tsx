import { screen } from '@test-utils';
import { fileField, fillKey, modelWith, renderForm, submit } from '../../test-helpers';

const attachment = (required = false) => modelWith(fileField({ required }));

const pdf = () => new File(['x'.repeat(2000)], 'report.pdf', { type: 'application/pdf' });

describe('file field', () => {
  it('shows the name and size of the chosen file', async () => {
    const { user } = renderForm(attachment());
    await user.upload(screen.getByLabelText('Attachment'), pdf());
    expect(await screen.findByText('report.pdf')).toBeInTheDocument();
    expect(screen.getByText(/^2(\.0+)?\s?kB$/)).toBeInTheDocument();
  });

  it('brings the drop zone back when the file is removed', async () => {
    const { user } = renderForm(attachment());
    await user.upload(screen.getByLabelText('Attachment'), pdf());
    await user.click(await screen.findByRole('button', { name: 'Remove Attachment' }));
    expect(screen.getByText('Drag a file here or click to select')).toBeInTheDocument();
  });

  it('shows an error when required and empty', async () => {
    const { user } = renderForm(attachment(true));
    await fillKey(user);
    await submit(user);
    expect(screen.getByText('Attachment is required')).toBeInTheDocument();
  });

  it('submits the file name, size and type', async () => {
    const { user, onSubmit } = renderForm(attachment());
    await fillKey(user);
    await user.upload(screen.getByLabelText('Attachment'), pdf());
    await screen.findByText('report.pdf');
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        values: { attachment: { name: 'report.pdf', size: 2000, type: 'application/pdf' } },
      })
    );
  });
});
