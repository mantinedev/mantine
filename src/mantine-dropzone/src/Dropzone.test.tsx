import React from 'react';
import { render, tests } from '@mantine/tests';
import { Dropzone, DropzoneProps, DropzoneStylesNames } from './index';
import { DropzoneAccept, DropzoneReject, DropzoneIdle } from './DropzoneStatus';
import { DropzoneFullScreen } from './DropzoneFullScreen';

const defaultProps: DropzoneProps = {
  onDrop: () => {},
};

describe('@mantine/dropzone/Dropzone', () => {
  tests.itSupportsSystemProps<DropzoneProps, DropzoneStylesNames>({
    component: Dropzone,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dropzone/Dropzone',
    stylesApiSelectors: ['root', 'inner'],
  });

  it('displays LoadingOverlay based on loading prop', () => {
    const { rerender, container } = render(<Dropzone {...defaultProps} loading={false} />);
    expect(container.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(0);

    rerender(<Dropzone {...defaultProps} loading />);
    expect(container.querySelectorAll('.mantine-LoadingOverlay-root')).toHaveLength(1);
  });

  it('has a name attribute on the internal input element', () => {
    const { rerender, container } = render(<Dropzone {...defaultProps} />);
    expect(container.querySelector('input')).not.toHaveAttribute('name');

    rerender(<Dropzone {...defaultProps} name="a-custom-name" />);
    expect(container.querySelector('input')).toHaveAttribute('name', 'a-custom-name');
  });

  it('assigns open function to given openRef', () => {
    const ref = React.createRef<any>();
    render(<Dropzone {...defaultProps} openRef={ref} />);
    expect(ref.current).toBeInstanceOf(Function);
  });

  it('exposes static components', () => {
    expect(Dropzone.Accept).toBe(DropzoneAccept);
    expect(Dropzone.Reject).toBe(DropzoneReject);
    expect(Dropzone.Idle).toBe(DropzoneIdle);
    expect(Dropzone.FullScreen).toBe(DropzoneFullScreen);
  });
});
