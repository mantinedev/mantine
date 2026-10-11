import { act } from '@testing-library/react';
import { render, tests } from '@mantine-tests/core';
import {
  DropzoneFullScreen,
  DropzoneFullScreenProps,
  DropzoneFullScreenStylesNames,
} from './DropzoneFullScreen';

const defaultProps: DropzoneFullScreenProps = {
  onDrop: () => {},
  withinPortal: false,
};

describe('@mantine/dropzone/DropzoneFullScreen', () => {
  tests.itSupportsSystemProps<DropzoneFullScreenProps, DropzoneFullScreenStylesNames>({
    component: DropzoneFullScreen,
    props: defaultProps,
    children: true,
    styleProps: false,
    size: false,
    variant: false,
    mod: false,
    displayName: '@mantine/dropzone/DropzoneFullScreen',
    stylesApiSelectors: ['fullScreen'],
    selector: '.mantine-DropzoneFullScreen-fullScreen',
  });

  it('does not expose the hidden full screen dropzone as a button', () => {
    const { container } = render(<DropzoneFullScreen {...defaultProps} />);
    expect(container.querySelector('[role="button"]')).not.toBeInTheDocument();
  });

  it('ignores non-file drag events when tracking drag enter/leave', () => {
    const { container } = render(<DropzoneFullScreen {...defaultProps} />);
    const fullScreen = container.querySelector<HTMLElement>(
      '.mantine-DropzoneFullScreen-fullScreen'
    )!;

    const dispatch = (type: string, types: string[]) => {
      const event = new Event(type, { bubbles: true });
      Object.defineProperty(event, 'dataTransfer', { value: { types } });
      act(() => {
        document.dispatchEvent(event);
      });
    };

    expect(fullScreen).toHaveStyle({ opacity: '0' });

    dispatch('dragleave', ['text/plain']);
    dispatch('dragenter', ['Files']);
    expect(fullScreen).toHaveStyle({ opacity: '1' });

    dispatch('dragleave', ['text/plain']);
    expect(fullScreen).toHaveStyle({ opacity: '1' });

    dispatch('dragleave', ['Files']);
    expect(fullScreen).toHaveStyle({ opacity: '0' });

    dispatch('dragenter', ['Files']);
    expect(fullScreen).toHaveStyle({ opacity: '1' });
    dispatch('dragleave', ['Files']);
    expect(fullScreen).toHaveStyle({ opacity: '0' });
  });
});
