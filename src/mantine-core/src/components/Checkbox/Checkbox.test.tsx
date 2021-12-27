import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itConnectsLabelAndInput,
  itSupportsFocusEvents,
} from '@mantine/tests';
import { Checkbox, CheckboxProps } from './Checkbox';

const defaultProps: CheckboxProps = {
  checked: true,
  onChange: () => {},
  label: 'test-label',
};

describe('@mantine/core/Checkbox', () => {
  itSupportsWrapperProps(Checkbox, defaultProps);
  itConnectsLabelAndInput(Checkbox, defaultProps);
  itSupportsFocusEvents(Checkbox, defaultProps, 'input');
  checkAccessibility([
    render(<Checkbox aria-label="Checkbox without label" />),
    render(<Checkbox label="With label" />),
    render(<Checkbox id="with-id" label="With id" />),
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

  it('correctly handles uncontrolled state', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('correctly handles controlled state', () => {
    const spy = jest.fn();
    render(<Checkbox checked={false} onChange={spy} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    userEvent.click(screen.getByRole('checkbox'));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('sets checked state based on indeterminate prop', () => {
    render(<Checkbox indeterminate checked={false} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
