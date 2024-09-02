import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Radio } from '../Radio';
import { RadioGroup, RadioGroupProps, RadioGroupStylesNames } from './RadioGroup';

const defaultProps: RadioGroupProps = {
  label: 'test-label',
  description: 'test-description',
  error: 'test-error',
  withAsterisk: true,
  children: [
    <Radio value="test-value-1" label="test-label-1" key={1} />,
    <Radio value="test-value-2" label="test-label-2" key={2} />,
    <Radio value="test-value-3" label="test-label-3" key={3} />,
  ],
};

describe('@mantine/core/RadioGroup', () => {
  tests.axe([
    <RadioGroup key="1">
      <Radio value="test-1" label="test-1" />
      <Radio value="test-2" label="test-2" />
      <Radio value="test-3" label="test-3" />
    </RadioGroup>,
  ]);

  tests.itSupportsSystemProps<RadioGroupProps, RadioGroupStylesNames>({
    component: RadioGroup,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/RadioGroup',
    stylesApiSelectors: ['root', 'description', 'error', 'label', 'required'],
  });

  it('supports uncontrolled state', async () => {
    render(<RadioGroup {...defaultProps} defaultValue="test-value-1" />);
    expect(screen.getAllByRole('radio')[0]).toBeChecked();
    await userEvent.click(screen.getAllByRole('radio')[1]);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<RadioGroup {...defaultProps} value="test-value-2" onChange={spy} />);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
    await userEvent.click(screen.getAllByRole('radio')[0]);
    expect(screen.getAllByRole('radio')[1]).toBeChecked();
    expect(screen.getAllByRole('radio')[0]).not.toBeChecked();
    expect(spy).toHaveBeenCalledWith('test-value-1');
  });

  it('sets given name to all radio inputs', () => {
    render(<RadioGroup {...defaultProps} name="test-name" />);
    screen.getAllByRole('radio').forEach((radio) => {
      expect(radio).toHaveAttribute('name', 'test-name');
    });
  });

  it('generates unique name if name prop was not set', () => {
    render(<RadioGroup {...defaultProps} />);
    expect(screen.getAllByRole('radio')?.[1]?.getAttribute('name')?.includes('mantine-')).toBe(
      true
    );
  });
});
