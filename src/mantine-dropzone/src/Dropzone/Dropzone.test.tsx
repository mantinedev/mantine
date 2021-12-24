import React from 'react';
import { render } from '@testing-library/react';
import {
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Dropzone } from './Dropzone';

const defaultProps = {
  onDrop: () => {},
  children: () => null,
};

describe('@mantine/dropzone/Dropzone', () => {
  itSupportsClassName(Dropzone, defaultProps);
  itSupportsMargins(Dropzone, defaultProps);
  itSupportsOthers(Dropzone, defaultProps);
  itSupportsStyle(Dropzone, defaultProps);
  itSupportsSx(Dropzone, defaultProps);
  itSupportsRef(Dropzone, defaultProps, HTMLDivElement);

  it('displays LoadingOverlay based on loading prop', () => {
    const { container: loading } = render(<Dropzone {...defaultProps} loading />);
    const { container: notLoading } = render(<Dropzone {...defaultProps} loading={false} />);

    expect(loading.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(1);
    expect(notLoading.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(0);
  });

  it('assigns open function to given openRef', () => {
    const ref = React.createRef<any>();
    render(<Dropzone {...defaultProps} openRef={ref} />);
    expect(ref.current).toBeInstanceOf(Function);
  });

  it('has correct displayName', () => {
    expect(Dropzone.displayName).toEqual('@mantine/dropzone/Dropzone');
  });
});
