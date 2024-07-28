import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Switch } from '../Switch';
import { SwitchGroup, SwitchGroupProps, SwitchGroupStylesNames } from './SwitchGroup';

const defaultProps: SwitchGroupProps = {
  label: 'test-label',
  description: 'test-description',
  error: 'test-error',
  withAsterisk: true,
  children: [
    <Switch value="test-value-1" label="test-label-1" key={1} />,
    <Switch value="test-value-2" label="test-label-2" key={2} />,
    <Switch value="test-value-3" label="test-label-3" key={3} />,
  ],
};

describe('@mantine/core/SwitchGroup', () => {
  tests.axe([
    <SwitchGroup>
      <Switch value="test-1" label="test-1" />
      <Switch value="test-2" label="test-2" />
      <Switch value="test-3" label="test-3" />
    </SwitchGroup>,
  ]);

  tests.itSupportsSystemProps<SwitchGroupProps, SwitchGroupStylesNames>({
    component: SwitchGroup,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/SwitchGroup',
    stylesApiSelectors: ['root', 'description', 'error', 'label', 'required'],
  });

  it('supports uncontrolled state', async () => {
    render(<SwitchGroup {...defaultProps} defaultValue={['test-value-1']} />);
    expect(screen.getAllByRole('switch')[0]).toBeChecked();
    await userEvent.click(screen.getAllByRole('switch')[1]);
    expect(screen.getAllByRole('switch')[1]).toBeChecked();
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<SwitchGroup {...defaultProps} value={['test-value-2']} onChange={spy} />);
    expect(screen.getAllByRole('switch')[1]).toBeChecked();
    await userEvent.click(screen.getAllByRole('switch')[0]);
    expect(screen.getAllByRole('switch')[1]).toBeChecked();
    expect(screen.getAllByRole('switch')[0]).not.toBeChecked();
    expect(spy).toHaveBeenCalledWith(['test-value-2', 'test-value-1']);
  });
});
