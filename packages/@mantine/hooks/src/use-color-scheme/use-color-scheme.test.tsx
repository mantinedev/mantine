import { render } from '@testing-library/react';
import { useColorScheme } from './use-color-scheme';

describe('@mantine/hooks/use-color-scheme', () => {
  let trace = jest.fn<(colorScheme: string) => void, string[]>();
  const mockMatchMedia = jest.fn().mockImplementation(() => ({
    matches: true,
    media: '',
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));
  const retainMatchMedia = window.matchMedia;
  beforeEach(() => {
    trace = jest.fn();
    window.matchMedia = retainMatchMedia;
  });
  function WrapperComponent({
    initialValue,
    getInitialValueInEffect = true,
  }: {
    initialValue?: 'light' | 'dark';
    getInitialValueInEffect?: boolean;
  }) {
    const colorScheme = useColorScheme(initialValue, {
      getInitialValueInEffect,
    });
    trace(colorScheme);
    return colorScheme;
  }

  it('correctly returns initial dark state state without useEffect', () => {
    window.matchMedia = mockMatchMedia;
    render(<WrapperComponent initialValue="dark" getInitialValueInEffect={false} />);
    expect(trace).toHaveBeenCalledTimes(1);
    expect(trace.mock.calls[0][0]).toBe('dark');
  });

  it('correctly returns initial light state with useEffect', () => {
    render(<WrapperComponent initialValue="dark" getInitialValueInEffect />);
    expect(trace).toHaveBeenCalledTimes(2);
    expect(trace.mock.calls[0][0]).toBe('dark');
    expect(trace.mock.calls[1][0]).toBe('light');
  });
  it('correctly returns initial dark state with useEffect', () => {
    window.matchMedia = mockMatchMedia;
    render(<WrapperComponent initialValue="dark" getInitialValueInEffect />);
    expect(trace).toHaveBeenCalledTimes(1);
    expect(trace.mock.calls[0][0]).toBe('dark');
  });
  it('correctly returns initial light state with default props', () => {
    render(<WrapperComponent />);
    expect(trace).toHaveBeenCalledTimes(1);
    expect(trace.mock.calls[0][0]).toBe('light');
  });
  it('correctly returns initial dark state with default props', () => {
    window.matchMedia = mockMatchMedia;
    render(<WrapperComponent />);
    expect(trace).toHaveBeenCalledTimes(2);
    expect(trace.mock.calls[0][0]).toBe('light');
    expect(trace.mock.calls[1][0]).toBe('dark');
  });
});
