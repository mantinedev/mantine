import { act } from '@testing-library/react';
import { render, screen } from '@mantine-tests/core';
import { CopyButton } from './CopyButton';

let writeText: jest.Mock;

function renderCopyButton(timeout?: number) {
  return render(
    <CopyButton value="copied-value" timeout={timeout}>
      {({ copied, copy }) => (
        <button type="button" onClick={copy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      )}
    </CopyButton>
  );
}

describe('@mantine/core/CopyButton', () => {
  beforeEach(() => {
    writeText = jest.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
      writable: true,
    });
  });

  afterEach(() => {
    jest.useRealTimers();
    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      configurable: true,
      writable: true,
    });
  });

  it('has correct displayName', () => {
    expect(CopyButton.displayName).toBe('@mantine/core/CopyButton');
  });

  it('copies value to the clipboard and sets copied to true', async () => {
    renderCopyButton();
    expect(screen.getByRole('button')).toHaveTextContent('Copy');

    await act(async () => {
      screen.getByRole('button').click();
    });

    expect(writeText).toHaveBeenCalledWith('copied-value');
    expect(screen.getByRole('button')).toHaveTextContent('Copied');
  });

  it('resets copied state after the default timeout', async () => {
    jest.useFakeTimers();
    renderCopyButton();

    await act(async () => {
      screen.getByRole('button').click();
    });
    expect(screen.getByRole('button')).toHaveTextContent('Copied');

    act(() => {
      jest.advanceTimersByTime(999);
    });
    expect(screen.getByRole('button')).toHaveTextContent('Copied');

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(screen.getByRole('button')).toHaveTextContent('Copy');
  });

  it('resets copied state after a custom timeout', async () => {
    jest.useFakeTimers();
    renderCopyButton(300);

    await act(async () => {
      screen.getByRole('button').click();
    });
    expect(screen.getByRole('button')).toHaveTextContent('Copied');

    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(screen.getByRole('button')).toHaveTextContent('Copy');
  });

  it('passes only copied and copy to children', () => {
    const children = jest.fn(() => null);
    render(
      <CopyButton value="test" {...({ 'data-extra': 'x' } as any)}>
        {children}
      </CopyButton>
    );
    expect(Object.keys((children.mock.calls[0] as any)[0]).sort()).toEqual(['copied', 'copy']);
  });
});
