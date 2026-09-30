import { act, fireEvent, waitFor } from '@testing-library/react';
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
  clickSpy = jest.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function mockClick(
    this: HTMLAnchorElement
  ) {
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

function clickAndCaptureDownloadPromise(button: HTMLElement) {
  const finallySpy = jest.spyOn(Promise.prototype, 'finally');
  try {
    fireEvent.click(button);
    return finallySpy.mock.results[finallySpy.mock.results.length - 1].value as Promise<void>;
  } finally {
    finallySpy.mockRestore();
  }
}

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

  it('revokes the object URL 1000ms after the download', () => {
    jest.useFakeTimers();
    try {
      render(
        <DownloadTrigger data="hello" fileName="greeting.txt">
          {({ download }) => <Button onClick={download}>Download</Button>}
        </DownloadTrigger>
      );
      fireEvent.click(screen.getByRole('button'));
      expect(createObjectURL).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(999);
      expect(revokeObjectURL).not.toHaveBeenCalled();

      jest.advanceTimersByTime(1);
      expect(revokeObjectURL).toHaveBeenCalledTimes(1);
      expect(revokeObjectURL).toHaveBeenCalledWith('blob:mock-url');
    } finally {
      jest.useRealTimers();
    }
  });

  it('uses the file name when data is a File and fileName is not set', async () => {
    const file = new File(['content'], 'invoice.pdf', { type: 'application/pdf' });
    render(
      <DownloadTrigger data={file}>
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );
    await userEvent.click(screen.getByRole('button'));

    expect(createObjectURL).toHaveBeenCalledWith(file);
    expect(lastDownload).toBe('invoice.pdf');
  });

  it('uses the file name when an async data function resolves to a File', async () => {
    const file = new File(['content'], 'invoice.pdf', { type: 'application/pdf' });
    render(
      <DownloadTrigger data={async () => file}>
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );
    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(clickSpy).toHaveBeenCalledTimes(1));
    expect(lastDownload).toBe('invoice.pdf');
  });

  it('prefers fileName over the File name', async () => {
    const file = new File(['content'], 'invoice.pdf', { type: 'application/pdf' });
    render(
      <DownloadTrigger data={file} fileName="renamed.pdf">
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );
    await userEvent.click(screen.getByRole('button'));
    expect(lastDownload).toBe('renamed.pdf');
  });

  it('keeps the Blob type and passes the same Blob instance to createObjectURL', async () => {
    const blob = new Blob(['<svg />'], { type: 'image/svg+xml' });
    render(
      <DownloadTrigger data={blob} fileName="image.svg" mimeType="text/plain">
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );
    await userEvent.click(screen.getByRole('button'));

    const received = createObjectURL.mock.calls[0][0] as Blob;
    expect(received).toBe(blob);
    expect(received.type).toBe('image/svg+xml');
  });

  it('appends the anchor to the document before clicking it and removes it after', async () => {
    let connectedOnClick: boolean | undefined;
    clickSpy.mockImplementationOnce(function mockClick(this: HTMLAnchorElement) {
      connectedOnClick = this.isConnected;
      lastDownload = this.download;
    });

    render(
      <DownloadTrigger data="hello" fileName="greeting.txt">
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );
    await userEvent.click(screen.getByRole('button'));

    const anchor = clickSpy.mock.contexts[0] as HTMLAnchorElement;
    expect(connectedOnClick).toBe(true);
    expect(anchor.isConnected).toBe(false);
    expect(anchor.href).toBe('blob:mock-url');
    expect(document.querySelector('a[download]')).toBeNull();
  });

  it('calls onError when the sync download fails', async () => {
    const onError = jest.fn();
    const onDownloadComplete = jest.fn();
    const error = new Error('createObjectURL failed');
    createObjectURL.mockImplementationOnce(() => {
      throw error;
    });

    render(
      <DownloadTrigger
        data="hello"
        fileName="greeting.txt"
        onError={onError}
        onDownloadComplete={onDownloadComplete}
      >
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );
    await userEvent.click(screen.getByRole('button'));

    expect(onError).toHaveBeenCalledWith(error);
    expect(clickSpy).not.toHaveBeenCalled();
    expect(onDownloadComplete).not.toHaveBeenCalled();
  });

  it('does not route onDownloadComplete errors to onError (sync)', () => {
    const onError = jest.fn();
    const error = new Error('consumer error');
    const onDownloadComplete = jest.fn(() => {
      throw error;
    });
    let payload: { download: () => void } | undefined;

    render(
      <DownloadTrigger data="hello" onError={onError} onDownloadComplete={onDownloadComplete}>
        {(p) => {
          payload = p;
          return <Button onClick={p.download}>Download</Button>;
        }}
      </DownloadTrigger>
    );

    expect(() => payload!.download()).toThrow(error);
    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(onError).not.toHaveBeenCalled();
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

  it('does not route onDownloadComplete errors to onError (async)', async () => {
    const onError = jest.fn();
    const error = new Error('consumer error');
    const onDownloadComplete = jest.fn(() => {
      throw error;
    });

    render(
      <DownloadTrigger
        data={async () => 'hello'}
        onError={onError}
        onDownloadComplete={onDownloadComplete}
      >
        {({ download, loading }) => (
          <Button onClick={download} loading={loading}>
            Download
          </Button>
        )}
      </DownloadTrigger>
    );

    const promise = clickAndCaptureDownloadPromise(screen.getByRole('button'));
    await act(async () => {
      await expect(promise).rejects.toBe(error);
    });
    expect(onDownloadComplete).toHaveBeenCalledTimes(1);
    expect(onError).not.toHaveBeenCalled();
    expect(screen.getByRole('button')).not.toHaveAttribute('data-loading');
  });

  it('resolves the download chain when onError handles an async failure', async () => {
    const onError = jest.fn();
    const error = new Error('failed');

    render(
      <DownloadTrigger data={() => Promise.reject(error)} onError={onError}>
        {({ download }) => <Button onClick={download}>Download</Button>}
      </DownloadTrigger>
    );

    const promise = clickAndCaptureDownloadPromise(screen.getByRole('button'));
    await act(async () => {
      await expect(promise).resolves.toBeUndefined();
    });
    expect(onError).toHaveBeenCalledWith(error);
  });

  it('rethrows async data errors when onError is not set and resets loading', async () => {
    const error = new Error('failed');

    render(
      <DownloadTrigger data={() => Promise.reject(error)}>
        {({ download, loading }) => (
          <Button onClick={download} loading={loading}>
            Download
          </Button>
        )}
      </DownloadTrigger>
    );

    const promise = clickAndCaptureDownloadPromise(screen.getByRole('button'));
    await act(async () => {
      await expect(promise).rejects.toBe(error);
    });
    expect(createObjectURL).not.toHaveBeenCalled();
    expect(screen.getByRole('button')).not.toHaveAttribute('data-loading');
  });

  it('dispatches the download when a data function returns a value synchronously', async () => {
    const onDownloadComplete = jest.fn();
    const loadingStates: boolean[] = [];

    render(
      <DownloadTrigger data={() => 'x'} fileName="x.txt" onDownloadComplete={onDownloadComplete}>
        {({ download, loading }) => {
          loadingStates.push(loading);
          return (
            <Button onClick={download} loading={loading}>
              Download
            </Button>
          );
        }}
      </DownloadTrigger>
    );
    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(onDownloadComplete).toHaveBeenCalledTimes(1));
    expect(createObjectURL).toHaveBeenCalledTimes(1);
    expect(lastDownload).toBe('x.txt');
    await waitFor(() => expect(screen.getByRole('button')).not.toHaveAttribute('data-loading'));
    expect(loadingStates).toContain(true);
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
