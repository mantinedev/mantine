import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { MultiSelect, MultiSelectProps, MultiSelectStylesNames } from './MultiSelect';

const defaultProps: MultiSelectProps = {
  ...inputDefaultProps,
  data: ['test-1', 'test-2'],
};

describe('@mantine/core/MultiSelect', () => {
  tests.axe([
    <MultiSelect aria-label="test-label" data={['test-1', 'test-2']} key="1" />,
    <MultiSelect label="test-label" data={['test-1', 'test-2']} key="2" />,
    <MultiSelect label="test-label" error data={['test-1', 'test-2']} key="3" />,
    <MultiSelect
      label="test-label"
      error="test-error"
      id="test"
      data={['test-1', 'test-2']}
      key="4"
    />,
    <MultiSelect
      label="test-label"
      description="test-description"
      data={['test-1', 'test-2']}
      key="5"
    />,
    <MultiSelect label="test-label" data={['test-1', 'test-2']} dropdownOpened key="6" />,
  ]);

  tests.itSupportsSystemProps<MultiSelectProps, MultiSelectStylesNames>({
    component: MultiSelect,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/core/MultiSelect',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<MultiSelectProps>({
    component: MultiSelect,
    props: defaultProps,
    selector: 'input',
  });

  it('supports uncontrolled state', async () => {
    render(<MultiSelect {...defaultProps} name="test-multi-select" />);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-1' }));
    expect(document.querySelector('input[name="test-multi-select"]')).toHaveValue('test-1');

    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));
    expect(document.querySelector('input[name="test-multi-select"]')).toHaveValue('test-1,test-2');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(
      <MultiSelect {...defaultProps} value={['test-1']} onChange={spy} name="test-multi-select" />
    );
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getByRole('option', { name: 'test-2' }));
    expect(document.querySelector('input[name="test-multi-select"]')).toHaveValue('test-1');
    expect(spy).toHaveBeenLastCalledWith(['test-1', 'test-2']);
  });

  it('supports defaultValue', () => {
    render(<MultiSelect {...defaultProps} defaultValue={['test-1']} name="test-multi-select" />);
    expect(document.querySelector('input[name="test-multi-select"]')).toHaveValue('test-1');
  });

  it('allows controlling dropdown state with dropdownOpened prop', async () => {
    const { rerender } = render(<MultiSelect {...defaultProps} dropdownOpened />);
    expect(screen.getByRole('listbox')).toBeVisible();
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByRole('listbox')).toBeVisible();

    rerender(<MultiSelect {...defaultProps} dropdownOpened={false} />);
    expect(screen.queryByRole('listbox')).toBe(null);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.queryByRole('listbox')).toBe(null);
  });

  it('displays the nothing found message if no options matched the search query', async () => {
    render(<MultiSelect {...defaultProps} searchable nothingFoundMessage="Nothing found" />);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.type(screen.getByRole('textbox'), 'test-3');
    expect(screen.getByText('Nothing found')).toBeVisible();
  });

  it('displays the nothing found message if there is no data', async () => {
    render(<MultiSelect {...defaultProps} data={[]} nothingFoundMessage="No data" />);
    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByText('No data')).toBeVisible();
  });
});
