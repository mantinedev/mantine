import React from 'react';
// import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';
import { useColorScheme } from './use-color-scheme';

describe('@maintine/hooks/use-color-scheme', () => {
  let trace = jest.fn<(colorScheme: string) => void, string[]>();
  beforeEach(() => {
    trace = jest.fn();
  });
  function WrapperComponent() {
    const colorScheme = useColorScheme();
    trace(colorScheme);
    return <>{colorScheme}</>;
  }

  it('correctly returns initial state without useEffect', async () => {
    render(<WrapperComponent />);
    expect(trace).toHaveBeenCalledTimes(1);
    expect(trace.mock.calls[0][0]).toBe('light');
  });
});
