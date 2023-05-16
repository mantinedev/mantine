import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itHandlesBooleanState,
  itSupportsSystemProps,
  itConnectsLabelAndInput,
  itSupportsWrapperProps,
  itSupportsFocusEvents,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itDisablesInputInsideDisabledFieldset,
} from '@mantine/tests';
import { IconCrown } from '@tabler/icons-react';
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
  itSupportsProviderVariant(Switch, defaultProps, 'Switch', ['root', 'input']);
  itSupportsProviderSize(Switch, defaultProps, 'Switch', ['root', 'input']);
  itSupportsSystemProps({
    component: Switch,
    props: defaultProps,
    displayName: '@mantine/core/Switch',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'Switch',
  });
  itDisablesInputInsideDisabledFieldset(Switch, defaultProps);

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
