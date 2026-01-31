import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { DEFAULT_THEME } from '../../core';
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
    displayName: '@mantine/core/SegmentedControl',
    stylesApiSelectors: ['root', 'label', 'input', 'control', 'indicator', 'innerLabel'],
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

  it('allows value changes when readOnly is false', async () => {
    const spy = jest.fn();
    render(<SegmentedControl {...defaultProps} value="First" onChange={spy} readOnly={false} />);

    const radios = screen.getAllByRole('radio');
    expect(radios[0]).toBeChecked();
    await userEvent.click(radios[1]);

    expect(spy).toHaveBeenCalledWith('Second');
  });

  describe('varsResolver', () => {
    it('resolves --sc-radius variable correctly', () => {
      const resolvedWithValue = SegmentedControl.varsResolver(DEFAULT_THEME, {
        ...defaultProps,
        radius: 'xl',
      });

      expect(resolvedWithValue.root).toHaveProperty('--sc-radius', 'var(--mantine-radius-xl)');

      const resolvedWithUndefined = SegmentedControl.varsResolver(DEFAULT_THEME, {
        ...defaultProps,
        radius: undefined,
      });

      expect(resolvedWithUndefined.root).toHaveProperty('--sc-radius', undefined);
    });
  });
});
