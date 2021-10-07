import {
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
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

  it('has correct displayName', () => {
    expect(Dropzone.displayName).toEqual('@mantine/dropzone/Dropzone');
  });
});
