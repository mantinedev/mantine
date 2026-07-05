import { waitFor } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { Button } from '../Button';
import { DownloadTrigger } from './DownloadTrigger';

const createObjectURL = jest.fn((_obj: Blob | MediaSource): string => 'blob:mock-url');
const revokeObjectURL = jest.fn((_url: string) => {});
const originalCreate = URL.createObjectURL;
const originalRevoke = URL.revokeObjectURL;
let clickSpy: jest.SpyInstance;
let lastDownload: string | undefined;

beforeAll(() => {
  (URL as any).createObjectURL = createObjectURL;
  (URL as any).revokeObjectURL = revokeObjectURL;
  clickSpy = jest
    .spyOn(HTMLAnchorElement.prototype, 'click')
    .mockImplementation(function mockClick(this: HTMLAnchorElement) {
      lastDownload = this.download;
    }) as any;
});

afterAll(() => {
  (URL as any).createObjectURL = originalCreate;
  (URL as any).revokeObjectURL = originalRevoke;
  clickSpy.mockRestore();
});

beforeEach(() => {
  createObjectURL.mockClear();
  revokeObjectURL.mockClear();
  clickSpy.mockClear();
  lastDownload = undefined;
});

describe('@mantine/core/DownloadTrigger', () => {
  it('has correct displayName', () => {
    expect(DownloadTrigger.displayName).toBe('@mantine/core/DownloadTrigger');
  });

  it('renders the trigger returned from children function', () => {
    render(
      <DownloadTrigger data="test">
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );
    expect(screen.getByRole('button')).toHaveTextContent('Download');
  });

  it('downloads string data as a Blob when triggered', async () => {
    render(
      <DownloadTrigger data="hello" fileName="greeting.txt" mimeType="text/plain">
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );
    await userEvent.click(screen.getByRole('button'));

    expect(createObjectURL).toHaveBeenCalledTimes(1);
    const blob = createObjectURL.mock.calls[0][0] as Blob;
    expect(blob).toBeInstanceOf(Blob);
    expect(blob.type).toBe('text/plain');
    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(lastDownload).toBe('greeting.txt');
  });

  it('downloads a Blob directly without re-wrapping', async () => {
    const blob = new Blob(['content'], { type: 'application/json' });
    render(
      <DownloadTrigger data={blob} fileName="data.json">
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );
    await userEvent.click(screen.getByRole('button'));

    expect(createObjectURL).toHaveBeenCalledWith(blob);
    expect(lastDownload).toBe('data.json');
  });

  it('revokes the object URL after the download', async () => {
    render(
      <DownloadTrigger data="hello" fileName="greeting.txt">
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );
    await userEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(revokeObjectURL).toHaveBeenCalledWith('blob:mock-url'));
  });

  it('calls onDownloadComplete after a sync download', async () => {
    const onDownloadComplete = jest.fn();
    render(
      <DownloadTrigger data="hello" fileName="greeting.txt" onDownloadComplete={onDownloadComplete}>
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );
    await userEvent.click(screen.getByRole('button'));
    expect(onDownloadComplete).toHaveBeenCalledTimes(1);
  });

  it('resolves async data and exposes the loading state', async () => {
    const onDownloadComplete = jest.fn();
    let resolveData: (value: string) => void = () => {};
    const producer = () =>
      new Promise<string>((resolve) => {
        resolveData = resolve;
      });

    render(
      <DownloadTrigger
        data={producer}
        fileName="report.csv"
        mimeType="text/csv"
        onDownloadComplete={onDownloadComplete}
      >
        {({ download, loading }) => (
          <Button onClick={download} loading={loading}>
            Download
          </Button>
        )}
      </DownloadTrigger>
    );

    await userEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByRole('button')).toHaveAttribute('data-loading'));

    resolveData('a,b,c');
    await waitFor(() => expect(createObjectURL).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(onDownloadComplete).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(screen.getByRole('button')).not.toHaveAttribute('data-loading'));
  });

  it('calls onError when an async producer rejects', async () => {
    const onError = jest.fn();
    const error = new Error('failed');
    const producer = () => Promise.reject(error);

    render(
      <DownloadTrigger data={producer} fileName="report.csv" onError={onError}>
        {({ download, loading }) => (
          <Button onClick={download} loading={loading}>
            Download
          </Button>
        )}
      </DownloadTrigger>
    );
    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(onError).toHaveBeenCalledWith(error));
    expect(createObjectURL).not.toHaveBeenCalled();
    await waitFor(() => expect(screen.getByRole('button')).not.toHaveAttribute('data-loading'));
  });

  it('ignores repeated triggers while an async download is in progress', async () => {
    let resolveData: (value: string) => void = () => {};
    const producer = jest.fn(
      () =>
        new Promise<string>((resolve) => {
          resolveData = resolve;
        })
    );

    render(
      <DownloadTrigger data={producer} fileName="report.csv">
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );
    const button = screen.getByRole('button');

    await userEvent.click(button);
    await userEvent.click(button);
    expect(producer).toHaveBeenCalledTimes(1);

    resolveData('done');
    await waitFor(() => expect(createObjectURL).toHaveBeenCalledTimes(1));
  });
});
