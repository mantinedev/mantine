import { createRef } from 'react';
import { act } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { FileButton, FileButtonProps } from './FileButton';

const defaultProps: FileButtonProps = {
  onChange: () => {},
  children: (props) => (
    <button type="button" {...props}>
      Upload files
    </button>
  ),
};

describe('@mantine/core/FileButton', () => {
  tests.axe([<FileButton {...defaultProps} key="1" />]);
  tests.itSupportsRef({
    component: FileButton,
    props: defaultProps,
    refType: HTMLInputElement,
  });

  it('sets given input name', () => {
    render(<FileButton {...defaultProps} name="test-name" />);
    expect(document.querySelector('input[type="file"]')).toHaveAttribute('name', 'test-name');
  });

  it('sets given input accept', () => {
    render(<FileButton {...defaultProps} name="test-name" accept="image/png,image/jpeg" />);
    expect(document.querySelector('input[type="file"]')).toHaveAttribute(
      'accept',
      'image/png,image/jpeg'
    );
  });

  it('calls onChange with a single file', async () => {
    const spy = jest.fn();
    render(<FileButton {...defaultProps} onChange={spy} />);
    const file = new File(['a'], 'a.png', { type: 'image/png' });
    await userEvent.upload(document.querySelector('input[type="file"]') as HTMLInputElement, file);
    expect(spy).toHaveBeenCalledWith(file);
  });

  it('calls onChange with an array of files when multiple is set', async () => {
    const spy = jest.fn();
    render(<FileButton {...defaultProps} multiple onChange={spy} />);
    const files = [
      new File(['a'], 'a.png', { type: 'image/png' }),
      new File(['b'], 'b.png', { type: 'image/png' }),
    ];
    await userEvent.upload(document.querySelector('input[type="file"]') as HTMLInputElement, files);
    expect(spy).toHaveBeenCalledWith(files);
  });

  it('opens the file picker on click unless disabled', async () => {
    const { rerender } = render(<FileButton {...defaultProps} />);
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const clickSpy = jest.spyOn(input, 'click').mockImplementation(() => {});

    await userEvent.click(screen.getByRole('button'));
    expect(clickSpy).toHaveBeenCalledTimes(1);

    rerender(<FileButton {...defaultProps} disabled />);
    await userEvent.click(screen.getByRole('button'));
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('clears input value when resetRef function is called', async () => {
    const resetRef = createRef<() => void>();
    render(<FileButton {...defaultProps} resetRef={resetRef} />);
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    await userEvent.upload(input, new File(['a'], 'a.png', { type: 'image/png' }));
    expect(input.value).not.toBe('');

    act(() => resetRef.current!());
    expect(input.value).toBe('');
  });

  it('has correct displayName', () => {
    expect(FileButton.displayName).toEqual('@mantine/core/FileButton');
  });
});
