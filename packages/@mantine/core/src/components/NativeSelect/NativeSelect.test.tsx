import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { NativeSelect, NativeSelectProps } from './NativeSelect';

const defaultProps: NativeSelectProps = {
  ...inputDefaultProps,
  data: ['test-1', 'test-2'],
};

describe('@mantine/core/NativeSelect', () => {
  tests.axe([
    <NativeSelect aria-label="test-label" key="1" />,
    <NativeSelect label="test-label" key="2" />,
    <NativeSelect label="test-label" error key="3" />,
    <NativeSelect label="test-label" error="test-error" id="test" key="4" />,
    <NativeSelect label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<NativeSelectProps, __InputStylesNames>({
    component: NativeSelect,
    props: defaultProps,
    displayName: '@mantine/core/NativeSelect',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<NativeSelectProps>({
    component: NativeSelect,
    props: defaultProps,
    selector: 'select',
  });

  tests.itSupportsSharedInputDefaults<NativeSelectProps>({
    component: NativeSelect,
    props: defaultProps,
    componentName: 'NativeSelect',
  });

  it('renders options from data prop', () => {
    const { container, rerender } = render(<NativeSelect data={['test-1', 'test-2']} />);
    expect(container.querySelectorAll('option')).toHaveLength(2);

    rerender(
      <NativeSelect data={['test-1', { group: 'test-group', items: ['test-2', 'test-3'] }]} />
    );

    expect(container.querySelectorAll('option')).toHaveLength(3);
    expect(container.querySelectorAll('optgroup')).toHaveLength(1);
  });

  it('supports uncontrolled state', async () => {
    const { container } = render(<NativeSelect data={['test-1', 'test-2']} />);
    await userEvent.selectOptions(container.querySelector('select')!, 'test-2');
    expect(container.querySelector('select')!.value).toBe('test-2');
  });

  it('supports controlled state', async () => {
    const onChange = jest.fn();
    const { container } = render(
      <NativeSelect
        data={['test-1', 'test-2']}
        value="test-1"
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    );

    await userEvent.selectOptions(container.querySelector('select')!, 'test-2');
    expect(onChange).toHaveBeenCalledWith('test-2');
    expect(container.querySelector('select')!.value).toBe('test-1');
  });

  it('renders disabled options from data prop', () => {
    const { container } = render(
      <NativeSelect
        data={[
          { value: 'test-1', label: 'Test 1' },
          { value: 'test-2', label: 'Test 2', disabled: true },
        ]}
      />
    );
    const options = container.querySelectorAll('option');
    expect(options[0]).not.toBeDisabled();
    expect(options[1]).toBeDisabled();
  });

  it('renders children instead of data when both are set', () => {
    const { container } = render(
      <NativeSelect data={['data-1', 'data-2']}>
        <option value="child-1">Child 1</option>
      </NativeSelect>
    );
    const options = container.querySelectorAll('option');
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveValue('child-1');
  });

  it('sets aria-busy on the select when loading', () => {
    const { container } = render(<NativeSelect label="test-label" data={['test-1']} loading />);
    expect(container.querySelector('select')).toHaveAttribute('aria-busy', 'true');
  });
});
