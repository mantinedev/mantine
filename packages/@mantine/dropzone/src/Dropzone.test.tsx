import { createRef } from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { DropzoneFullScreen } from './DropzoneFullScreen';
import { DropzoneAccept, DropzoneIdle, DropzoneReject, DropzoneUploading } from './DropzoneStatus';
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

  tests.itSupportsStylesApi<DropzoneProps, DropzoneStylesNames>({
    component: Dropzone,
    props: { ...defaultProps, progress: 40 },
    selectors: ['progressWrapper', 'progress'],
    providerName: 'Dropzone',
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
    const { container } = render(<Dropzone {...defaultProps} openRef={ref} />);
    const click = jest.spyOn(container.querySelector('input')!, 'click');

    ref.current();

    expect(click).toHaveBeenCalledTimes(1);
  });

  it('exposes static components', () => {
    expect(Dropzone.Accept).toBe(DropzoneAccept);
    expect(Dropzone.Reject).toBe(DropzoneReject);
    expect(Dropzone.Idle).toBe(DropzoneIdle);
    expect(Dropzone.Uploading).toBe(DropzoneUploading);
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

  it('normalizes files returned by a custom getFilesFromEvent', async () => {
    const onDrop = jest.fn();
    const { container } = render(
      <Dropzone
        onDrop={onDrop}
        // A custom aggregator may return plain `File` objects, but `onDrop` is typed with
        // `FileWithPath` whose `path`/`relativePath` are required - they have to be real
        getFilesFromEvent={async () => [createFile('custom.png')]}
      />
    );

    await userEvent.upload(container.querySelector('input')!, [createFile('a.png')]);

    await waitFor(() => expect(onDrop).toHaveBeenCalledTimes(1));
    expect(onDrop.mock.calls[0][0][0]).toMatchObject({
      name: 'custom.png',
      path: './custom.png',
      relativePath: './custom.png',
    });
  });

  it('has role="button" by default', () => {
    const { container, rerender } = render(<Dropzone {...defaultProps} />);
    expect(container.querySelector('.mantine-Dropzone-root')).toHaveAttribute('role', 'button');
    expect(container.querySelector('input')).toHaveAttribute('aria-hidden', 'true');

    rerender(<Dropzone {...defaultProps} role="region" />);
    expect(container.querySelector('.mantine-Dropzone-root')).toHaveAttribute('role', 'region');

    rerender(<Dropzone {...defaultProps} activateOnKeyboard={false} />);
    expect(container.querySelector('.mantine-Dropzone-root')).toHaveAttribute(
      'role',
      'presentation'
    );
    expect(container.querySelector('input')).not.toHaveAttribute('aria-hidden');

    rerender(
      <Dropzone {...defaultProps} activateOnClick={false}>
        <button type="button">Select files</button>
      </Dropzone>
    );
    expect(container.querySelector('.mantine-Dropzone-root')).toHaveAttribute(
      'role',
      'presentation'
    );
  });

  it('sets aria-disabled when disabled', () => {
    const { container, rerender } = render(<Dropzone {...defaultProps} />);
    const root = container.querySelector('.mantine-Dropzone-root')!;
    expect(root).not.toHaveAttribute('aria-disabled');
    expect(root).toHaveAttribute('tabindex', '0');

    rerender(<Dropzone {...defaultProps} disabled />);
    expect(root).toHaveAttribute('aria-disabled', 'true');
    expect(root).not.toHaveAttribute('tabindex');
  });

  it('sets aria-busy when loading', () => {
    const { container, rerender } = render(<Dropzone {...defaultProps} />);
    const root = container.querySelector('.mantine-Dropzone-root')!;
    expect(root).not.toHaveAttribute('aria-busy');

    rerender(<Dropzone {...defaultProps} loading />);
    expect(root).toHaveAttribute('aria-busy', 'true');
  });

  it('does not open file picker on click when disabled or loading', async () => {
    const { container, rerender } = render(<Dropzone {...defaultProps} disabled />);
    const click = jest.spyOn(container.querySelector('input')!, 'click');

    await userEvent.click(container.querySelector('.mantine-Dropzone-root')!);
    expect(click).not.toHaveBeenCalled();

    rerender(<Dropzone {...defaultProps} loading />);
    await userEvent.click(container.querySelector('.mantine-Dropzone-root')!);
    expect(click).not.toHaveBeenCalled();

    rerender(<Dropzone {...defaultProps} />);
    await userEvent.click(container.querySelector('.mantine-Dropzone-root')!);
    expect(click).toHaveBeenCalledTimes(1);
  });

  it('calls consumer handlers and keeps dropzone handlers', async () => {
    const onClick = jest.fn();
    const onKeyDown = jest.fn();
    const { container } = render(
      <Dropzone {...defaultProps} onClick={onClick} onKeyDown={onKeyDown} />
    );
    const click = jest.spyOn(container.querySelector('input')!, 'click');
    const root = container.querySelector<HTMLElement>('.mantine-Dropzone-root')!;

    await userEvent.click(root);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(click).toHaveBeenCalledTimes(1);

    root.focus();
    await userEvent.keyboard('{Enter}');
    expect(onKeyDown).toHaveBeenCalled();
    expect(click).toHaveBeenCalledTimes(2);
  });

  it('assigns ref to the root element while keeping keyboard activation working', async () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Dropzone {...defaultProps} ref={ref} />);
    const click = jest.spyOn(container.querySelector('input')!, 'click');
    expect(ref.current).toBe(container.querySelector('.mantine-Dropzone-root'));

    ref.current!.focus();
    await userEvent.keyboard('{Enter}');
    expect(click).toHaveBeenCalledTimes(1);
  });

  it('renders progress bar only when progress prop is set', () => {
    const { rerender } = render(<Dropzone {...defaultProps} />);
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

    rerender(<Dropzone {...defaultProps} progress={40} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '40');

    rerender(<Dropzone {...defaultProps} progress={0} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  it('passes progressProps to the progress bar', () => {
    render(
      <Dropzone
        {...defaultProps}
        progress={60}
        progressProps={{ 'aria-label': 'Upload progress', color: 'teal' }}
      />
    );

    expect(screen.getByRole('progressbar', { name: 'Upload progress' })).toHaveAttribute(
      'aria-valuenow',
      '60'
    );
  });

  it('sets data-uploading and aria-busy when progress is set', () => {
    const { container, rerender } = render(<Dropzone {...defaultProps} />);
    const root = container.querySelector('.mantine-Dropzone-root')!;
    expect(root).not.toHaveAttribute('data-uploading');
    expect(root).not.toHaveAttribute('aria-busy');

    rerender(<Dropzone {...defaultProps} progress={10} />);
    expect(root).toHaveAttribute('data-uploading');
    expect(root).toHaveAttribute('aria-busy', 'true');
    expect(root).toHaveAttribute('aria-disabled', 'true');
  });

  it('does not open file picker on click while uploading', async () => {
    const { container, rerender } = render(<Dropzone {...defaultProps} progress={50} />);
    const click = jest.spyOn(container.querySelector('input')!, 'click');

    await userEvent.click(container.querySelector('.mantine-Dropzone-root')!);
    expect(click).not.toHaveBeenCalled();

    rerender(<Dropzone {...defaultProps} />);
    await userEvent.click(container.querySelector('.mantine-Dropzone-root')!);
    expect(click).toHaveBeenCalledTimes(1);
  });

  it('renders Dropzone.Uploading instead of Dropzone.Idle while uploading', () => {
    const content = (
      <>
        <Dropzone.Idle>idle</Dropzone.Idle>
        <Dropzone.Uploading>uploading</Dropzone.Uploading>
      </>
    );

    const { rerender } = render(<Dropzone {...defaultProps}>{content}</Dropzone>);
    expect(screen.getByText('idle')).toBeInTheDocument();
    expect(screen.queryByText('uploading')).not.toBeInTheDocument();

    rerender(
      <Dropzone {...defaultProps} progress={30}>
        {content}
      </Dropzone>
    );
    expect(screen.queryByText('idle')).not.toBeInTheDocument();
    expect(screen.getByText('uploading')).toBeInTheDocument();
  });

  it('renders only Dropzone.Idle by default', () => {
    render(
      <Dropzone {...defaultProps}>
        <Dropzone.Idle>idle</Dropzone.Idle>
        <Dropzone.Accept>accept</Dropzone.Accept>
        <Dropzone.Reject>reject</Dropzone.Reject>
        <Dropzone.Uploading>uploading</Dropzone.Uploading>
      </Dropzone>
    );

    expect(screen.getByText('idle')).toBeInTheDocument();
    expect(screen.queryByText('uploading')).not.toBeInTheDocument();
    expect(screen.queryByText('accept')).not.toBeInTheDocument();
    expect(screen.queryByText('reject')).not.toBeInTheDocument();
  });

  it('renders Dropzone.Accept when accepted files are dragged over', async () => {
    const { container } = render(
      <Dropzone {...defaultProps} accept={['image/png']}>
        <Dropzone.Idle>idle</Dropzone.Idle>
        <Dropzone.Accept>accept</Dropzone.Accept>
        <Dropzone.Reject>reject</Dropzone.Reject>
      </Dropzone>
    );

    fireEvent.dragEnter(container.querySelector('.mantine-Dropzone-root')!, {
      dataTransfer: {
        files: [createFile('a.png')],
        items: [{ kind: 'file', type: 'image/png', getAsFile: () => createFile('a.png') }],
        types: ['Files'],
      },
    });

    expect(await screen.findByText('accept')).toBeInTheDocument();
    expect(screen.queryByText('idle')).not.toBeInTheDocument();
    expect(screen.queryByText('reject')).not.toBeInTheDocument();
  });

  it('renders Dropzone.Reject when rejected files are dragged over', async () => {
    const { container } = render(
      <Dropzone {...defaultProps} accept={['image/png']}>
        <Dropzone.Idle>idle</Dropzone.Idle>
        <Dropzone.Accept>accept</Dropzone.Accept>
        <Dropzone.Reject>reject</Dropzone.Reject>
      </Dropzone>
    );

    fireEvent.dragEnter(container.querySelector('.mantine-Dropzone-root')!, {
      dataTransfer: {
        files: [new File(['a'], 'a.txt', { type: 'text/plain' })],
        items: [{ kind: 'file', type: 'text/plain' }],
        types: ['Files'],
      },
    });

    expect(await screen.findByText('reject')).toBeInTheDocument();
    expect(screen.queryByText('idle')).not.toBeInTheDocument();
  });
});
