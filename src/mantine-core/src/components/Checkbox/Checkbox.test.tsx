import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itConnectsLabelAndInput,
  itSupportsFocusEvents,
  itHandlesBooleanState,
} from '@mantine/tests';
import { Checkbox, CheckboxProps } from './Checkbox';

const defaultProps: CheckboxProps = {
  label: 'test-label',
};

describe('@mantine/core/Checkbox', () => {
  itSupportsWrapperProps(Checkbox, defaultProps);
  itConnectsLabelAndInput(Checkbox, defaultProps);
  itHandlesBooleanState(Checkbox, defaultProps);
  itSupportsFocusEvents(Checkbox, defaultProps, 'input');
  checkAccessibility([
    <Checkbox aria-label="Checkbox without label" />,
    <Checkbox label="With label" />,
    <Checkbox id="with-id" label="With id" />,
  ]);

  itSupportsSystemProps({
    component: Checkbox,
    props: defaultProps,
    displayName: '@mantine/core/Checkbox',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('renders label based on label prop', () => {
    const { container: withLabel, getByText } = render(<Checkbox label="test-label" />);
    const { container: withoutLabel } = render(<Checkbox />);
    expect(withLabel.querySelectorAll('label')).toHaveLength(1);
    expect(withoutLabel.querySelectorAll('label')).toHaveLength(0);
    expect(getByText('test-label')).toBeInTheDocument();
  });

  it('sets disabled attribute on input based on disabled prop', () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('sets checked state based on indeterminate prop', () => {
    render(<Checkbox indeterminate checked={false} onChange={() => {}} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
