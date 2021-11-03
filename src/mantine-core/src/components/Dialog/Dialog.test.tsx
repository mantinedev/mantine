import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsStyle,
  itSupportsClassName,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStylesApi,
  itSupportsRef,
} from '@mantine/tests';
import { CloseButton } from '../ActionIcon/CloseButton/CloseButton';
import { Dialog, MantineDialog } from './Dialog';
import { Dialog as DialogStylesNames } from './styles.api';

const defaultProps = {
  opened: true,
  transitionDuration: 0,
  withCloseButton: true,
};

describe('@mantine/core/Dialog', () => {
  itSupportsStyle(MantineDialog, defaultProps);
  itSupportsClassName(MantineDialog, defaultProps);
  itRendersChildren(MantineDialog, defaultProps);
  itSupportsOthers(MantineDialog, defaultProps);
  itSupportsRef(Dialog, defaultProps, HTMLDivElement);
  itSupportsStylesApi(MantineDialog, defaultProps, Object.keys(DialogStylesNames), 'Dialog');

  it('renders close button based on withCloseButton prop', () => {
    const withButton = shallow(<MantineDialog opened withCloseButton />);
    const withoutButton = shallow(<MantineDialog opened withCloseButton={false} />);

    expect(withButton.dive().find(CloseButton)).toHaveLength(1);
    expect(withoutButton.dive().find(CloseButton)).toHaveLength(0);
  });

  it('calls onClose when close button is clicked', () => {
    const spy = jest.fn();
    const element = shallow(<MantineDialog opened withCloseButton onClose={spy} />);
    element.dive().find(CloseButton).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('has correct displayName', () => {
    expect(Dialog.displayName).toEqual('@mantine/core/Dialog');
  });
});
