import { useState } from 'react';
import { renderToString } from 'react-dom/server';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { MantineProvider } from '../../core';
import {
  SegmentedControl,
  SegmentedControlProps,
  SegmentedControlStylesNames,
} from './SegmentedControl';

const defaultProps: SegmentedControlProps = {
  transitionDuration: 0,
  data: ['First', 'Second', 'Third'],
};

describe('@mantine/core/SegmentedControl', () => {
  tests.axe([
    <SegmentedControl {...defaultProps} key="1" />,
    <SegmentedControl {...defaultProps} aria-label="group label" key="2" />,
  ]);

  tests.itSupportsSystemProps<SegmentedControlProps, SegmentedControlStylesNames>({
    component: SegmentedControl,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/SegmentedControl',
    stylesApiSelectors: ['root', 'label', 'input', 'control', 'indicator', 'innerLabel'],
  });

  it('does not call Math.random during server rendering', () => {
    const spy = jest.spyOn(Math, 'random');
    try {
      renderToString(
        <MantineProvider>
          <SegmentedControl {...defaultProps} />
        </MantineProvider>
      );
      expect(spy).not.toHaveBeenCalled();
    } finally {
      spy.mockRestore();
    }
  });

  it('prevents value changes when readOnly is true', async () => {
    const spy = jest.fn();
    render(<SegmentedControl {...defaultProps} value="First" onChange={spy} readOnly />);

    const radios = screen.getAllByRole('radio');
    expect(radios[0]).toBeChecked();
    await userEvent.click(radios[1]);

    expect(radios[0]).toBeChecked();
    expect(radios[1]).not.toBeChecked();
    expect(spy).not.toHaveBeenCalled();
  });

  it('disables all radios and blocks onChange when disabled is set', async () => {
    const spy = jest.fn();
    render(<SegmentedControl {...defaultProps} disabled onChange={spy} />);
    const radios = screen.getAllByRole('radio');
    radios.forEach((radio) => expect(radio).toBeDisabled());
    await userEvent.click(radios[1]);
    expect(spy).not.toHaveBeenCalled();
  });

  it('disables only items with disabled flag in data', async () => {
    const spy = jest.fn();
    render(
      <SegmentedControl
        transitionDuration={0}
        data={[
          { label: 'First', value: 'first' },
          { label: 'Second', value: 'second', disabled: true },
          { label: 'Third', value: 'third' },
        ]}
        onChange={spy}
      />
    );
    const radios = screen.getAllByRole('radio');
    expect(radios[0]).not.toBeDisabled();
    expect(radios[1]).toBeDisabled();
    expect(radios[2]).not.toBeDisabled();

    await userEvent.click(radios[1]);
    expect(spy).not.toHaveBeenCalled();

    await userEvent.click(radios[2]);
    expect(spy).toHaveBeenCalledWith('third');
  });

  it('checks the first non-disabled item when no value is given', () => {
    render(
      <SegmentedControl
        transitionDuration={0}
        data={[
          { label: 'First', value: 'first', disabled: true },
          { label: 'Second', value: 'second' },
          { label: 'Third', value: 'third' },
        ]}
      />
    );
    const radios = screen.getAllByRole('radio');
    expect(radios[0]).not.toBeChecked();
    expect(radios[1]).toBeChecked();
  });

  it('allows value changes when readOnly is false', async () => {
    const spy = jest.fn();
    render(<SegmentedControl {...defaultProps} value="First" onChange={spy} readOnly={false} />);

    const radios = screen.getAllByRole('radio');
    expect(radios[0]).toBeChecked();
    await userEvent.click(radios[1]);

    expect(spy).toHaveBeenCalledWith('Second');
  });

  it('keeps the indicator mounted when data is replaced with a list of the same length', async () => {
    const minutes = ['10', '30', '60'];
    const days = ['7', '30', '90'];

    function Wrapper() {
      const [swapped, setSwapped] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setSwapped((v) => !v)}>
            swap
          </button>
          <SegmentedControl
            transitionDuration={0}
            data={swapped ? days : minutes}
            value={swapped ? '7' : '10'}
            onChange={() => {}}
          />
        </>
      );
    }

    const getIndicator = () => document.querySelector('.mantine-SegmentedControl-indicator');
    render(<Wrapper />);
    expect(getIndicator()).not.toBe(null);

    const swap = screen.getByRole('button', { name: 'swap' });

    await userEvent.click(swap);
    expect(getIndicator()).not.toBe(null);

    await userEvent.click(swap);
    expect(getIndicator()).not.toBe(null);

    await userEvent.click(swap);
    expect(getIndicator()).not.toBe(null);
  });

  it('does not keep a detached label as the indicator target when the selected item is removed', async () => {
    function Wrapper() {
      const [removed, setRemoved] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setRemoved(true)}>
            remove
          </button>
          <SegmentedControl
            transitionDuration={0}
            data={removed ? ['1', '2'] : ['1', '2', '3']}
            value="3"
            onChange={() => {}}
          />
        </>
      );
    }

    render(<Wrapper />);
    expect(document.querySelector('.mantine-SegmentedControl-indicator')).not.toBe(null);

    await userEvent.click(screen.getByRole('button', { name: 'remove' }));

    expect(document.querySelector('.mantine-SegmentedControl-indicator')).toBe(null);
  });
});
