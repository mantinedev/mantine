import { act, createRef } from 'react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Switch, SwitchProps, SwitchStylesNames } from './Switch';
import { SwitchGroup } from './SwitchGroup/SwitchGroup';

const defaultProps: SwitchProps = {
  label: 'test-label',
  description: 'test-description',
  error: 'test-error',
};

describe('@mantine/core/Switch', () => {
  tests.axe([<Switch label="test-label" key="1" />, <Switch aria-label="test-label" key="2" />]);
  tests.itSupportsFocusEvents({ component: Switch, props: defaultProps, selector: 'input' });
  tests.itHandlesSwitchCheckboxState({ component: Switch, props: defaultProps });
  tests.itConnectsLabelAndInput({ component: Switch, props: defaultProps });
  tests.itSupportsSystemProps<SwitchProps, SwitchStylesNames>({
    component: Switch,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/Switch',
    stylesApiSelectors: [
      'root',
      'track',
      'trackLabel',
      'thumb',
      'input',
      'body',
      'labelWrapper',
      'label',
      'description',
      'error',
    ],
  });

  it('render thumb icon', () => {
    const { container } = render(<Switch thumbIcon={<span className="thumb-crown" />} />);
    expect(container.querySelectorAll('.thumb-crown')).toHaveLength(1);
  });

  it('render onLabel and offLabel if provided', () => {
    const { container: unChecked } = render(
      <Switch offLabel={<span className="offLabel">Off</span>} />
    );
    const { container: checked } = render(
      <Switch checked onLabel={<span className="onLabel">On</span>} />
    );

    expect(checked.querySelectorAll('.onLabel')).toHaveLength(1);
    expect(unChecked.querySelectorAll('.offLabel')).toHaveLength(1);
  });

  it('sets disabled attribute on input based on disabled prop', () => {
    render(<Switch disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('has aria-describedby attribute with id of description element', () => {
    render(<Switch description="test-description" />);
    expect(screen.getByRole('switch')).toHaveAttribute(
      'aria-describedby',
      screen.getByText('test-description').id
    );
  });

  it('has aria-describedby attribute with id of error element', () => {
    render(<Switch error="test-error" />);
    expect(screen.getByRole('switch')).toHaveAttribute(
      'aria-describedby',
      screen.getByText('test-error').id
    );
  });

  it('has aria-describedby attribute with description and error ids', () => {
    render(<Switch description="test-description" error="test-error" />);
    const description = screen.getByText('test-description');
    const error = screen.getByText('test-error');
    expect(screen.getByRole('switch')).toHaveAttribute(
      'aria-describedby',
      `${description.id} ${error.id}`
    );
  });

  it('merges user-supplied aria-describedby with description and error ids', () => {
    render(
      <Switch description="test-description" error="test-error" aria-describedby="extra-id" />
    );
    const description = screen.getByText('test-description');
    const error = screen.getByText('test-error');
    expect(screen.getByRole('switch')).toHaveAttribute(
      'aria-describedby',
      `${description.id} ${error.id} extra-id`
    );
  });

  it('does not link aria-describedby to error when error is a boolean', () => {
    render(<Switch error />);
    expect(screen.getByRole('switch')).not.toHaveAttribute('aria-describedby');
  });

  it('sets aria-invalid on the input when error is set', () => {
    const { rerender } = render(<Switch label="test" error="Required" />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'true');
    rerender(<Switch label="test" />);
    expect(screen.getByRole('switch')).not.toHaveAttribute('aria-invalid');
  });

  it('sets boolean data-error attribute on the track', () => {
    const { container } = render(<Switch label="test" error="Required" />);
    expect(container.querySelector('.mantine-Switch-track')).toHaveAttribute('data-error', 'true');
  });

  it('does not change uncontrolled state when readOnly is set', async () => {
    const spy = jest.fn();
    render(<Switch label="test" readOnly onChange={spy} />);
    await userEvent.click(screen.getByRole('switch'));
    expect(screen.getByRole('switch')).not.toBeChecked();
    expect(spy).not.toHaveBeenCalled();
  });

  it('sets aria-readonly on the input when readOnly is set', () => {
    const { rerender } = render(<Switch label="test" readOnly />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-readonly', 'true');
    rerender(<Switch label="test" />);
    expect(screen.getByRole('switch')).not.toHaveAttribute('aria-readonly');
  });

  it('does not call onChange for controlled switch when readOnly is set', async () => {
    const spy = jest.fn();
    render(<Switch label="test" checked readOnly onChange={spy} />);
    await userEvent.click(screen.getByRole('switch'));
    expect(screen.getByRole('switch')).toBeChecked();
    expect(spy).not.toHaveBeenCalled();
  });

  it('reflects uncontrolled state in data-checked attribute', async () => {
    const { container } = render(<Switch label="test" />);
    const root = container.querySelector('.mantine-Switch-root');
    expect(root).not.toHaveAttribute('data-checked');
    expect(screen.getByRole('switch')).not.toHaveAttribute('data-checked');

    await userEvent.click(screen.getByRole('switch'));
    expect(root).toHaveAttribute('data-checked');
    expect(screen.getByRole('switch')).toHaveAttribute('data-checked');
  });

  it('exposes SwitchGroup component', () => {
    expect(Switch.Group).toBe(SwitchGroup);
  });

  it('supports rootRef', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Switch {...defaultProps} rootRef={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('renders thumb indicator based on withThumbIndicator prop', () => {
    const { container: withIndicator } = render(<Switch withThumbIndicator />);
    const { container: withoutIndicator } = render(<Switch withThumbIndicator={false} />);

    const thumbWithIndicator = withIndicator.querySelector('[data-with-thumb-indicator]');
    const thumbWithoutIndicator = withoutIndicator.querySelector('[data-with-thumb-indicator]');

    expect(thumbWithIndicator).toBeInTheDocument();
    expect(thumbWithoutIndicator).not.toBeInTheDocument();
  });

  it('ensures input is visible in DOM and accessibility tree with switch/checkbox semantics', () => {
    render(<Switch label="Enable" />);
    const input = screen.getByRole('switch', { name: 'Enable' });

    expect(input).toBeVisible();
    expect(input).not.toBeChecked();

    act(() => input.click());
    expect(input).toBeChecked();
  });

  it('uses size from Switch.Group for css variables', () => {
    const { container } = render(
      <Switch.Group size="md">
        <Switch value="test" label="test" />
      </Switch.Group>
    );

    expect(container.querySelector('.mantine-Switch-root')).toHaveStyle({
      '--switch-height': 'var(--switch-height-md)',
    });
  });

  it('passes size from Switch.Group to classNames callbacks', () => {
    const { container } = render(
      <Switch.Group size="xl">
        <Switch value="test" label="test" classNames={(_, p) => ({ root: `size-${p.size}` })} />
      </Switch.Group>
    );

    const root = container.querySelector('.mantine-Switch-root')!;
    expect(root).toHaveClass('size-xl');
    expect(root.className).not.toContain('size-undefined');
  });
});
