import { render, tests } from '@mantine-tests/core';
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

  it('has correct displayName', () => {
    expect(FileButton.displayName).toEqual('@mantine/core/FileButton');
  });
});
