import { render, screen, userEvent } from '@mantine-tests/core';
import { CopyButton } from './CopyButton';

class MockClipboardItem {
  constructor(public items: Record<string, Blob>) {}
}

describe('@mantine/core/CopyButton', () => {
  let writeText: jest.Mock;
  let write: jest.Mock;

  beforeEach(() => {
    writeText = jest.fn(() => Promise.resolve());
    write = jest.fn(() => Promise.resolve());
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText, write },
      configurable: true,
    });
    (window as any).ClipboardItem = MockClipboardItem;
  });

  afterEach(() => {
    delete (window as any).ClipboardItem;
  });

  it('copies string value', async () => {
    render(
      <CopyButton value="hello">
        {({ copied, copy }) => (
          <button type="button" onClick={copy}>
            {copied ? 'copied' : 'copy'}
          </button>
        )}
      </CopyButton>
    );

    await userEvent.click(screen.getByRole('button'));
    expect(writeText).toHaveBeenCalledWith('hello');
    expect(await screen.findByText('copied')).toBeInTheDocument();
  });

  it('copies rich value returned by a function at click time', async () => {
    let html = '<b>initial</b>';
    const getValue = jest.fn(() => ({ text: 'text', html }));

    render(
      <CopyButton value={getValue}>
        {({ copied, copy }) => (
          <button type="button" onClick={copy}>
            {copied ? 'copied' : 'copy'}
          </button>
        )}
      </CopyButton>
    );

    expect(getValue).not.toHaveBeenCalled();
    html = '<b>updated</b>';
    await userEvent.click(screen.getByRole('button'));

    expect(getValue).toHaveBeenCalledTimes(1);
    expect(write).toHaveBeenCalledTimes(1);
    const [item] = write.mock.calls[0][0] as MockClipboardItem[];
    expect(Object.keys(item.items).sort()).toEqual(['text/html', 'text/plain']);
    expect(await screen.findByText('copied')).toBeInTheDocument();
  });
});
