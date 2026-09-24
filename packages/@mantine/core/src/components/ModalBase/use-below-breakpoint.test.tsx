import { act } from '@testing-library/react';
import { mockMatchMedia, render } from '@mantine-tests/core';
import { useBelowBreakpoint } from './use-below-breakpoint';

const isMinWidthQuery = (query: string) => query.startsWith('(min-width');

function Probe({ breakpoint }: { breakpoint?: string | number }) {
  const below = useBelowBreakpoint(breakpoint);
  return <div data-testid="probe" data-below={below ? 'true' : 'false'} />;
}

const getResult = (container: HTMLElement) =>
  container.querySelector('[data-testid="probe"]')!.getAttribute('data-below');

describe('@mantine/core/ModalBase/use-below-breakpoint', () => {
  let media: ReturnType<typeof mockMatchMedia>;

  afterEach(() => {
    media.restore();
  });

  it('returns false and does not query the viewport when breakpoint is not set', () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const { container } = render(<Probe />);
    expect(getResult(container)).toBe('false');
    expect(media.queries).toEqual([]);
  });

  it('returns true when the viewport is narrower than the theme breakpoint', () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const { container } = render(<Probe breakpoint="sm" />);
    expect(getResult(container)).toBe('true');
    expect(media.queries).toEqual(['(min-width: 48em)']);
  });

  it('returns false when the viewport is at least as wide as the theme breakpoint', () => {
    media = mockMatchMedia(true, { filter: isMinWidthQuery });
    const { container } = render(<Probe breakpoint="sm" />);
    expect(getResult(container)).toBe('false');
  });

  it('accepts px numbers and CSS length strings as breakpoints', () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const { rerender } = render(<Probe breakpoint={800} />);
    expect(media.queries.at(-1)).toBe('(min-width: 50em)');

    rerender(<Probe breakpoint="800px" />);
    expect(media.queries.at(-1)).toBe('(min-width: 50em)');

    rerender(<Probe breakpoint="40em" />);
    expect(media.queries.at(-1)).toBe('(min-width: 40em)');
  });

  it('passes CSS lengths that cannot be converted to px through unchanged', () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    render(<Probe breakpoint="50vw" />);
    expect(media.queries).toEqual(['(min-width: 50vw)']);
  });

  it('updates when the viewport crosses the breakpoint', () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery });
    const { container } = render(<Probe breakpoint="md" />);
    expect(getResult(container)).toBe('true');

    act(() => media.setMatches(true));
    expect(getResult(container)).toBe('false');

    act(() => media.setMatches(false));
    expect(getResult(container)).toBe('true');
  });

  it('returns false when matchMedia throws', () => {
    media = mockMatchMedia(false, { filter: isMinWidthQuery, throws: true });
    const { container } = render(<Probe breakpoint="sm" />);
    expect(getResult(container)).toBe('false');
  });
});
