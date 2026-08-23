import { createRef } from 'react';
import { waitFor } from '@testing-library/react';
import { render, tests, userEvent } from '@mantine-tests/core';
import { DropzoneFullScreen } from './DropzoneFullScreen';
import { DropzoneAccept, DropzoneIdle, DropzoneReject } from './DropzoneStatus';
import { Dropzone, DropzoneProps, DropzoneStylesNames } from './index';

const defaultProps: DropzoneProps = {
  onDrop: () => {},
};

function createFile(name: string) {
  return new File(['test-content'], name, { type: 'image/png' });
}

describe('@mantine/dropzone/Dropzone', () => {
  tests.itSupportsSystemProps<DropzoneProps, DropzoneStylesNames>({
    component: Dropzone,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/dropzone/Dropzone',
    stylesApiSelectors: ['root', 'inner'],
  });

  it('displays LoadingOverlay based on loading prop', () => {
    const { rerender, container } = render(<Dropzone {...defaultProps} loading={false} />);
    expect(container.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(0);

    rerender(<Dropzone {...defaultProps} loading />);
    expect(container.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(1);
  });

  it('has a name attribute on the internal input element', () => {
    const { rerender, container } = render(<Dropzone {...defaultProps} />);
    expect(container.querySelector('input')).not.toHaveAttribute('name');

    rerender(<Dropzone {...defaultProps} name="a-custom-name" />);
    expect(container.querySelector('input')).toHaveAttribute('name', 'a-custom-name');
  });

  it('assigns open function to given openRef', () => {
    const ref = createRef<any>();
    render(<Dropzone {...defaultProps} openRef={ref} />);
    expect(ref.current).toBeInstanceOf(Function);
  });

  it('exposes static components', () => {
    expect(Dropzone.Accept).toBe(DropzoneAccept);
    expect(Dropzone.Reject).toBe(DropzoneReject);
    expect(Dropzone.Idle).toBe(DropzoneIdle);
    expect(Dropzone.FullScreen).toBe(DropzoneFullScreen);
  });

  it('accepts files up to maxFiles and rejects only the overflow', async () => {
    const onDrop = jest.fn();
    const onReject = jest.fn();
    const { container } = render(<Dropzone onDrop={onDrop} onReject={onReject} maxFiles={2} />);

    await userEvent.upload(container.querySelector('input')!, [
      createFile('a.png'),
      createFile('b.png'),
      createFile('c.png'),
    ]);

    await waitFor(() => expect(onDrop).toHaveBeenCalledTimes(1));
    expect(onDrop.mock.calls[0][0].map((file: File) => file.name)).toStrictEqual([
      'a.png',
      'b.png',
    ]);

    expect(onReject).toHaveBeenCalledTimes(1);
    expect(onReject.mock.calls[0][0].map((rejection: any) => rejection.file.name)).toStrictEqual([
      'c.png',
    ]);
  });

  it('provides path and relativePath on dropped files', async () => {
    const onDrop = jest.fn();
    const { container } = render(<Dropzone onDrop={onDrop} />);

    await userEvent.upload(container.querySelector('input')!, [createFile('a.png')]);

    await waitFor(() => expect(onDrop).toHaveBeenCalledTimes(1));
    expect(onDrop.mock.calls[0][0][0]).toMatchObject({
      path: './a.png',
      relativePath: './a.png',
    });
  });
});
