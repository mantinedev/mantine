import { act, createRef } from 'react';
import { render, screen, tests } from '@mantine-tests/core';
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
});
