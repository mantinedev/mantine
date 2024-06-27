import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Checkbox } from '../Checkbox';
import { CheckboxGroup, CheckboxGroupProps, CheckboxGroupStylesNames } from './CheckboxGroup';

const defaultProps: CheckboxGroupProps = {
  label: 'test-label',
  description: 'test-description',
  error: 'test-error',
  withAsterisk: true,
  children: [
    <Checkbox value="test-value-1" label="test-label-1" key={1} />,
    <Checkbox value="test-value-2" label="test-label-2" key={2} />,
    <Checkbox value="test-value-3" label="test-label-3" key={3} />,
  ],
};

describe('@mantine/core/CheckboxGroup', () => {
  tests.axe([
    <CheckboxGroup>
      <Checkbox value="test-1" label="test-1" />
      <Checkbox value="test-2" label="test-2" />
      <Checkbox value="test-3" label="test-3" />
    </CheckboxGroup>,
  ]);

  tests.itSupportsSystemProps<CheckboxGroupProps, CheckboxGroupStylesNames>({
    component: CheckboxGroup,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/CheckboxGroup',
    stylesApiSelectors: ['root', 'description', 'error', 'label', 'required'],
  });

  it('supports uncontrolled state', async () => {
    render(<CheckboxGroup {...defaultProps} defaultValue={['test-value-1']} />);
    expect(screen.getAllByRole('checkbox')[0]).toBeChecked();
    await userEvent.click(screen.getAllByRole('checkbox')[1]);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<CheckboxGroup {...defaultProps} value={['test-value-2']} onChange={spy} />);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
    await userEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
    expect(screen.getAllByRole('checkbox')[0]).not.toBeChecked();
    expect(spy).toHaveBeenCalledWith(['test-value-2', 'test-value-1']);
  });
});
