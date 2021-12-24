import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  itSupportsMargins,
  itIsPolymorphic,
  itSupportsSx,
} from '@mantine/tests';
import { Loader } from '../Loader';
import { ActionIcon } from './ActionIcon';

const defaultProps = { children: '$' };

describe('@mantine/core/ActionIcon', () => {
  itSupportsClassName(ActionIcon, defaultProps);
  itSupportsOthers(ActionIcon, defaultProps);
  itSupportsSx(ActionIcon, defaultProps);
  itSupportsStyle(ActionIcon, defaultProps);
  itSupportsMargins(ActionIcon, defaultProps);
  itIsPolymorphic(ActionIcon, defaultProps);
  itSupportsRef(ActionIcon, defaultProps, HTMLButtonElement);
  itRendersChildren(ActionIcon, defaultProps);
  checkAccessibility([
    mount(<ActionIcon {...defaultProps} title="Action icon" />),
    mount(<ActionIcon {...defaultProps} aria-label="Action icon" />),
  ]);

  it('replaces icon with Loader when loading is set to true', () => {
    const loading = shallow(
      <ActionIcon loading>
        <span className="test-icon" />
      </ActionIcon>
    );

    const notLoading = shallow(
      <ActionIcon loading={false}>
        <span className="test-icon" />
      </ActionIcon>
    );

    expect(notLoading.find('.test-icon')).toHaveLength(1);
    expect(notLoading.find(Loader)).toHaveLength(0);

    expect(loading.find('.test-icon')).toHaveLength(0);
    expect(loading.find(Loader)).toHaveLength(1);
  });

  it('has correct displayName', () => {
    expect(ActionIcon.displayName).toEqual('@mantine/core/ActionIcon');
  });
});
