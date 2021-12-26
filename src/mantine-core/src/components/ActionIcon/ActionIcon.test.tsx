import React from 'react';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
} from '@mantine/tests';
import { ActionIcon, ActionIconProps } from './ActionIcon';

const defaultProps: ActionIconProps<'button'> = { children: '$' };

describe('@mantine/core/ActionIcon', () => {
  itIsPolymorphic(ActionIcon, defaultProps);
  itRendersChildren(ActionIcon, defaultProps);
  itSupportsSystemProps({
    component: ActionIcon,
    props: defaultProps,
    displayName: '@mantine/core/ActionIcon',
    refType: HTMLButtonElement,
  });

  checkAccessibility([
    render(<ActionIcon {...defaultProps} title="Action icon" />),
    render(<ActionIcon {...defaultProps} aria-label="Action icon" />),
  ]);

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
    expect(notLoading.querySelectorAll('.mantine-ActionIcon-loading')).toHaveLength(0);

    expect(loading.querySelectorAll('.test-icon')).toHaveLength(0);
    expect(loading.querySelectorAll('.mantine-ActionIcon-loading')).toHaveLength(1);
  });
});
