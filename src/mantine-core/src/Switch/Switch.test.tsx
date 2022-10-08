import React from 'react';
import { queryByTestId, render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itHandlesBooleanState,
  itSupportsSystemProps,
  itConnectsLabelAndInput,
  itSupportsWrapperProps,
  itSupportsFocusEvents,
} from '@mantine/tests';
import { IconCrown } from '@tabler/icons';
import { Switch, SwitchProps } from './Switch';

const defaultProps: SwitchProps = {
  label: 'test-label',
};

describe('@mantine/core/Switch', () => {
  checkAccessibility([<Switch aria-label="Switch without label" />, <Switch label="With label" />]);
  itHandlesBooleanState(Switch, defaultProps);
  itConnectsLabelAndInput(Switch, defaultProps);
  itSupportsWrapperProps(Switch, defaultProps);
  itSupportsFocusEvents(Switch, defaultProps, 'input');
  itSupportsSystemProps({
    component: Switch,
    props: defaultProps,
    displayName: '@mantine/core/Switch',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'Switch',
  });

  it('renders label based on label prop', () => {
    const { container: withLabel, getByText } = render(<Switch label="test-label" />);
    const { container: withoutLabel } = render(<Switch />);
    expect(queryByTestId(withLabel, 'label')).toBeInTheDocument();
    expect(queryByTestId(withoutLabel, 'label')).toBeNull();
    expect(getByText('test-label')).toBeInTheDocument();
  });

  it('render thumb icon', () => {
    const { container } = render(<Switch thumbIcon={<IconCrown className="thumb-crown" />} />);
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
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
