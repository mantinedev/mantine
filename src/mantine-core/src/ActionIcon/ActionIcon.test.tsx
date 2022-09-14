import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itRendersChildren,
  itIsPolymorphic,
  itSupportsFocusEvents,
  itSupportsSystemProps,
} from '@mantine/tests';
import { ActionIcon, ActionIconProps } from './ActionIcon';

const defaultProps: ActionIconProps = {
  children: '$',
};

describe('@mantine/core/ActionIcon', () => {
  itIsPolymorphic(ActionIcon, defaultProps);
  itRendersChildren(ActionIcon, defaultProps);
  itSupportsFocusEvents(ActionIcon, defaultProps, 'button');
  itSupportsSystemProps({
    component: ActionIcon,
    props: defaultProps,
    displayName: '@mantine/core/ActionIcon',
    refType: HTMLButtonElement,
    providerName: 'ActionIcon',
  });

  checkAccessibility([
    <ActionIcon {...defaultProps} title="Action icon" />,
    <ActionIcon {...defaultProps} aria-label="Action icon" />,
  ]);

  it('supports changing button type', () => {
    render(<ActionIcon type="submit">$</ActionIcon>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('sets data-disabled attribute when disabled={true}', () => {
    render(<ActionIcon disabled />);
    expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
  });

  it('sets data-loading attribute when loading={true}', () => {
    render(<ActionIcon loading />);
    expect(screen.getByRole('button')).toHaveAttribute('data-loading');
  });

  it('replaces icon with Loader when loading is set to true', () => {
    const { container: loading } = render(
      <ActionIcon loading>
        <span className="test-icon" />
      </ActionIcon>
    );

    const { container: notLoading } = render(
      <ActionIcon loading={false}>
        <span className="test-icon" />
      </ActionIcon>
    );

    expect(notLoading.querySelectorAll('.test-icon')).toHaveLength(1);
    expect(notLoading.querySelectorAll('svg')).toHaveLength(0);

    expect(loading.querySelectorAll('.test-icon')).toHaveLength(0);
    expect(loading.querySelectorAll('svg')).toHaveLength(1);
  });

  it('is disabled when inside fieldset disabled', () => {
    render(
      <fieldset disabled>
        <ActionIcon>$</ActionIcon>
      </fieldset>
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
