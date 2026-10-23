import { screen } from '@test-utils';
import { fillKey, imageField, modelWith, renderForm, submit } from '../../test-helpers';

const coverImage = (required = false) => modelWith(imageField({ required }));

const png = () => new File(['png-bytes'], 'cover.png', { type: 'image/png' });

describe('image field', () => {
  it('shows a preview of the chosen image', async () => {
    const { user } = renderForm(coverImage());
    await user.upload(screen.getByLabelText('Cover image'), png());
    expect(await screen.findByRole('img', { name: 'cover.png' })).toBeInTheDocument();
  });

  it('brings the drop zone back when the image is removed', async () => {
    const { user } = renderForm(coverImage());
    await user.upload(screen.getByLabelText('Cover image'), png());
    await user.click(await screen.findByRole('button', { name: 'Remove Cover image' }));
    expect(screen.getByText('Drag an image here or click to select')).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'cover.png' })).not.toBeInTheDocument();
  });

  it('rejects a file that is not an image', async () => {
    const { user } = renderForm(coverImage(), { applyAccept: false });
    await user.upload(
      screen.getByLabelText('Cover image'),
      new File(['text'], 'notes.txt', { type: 'text/plain' })
    );
    expect(await screen.findByText('Cover image must be an image')).toBeInTheDocument();
  });

  it('shows an error when required and empty', async () => {
    const { user } = renderForm(coverImage(true));
    await fillKey(user);
    await submit(user);
    expect(screen.getByText('Cover image is required')).toBeInTheDocument();
  });

  it('submits the file name, size and type', async () => {
    const { user, onSubmit } = renderForm(coverImage(true));
    await fillKey(user);
    await user.upload(screen.getByLabelText(/^Cover image/), png());
    await screen.findByRole('img', { name: 'cover.png' });
    await submit(user);
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        values: { cover: { name: 'cover.png', size: 9, type: 'image/png' } },
      })
    );
  });
});
