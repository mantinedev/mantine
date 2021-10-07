import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
import { LoadingOverlay } from '@mantine/core';
import { Dropzone } from './Dropzone';

const defaultProps = {
  onDrop: () => {},
  children: () => null,
};

describe('@mantine/core/Dropzone', () => {
  itSupportsClassName(Dropzone, defaultProps);
  itSupportsMargins(Dropzone, defaultProps);
  itSupportsOthers(Dropzone, defaultProps);
  itSupportsStyle(Dropzone, defaultProps);
  itSupportsRef(Dropzone, defaultProps, HTMLDivElement);

  it('displays LoadingOverlay based on loading prop', () => {
    const loading = shallow(<Dropzone {...defaultProps} loading />);
    const notLoading = shallow(<Dropzone {...defaultProps} loading={false} />);

    expect(loading.find(LoadingOverlay).prop('visible')).toBe(true);
    expect(notLoading.find(LoadingOverlay).prop('visible')).toBe(false);
  });

  it('assigns open function to given openRef', () => {
    let ref = null;
    mount(
      <Dropzone
        {...defaultProps}
        openRef={(openFn) => {
          ref = openFn;
        }}
      />
    );

    expect(typeof ref).toBe('function');
  });

  it('has correct displayName', () => {
    expect(Dropzone.displayName).toEqual('@mantine/dropzone/Dropzone');
  });
});
