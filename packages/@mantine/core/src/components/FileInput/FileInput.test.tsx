import { fireEvent } from '@testing-library/react';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { FileInput, FileInputProps } from './FileInput';

const defaultProps: FileInputProps = {
  ...inputDefaultProps,
  placeholder: 'test-placeholder',
};

const getFileInput = (container: HTMLElement) =>
  container.querySelector('input[type="file"]') as HTMLInputElement;

const selectFiles = (container: HTMLElement, files: File[]) =>
  fireEvent.change(getFileInput(container), { target: { files } });

const file1 = new File(['a'], 'first.png', { type: 'image/png' });
const file2 = new File(['b'], 'second.png', { type: 'image/png' });

describe('@mantine/core/FileInput', () => {
  tests.axe([<FileInput aria-label="test-label" key="1" />]);

  tests.itSupportsSystemProps<FileInputProps, __InputStylesNames | 'placeholder'>({
    component: FileInput,
    props: defaultProps,
    selector: '.mantine-FileInput-root',
    displayName: '@mantine/core/FileInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<FileInputProps>({
    component: FileInput,
    props: defaultProps,
    selector: 'button',
  });

  tests.itSupportsSharedInputDefaults<FileInputProps>({
    component: FileInput,
    props: defaultProps,
    componentName: 'FileInput',
  });

  it('calls onChange with selected file and displays its name', () => {
    const spy = jest.fn();
    const { container } = render(<FileInput label="File" onChange={spy} />);
    selectFiles(container, [file1]);
    expect(spy).toHaveBeenCalledWith(file1);
    expect(screen.getByText('first.png')).toBeInTheDocument();
  });

  it('calls onChange with array of files when multiple is set', () => {
    const spy = jest.fn();
    const { container } = render(<FileInput label="File" multiple onChange={spy} />);
    selectFiles(container, [file1, file2]);
    expect(spy).toHaveBeenCalledWith([file1, file2]);
    expect(screen.getByText('first.png, second.png')).toBeInTheDocument();
  });

  it('resets value with clear button', async () => {
    const spy = jest.fn();
    render(
      <FileInput
        label="File"
        placeholder="Pick file"
        clearable
        defaultValue={file1}
        onChange={spy}
        clearButtonProps={{ 'aria-label': 'Clear' }}
      />
    );
    await userEvent.click(screen.getByRole('button', { name: 'Clear' }));
    expect(spy).toHaveBeenCalledWith(null);
    expect(screen.getByText('Pick file')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Clear' })).not.toBeInTheDocument();
  });

  it('does not open file picker and hides clear button when readOnly', async () => {
    const { container } = render(
      <FileInput
        label="File"
        readOnly
        clearable
        defaultValue={file1}
        clearButtonProps={{ 'aria-label': 'Clear' }}
      />
    );
    const clickSpy = jest.spyOn(getFileInput(container), 'click');
    await userEvent.click(screen.getByRole('button', { name: 'File' }));
    expect(clickSpy).not.toHaveBeenCalled();
    expect(screen.queryByRole('button', { name: 'Clear' })).not.toBeInTheDocument();
  });

  it('opens file picker on click', async () => {
    const { container } = render(<FileInput label="File" />);
    const clickSpy = jest.spyOn(getFileInput(container), 'click');
    await userEvent.click(screen.getByRole('button', { name: 'File' }));
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('renders value with valueComponent', () => {
    render(
      <FileInput
        label="File"
        defaultValue={file1}
        valueComponent={({ value }) => <span>custom: {(value as File).name}</span>}
      />
    );
    expect(screen.getByText('custom: first.png')).toBeInTheDocument();
  });
});
