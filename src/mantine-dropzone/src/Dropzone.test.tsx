import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps, itSupportsProviderVariant } from '@mantine/tests';
import { Dropzone, DropzoneProps } from './index';
import { DropzoneAccept, DropzoneReject, DropzoneIdle } from './DropzoneStatus';
import { DropzoneFullScreen } from './DropzoneFullScreen';

const defaultProps: DropzoneProps = {
  onDrop: () => {},
  children: null,
};

describe('@mantine/dropzone/Dropzone', () => {
  itSupportsProviderVariant(Dropzone, defaultProps, 'Dropzone');
  itSupportsSystemProps({
    component: Dropzone,
    props: defaultProps,
    displayName: '@mantine/dropzone/Dropzone',
  });

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

  it('has a name attribute on the internal input element', () => {
    const { container: withName } = render(<Dropzone {...defaultProps} name="a-custom-name" />);
    const { container: withoutName } = render(<Dropzone {...defaultProps} />);

    expect(withName.querySelector("input[type='file']")).toHaveAttribute('name', 'a-custom-name');
    expect(withoutName.querySelector("input[type='file']")).not.toHaveAttribute('name');
  });

  it('exposes static components', () => {
    expect(Dropzone.Accept).toBe(DropzoneAccept);
    expect(Dropzone.Reject).toBe(DropzoneReject);
    expect(Dropzone.Idle).toBe(DropzoneIdle);
    expect(Dropzone.FullScreen).toBe(DropzoneFullScreen);
  });
});
