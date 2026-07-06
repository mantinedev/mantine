import { render, screen, tests } from '@mantine-tests/core';
import { FileSize } from './FileSize';

describe('@mantine/core/FileSize', () => {
  tests.itHasExtend({ component: FileSize });

  it('has correct displayName', () => {
    expect(FileSize.displayName).toBe('@mantine/core/FileSize');
  });

  it('renders the formatted value as plain text without a wrapper element', () => {
    render(
      <span data-testid="target">
        <FileSize value={1450} />
      </span>
    );
    const target = screen.getByTestId('target');
    expect(target.textContent).toBe('1.45 kB');
    expect(target.children).toHaveLength(0);
  });

  it('renders nothing when value is not a finite number', () => {
    render(
      <span data-testid="target">
        <FileSize />
        <FileSize value={NaN} />
        <FileSize value={Infinity} />
      </span>
    );
    expect(screen.getByTestId('target').textContent).toBe('');
  });

  it('supports formatting options', () => {
    render(
      <div>
        <span data-testid="binary">
          <FileSize value={1450} unitSystem="binary" />
        </span>
        <span data-testid="bit">
          <FileSize value={8_000_000} unit="bit" />
        </span>
        <span data-testid="long-de">
          <FileSize value={1450} unitDisplay="long" locale="de-DE" />
        </span>
      </div>
    );
    expect(screen.getByTestId('binary').textContent).toBe('1.42 KiB');
    expect(screen.getByTestId('bit').textContent).toBe('8 Mb');
    expect(screen.getByTestId('long-de').textContent).toBe('1,45 Kilobyte');
  });
});
