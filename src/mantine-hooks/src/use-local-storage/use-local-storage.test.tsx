import React, { useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import { useLocalStorage } from './use-local-storage';

type WrapperProps = {
  storageKey: string;
  defaultValue?: string;
  value?: string;
};

describe('@mantine/hooks/use-local-storage', () => {
  function WrapperComponent({ storageKey, defaultValue, value: userValue }: WrapperProps) {
    const [value, setValue] = useLocalStorage({ key: storageKey, defaultValue });
    useEffect(() => {
      if (userValue) setValue(userValue);
    }, [userValue]);

    return <div>{value}</div>;
  }

  // Mock the Local Storage object for each test
  let store = {};
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn((key) => store[key]),
        setItem: jest.fn((key, value) => {
          store[key] = value;
        }),
      },
      writable: true,
    });
  });
  afterEach(() => {
    store = {};
  });

  it('correctly returns default value if no value is set', () => {
    render(<WrapperComponent storageKey="ls-key" defaultValue="ls-value" />);
    expect(screen.getByText('ls-value')).toBeInTheDocument();
  });
  it('correctly ignores default value if already set', () => {
    // Set the target key to an existing value
    store['ls-key'] = 'ls-existing';
    render(<WrapperComponent storageKey="ls-key" defaultValue="ls-value" />);
    expect(screen.getByText('ls-existing')).toBeInTheDocument();
  });
  it('correctly sets & returns expected local storage value', () => {
    // Render the hook with a default value for key "ls-key"
    const { rerender } = render(<WrapperComponent storageKey="ls-key" defaultValue="ls-value" />);
    expect(screen.getByText('ls-value')).toBeInTheDocument();
    // Rerender the hook & set a new value for "ls-key"
    rerender(<WrapperComponent storageKey="ls-key" value="ls-value-2" />);
    expect(screen.getByText('ls-value-2')).toBeInTheDocument();
  });
  it('correctly updates value with dynamic keys', () => {
    store['ls-key-1'] = 'ls-existing-1';
    store['ls-key-2'] = 'ls-existing-2';
    // Display the value for `ls-key-1`
    const { rerender } = render(<WrapperComponent storageKey="ls-key-1" />);
    expect(screen.getByText('ls-existing-1')).toBeInTheDocument();
    // Rerender the hook with a different key, verify that the correct value was returned
    rerender(<WrapperComponent storageKey="ls-key-2" />);
    expect(screen.getByText('ls-existing-2')).toBeInTheDocument();
  });
});
